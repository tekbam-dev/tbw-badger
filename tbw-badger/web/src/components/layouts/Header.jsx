import BackgroundImageOverlaytext from '../ui/Banner/BackgroundImageOverlayText';

function Header(){

    return(
        <section>
            <BackgroundImageOverlaytext imageSrc="/images/store-background.jpg"
  eyebrow="READY TO START?"
  heading="Build trust with every customer."
  copy="Create your first WooCommerce trust badge in minutes."
  ctaText="Create a free account"
  ctaLink="/register"/>


        </section>
    );
}

export default Header;