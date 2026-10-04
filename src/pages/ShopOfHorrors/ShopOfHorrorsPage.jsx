import artifacts from '../../../content/shop-of-horrors/artifacts.json'
import SiteHeader from '../../components/SiteHeader.jsx'
import './ShopOfHorrors.css'

function CommerceAction({ artifact }) {
  if (!artifact.merchAvailable) return null
  if (!artifact.purchaseUrl) return <span className="horror-commerce">COMING SOON.</span>
  return <a className="horror-commerce" href={artifact.purchaseUrl} target="_blank" rel="noreferrer">PURCHASE ↗</a>
}

function ArtifactCard({ artifact }) {
  return (
    <article className={`horror-card${artifact.featured ? ' horror-card-featured' : ''}`}>
      {artifact.image && <img src={artifact.image} alt="" />}
      <div className="horror-card-meta">
        <span>{artifact.type}</span>
        <time dateTime={artifact.date}>{artifact.date}</time>
      </div>
      <h2>{artifact.title}</h2>
      {artifact.subtitle && <p className="horror-subtitle">{artifact.subtitle}</p>}
      {artifact.description && <p className="horror-description">{artifact.description}</p>}
      {artifact.tags.length > 0 && <p className="horror-tags">{artifact.tags.join(' / ')}</p>}
      <CommerceAction artifact={artifact} />
    </article>
  )
}

export default function ShopOfHorrorsPage() {
  return (
    <main className="horror-page">
      <SiteHeader />
      <section className="horror-intro">
        <p className="horror-eyebrow">JUSTINSTRANGE.DEV / SHOP OF HORRORS</p>
        <h1>LITTLE SHOP OF AI HORRORS</h1>
        <p>Experiments, artifacts, and bad ideas from working with AI too much.</p>
      </section>
      <section className="horror-collection" aria-label="Shop of Horrors artifacts">
        {artifacts.map((artifact) => <ArtifactCard artifact={artifact} key={artifact.id} />)}
      </section>
      <footer><span>JUSTIN STRANGE</span><span>NO REFUNDS.</span></footer>
    </main>
  )
}
