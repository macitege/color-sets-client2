import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const authenticatedOptions = (
  <React.Fragment>
    <Link to="/dashboard">Saved Palettes</Link>
    <Link to="/change-password">Change Password</Link>
    <Link to="/sign-out">Sign Out</Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-in">Sign In</Link>
    <Link to="/sign-up">Sign Up</Link>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    <Link to="/">Home</Link>
  </React.Fragment>
)

const Header = ({ user }) => (
  <header className="main-header">
    <h2>Rainbow&#39;s B.F.F.</h2>&nbsp;&nbsp;<p> ⨳ 𝕔𝕠𝕝𝕠𝕣𝕤</p>
    <nav>
      { user && <span>Welcome, {user.email}</span>}
      { alwaysOptions }
      { user ? authenticatedOptions : unauthenticatedOptions }
    </nav>
  </header>
)

export default Header
