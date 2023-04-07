import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import {useState} from "react";
import Login from "./Login";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
export default function NavbarComp(){
    const [show, setShow] = useState(false);
    const [logged,setLogged]=useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
<>
    <Navbar bg="dark" variant="dark">

        <Container>
            <Link to="/">
                <Button variant="dark">
                IoCasas
                </Button>
            </Link>




            <Nav className="me-auto">
                <Link to="booking">
                    <Button variant="dark" >Reservas</Button>
                </Link>
                <Link to="indexHouse">
                    <Button variant="dark">Mis puertas</Button>
                </Link>

            </Nav>
                <Nav className="d-flex">
                    {
                       logged ? (
                           <Nav.Link to="profile" >Usuario</Nav.Link>

                       ):(
                           <Nav.Link  onClick={handleShow}>Login</Nav.Link>)
                    }
                    <Modal show={show} onHide={handleClose}>
                        <Login/>
                    </Modal>



                </Nav>

        </Container>
    </Navbar>
    <br />

    </>

    )
}

