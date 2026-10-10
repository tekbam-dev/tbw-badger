function TextInputField({ value, name, onChange, type = "text" }) {

    
    return(
        <>
        <input id={name} type={type} name={name} value={value} onChange={onChange} />
        </>
    )
}

export default TextInputField;
