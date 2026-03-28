'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import MatrixRainBackground from '@/components/MatrixRainBackground'

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Matrix Rain Background */}
      <MatrixRainBackground />

      {/* CRT Overlay */}
      <div className="crt-overlay" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <PageHeader />

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-20">
          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto">
            {/* Avatar with Terminal Border */}
            <div className="w-40 h-40 mx-auto mb-10 relative">
              <div className="absolute inset-0 rounded-sm border-2 border-[#00FF00] matrix-glow" />
              <div className="absolute inset-1 rounded-sm overflow-hidden">
                <img
                  src="https://portal.rudn-sochi.ru/pluginfile.php/277466/user/icon/classic/f1?rev=4008088"
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Title with Typing Effect */}
            <p className="text-xl text-[#00FF00] mb-12 max-w-2xl mx-auto font-mono">
              <span className="mr-2">$</span>
              <span className="typing-text">Frontend Developer</span>
              <span className="cursor-blink">_</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-20">
              <Link
                href="/projects"
                className="btn-terminal btn-terminal-primary"
              >
                <span className="flex items-center gap-2">
                  <span className="mr-2">$</span>
                  Смотреть проекты
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link
                href="/contact"
                className="btn-terminal btn-terminal-secondary"
              >
                <span className="flex items-center gap-2">
                  <span className="mr-2">$</span>
                  Связаться
                </span>
              </Link>
            </div>
          </div>

          {/* Navigation Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto w-full">
            <Link
              href="/about"
              className="terminal-card group"
            >
              <div className="text-5xl mb-6 text-[#00FF00] matrix-glow group-hover:text-[#33FF33] transition-all duration-300 group-hover:scale-110">
                ◈
              </div>
              <h3 className="text-2xl font-bold text-[#00FF00] mb-3 group-hover:text-[#33FF33] transition-colors matrix-glow">
                Обо мне
              </h3>
              <p className="text-[#00CC00] group-hover:text-[#33FF33] transition-colors font-mono text-sm">
                Навыки и опыт
              </p>
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <svg className="w-6 h-6 text-[#00FF00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>

            <Link
              href="/projects"
              className="terminal-card group"
            >
              <div className="text-5xl mb-6 text-[#00FF00] matrix-glow group-hover:text-[#33FF33] transition-all duration-300 group-hover:scale-110">
                ◇
              </div>
              <h3 className="text-2xl font-bold text-[#00FF00] mb-3 group-hover:text-[#33FF33] transition-colors matrix-glow">
                Проекты
              </h3>
              <p className="text-[#00CC00] group-hover:text-[#33FF33] transition-colors font-mono text-sm">
                Мои работы
              </p>
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <svg className="w-6 h-6 text-[#00FF00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>

            <Link
              href="/contact"
              className="terminal-card group"
            >
              <div className="text-5xl mb-6 text-[#00FF00] matrix-glow group-hover:text-[#33FF33] transition-all duration-300 group-hover:scale-110">
                ✉
              </div>
              <h3 className="text-2xl font-bold text-[#00FF00] mb-3 group-hover:text-[#33FF33] transition-colors matrix-glow">
                Контакты
              </h3>
              <p className="text-[#00CC00] group-hover:text-[#33FF33] transition-colors font-mono text-sm">
                Связаться со мной
              </p>
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <svg className="w-6 h-6 text-[#00FF00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
