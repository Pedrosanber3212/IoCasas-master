import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Card} from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export default function Login(){
    return(
    <div className="App">
        <Form style={{margin:"10px"}}>
        <Container>



                <Row className="justify-content-center">
                    <Col xs={6}>
                    <Form.Group  className="mb-4" >
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control type="email" placeholder="Nombre de usuario" />
                    </Form.Group>
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col xs={6}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" />
                </Form.Group>
                    </Col>
                </Row>
            <Row>
                <Col>
                    <Button variant="primary" type="submit">
                        Aceptar
                    </Button>
                    <Card.Body>
                        <Card.Link href="/register">Registrarse</Card.Link>
                    </Card.Body>
                </Col>

            </Row>




    </Container>
        </Form>
    </div>
        );

}
