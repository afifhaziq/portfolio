export interface SkillGroup {
  category: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    category: 'Tools',
    items: [
      'Docker',
      'Ansible',
      'GitHub Actions',
      'Grafana',
      'Prometheus',
      'Loki',
      'Promtail',
      'Wazuh',
      'Hugging Face',
      'Linux',
      'Git',
      'SLURM',
      'Nginx',
      'Wireshark',
      'Nmap',
      'Jira',
    ],
  },
  {
    category: 'Frameworks',
    items: ['PyTorch', 'TensorFlow', 'TensorRT', 'ONNX', 'Scikit-Learn', 'LangChain', 'Pydantic AI'],
  },
  {
    category: 'Data',
    items: ['WandB', 'Pandas', 'NumPy', 'Matplotlib', 'ChromaDB', 'DeepSHAP', 'Metabase', 'PostgreSQL'],
  },
  {
    category: 'Languages',
    items: ['Python', 'Go', 'Bash', 'SQL', 'Java', 'C++', 'C'],
  },
  {
    category: 'Hardware',
    items: ['NVIDIA', 'Cisco', 'Juniper', 'Fortinet', 'Mikrotik'],
  },
]
