import type { Metadata } from 'next'
import About from '@/components/About'
import Header from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'Обо мне | Андрей Иванов',
  description: 'Навыки, опыт и образование разработчика',
}

export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      <Header />
      <About />
    </main>
  )
}
