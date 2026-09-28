import { ImageElement,HeadingElement,ParagraphElement, SubHeadingElement } from "../ui/barrelUIImport";

function Card({ imageSrc, imageAlt, title, description }) {
  return (
    <article className="card-display">
      
        
      <ImageElement src={imageSrc} alt={imageAlt} />

      <div className="card-display-content">
        <SubHeadingElement props ={{title}} />
        <ParagraphElement props ={{description}} />
  
      </div>

  
  
    </article>
  );
}

export default Card;