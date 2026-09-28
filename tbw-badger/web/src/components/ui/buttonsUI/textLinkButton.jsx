function TextLinkButton({ctalink,ctatext}){
    return(
        <>
       <a className="button button-primary" href={ctalink}>
              {ctatext}
            </a>
        </>
    );

   
}

export default TextLinkButton;