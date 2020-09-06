import React from "react"
import { Link } from "react-router-dom"
import "./styles/Header.css"
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'



function Modal(props) {

    return (
        <Modal show={props.show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
          </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
          </Button>
            </Modal.Footer>
        </Modal>

    )
}

export default Modal
