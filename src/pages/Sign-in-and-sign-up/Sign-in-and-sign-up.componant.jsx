import React from "react";

import "./Sign-in-and-sign-up.style.scss";
import SignIn from '../../components/Sign-In/Sign-in.component';
import SignUp from '../../components/Sign-up/sign-up.componant'

function SignInAndSignUp() {
  return (
    <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
    </div>
  );
}

export default SignInAndSignUp;
