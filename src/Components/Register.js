import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import {Card} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function Register(){
    /**
     const [formValues, setFormValues] = useState({
    username: "",
    password: "",
    email: "",
  });

     const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("User registered successfully", data);
      })
      .catch((error) => {
        console.error("Error registering user", error);
      });
  };

     const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

     return (
     <div>
     <div className="App">
     <form style={{ margin: "100px" }} onSubmit={handleSubmit}>
     <Container>
     <Card border="light">
     <Row className="justify-content-center">
     <Col xs={6}>
     <Form.Group className="mb-4">
     <Form.Label>Nombre de usuario</Form.Label>
     <Form.Control
     type="text"
     name="username"
     value={formValues.username}
     onChange={handleChange}
     placeholder="Nombre de usuario"
     />
     </Form.Group>
     </Col>
     </Row>

     <Row className="justify-content-center">
     <Col xs={6}>
     <Form.Group className="mb-3" controlId="formBasicPassword">
     <Form.Label>Contraseña</Form.Label>
     <Form.Control
     type="password"
     name="password"
     value={formValues.password}
     onChange={handleChange}
     placeholder="Contraseña"
     />
     </Form.Group>
     </Col>
     </Row>

     <Row className="justify-content-center">
     <Col xs={6}>
     <Form.Group className="mb-4">
     <Form.Label>Correo electrónico</Form.Label>
     <Form.Control
     type="email"
     name="email"
     value={formValues.email}
     onChange={handleChange}
     placeholder="Correo electrónico"
     />
     </Form.Group>
     </Col>
     </Row>

     <Row>
     <Col>
     <Button href="/">Volver</Button>
     <Button type="submit">Aceptar</Button>
     </Col>
     </Row>
     </Card>
     </Container>
     </form>
     </div>
     </div>
     );
     }
     */
    return(
        <div>
            <div className="App">
                <Form style={{ margin: "100px" }} >
                <Container>

                        <Card border="light">
                            <Row className="justify-content-center">
                                <Col xs={6}>
                                    <Form.Group  className="mb-4" >
                                        <Form.Label>Nombre de usuario</Form.Label>
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
                                <Row className="justify-content-center">
                                    <Col xs={6}>
                                        <Form.Group  className="mb-4" >
                                            <Form.Label>Correo electrónico</Form.Label>
                                            <Form.Control type="email" placeholder="Nombre de usuario" />
                                        </Form.Group>
                                    </Col>
                                </Row>
<Row>
    <Col><Button href="/">Volver</Button>
        <Button type="submit">Aceptar</Button>

    </Col>

</Row>

                            </Row>



                        </Card>

                    </Container>
                </Form>
            </div>
        </div>
    )
}
