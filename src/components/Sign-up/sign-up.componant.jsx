import React from "react";

import "./sign-up.style.scss";
import { auth, createUserProfile } from "../../firebase/firebase";
import FormInput from "../form-input/form-input.component";
import Button from "../Button/Button.component";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("password not matched");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfile(user, {name});

      this.setState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name] : value });
  };
  render() {
    const { name, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h1 className='title'>I do not have an account</h1>
        <p>Sign In using Email and Password</p>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name='name'
            value={name}
            label="Name"
            onChange={this.handleChange}
            required
          />
          <FormInput
            type="email"
            name='email'
            value={email}
            label="Email"
            onChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name='password'
            value={password}
            label="Password"
            onChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name='confirmPassword'
            value={confirmPassword}
            label="Confirm Password"
            onChange={this.handleChange}
            required
          />
          <Button type="submit">SIGN UP</Button>
        </form>
      </div>
    );
  }
}

export default SignUp;