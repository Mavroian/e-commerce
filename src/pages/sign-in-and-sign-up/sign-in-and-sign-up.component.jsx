import React, { Component } from "react"
import "./sign-in-and-sign-up.styles.scss"
import SignIn from "../../components/sign-in/sign-in.component"
import SignUp from "../../components/sign-up/sign-up.component"

class SignInAndSignUpPage extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
      </div>
    )
  }
}

export default SignInAndSignUpPage