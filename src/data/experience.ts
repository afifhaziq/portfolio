export interface ExperienceEntry {
  role: string
  org: string
  location: string
  period: string
  bullets: string[]
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Assistant Director, Network Security Research Department',
    org: 'Malaysian Communications and Multimedia Commission (MCMC)',
    location: 'Cyberjaya, Selangor',
    period: 'April 2026 — Present',
    bullets: [
      'Engineered COSMOS, an AI-powered compliance portal serving hundreds of licensees, with ML pipelines for automated report analysis and scoring.',
      'Maintained a production ML-integrated content moderation system processing 300,000+ cases on a Django/React stack.',
      'Reduced case duplication by 95% via Metabase dashboards; insights used in ministerial briefings in Parliament.',
      'Built an automated DNS compliance monitoring pipeline tracking 1,000+ blocked domains across Malaysian ISPs.',
      'Led technical validation of an LLM-powered sentiment analysis platform covering 30 million+ users.',
      'Achieved 99.99% uptime via Docker containerization and an observability stack (Grafana, Loki, Prometheus, Promtail, Wazuh) with Ansible automation.',
    ],
  },
  {
    role: 'Network Security Researcher',
    org: 'Centre of Research for Cyber Security & Network (CSNET), Universiti Malaya',
    location: 'Kuala Lumpur',
    period: 'May 2024 — October 2025',
    bullets: [
      'Increased edge inference throughput by 238% on NVIDIA Jetson Nano with a lightweight CNN for encrypted network traffic classification, using DeepSHAP explainability, pruning, and quantization (PyTorch, ONNX, TensorRT).',
      'Curated and published MalayaNetwork_GT on Hugging Face — 12.5M encrypted packets across 10 classes.',
      'Published and presented "A Lightweight Network Traffic Classification Using XAI" at IEEE ICOCO 2024.',
      'Mentored 30 undergraduate students on networking fundamentals.',
    ],
  },
  {
    role: 'Network Operation Centre (NOC) Intern',
    org: 'Nevigate Pte Ltd',
    location: 'Kuala Lumpur',
    period: 'September 2023 — March 2024',
    bullets: [
      'Monitored 1,000+ global network circuits across 150+ countries.',
      'Handled L1/L2 fault resolution and 100+ weekly escalations via Jira, maintaining 99% SLA adherence.',
    ],
  },
]
