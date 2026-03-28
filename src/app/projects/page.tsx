import type { Metadata } from 'next'
import Projects from '@/components/Projects'
import Header from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'Проекты | Андрей Иванов',
  description: 'Мои работы и проекты',
}

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen">
      <Header />
      <Projects />
    </main>
  )
}
