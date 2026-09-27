
import "../Banner/style.css";

function BackgroundImageOverlaytext({imageSrc,
  eyebrow,
  heading,
  copy,
  ctaText,
  ctaLink = "#",}){

    return(
       <section
      className="background-image-cta"
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      <div className="background-image-cta-overlay">
        <div className="background-image-cta-content">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}

          <h2>{heading}</h2>

          {copy && <p>{copy}</p>}

          {ctaText && (
            <a className="button button-primary" href={ctaLink}>
              {ctaText}
            </a>
          )}
        </div>
      </div>
    </section>


    );
}

export default BackgroundImageOverlaytext;

