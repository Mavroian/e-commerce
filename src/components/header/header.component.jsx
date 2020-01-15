import React from "react"
import "./header.styles.scss"
import { Link } from "react-router-dom"
import { ReactComponent as Logo } from "../../assets/Brain-Light-Bulb.svg"
import { auth } from "../../firebase/firebase.utils"
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component"
import CartDropdown from "../cart-dropdown/cart-dropdown.component"
import { selectCurrentUser } from "../../redux/user/user.selectors"
import { selectCartHidden } from "../../redux/cart/cart.selectors"

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">Shop</Link>
        <Link className="option" to="/shop">Contact</Link>
        {
          currentUser ?
            <div className="option" onClick={() => auth.signOut()}>Sign Out</div>
            :
            <Link className="option" to="/signin">Sign In</Link>
        }
        <CartIcon />
        <div>
          {
            currentUser ?
              <div className="avatar-image"
                style={{ backgroundImage: `url(${currentUser.photoURL ? currentUser.photoURL : "https://freesvg.org/img/icon_user_whiteongrey.png"})` }} /> :
              null
          }
        </div>
      </div>
      {
        hidden ? null : <CartDropdown />
      }
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    currentUser: selectCurrentUser(state),
    hidden: selectCartHidden(state)
  }
}

export default connect(mapStateToProps)(Header)