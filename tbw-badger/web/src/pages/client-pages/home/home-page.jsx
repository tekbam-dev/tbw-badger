import LeftImageRightContent from "../../../components/ui/LeftImageRightContent";
import Card from "../../../components/ui/Cards";
import Header from "../../../components/layouts/header";


function HomePage() {
  return (
    <section className="hero" id="top">
   <Header />
      <LeftImageRightContent
  imageSrc="/images/badges/trusted-store.png"
  imageAlt="Trusted Store badge preview"
  subheading="EASY SETUP"
  heading="Create badges your customers recognise"
  copy="Manage your WooCommerce trust badges from a simple dashboard."
  ctaText="Explore badges"
  ctaLink="#badges"
/>

<Card
  imageSrc="/images/badges/trusted-store.png"
  imageAlt="Trusted Store badge"
  title="Trusted Store"
  description="Show customers that your WooCommerce store meets your standards."
/>
      <p className="eyebrow">BADGES FOR WOOCOMMERCE</p>
      <h1>Make your store feel more trustworthy.</h1>
      <p className="hero-description">Create, manage, and display trust badges for your WooCommerce store from one dashboard.</p>
      <div className="hero-actions">
        <a className="button button-primary" href="#register">Get started free</a>
        <a className="text-link" href="#documentation">View documentation <span aria-hidden="true">→</span></a>
      </div>
    </section>
  )
}

export default HomePage;
