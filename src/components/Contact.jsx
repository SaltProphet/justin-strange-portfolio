const links = [
  { label: 'GitHub', href: 'https://github.com/SaltProphet', display: 'github.com/SaltProphet' },
  { label: 'SecPriva', href: 'https://secpriva.com', display: 'secpriva.com' },
  { label: 'App Demo', href: 'https://app.secpriva.com', display: 'app.secpriva.com' },
  { label: 'LinkedIn', href: null, display: '— not confirmed —' },
]

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="section-header">
          <h2>Contact &amp; Links</h2>
          <span className="section-count">04</span>
        </div>
        <div className="contact-inner">
          <p className="contact-blurb">
            Building in public where it makes sense.<br /><br />
            <strong>SecPriva</strong> is the primary work.<br />
            Reach out through GitHub or the SecPriva site.
          </p>
          <ul className="link-list">
            {links.map(({ label, href, display }) => (
              <li className="link-item" key={label}>
                {href ? (
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    <span className="link-label">{label}</span>
                    <span>{display} →</span>
                  </a>
                ) : (
                  <span>
                    <span className="link-label">{label}</span>
                    <span>{display}</span>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
