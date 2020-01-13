import React, { Component } from "react";
import "./sign-up.styles.scss"
import { FormInput } from "../form-input/form-input.component"
import { CustomButton } from "../custom-button/custom-button.component"
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils"
import { NotificationContainer } from 'react-notifications';
import createNotification from "../../notification-messages/notifications.-messages"

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  }
  clearFields = () => {
    this.setState({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    })
  }
  handleSubmit = async (e) => {
    e.preventDefault()
    const { displayName, email, password, confirmPassword } = this.state

    if (password !== confirmPassword) {
      createNotification('warning', " Passwords do not match please try again! ")
      this.clearFields()
      return
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)
      await createUserProfileDocument(user, { displayName })
      this.clearFields()
      createNotification('success', "You have Succsesfully Signed UP!")
    } catch (error) {
      createNotification('error', " ", error)
    }
    this.clearFields()
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  render() {
    const { displayName, email, password, confirmPassword } = this.state
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign Up with your Email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="display name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="confirm password"
            required
          />
          <CustomButton tupe="submit">
            SIGN UP
          </CustomButton>
        </form>
        <NotificationContainer />
      </div>
    )
  }
}

export default SignUp