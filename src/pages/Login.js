import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../Context"
import { Container, Row, Col, Button, Alert, Modal, Breadcrumb, Card, Form, Table } from 'react-bootstrap'

import "./styles/login.css"
function Login() {

    const { user, setUser } = useContext(Context)

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <>
            <div className="centered-form">
                <div className="centered-form__box">
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <label>Username</label>
                        <input onChange={e => setUser(e.target.value)} value={user} type="text" name="username" placeholder="Username" required />
                        <label>Password</label>
                        <input type="password" name="password" placeholder="Password" required />
                        <Link to="/group"><Button>Login</Button></Link>



                    </form>
                </div>
            </div>


        </>

    )
}

export default Login


