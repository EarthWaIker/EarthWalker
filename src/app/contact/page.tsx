import type { Metadata } from 'next'
import Contact from '@/components/Contact'
import Header from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'Контакты | Андрей Иванов',
  description: 'Связаться со мной',
}

export default function ContactPage() {
  return (
    <main className="relative min-h-screen">
      <Header />
      <Contact />
    </main>
  )
}
