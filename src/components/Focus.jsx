const items = [
  'SecPriva public company layer',
  'Hosted product demo',
  'Local AI-assisted development workflows',
  'Internal dashboard and workflow systems',
]

export default function Focus() {
  return (
    <section id="focus">
      <div className="container">
        <div className="section-header">
          <h2>Current Focus</h2>
          <span className="section-count">03</span>
        </div>
        <ul className="focus-list">
          {items.map((item, i) => (
            <li className="focus-item" key={item}>
              <span className="focus-num">0{i + 1}</span>
              <span className="focus-dot" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
