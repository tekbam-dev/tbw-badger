import FeatureCard from '../components/ui/FeatureCard'
import Hero from '../components/home/Hero'
import Navigation from '../components/layouts/Navigation'

const features = [
  { title: 'Build trust', description: 'Display a clear badge that helps shoppers feel confident buying from your WooCommerce store.' },
  { title: 'Manage in one place', description: 'Create and manage your badges from one simple dashboard.' },
  { title: 'Connect with the plugin', description: 'Install the WordPress plugin later to display the right badge on your store.' },
]

function HomePage() {
  return (
    <div className="home-page">
      <Navigation />
      <main>
        <Hero />
        <section className="features" id="services" aria-labelledby="features-title">
          <p className="eyebrow">WHY TBW BADGER</p>
          <h2 id="features-title">Badges made simple</h2>
          <div className="feature-grid">
            {features.map((feature) => <FeatureCard key={feature.title} {...feature} />)}
          </div>
        </section>
      </main>
    </div>
  )
}

export default HomePage;
