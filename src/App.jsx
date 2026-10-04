import './App.css'
import { Analytics } from '@vercel/analytics/react'
import work from '../content/projects/index.js'
import lab from '../content/lab.json'

export default function App() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top">JUSTIN STRANGE</a>
        <nav aria-label="Primary navigation">
          <a href="#work">WORK</a>
          <a href="#lab">LAB</a>
          <a href="#notes">NOTES</a>
          <a href="#contact">CONTACT</a>
          <a href="https://github.com/SaltProphet" target="_blank" rel="noreferrer">GITHUB ↗</a>
          <a href="https://www.linkedin.com/in/justinstrange/" target="_blank" rel="noreferrer">LINKEDIN ↗</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <p className="eyebrow">SYSTEMS ARCHITECT / TOOL BUILDER</p>
        <h1>I build systems.</h1>
        <p className="hero-note">A personal archive of software, infrastructure, experiments, and things still taking shape.</p>
        <div className="hero-meta">
          <span>INDIANA, USA</span>
          <span>EST. 2026</span>
        </div>
      </section>

      <section className="section" id="work">
        <div className="section-heading">
          <span className="section-number">01</span>
          <h2>Work</h2>
          <p>Systems built to do something real.</p>
        </div>
        <div className="record-list">
          {work.map((item) => (
            <a className="record" href="#contact" key={item.number}>
              <span className="record-number">{item.number}</span>
              <span className="record-title">{item.title}</span>
              <span className="record-meta">{item.meta}</span>
              <span className="record-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section lab-section" id="lab">
        <div className="section-heading">
          <span className="section-number">02</span>
          <h2>Lab</h2>
          <p>The place for the things I built because I was too curious about the problem.</p>
        </div>
        <div className="lab-list">
          {lab.map((item) => (
            <div className="lab-entry" key={item.number}>
              <span className="record-number">{item.number}</span>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section notes-section" id="notes">
        <div className="section-heading">
          <span className="section-number">03</span>
          <h2>Notes</h2>
          <p>Short observations about systems, privacy, tools, and the problems worth taking apart.</p>
        </div>
        <p className="coming-soon">NOTES WILL APPEAR HERE.</p>
      </section>

      <section className="contact-section" id="contact">
        <p className="eyebrow">OPEN CHANNEL</p>
        <h2>Have a system that needs building?</h2>
        <a className="contact-link" href="mailto:hello@secpriva.com">hello@secpriva.com <span>↗</span></a>
      </section>

      <footer>
        <span>JUSTIN STRANGE</span>
        <span>MORE TO COME.</span>
      </footer>
      <Analytics />
    </main>
  )
}
