import React from "react"
import { Link } from "react-router-dom"
import "./styles/Header.css"
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'



function Header(props) {

    return (
        <Navbar bg="light" variant="light">
            <Link to="/"><h3>PanPals</h3></Link>
            <Nav className="ml-auto">

                <Link to="me">My Profile</Link>
                <Link to="group">My Group</Link>
                <Link to="doctor">My Physician</Link>
            </Nav>

        </Navbar>

    )
}

export default Header
