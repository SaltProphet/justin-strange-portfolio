import { navigation } from '../config/navigation.js'

export default function SiteHeader() {
  const onHomepage = window.location.pathname === '/'

  return (
    <header className="site-header">
      <a className="wordmark" href={onHomepage ? '#top' : '/#top'}>JUSTIN STRANGE</a>
      <nav aria-label="Primary navigation">
        {navigation.map((item) => {
          const href = item.type === 'hash' && !onHomepage ? `/${item.href}` : item.href
          const external = item.type === 'external'
          return (
            <a href={href} key={item.label} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>
              {item.label}
            </a>
          )
        })}
      </nav>
    </header>
  )
}
