import {MdLockOutline} from "react-icons/md";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link } from 'react-router-dom';

function IndexHouse() {
    return (
        <div>
            <Container >
                <Row className="justify-content-center">
                    <Card  hover style={{width: '18rem', margin: "10px",padding:"0px"}}>
                        <Card.Header>Puerta Principal</Card.Header>
                        <Card.Body>

                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card><Card style={{width: '18rem', margin: "10px"}}>

                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                    <Card style={{width: '18rem', margin: "10px"}}>

                        <Card.Body>
                            <Card.Title>Puerta principal</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                <MdLockOutline/>
                            </Card.Text>
                            <Button variant="primary" href="/doors">Ver más</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{width: '18rem', margin: "10px"}}>

                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{width: '18rem', margin: "10px"}}>

                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                </Row>
                <Link to="/add">
                    <Button>Add door</Button>
                </Link>

            </Container>
        </div>
    );
}

export default IndexHouse;