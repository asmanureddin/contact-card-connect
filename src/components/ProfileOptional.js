import React from "react";
import { ReactDOM } from "react";
import cardImagePlaceHolder from "../images/imagesHolder.png";
import userTinyImage from "../images/user-tiny.png"

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from "react-bootstrap/Button";
import { Stack } from "react-bootstrap";
import Image from "react-bootstrap/Image"
import NavLink from "react-bootstrap/NavLink"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette, faPersonSnowboarding, faLandmark } from "@fortawesome/free-solid-svg-icons";



const iconPalette = <FontAwesomeIcon icon={faPalette} />
const iconSkii = <FontAwesomeIcon icon={faPersonSnowboarding} />
const iconLandmark = <FontAwesomeIcon icon={faLandmark} />

const ProfileOptional = () => {
    return(
        <Container>
            <Row>
                <Col className="col-sm-2 col-12">
                    <h6 className="py-2">FEATURED</h6>
                </Col>
            </Row>
            <Row>
                <CardGroup className="col-12" >
                    <Card className="col-12 col-sm-12">
                        <Card.Img variant="top" src={cardImagePlaceHolder}/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>lorem ipsum.....</Card.Text>
                            <Button>View More</Button>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">muted card footer</small>
                        </Card.Footer>
                    </Card>
                    <Card className="col-12 col-sm-12">
                        <Card.Img variant="top" src={cardImagePlaceHolder}/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>lorem ipsum.....</Card.Text>
                            <Button>View More</Button>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">muted card footer</small>
                        </Card.Footer>
                    </Card>
                    <Card className="col-12 col-sm-12">
                        <Card.Img variant="top" src={cardImagePlaceHolder}/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>lorem ipsum.....</Card.Text>
                            <Button>View More</Button>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">muted card footer</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </Row>
            <Row className="py-4">
                <Col className="col-12 col-sm-6 text-start">
                    <Row>
                        <Col className=""><h6 className="py-2">WORK COMMUNITY</h6></Col>
                        <Col className="text-end"><Button variant="link">view all</Button></Col>
                    </Row>
                    <Container>
                        <Row className="text-start">
                            <Col className="col-2"><Image src={userTinyImage} width={40} roundedCircle/></Col>
                            <Col className="col-6 text-start">
                            <div className="text-start">
                                <strong>Friend's Name</strong>
                                <p>Friend's headline</p>
                            </div>
                            </Col>
                            <Col className=" col-4 text-end"><small>currently</small></Col>
                        </Row>
                        <Row className="text-start">
                            <Col className="col-2"><Image src={userTinyImage} width={40} roundedCircle/></Col>
                            <Col className="col-6 text-start">
                            <div className="text-start">
                                <strong>Friend's Name</strong>
                                <p>Friend's headline</p>
                            </div>
                            </Col>
                            <Col className=" col-4 text-end"><small>currently</small></Col>
                        </Row>
                        <Row className="text-start">
                            <Col className="col-2"><Image src={userTinyImage} width={40} roundedCircle/></Col>
                            <Col className="col-6 text-start">
                            <div className="text-start">
                                <strong>Friend's Name</strong>
                                <p>Friend's headline</p>
                            </div>
                            </Col>
                            <Col className=" col-4 text-end"><small>currently</small></Col>
                        </Row>
                    </Container>
                </Col>
                <Col className="col-sm-2"></Col>
                <Col className="col-12 col-sm-4 text-end">
                    <Row>
                        <Col className="text-start"><h6 className="py-2">INTERESTS</h6></Col>
                        <Col className="text-end"><Button variant="link">view all</Button></Col>
                    </Row>
                    <Container>
                        <Row className="text-start">
                            <Col className="col-1"><p>{iconPalette}</p></Col>
                            <Col className="col-10">
                                <div className="text-start">
                                    <p>Painting</p>
                                </div>
                            </Col>
                        </Row>
                        <Row className="text-start">
                            <Col className="col-1"><p>{iconSkii}</p></Col>
                            <Col className="col-10">
                                <div className="text-start">
                                    <p>Snow Boarding</p>
                                </div>
                            </Col>
                        </Row>
                        <Row className="text-start">
                            <Col className="col-1"><p>{iconLandmark}</p></Col>
                            <Col className="col-10">
                                <div className="text-start">
                                    <p>History</p>
                                </div>
                            </Col>
                        </Row>
                        <Row className="text-start">
                            <Col className="col-1"><p>{iconSkii}</p></Col>
                            <Col className="col-10">
                                <div className="text-start">
                                    <p>Snow Boarding</p>
                                </div>
                            </Col>
                        </Row>
                        
                    </Container>

                </Col>
            </Row>
        </Container>
    )
}

export default ProfileOptional;