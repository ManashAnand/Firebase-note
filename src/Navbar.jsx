import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navbarCss = {
        display: "flex",
        flexDirection:"row-reverse",
        gap: 10+"px",
        width:100+"%",
        border: "2px solid brown",
        backgroundColor: "brown",
        padding: "10px",
        justifyContent: "space-around",
        color: "white"

    }
  return (
    <>
        <div style={navbarCss}>
            <h4>
            <Link to="/">

            Auth
            </Link>
            </h4>
            <h4>
            <Link to="/firestore">

            FireStore
            </Link>
            </h4>
            <h4>
            <Link to="/storage">

            Storage
            </Link>
            </h4>
        </div>

    </>
  )
}

export default Navbar;
