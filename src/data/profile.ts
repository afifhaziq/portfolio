export const profile = {
  name: 'Afif Haziq Bin Haris',
  initials: 'AH',
  role: 'Network Security Researcher & Engineer',
  email: 'afifhaziq3078@gmail.com',
  github: 'https://github.com/afifhaziq',
  summary:
    'I build and secure the systems that keep networks trustworthy — from AI-powered compliance tooling used across a national regulator, to lightweight machine learning models that classify encrypted traffic on edge hardware. My work sits at the intersection of network security, applied ML, and production infrastructure.',
}

export interface EducationEntry {
  degree: string
  school: string
  location: string
  period: string
  detail?: string
}

export const education: EducationEntry[] = [
  {
    degree: 'Master of Computer Science (Research Mode)',
    school: 'Universiti Malaya',
    location: 'Kuala Lumpur',
    period: '2024 — 2025',
  },
  {
    degree: 'Bachelor of Computer Science (Hons.) in Computer Networks',
    school: 'Universiti Teknologi MARA (UiTM), Arau, Perlis',
    location: 'Perlis',
    period: '2020 — 2023',
    detail: 'CGPA 3.5',
  },
  {
    degree: 'Foundation in Engineering',
    school: 'Universiti Teknologi MARA (UiTM), Dengkil, Selangor',
    location: 'Selangor',
    period: '2019 — 2020',
    detail: 'CGPA 3.59',
  },
]
