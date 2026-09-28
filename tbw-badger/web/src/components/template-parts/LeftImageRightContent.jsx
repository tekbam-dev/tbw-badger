import DefaultTextContent from "./DefaultTextContent";
import { ImageElement,HeadingElement,SubHeadingElement,ParagraphElement, TextLinkButton } from "../ui/barrelUIImport";


function LeftImageRightContent({
  imageSrc,
  imageAlt,
  heading,
  subheading,
  copy,
  ctaText,
  ctaLink,
}) {
  return (
    <section className="content-section content-section-image-left">
      <ImageElement
        className="content-section-image"
        src={imageSrc}
        alt={imageAlt}
      />

<HeadingElement heading={heading} />
<SubHeadingElement subheading ={subheading} />
<ParagraphElement copy={copy} />
<TextLinkButton ctaText={ctaText} ctaLink={ctaLink} />
     
    </section>
  );
}

export default LeftImageRightContent;