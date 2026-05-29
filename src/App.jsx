import React from "react";

const navItems = [
  ["Capabilities", "#capabilities"],
  ["Process", "#process"],
  ["Focus", "#focus"],
  ["Contact", "#contact"],
];

const capabilities = [
  "Workflow systems",
  "Internal dashboards",
  "Local APIs",
  "Automation pipelines",
  "Research tooling",
  "Review workflows",
  "Documentation",
  "Operational tooling",
];

const processSteps = [
  ["01", "Map", "Intake, constraints, review points."],
  ["02", "Build", "Smallest usable system first."],
  ["03", "Review", "Human approval where it matters."],
  ["04", "Handoff", "Docs, scripts, exports, ownership."],
];

const verificationFacts = [
  ["Status", "Available for select projects"],
  ["Focus", "SecPriva"],
  ["Location", "United States"],
  ["Work", "Internal tools / workflow systems"],
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
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <main className="site-shell" id="top">
      <header className="site-header">
        <a className="brand" href="#top">
          <span className="brand-name">Justin Strange</span>
          <span className="brand-line">Systems Architect / Tool Builder</span>
        </a>

        <nav className="site-nav">
          {navItems.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
      </header>

      <section className="hero">
        <div className="hero-main">
          <p className="hero-label">Independent systems architect · SecPriva</p>
          <h1>Systems Architect<br />Tool Builder<br />Workflow Systems</h1>
          <p className="hero-copy">
            I design internal tools, workflow automation, local APIs, dashboards, and reviewable AI-assisted systems.
          </p>

          <div className="hero-actions">
            {contactLinks.map(([label, href]) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>{label}</a>
            ))}
          </div>
        </div>

        <aside className="verification-panel">
          {verificationFacts.map(([label, value]) => (
            <div key={label} className="verification-row">
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </aside>
      </section>

      <Section id="capabilities" eyebrow="Capabilities" title="What I build">
        <div className="capability-grid">
          {capabilities.map((item) => (
            <div key={item} className="capability-item">{item}</div>
          ))}
        </div>
      </Section>

      <Section id="process" eyebrow="Process" title="How I work">
        <div className="process-list">
          {processSteps.map(([number, title, description]) => (
            <article key={number} className="process-item">
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="focus" eyebrow="Current Focus" title="SecPriva">
        <p className="focus-copy">
          Privacy-focused infrastructure, internal tooling, workflow systems, research operations, and supporting operator workflows.
        </p>
      </Section>

      <Section id="contact" eyebrow="Contact" title="Contact">
        <div className="contact-links">
          {contactLinks.map(([label, href]) => (
            <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>{label}</a>
          ))}
        </div>
      </Section>

      <footer className="site-footer">
        <span>© 2026 Justin Strange</span>
        <span>justinstrange.dev</span>
      </footer>
    </main>
  );
}