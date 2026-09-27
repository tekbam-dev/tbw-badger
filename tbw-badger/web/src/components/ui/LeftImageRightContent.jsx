import DefaultTextContent from "./DefaultTextContent";

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
      <img
        className="content-section-image"
        src={imageSrc}
        alt={imageAlt}
      />

      <DefaultTextContent
        heading={heading}
        subheading={subheading}
        copy={copy}
        ctaText={ctaText}
        ctaLink={ctaLink}
      />
    </section>
  );
}

export default LeftImageRightContent;