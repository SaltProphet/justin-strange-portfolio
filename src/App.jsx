import React from "react";

const navItems = [
  ["Work", "#work"],
  ["Services", "#services"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

const projects = [
  {
    name: "SecPriva",
    type: "Secure ephemeral video infrastructure",
    status: "In progress",
    description:
      "Privacy-first video workflow for sensitive sessions, risk reduction, and controlled access. Built around low-retention architecture, identity gates, and operational safeguards.",
    details: ["Product architecture", "Workflow design", "Next.js / Supabase / Daily.co"],
  },
  {
    name: "SecPriva Lead Console",
    type: "Internal operations console",
    status: "Demo-safe artifact",
    description:
      "Reviewable lead and outreach workspace designed for structured intake, prioritization, notes, and follow-up handling without turning the workflow into a spreadsheet maze.",
    details: ["Dashboard UX", "Data review", "Operational workflow"],
  },
  {
    name: "Gravemark",
    type: "Weighted evidence workflow engine",
    status: "Active prototype",
    description:
      "Local research workflow for turning sources into findings, scoring evidence weight, reviewing results, and exporting usable reports.",
    details: ["Research runs", "Evidence review", "Source-to-report pipeline"],
  },
  {
    name: "AI Automation Deliverable Pack",
    type: "Demo workflow package",
    status: "Portfolio proof",
    description:
      "Packaged automation deliverable showing intake, extraction, review tables, and client-safe handoff materials for repeatable AI-assisted work.",
    details: ["n8n-style workflow", "Documentation", "Client handoff"],
  },
];

const services = [
  "Workflow audits and rebuilds",
  "Internal dashboards and review tools",
  "AI-assisted research systems",
  "Local-first automation planning",
  "Technical documentation and handoff packages",
  "Privacy-focused product architecture",
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
        <p className="hero-label">AI workflow systems · internal tools · reviewable automation</p>
        <h1 id="hero-title">Justin Strange</h1>
        <p className="hero-copy">
          I build practical systems for research, operations, local APIs, dashboards, and evidence-backed workflows.
        </p>
        <div className="hero-actions" aria-label="Primary links">
          <a href="#work">View work</a>
          <a href="mailto:justin@secpriva.com">Email</a>
        </div>
      </section>

      <Section id="work" eyebrow="Work" title="Selected systems">
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-meta">
                <span>{project.type}</span>
                <span>{project.status}</span>
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <ul>
                {project.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section id="services" eyebrow="Services" title="What I build">
        <div className="service-grid">
          {services.map((service) => (
            <div className="service-item" key={service}>
              {service}
            </div>
          ))}
        </div>
      </Section>

      <Section id="about" eyebrow="About" title="Small systems, clean handoffs.">
        <div className="about-copy">
          <p>
            I work on AI-assisted workflows, privacy-focused infrastructure, local tooling, and operational systems that need to be understandable after the first demo.
          </p>
          <p>
            The common pattern is simple: take a messy process, define the intake, make the review path visible, reduce manual rework, and package the output so someone else can use it without decoding the builder's brain.
          </p>
        </div>
      </Section>

      <Section id="contact" eyebrow="Contact" title="Send the broken workflow.">
        <p className="contact-copy">
          I’ll turn it into a usable process, tool, dashboard, runbook, or review system.
        </p>
        <div className="contact-links">
          {contactLinks.map(([label, href]) => (
            <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
              {label}
            </a>
          ))}
        </div>
        <p className="contact-note">Calendar booking link can be added when the scheduling account is ready.</p>
      </Section>

      <footer className="site-footer">
        <span>© 2026 Justin Strange</span>
        <span>justinstrange.dev</span>
      </footer>
    </main>
  );
}
