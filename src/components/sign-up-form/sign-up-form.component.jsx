import { useState } from 'react';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={() => {}}>
        <label htmlFor="">Display Name</label>
        <input
          required
          type="text"
          name="displayName"
          id="displayName"
          value={displayName}
          onChange={handleChange}
        />
        <label htmlFor="email" value={email}>
          Email
        </label>
        <input
          required
          type="email"
          name="email"
          value={email}
          id="email"
          onChange={handleChange}
        />
        <label htmlFor="">Password</label>
        <input
          required
          type="password"
          name="password"
          value={password}
          id="password"
          onChange={handleChange}
        />
        <label htmlFor="">Confirm Password</label>
        <input
          required
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          id="confirmPassword"
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
