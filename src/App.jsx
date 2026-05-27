import React from "react";

const navItems = [
  ["Home", "#top"],
  ["Work", "#work"],
  ["Services", "#services"],
  ["Blog", "#blog"],
  ["Contact", "#contact"],
];

function Section({ id, title, children }) {
  return (
    <section id={id} className="site-section">
      <div className="section-label">{title}</div>
      <div className="section-body">{children}</div>
    </section>
  );
}

export default function App() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Justin Strange home">
          <span className="brand-name">Justin Strange</span>
          <span className="brand-line">Systems / Automation / Privacy</span>
        </a>

        <nav className="site-nav" aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <section id="top" className="intro">
        <h1>Justin Strange</h1>
        <p>Systems / Automation / Privacy</p>
      </section>

      <Section id="work" title="Work" />

      <Section id="services" title="Services" />

      <Section id="blog" title="Blog" />

      <Section id="contact" title="Contact">
        <a className="email-link" href="mailto:justin@secpriva.com">
          justin@secpriva.com
        </a>
      </Section>

      <footer className="site-footer">
        <span>© 2026 Justin Strange</span>
        <span>justinstrange.dev</span>
      </footer>
    </main>
  );
}
