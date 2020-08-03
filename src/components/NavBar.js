import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
    <Link className="navbar-brand" to="/">Wilden Restaurant</Link>
  </nav>
)

export default NavBar