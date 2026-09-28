
import { HeadingElement,ParagraphElement,TextLinkButton} from "../../ui/barrelUIImport";

import "./style.css";

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

        
          <HeadingElement headingText = {heading} />

          {copy && <ParagraphElement copy={copy} />}

          {ctaText && (
            <TextLinkButton  className="button button-primary" ctalink={ctaLink} ctatext={ctaText} /> 
          )}
        </div>
      </div>
    </section>


    );
}

export default BackgroundImageOverlaytext;

