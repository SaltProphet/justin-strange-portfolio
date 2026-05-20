export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-eyebrow animate delay-1">
          <span className="mono">justinstrange.dev</span>
        </div>
        <h1 className="animate delay-2">
          Justin<br /><em>Strange</em>
        </h1>
        <p className="hero-role animate delay-3">Systems Architect &nbsp;/&nbsp; Tool Builder</p>
        <p className="hero-desc animate delay-3">
          Building privacy-focused infrastructure, local AI workflows,
          operational dashboards, and AI-assisted development systems.
        </p>
        <a href="#work" className="hero-cta animate delay-4">
          View Work <span className="arrow">→</span>
        </a>
      </div>
      <div className="hero-rule" aria-hidden="true" />
      <div className="hero-number" aria-hidden="true">JS</div>
    </section>
  )
}
