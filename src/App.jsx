// Justin Strange — Personal Portfolio
// justinstrange.dev
// Systems Architect / Tool Builder
// Privacy-focused infrastructure, local AI workflows, operational dashboards, AI-assisted dev systems.

import './index.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import Stack from './components/Stack'
import Focus from './components/Focus'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Stack />
        <Focus />
        <Contact />
      </main>
      <footer>
        <div className="footer-inner">
          <span className="footer-copy">© {new Date().getFullYear()} Justin Strange</span>
          <span className="footer-domain">justinstrange.dev</span>
        </div>
      </footer>
    </>
  )
}
