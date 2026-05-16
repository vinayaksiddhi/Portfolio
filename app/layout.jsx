
import { playfair, dmMono, outfit } from './fonts'
import './globals.css'
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider'
import Cursor from '@/components/ui/Cursor'
import Preloader from '@/components/ui/Preloader'
import ScrollProgress from '@/components/ui/ScrollProgress'

export const metadata = {
  title: 'Siddhi Vinayak | Portfolio',
  description: 'Personal portfolio of Siddhi Vinayak, EEE student, UI/UX designer, and frontend developer.',
  openGraph: {
    title: 'Siddhi Vinayak | Portfolio',
    description: 'Personal portfolio of Siddhi Vinayak, EEE student, UI/UX designer, and frontend developer.',
    images: [{ url: '/images/profile.jpg' }],
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmMono.variable} ${outfit.variable}`}>
      <body className="bg-bg text-white overflow-x-hidden antialiased font-sans">
        <SmoothScrollProvider>
          <Preloader />
          <Cursor />
          <ScrollProgress />
          <div className="vignette"></div>
          <div className="grain"></div>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
