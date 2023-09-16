// import { Inter } from 'next/font/google'
import About from '@/components/about'
import ContactUS from '@/components/contact'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import { WelcomeSection } from '@/components/welcome'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <WelcomeSection/>
    
      <About/>
      <Skills/>
      <Projects/>
      <ContactUS/>
    </main>
  )
}
