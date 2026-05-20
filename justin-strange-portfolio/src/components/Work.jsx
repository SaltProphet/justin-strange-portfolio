const projects = [
  {
    tag: 'Live',
    title: 'SecPriva',
    desc: 'Privacy-focused communications and operational infrastructure.',
    href: 'https://secpriva.com',
    linkLabel: 'secpriva.com',
  },
  {
    tag: 'Pilot',
    title: 'SecPriva MVP',
    desc: 'Hosted pilot demo for secure low-retention communication workflows.',
    href: 'https://app.secpriva.com',
    linkLabel: 'app.secpriva.com',
  },
  {
    tag: 'Internal Tool',
    title: 'Local MCP Repo Builder',
    desc: 'Local tool server that lets an AI assistant scaffold, write, install, and build React projects inside a controlled Windows workspace.',
    href: null,
    linkLabel: null,
  },
  {
    tag: 'Internal Tools',
    title: 'Workflow / Dashboard Tooling',
    desc: 'Internal dashboards, intake flows, admin panels, and operational automation systems.',
    href: null,
    linkLabel: null,
  },
]

function WorkCard({ tag, title, desc, href, linkLabel }) {
  const inner = (
    <>
      <span className="card-tag">{tag}</span>
      <div className="card-title">{title}</div>
      <p className="card-desc">{desc}</p>
      {linkLabel && (
        <div className="card-link-label">
          {linkLabel} <span className="arrow">→</span>
        </div>
      )}
    </>
  )

  return href ? (
    <a className="work-card" href={href} target="_blank" rel="noopener noreferrer">
      {inner}
    </a>
  ) : (
    <div className="work-card">
      {inner}
    </div>
  )
}

export default function Work() {
  return (
    <section id="work">
      <div className="container">
        <div className="section-header">
          <h2>Featured Work</h2>
          <span className="section-count">01</span>
        </div>
        <div className="work-grid">
          {projects.map((p) => (
            <WorkCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
