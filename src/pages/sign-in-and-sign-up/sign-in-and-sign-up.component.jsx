import React, { Component } from "react"
import "./sign-in-and-sign-up.styles.scss"
import SignIn from "../../components/sign-in/sign-in.component"

class SignInAndSignUpPage extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="sign-in-and-sign-up">
        <SignIn />
      </div>
    )
  }
}

export default SignInAndSignUpPage