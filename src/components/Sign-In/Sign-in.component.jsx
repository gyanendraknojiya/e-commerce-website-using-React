import React from "react";

import "./Sign-in.style.scss";
import FormInput from "../form-input/form-input.component";
import Button from "../Button/Button.component";
import { auth, SignInWithGoogle } from "../../firebase/firebase";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    try {
      const { email, password } = this.state;
      auth.signInWithEmailAndPassword(email, password);

      this.setState({ email: "", password: "" });
    } catch (err) {
      console.log(err);
    }
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h1 className="title">I do not have an account</h1>
        <p>Sign In using Email and Password</p>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            label="Email"
            value={this.state.email}
            required
          />
          <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
            label="Password"
            value={this.state.password}
            required
          />
          <div className="button">
            <Button type="submit">Sign In</Button>
            <Button type='button' onClick={SignInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
