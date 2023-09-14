import { Inter } from 'next/font/google'
import { WelcomeSection } from '@/components/welcome'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <WelcomeSection/>
    </main>
  )
}
