export interface ProjectEntry {
  title: string
  period: string
  description: string
  tags: string[]
}

export const projects: ProjectEntry[] = [
  {
    title: 'GoByte — High-Performance Network Packet Parser',
    period: 'February 2026',
    description:
      'A Go-based ML data ingestion pipeline processing 776,000 packets/sec at ~50MB peak RAM, using goroutine concurrency and exporting to CSV, Parquet, and NumPy formats.',
    tags: ['Go', 'Goroutines', 'Parquet', 'NumPy'],
  },
  {
    title: 'Adversarial Attacks on Continual Learning-based IDS',
    period: 'January 2026',
    description:
      'A TabTransformer + Experience Replay continual learning intrusion detection system, stress-tested with MITRE ATT&CK-aligned adversarial attacks including backdoor and label-flipping.',
    tags: ['TabTransformer', 'Continual Learning', 'MITRE ATT&CK', 'PyTorch'],
  },
  {
    title: 'Applied Deep Learning for IDS',
    period: 'December 2025',
    description:
      'A full ML lifecycle intrusion detection project spanning training, experiment tracking, and deployment using PyTorch, WandB, and ONNX Runtime.',
    tags: ['PyTorch', 'WandB', 'ONNX Runtime'],
  },
  {
    title: 'IEEE Computer Society Malaysia Chapter Webinar',
    period: 'December 2025',
    description:
      'Invited talk on adaptive AI architectures and continual learning for network security, built on Avalanche and PyTorch.',
    tags: ['Avalanche', 'PyTorch', 'Talk'],
  },
]
