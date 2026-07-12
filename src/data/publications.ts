export interface PublicationEntry {
  type: 'Paper' | 'Talk'
  title: string
  venue: string
  period: string
}

export const publications: PublicationEntry[] = [
  {
    type: 'Paper',
    title: 'A Lightweight Network Traffic Classification Using XAI',
    venue: 'IEEE ICOCO 2024',
    period: '2024',
  },
  {
    type: 'Talk',
    title: 'Adaptive AI Architectures for Network Security',
    venue: 'IEEE Computer Society Malaysia Chapter Webinar',
    period: 'December 2025',
  },
]
