import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Casa Quintela - Premium Quality Services',
  description: 'Casa Quintela - Professional workshop, tools, and technical assistance for home improvement and industrial needs.',
  openGraph: {
    title: 'Casa Quintela - Premium Quality Services',
    description: 'Professional tools and services for quality home improvement',
    type: 'website',
  },
}

export default function CasaQuintelaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
