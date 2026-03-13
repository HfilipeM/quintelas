import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quintela Cycling - Premium Performance',
  description: 'Quintela Cycling - High-performance cycling equipment, professional workshop, and technical support.',
  openGraph: {
    title: 'Quintela Cycling - Premium Performance',
    description: 'High-performance cycling equipment and professional services',
    type: 'website',
  },
}

export default function QuintelaCyclingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
