import useForm from "../../../hooks/useForm";
import {
  ButtonTypeSubmit,
  PasswordInputField,
  TextInputField,
} from "../../ui/barrelUIImport";
import "./signupForm.css";

function SignUpForm() {
  // These keys are the source of truth for the fields rendered below.
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    userName: "",
    password: "",
    reTypePassword: "",
    advertisementConsent: false,
  };

  const { values, handleChange } = useForm(initialState);

  function handleSubmit(event) {
    // Keep the browser on this page until a signup API is connected.
    event.preventDefault();
  }

  return (
    <section className="signup-card" aria-labelledby="signup-title">
      <div className="signup-card-heading">
        <span className="signup-eyebrow">GET STARTED</span>
        <h2 id="signup-title">Create your account</h2>
        <p>Sign up to start managing your store badges.</p>
      </div>

      <form className="signup-form" onSubmit={handleSubmit}>
        {Object.keys(initialState).map((fieldName) => {
          const normalizedName = fieldName.toLowerCase();

          if (normalizedName === "advertisementconsent") {
            return (
              <div className="signup-checkbox-field" key={fieldName}>
                <input
                  id={fieldName}
                  name={fieldName}
                  type="checkbox"
                  checked={values[fieldName]}
                  onChange={handleChange}
                />
                <label htmlFor={fieldName}>
                  I agree to receive promotional emails and updates.
                </label>
              </div>
            );
          }

          // Use browser input types suited to each kind of data. Phone numbers
          // use `tel` so users can enter + signs and leading zeroes.
          const inputTypeByName = {
            firstname: "text",
            lastname: "text",
            email: "email",
            phone: "tel",
            username: "text",
            password: "password",
            retypepassword: "password",
          };
          const inputType = inputTypeByName[normalizedName] ?? "text";
          const isPassword = inputType === "password";
          const InputField = isPassword ? PasswordInputField : TextInputField;
          const label = fieldName === "reTypePassword"
            ? "Re-type password"
            : fieldName
              .replace(/([A-Z])/g, " $1")
              .replace(/^./, (character) => character.toUpperCase());

          return (
            <div className="signup-field" key={fieldName}>
              <label htmlFor={fieldName}>{label}</label>
              <InputField
                name={fieldName}
                type={inputType}
                value={values[fieldName]}
                onChange={handleChange}
              />
            </div>
          );
        })}

        <ButtonTypeSubmit type="submit" value="Create account" />
        <p className="signup-note">Your account details stay private and secure.</p>
      </form>
    </section>
  );
}

export default SignUpForm;
