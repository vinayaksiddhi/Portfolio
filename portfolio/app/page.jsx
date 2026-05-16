import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Skills from '../components/sections/Skills'
import Experience from '../components/sections/Experience'
import Hackathons from '../components/sections/Hackathons'
import Achievements from '../components/sections/Achievements'
import Certifications from '../components/sections/Certifications'
import Projects from '../components/sections/Projects'
import BeyondCode from '../components/sections/BeyondCode'
import Contact from '../components/sections/Contact'
import SceneWrapper from '../components/canvas/SceneWrapper'

export default function Home() {
  return (
    <main className="relative">
      <SceneWrapper />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Hackathons />
      <Achievements />
      <Certifications />
      <Projects />
      <BeyondCode />
      <Contact />
    </main>
  )
}
