import useForm from "../../hooks/useForm";
import {
  ButtonTypeSubmit,
  PasswordInputField,
  TextInputField,
} from "../ui/barrelUIImport";
import "./signinForm.css";


function SignUpForm() {
  const initialValues = {
    username: "",
    password: "",
  };

  const { values, handleChange } = useForm(initialValues);

  function handleSubmit(event) {
    // Prevent a full page refresh while the signup endpoint is not connected.
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
        <div className="signup-field">
          <label htmlFor="username">Username</label>
          <TextInputField
            name="username"
            value={values.username}
            onChange={handleChange}
          />
        </div>

        <div className="signup-field">
          <label htmlFor="password">Password</label>
          <PasswordInputField
            name="password"
            value={values.password}
            onChange={handleChange}
          />
        </div>

        <ButtonTypeSubmit type="submit" value="Create account" />
        <p className="signup-note">Your account details stay private and secure.</p>
      </form>
    </section>
  );
}


export default SignUpForm;
