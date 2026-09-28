import "./style.css";

function Card({ imageSrc, imageAlt, title, description }) {
  return (
    <article className="card-display">
      <img src={imageSrc} alt={imageAlt} />
      <div className="card-display-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

export default Card;
