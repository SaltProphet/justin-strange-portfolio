const tools = [
  { name: 'React / Vite', sub: 'Next.js' },
  { name: 'MCP', sub: 'Local AI tooling' },
  { name: 'Node.js', sub: 'TypeScript' },
  { name: 'Python', sub: 'PowerShell' },
  { name: 'Supabase', sub: 'Daily.co / Resend' },
  { name: 'GitHub', sub: 'Vercel' },
]

export default function Stack() {
  return (
    <section id="stack">
      <div className="container">
        <div className="section-header">
          <h2>Tooling Stack</h2>
          <span className="section-count">02</span>
        </div>
        <div className="stack-grid">
          {tools.map((t) => (
            <div className="stack-item" key={t.name}>
              <div className="stack-item-name">{t.name}</div>
              <div className="stack-item-sub">{t.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
