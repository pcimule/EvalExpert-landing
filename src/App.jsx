import { useEffect } from 'react'
import { LanguageProvider } from './i18n/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogosBar from './components/LogosBar'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import AISection from './components/AISection'
import Modules from './components/Modules'
import Multilingual from './components/Multilingual'
import Security from './components/Security'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import DemoSection from './components/DemoSection'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function AppContent() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <LogosBar />
        <Features />
        <HowItWorks />
        <AISection />
        <Modules />
        <Multilingual />
        <Security />
        <Pricing />
        <Testimonials />
        <DemoSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}
