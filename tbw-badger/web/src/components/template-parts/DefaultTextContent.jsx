function DefaultTextContent({
  heading,
  subheading,
  copy,
  ctaText,
  ctaLink = "#",
}) {
  return (
    <div className="text-content">
      {subheading && <p className="eyebrow">{subheading}</p>}

      <h2>{heading}</h2>

      <p className="text-content-copy">{copy}</p>

      {ctaText && (
        <a className="button button-primary" href={ctaLink}>
          {ctaText}
        </a>
      )}
    </div>
  );
}

export default DefaultTextContent;