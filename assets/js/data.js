(function () {
  'use strict';

  const resources = [
    {
      id: 'r1',
      title: 'UNESCO Recommendation on the Ethics of AI',
      url: 'https://www.unesco.org/en/artificial-intelligence/recommendation-ethics',
      tags: ['ethics', 'policy', 'global'],
      sectionId: 'q3-ethics',
      description: 'Policy framework for rights-based AI adoption in education and public institutions.'
    },
    {
      id: 'r2',
      title: 'EDUCAUSE AI in Higher Education',
      url: 'https://www.educause.edu/focus-areas-and-initiatives/policy-and-security/ai-in-higher-education',
      tags: ['higher-ed', 'strategy', 'faculty'],
      sectionId: 'q2-integration',
      description: 'Practical guidance and current developments for AI in colleges and universities.'
    },
    {
      id: 'r3',
      title: 'ACRL Framework for Information Literacy',
      url: 'https://www.ala.org/acrl/standards/ilframework',
      tags: ['literacy', 'teaching', 'libraries'],
      sectionId: 'q4-literacy',
      description: 'Anchor framework for critical evaluation and source reasoning in academic research.'
    },
    {
      id: 'r4',
      title: 'NMC Horizon Report (Higher Education)',
      url: 'https://library.educause.edu/resources/2024/5/2024-educause-horizon-report-teaching-and-learning-edition',
      tags: ['future', 'trends', 'innovation'],
      sectionId: 'q5-future',
      description: 'Signals and forecasts for emerging technologies shaping teaching and learning.'
    },
    {
      id: 'r5',
      title: 'OpenAI Prompting Guide (General)',
      url: 'https://platform.openai.com/docs/guides/prompt-engineering',
      tags: ['ai-tools', 'prompting', 'practice'],
      sectionId: 'q1-projects',
      description: 'Starter practices for prompt design and iterative refinement in educational contexts.'
    },
    {
      id: 'r6',
      title: 'NIST AI Risk Management Framework',
      url: 'https://www.nist.gov/itl/ai-risk-management-framework',
      tags: ['risk', 'governance', 'ethics'],
      sectionId: 'q3-ethics',
      description: 'Risk-based implementation guidance useful for institutional AI governance conversations.'
    },
    {
      id: 'r7',
      title: 'Canvas LMS Resources',
      url: 'https://www.instructure.com/resources',
      tags: ['lms', 'integration', 'faculty'],
      sectionId: 'q2-integration',
      description: 'LMS-aligned implementation resources that support pilot-first AI adoption workflows.'
    },
    {
      id: 'r8',
      title: 'Every Learner Everywhere: AI Teaching Resources',
      url: 'https://www.everylearnereverywhere.org/',
      tags: ['equity', 'pedagogy', 'student-success'],
      sectionId: 'q4-literacy',
      description: 'Evidence-driven resources to improve inclusive and equitable learning outcomes.'
    }
  ];

  const quizQuestions = [
    {
      id: 'lit1',
      prompt: 'Which action best demonstrates AI literacy in research?',
      options: [
        'Using the first AI answer without checking sources',
        'Comparing AI outputs against scholarly databases and citations',
        'Avoiding AI tools in all academic contexts',
        'Submitting AI-generated text without disclosure'
      ],
      correctIndex: 1,
      explanation: 'AI literacy includes verification and source triangulation, not blind acceptance.',
      level: 'foundational'
    },
    {
      id: 'lit2',
      prompt: 'What is the most important first step before integrating AI into an assignment?',
      options: [
        'Require one AI tool for every student',
        'Define learning outcomes and acceptable AI use boundaries',
        'Disable all writing support tools',
        'Grade only output speed'
      ],
      correctIndex: 1,
      explanation: 'Course outcomes and usage boundaries should lead tool decisions.',
      level: 'foundational'
    },
    {
      id: 'lit3',
      prompt: 'Bias in AI systems is best addressed by:',
      options: [
        'Ignoring training data assumptions',
        'Using multiple perspectives, audit prompts, and transparent criteria',
        'Assuming all tools are neutral',
        'Restricting access to one department'
      ],
      correctIndex: 1,
      explanation: 'Bias mitigation requires deliberate checks and transparent methods.',
      level: 'applied'
    },
    {
      id: 'lit4',
      prompt: 'In a library setting, an ethical AI workflow should include:',
      options: [
        'Collecting all patron data by default',
        'Minimizing data collection and clarifying consent',
        'Hiding model limitations from users',
        'Removing human review'
      ],
      correctIndex: 1,
      explanation: 'Privacy by design and consent are core to responsible implementation.',
      level: 'applied'
    },
    {
      id: 'lit5',
      prompt: 'A strong prompt for student support should usually contain:',
      options: [
        'Only one word',
        'Task, audience, constraints, and output format',
        'No context to keep it neutral',
        'A request for fabricated citations'
      ],
      correctIndex: 1,
      explanation: 'Structured prompts improve reliability and reduce ambiguity.',
      level: 'foundational'
    },
    {
      id: 'lit6',
      prompt: 'What is a good practice when students use AI for brainstorming?',
      options: [
        'Treat AI ideas as final arguments',
        'Document prompt history and explain revision decisions',
        'Submit prompts only, no reflection',
        'Replace peer review entirely'
      ],
      correctIndex: 1,
      explanation: 'Transparent process documentation supports academic integrity.',
      level: 'applied'
    },
    {
      id: 'lit7',
      prompt: 'Which statement about AI-generated citations is most accurate?',
      options: [
        'They are always correct',
        'They can be inaccurate and should be verified independently',
        'They should be accepted in bibliographies by default',
        'They are unnecessary in research'
      ],
      correctIndex: 1,
      explanation: 'Verification against trusted databases is essential.',
      level: 'foundational'
    },
    {
      id: 'lit8',
      prompt: 'For skeptical colleagues, the most effective teaching approach is often:',
      options: [
        'Mandate advanced workflows on day one',
        'Start with one low-stakes use case tied to their goals',
        'Focus on technical jargon',
        'Skip hands-on practice'
      ],
      correctIndex: 1,
      explanation: 'Trust grows through relevance, safety, and practical wins.',
      level: 'applied'
    },
    {
      id: 'lit9',
      prompt: 'When evaluating AI outputs, “critical use” means:',
      options: [
        'Accepting confidence tone as accuracy',
        'Checking claims, context, and potential blind spots',
        'Prioritizing speed over rigor',
        'Avoiding faculty collaboration'
      ],
      correctIndex: 1,
      explanation: 'Critical use is evaluation-centered, not convenience-centered.',
      level: 'advanced'
    },
    {
      id: 'lit10',
      prompt: 'The best definition of AI literacy in higher education is:',
      options: [
        'Knowing every model architecture',
        'Ability to use, evaluate, and communicate AI responsibly in context',
        'Automating all coursework tasks',
        'Replacing disciplinary methods with AI tools'
      ],
      correctIndex: 1,
      explanation: 'AI literacy is contextual, ethical, and applied to real learning goals.',
      level: 'advanced'
    }
  ];

  const dilemmaCards = [
    {
      id: 'd1',
      scenario: 'A student uses AI to draft a literature review but cannot explain core arguments during discussion.',
      response: 'Set a reflective checkpoint: students annotate AI-assisted sections and justify source selection in their own words.'
    },
    {
      id: 'd2',
      scenario: 'A faculty member wants AI grading for all essays due to workload pressure.',
      response: 'Start with rubric-aligned pilot feedback in one unit, keep human final grading, and evaluate fairness before scaling.'
    },
    {
      id: 'd3',
      scenario: 'Library leadership requests broad patron-data ingestion for personalization with unclear consent policies.',
      response: 'Adopt data minimization, informed consent, and retention limits before any personalized AI rollout.'
    },
    {
      id: 'd4',
      scenario: 'A campus chatbot gives confidently wrong policy guidance to international students.',
      response: 'Add escalation pathways, high-risk topic guardrails, and routine accuracy audits with human oversight.'
    }
  ];

  const timelineMilestones = [
    { year: 2026, title: 'AI Literacy Baselines', detail: 'Institutions adopt shared AI literacy outcomes across first-year seminars and library instruction.' },
    { year: 2027, title: 'Faculty Pilot Networks', detail: 'Cross-disciplinary pilot cohorts formalize low-stakes AI integration playbooks and assessment rubrics.' },
    { year: 2028, title: 'Immersive Learning Growth', detail: 'VR/AR labs expand simulation-based learning for nursing, engineering, and archival storytelling.' },
    { year: 2029, title: 'Credential Innovation', detail: 'Blockchain-backed microcredentials gain traction for portable skill verification in continuing education.' },
    { year: 2030, title: 'Hybrid Research Workflows', detail: 'Libraries provide integrated support for AI-assisted discovery, citation validation, and method transparency.' },
    { year: 2031, title: 'Edge Collaboration', detail: 'Edge-enabled classroom tools improve low-latency, privacy-conscious collaborative learning experiences.' },
    { year: 2032, title: 'Policy Maturity', detail: 'Higher ed governance moves from reactive restrictions to transparent, evidence-based AI policy frameworks.' },
    { year: 2033, title: 'Accessibility-First Tooling', detail: 'AI and non-AI learning platforms improve multilingual, multimodal, and disability-inclusive access by design.' },
    { year: 2034, title: 'Sustainable Tech Procurement', detail: 'Campus technology decisions center total lifecycle costs, carbon impact, and equitable access standards.' },
    { year: 2035, title: 'Networked Learning Ecosystems', detail: 'Libraries operate as hubs for federated learning services, digital scholarship, and trusted civic knowledge.' }
  ];

  const pollOptions = [
    { id: 'p1', label: 'VR/AR Immersive Learning', percent: 36 },
    { id: 'p2', label: 'Blockchain Credentials', percent: 18 },
    { id: 'p3', label: 'Edge Computing Collaboration', percent: 24 },
    { id: 'p4', label: 'Open Educational XR Archives', percent: 22 }
  ];

  const scenarioQuestions = [
    {
      id: 's1',
      prompt: 'A faculty member asks to use AI for grading tomorrow. What is your best first step?',
      options: [
        'Approve campus-wide AI grading immediately',
        'Run a needs assessment and define pilot guardrails',
        'Ban AI use in the course permanently',
        'Outsource grading policy to students'
      ],
      correctIndex: 1,
      explanation: 'A scoped pilot with clear outcomes and safeguards is the safest adoption path.'
    }
  ];

  window.AIHorizonsData = {
    resources,
    quizQuestions,
    dilemmaCards,
    timelineMilestones,
    pollOptions,
    scenarioQuestions
  };
})();
