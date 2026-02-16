(function () {
  'use strict';

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function initAccordions() {
    const triggers = document.querySelectorAll('[data-accordion-trigger]');
    triggers.forEach(function (button) {
      const controls = button.getAttribute('aria-controls');
      const panel = controls ? document.getElementById(controls) : null;
      if (!panel) {
        return;
      }
      button.addEventListener('click', function () {
        const expanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', String(!expanded));
        panel.hidden = expanded;
      });
    });
  }

  function renderResourceList(items) {
    if (!items.length) {
      return '<p class="empty-state">No resources match that search yet. Try another keyword or tag.</p>';
    }

    return '<div class="resource-grid">' +
      items.map(function (resource) {
        const tags = resource.tags.map(function (tag) {
          return '<span class="chip">' + escapeHtml(tag) + '</span>';
        }).join('');

        return '<article class="resource-card">' +
          '<h3><a href="' + escapeHtml(resource.url) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(resource.title) + '</a></h3>' +
          '<p>' + escapeHtml(resource.description) + '</p>' +
          '<div class="chip-row" aria-label="Resource tags">' + tags + '</div>' +
          '</article>';
      }).join('') +
      '</div>';
  }

  function initResourceFinder() {
    const data = window.AIHorizonsData;
    const input = document.getElementById('resource-search');
    const sectionFilter = document.getElementById('resource-section-filter');
    const output = document.getElementById('resource-results');

    if (!data || !input || !sectionFilter || !output) {
      return;
    }

    function applyFilter() {
      const query = input.value.trim().toLowerCase();
      const section = sectionFilter.value;
      const filtered = data.resources.filter(function (item) {
        const inSection = section === 'all' || item.sectionId === section;
        const text = [item.title, item.description].join(' ').toLowerCase();
        const tags = item.tags.join(' ').toLowerCase();
        const matchesQuery = !query || text.indexOf(query) !== -1 || tags.indexOf(query) !== -1;
        return inSection && matchesQuery;
      });

      output.innerHTML = renderResourceList(filtered);
      output.setAttribute('aria-live', 'polite');
    }

    input.addEventListener('input', applyFilter);
    sectionFilter.addEventListener('change', applyFilter);
    applyFilter();
  }

  function initProjectPromptGenerator() {
    const input = document.getElementById('project-focus');
    const button = document.getElementById('generate-project-prompt');
    const output = document.getElementById('project-prompt-output');

    if (!input || !button || !output) {
      return;
    }

    button.addEventListener('click', function () {
      const focus = input.value.trim() || 'student support';
      const prompt = [
        'Design a 4-week pilot for ' + focus + ' in an academic library.',
        'Include: (1) target learners, (2) one AI tool and one non-AI support tool,',
        '(3) privacy/ethics safeguards, (4) an assessment rubric, and (5) one scaling recommendation.'
      ].join(' ');
      output.textContent = prompt;
    });
  }

  function initScenarioQuiz() {
    const data = window.AIHorizonsData;
    const form = document.getElementById('scenario-quiz-form');
    const output = document.getElementById('scenario-feedback');
    const resetBtn = document.getElementById('scenario-reset');

    if (!data || !form || !output || !data.scenarioQuestions.length) {
      return;
    }

    const question = data.scenarioQuestions[0];
    const container = document.getElementById('scenario-choices');
    if (!container) {
      return;
    }

    container.innerHTML = question.options.map(function (option, index) {
      return '<label class="quiz-choice">' +
        '<input type="radio" name="scenario" value="' + index + '"> ' +
        '<span>' + escapeHtml(option) + '</span>' +
        '</label>';
    }).join('');

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const selected = form.querySelector('input[name="scenario"]:checked');
      if (!selected) {
        output.textContent = 'Select an option to receive feedback.';
        output.className = 'feedback warning';
        return;
      }

      const isCorrect = Number(selected.value) === question.correctIndex;
      output.textContent = (isCorrect ? 'Strong first step. ' : 'Close. ') + question.explanation;
      output.className = 'feedback ' + (isCorrect ? 'success' : 'warning');
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        form.reset();
        output.textContent = 'Submit your answer to see coaching feedback.';
        output.className = 'feedback';
      });
    }
  }

  function scoreLabel(score, total) {
    const ratio = score / total;
    if (ratio >= 0.85) {
      return 'Visionary Guide';
    }
    if (ratio >= 0.65) {
      return 'Applied Navigator';
    }
    if (ratio >= 0.45) {
      return 'Developing Practitioner';
    }
    return 'Novice Navigator';
  }

  function initLiteracyQuiz() {
    const data = window.AIHorizonsData;
    const form = document.getElementById('literacy-quiz-form');
    const list = document.getElementById('literacy-questions');
    const output = document.getElementById('literacy-result');
    const resetBtn = document.getElementById('literacy-reset');

    if (!data || !form || !list || !output) {
      return;
    }

    list.innerHTML = data.quizQuestions.map(function (question, index) {
      const options = question.options.map(function (option, optIndex) {
        const id = question.id + '-' + optIndex;
        return '<label class="quiz-choice" for="' + id + '">' +
          '<input id="' + id + '" type="radio" name="' + question.id + '" value="' + optIndex + '"> ' +
          '<span>' + escapeHtml(option) + '</span>' +
          '</label>';
      }).join('');

      return '<fieldset class="question-block">' +
        '<legend>' + (index + 1) + '. ' + escapeHtml(question.prompt) + '</legend>' +
        options +
        '</fieldset>';
    }).join('');

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      let score = 0;
      const missed = [];

      data.quizQuestions.forEach(function (question, idx) {
        const selected = form.querySelector('input[name="' + question.id + '"]:checked');
        if (!selected) {
          missed.push(idx + 1);
          return;
        }

        if (Number(selected.value) === question.correctIndex) {
          score += 1;
        }
      });

      if (missed.length) {
        output.textContent = 'Please answer every question. Missing: ' + missed.join(', ') + '.';
        output.className = 'feedback warning';
        return;
      }

      const level = scoreLabel(score, data.quizQuestions.length);
      output.innerHTML = '<strong>Score:</strong> ' + score + '/' + data.quizQuestions.length +
        ' <strong>Level:</strong> ' + level +
        '<br><span class="muted">Why it matters: AI literacy supports ethical decisions, stronger research, and equitable learning outcomes.</span>';
      output.className = 'feedback success';
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        form.reset();
        output.textContent = 'Complete the quiz to discover your AI literacy profile.';
        output.className = 'feedback';
      });
    }
  }

  function initFlipCards() {
    const data = window.AIHorizonsData;
    const grid = document.getElementById('dilemma-grid');

    if (!data || !grid) {
      return;
    }

    grid.innerHTML = data.dilemmaCards.map(function (card) {
      return '<button class="flip-card" type="button" aria-pressed="false" data-flip-card>' +
        '<span class="flip-inner">' +
          '<span class="flip-front"><strong>Scenario:</strong> ' + escapeHtml(card.scenario) + '</span>' +
          '<span class="flip-back"><strong>Response:</strong> ' + escapeHtml(card.response) + '</span>' +
        '</span>' +
      '</button>';
    }).join('');

    grid.querySelectorAll('[data-flip-card]').forEach(function (cardEl) {
      cardEl.addEventListener('click', function () {
        const isFlipped = cardEl.classList.toggle('is-flipped');
        cardEl.setAttribute('aria-pressed', String(isFlipped));
      });
    });
  }

  function initCopyPrompts() {
    const buttons = document.querySelectorAll('[data-copy-text]');
    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        const text = button.getAttribute('data-copy-text') || '';
        navigator.clipboard.writeText(text).then(function () {
          const original = button.textContent;
          button.textContent = 'Copied';
          setTimeout(function () {
            button.textContent = original;
          }, 1200);
        }).catch(function () {
          button.textContent = 'Copy failed';
        });
      });
    });
  }

  function initForecastSlider() {
    const data = window.AIHorizonsData;
    const slider = document.getElementById('forecast-slider');
    const yearOut = document.getElementById('forecast-year');
    const titleOut = document.getElementById('forecast-title');
    const detailOut = document.getElementById('forecast-detail');

    if (!data || !slider || !yearOut || !titleOut || !detailOut) {
      return;
    }

    function update(yearValue) {
      const year = Number(yearValue);
      const match = data.timelineMilestones.find(function (item) {
        return item.year === year;
      });
      if (!match) {
        return;
      }

      yearOut.textContent = String(match.year);
      titleOut.textContent = match.title;
      detailOut.textContent = match.detail;
    }

    slider.addEventListener('input', function () {
      update(slider.value);
    });

    update(slider.value);
  }

  function initPollWidget() {
    const data = window.AIHorizonsData;
    const container = document.getElementById('poll-options');
    const output = document.getElementById('poll-result');

    if (!data || !container || !output) {
      return;
    }

    container.innerHTML = data.pollOptions.map(function (option) {
      return '<button type="button" class="poll-option" data-poll-id="' + option.id + '">' + escapeHtml(option.label) + '</button>';
    }).join('');

    function renderResults(selectedId) {
      const selected = data.pollOptions.find(function (item) {
        return item.id === selectedId;
      });

      const rows = data.pollOptions.map(function (item) {
        return '<div class="poll-row">' +
          '<div class="poll-row-head"><span>' + escapeHtml(item.label) + '</span><span>' + item.percent + '%</span></div>' +
          '<div class="poll-bar"><span style="width: ' + item.percent + '%"></span></div>' +
        '</div>';
      }).join('');

      output.innerHTML = '<p><strong>Your vote:</strong> ' + escapeHtml(selected ? selected.label : 'Unknown option') + '</p>' + rows;
    }

    container.querySelectorAll('.poll-option').forEach(function (button) {
      button.addEventListener('click', function () {
        container.querySelectorAll('.poll-option').forEach(function (item) {
          item.classList.remove('selected');
        });
        button.classList.add('selected');
        renderResults(button.getAttribute('data-poll-id'));
      });
    });
  }

  window.AIHorizonsComponents = {
    initAccordions,
    initResourceFinder,
    initProjectPromptGenerator,
    initScenarioQuiz,
    initLiteracyQuiz,
    initFlipCards,
    initCopyPrompts,
    initForecastSlider,
    initPollWidget
  };
})();
