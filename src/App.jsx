import React from "react";

const navItems = [
  ["Capabilities", "#capabilities"],
  ["Process", "#process"],
  ["Background", "#background"],
  ["Contact", "#contact"],
];

const capabilities = [
  {
    title: "Workflow systems",
    description:
      "I turn scattered manual processes into visible steps, review points, handoff files, and small tools people can actually operate.",
  },
  {
    title: "Internal tools",
    description:
      "I build lightweight dashboards, review queues, local APIs, and operator consoles for research, operations, and decision support.",
  },
  {
    title: "AI-assisted operations",
    description:
      "I use AI where it helps with extraction, drafting, review, and repeatable work — with human approval where claims or decisions matter.",
  },
  {
    title: "Documentation and handoff",
    description:
      "I package workflows into runbooks, field manuals, scripts, checklists, and demo-safe artifacts so the work survives beyond the build session.",
  },
];

const processSteps = [
  ["01", "Map the workflow", "Find the real intake, decision points, failure points, and output requirements."],
  ["02", "Define the controls", "Add review states, approval boundaries, claim checks, and clear ownership where needed."],
  ["03", "Build the smallest usable system", "Create the tool, dashboard, script, or workflow that proves the operating loop."],
  ["04", "Package the handoff", "Deliver the files, docs, commands, and instructions needed to keep using it."],
];

const contactLinks = [
  ["Email", "mailto:justin@secpriva.com"],
  ["LinkedIn", "https://www.linkedin.com/in/justinstrange/"],
  ["GitHub", "https://github.com/SaltProphet"],
];

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="section">
      <div className="section-kicker">{eyebrow}</div>
      <div className="section-content">
        {title ? <h2>{title}</h2> : null}
        {children}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <main className="site-shell" id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Justin Strange home">
          <span className="brand-name">Justin Strange</span>
          <span className="brand-line">Systems Architect / Tool Builder</span>
        </a>

        <nav className="site-nav" aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <p className="hero-label">Independent systems architect · AI workflow builder · SecPriva</p>
        <h1 id="hero-title">I build practical systems for work that needs structure.</h1>
        <p className="hero-copy">
          This page exists so people I contact can verify who I am, what I build, and how to reach me. I work on internal tools, workflow automation, local-first systems, and reviewable AI-assisted processes.
        </p>
        <div className="hero-actions" aria-label="Primary links">
          <a href="mailto:justin@secpriva.com">Email me</a>
          <a href="https://www.linkedin.com/in/justinstrange/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/SaltProphet" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </section>

      <Section id="capabilities" eyebrow="Capabilities" title="What I can help with">
        <div className="capability-list">
          {capabilities.map((item) => (
            <article className="capability-item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="process" eyebrow="Process" title="How I approach the work">
        <div className="process-list">
          {processSteps.map(([number, title, description]) => (
            <article className="process-item" key={number}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="background" eyebrow="Background" title="Builder, not agency theater.">
        <div className="about-copy">
          <p>
            I am a solo systems architect and tool-builder focused on practical workflows: research pipelines, review systems, operator dashboards, local APIs, automation handoffs, and privacy-aware product architecture.
          </p>
          <p>
            My current work is centered around SecPriva and adjacent internal tooling. Public project writeups are being organized separately so this page stays clean, accurate, and easy to maintain.
          </p>
        </div>
      </Section>

      <Section id="contact" eyebrow="Contact" title="Contact">
        <p className="contact-copy">
          Best path is email. LinkedIn and GitHub are included for identity/context checks.
        </p>
        <div className="contact-links">
          {contactLinks.map(([label, href]) => (
            <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
              {label}
            </a>
          ))}
        </div>
        <p className="contact-note">Calendar booking link can be added after the scheduling account is ready.</p>
      </Section>

      <footer className="site-footer">
        <span>© 2026 Justin Strange</span>
        <span>justinstrange.dev</span>
      </footer>
    </main>
  );
}
