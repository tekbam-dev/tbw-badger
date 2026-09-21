function FeatureCard({ title, description }) {
  return (
    <article className="feature-card">
      <div className="feature-icon" aria-hidden="true">✓</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}

export default FeatureCard
