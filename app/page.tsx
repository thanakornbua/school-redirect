'use client'

import { useEffect } from 'react'

const REDIRECT_URL = 'http://96.30.126.41/sk/'

export default function Home() {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      window.location.href = REDIRECT_URL
    }, 3000)

    return () => window.clearTimeout(timer)
  }, [])

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-secondary px-6 text-center text-white">
      <div className="geometric-pattern absolute inset-0" aria-hidden="true" />

      <section className="relative z-10 max-w-lg rounded-2xl border border-primary/50 bg-black/70 p-8 shadow-[0_0_45px_rgba(255,20,147,0.4)] backdrop-blur-sm">
        <h1 className="mb-4 text-3xl font-bold text-primary">Redirecting to School Portal</h1>
        <p className="mb-6 text-lg text-pink-300">
          Taking you there in a few seconds: <span className="text-highlight">96.30.126.41/sk/</span>
        </p>
        <a
          href={REDIRECT_URL}
          className="inline-block rounded-full bg-accent px-6 py-3 font-semibold text-black transition hover:scale-105 hover:bg-highlight"
        >
          Continue now
        </a>
      </section>
    </main>
  )
}
