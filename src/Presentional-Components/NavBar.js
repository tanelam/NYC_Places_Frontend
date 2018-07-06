import React from "react"
import { Link } from "react-router-dom"

const NavBar = () => (
  <div className="ui secondary pointing massive menu">
    <Link className="active grey item" to={`/nycplaces/`}>
      NYC Places
    </Link>
  </div>
)

export default NavBar
