import React, { useState, useContext } from "react"
import { Container, Row, Col, Button, Alert, Modal, Breadcrumb, Card, Form, Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Context } from "../Context"

function Group() {

    const { user } = useContext(Context)



    function enterGroupchat() {
        window.open(`https://pan-pals-chat.herokuapp.com/?username=${user}`);
    }

    return (
        <div className="page-body">
            <Container>
                <h1>Weekly Group Chats</h1>
                <br></br>
                <br></br>
                <Row>
                    <Col>

                        <Table size="sm" bordered hover>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Duration</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody styles={{ textAlign: "center" }}>
                                <tr>
                                    <td>Aug 16th 2020</td>
                                    <td>6pm EST</td>
                                    <td>1 hr</td>
                                    <td><Alert variant="success">Attended</Alert></td>
                                </tr>
                                <tr>
                                    <td>Aug 23th 2020</td>
                                    <td>6pm EST</td>
                                    <td>1 hr</td>
                                    <td><Alert variant="success">Attended</Alert></td>
                                </tr>
                                <tr>
                                    <td>Aug 30th 2020</td>
                                    <td>6pm EST</td>
                                    <td>1 hr</td>
                                    <td><Alert variant="danger">Missed</Alert></td>
                                </tr>
                                <tr>
                                    <td>Sept 6th 2020</td>
                                    <td>6pm EST</td>
                                    <td>1 hr</td>
                                    <td><Button onClick={enterGroupchat} variant="primary">Join Group Chat</Button></td>
                                </tr>
                                <tr>
                                    <td>Sept 13th 2020</td>
                                    <td>6pm EST</td>
                                    <td>1 hr</td>
                                    <td><Alert variant="secondary">Upcoming</Alert></td>
                                </tr>

                            </tbody>
                        </Table>
                    </Col>


                </Row>

            </Container>

        </div>
    )
}

export default Group