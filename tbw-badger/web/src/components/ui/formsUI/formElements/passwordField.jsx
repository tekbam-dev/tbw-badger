function PasswordInputField({ name, value, onChange }) {
    return(
        <>
        <input id={name} type="password" name={name} value={value} onChange={onChange} />
        </>
    );
}

export default PasswordInputField;
