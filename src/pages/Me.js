import React, { useState, useContext } from "react"
import { Container, Row, Col, Button, Alert, Modal, Breadcrumb, Card, Form, Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Context } from "../Context"

import "./styles/general.css"

function Me() {

    const [score, setScore] = useState(1)
    const [show, setShow] = useState(false);
    const { user } = useContext(Context)
    const [btn, setBtn] = useState(<td><Button onClick={handleClick} variant="outline-danger" block>Metformin 500 mg - dose 2</Button></td>)
    const [btn2, setBtn2] = useState(<td><Button onClick={handleClick2} variant="outline-danger" block>Lotensin 10 mg</Button></td>)
    const [btn3, setBtn3] = useState(<td><Button onClick={handleClick3} variant="outline-danger" block>Lipitor 20mg</Button></td>)


    const handleClose = () => {
        setShow(false)
        setScore(0)

    };

    const handleShow = () => setShow(true);
    function enterRaffle() {
        handleShow()
    }

    function enterGroupchat() {
        window.open(`http://localhost:5000/?username=${user}`);
        setScore(prev => prev + 1)
    }

    function handleClick(e) {
        e.target.style = { color: "black" }
        console.log(e.target.style);
        setBtn(<td><Button variant="outline-success" block>Metformin 500 mg - dose 2</Button></td>)
        setScore(prev => prev + 1)
    }
    function handleClick2(e) {
        e.target.style = { color: "black" }
        console.log(e.target.style);
        setBtn2(<td><Button variant="outline-success" block>Lotensin 10 mg</Button></td>)
        setScore(prev => prev + 1)
    }
    function handleClick3(e) {
        e.target.style = { color: "black" }
        console.log(e.target.style);
        setBtn3(<td><Button variant="outline-success" block>Lipitor 20mg</Button></td>)
        setScore(prev => prev + 1)
    }



    return (
        <>
            <div id="profile-welcome">
                <h1>Welcome {user}!</h1>
            </div>
            <div className="score">
                <h3>Score: {score}</h3>
                <Button onClick={enterRaffle} variant="success" style={{ marginLeft: "50px" }} >Enter Raffle</Button>


            </div>

            <div className="page-body">
                <Container>

                    <br></br>
                    <br></br>
                    <Row>

                        <Table size="sm" bordered hover>
                            <thead>
                                <tr>
                                    <th><h2>Daily Prescription</h2></th>

                                </tr>
                            </thead>
                            <tbody styles={{ textAlign: "center" }}>
                                <tr>

                                    <td><Button variant="outline-success" block>Metformin 500 mg - dose 1</Button></td>
                                </tr>
                                <tr>
                                    {btn}

                                    {/* <td><Button variant="outline-success" block>Metformin 500 mg - dose 2</Button></td> */}
                                </tr>
                                <tr>
                                    {btn2}
                                    {/* <td><Button onClick={handleClick} variant="outline-danger" block>Lotensin 10 mg</Button></td> */}
                                </tr>
                                <tr>
                                    {btn3}
                                    {/* <td><Button variant="outline-success" block>Lipitor 20mg</Button></td> */}

                                </tr>

                            </tbody>
                        </Table>


                    </Row>


                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Woohoo, you've entered {score} tickets into the raffle</Modal.Title>
                        </Modal.Header>

                    </Modal>
                </Container>

            </div>
        </>
    )
}

export default Me