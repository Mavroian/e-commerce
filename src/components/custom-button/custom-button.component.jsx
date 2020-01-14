import React from "react"
import "./custom-button.styles.scss"

export const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => {
  return (
    <button className={`${inverted ? "inverted" : ""} custom-button`} {...otherProps}>
      {children}
    </button>
  )
}