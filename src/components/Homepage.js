import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

import heroImage2 from "../images/89191cover2.jpg"


const Homepage = ()=> {
    return (
        <Container>
            <Row>
                <Col className="col-sm-6" >
                <Stack gap={4} className="text-start p-5">
                    <div > 
                        <h1 className="display-1">ALL in ONE</h1>
                        <h4 className="display-4"> and ONE for all.</h4>
                    </div>
                    <div>
                        <p className="lead">Create your digital contact card and share it with others in one click!</p>
                    </div>
                    <ButtonToolbar aria-label="Toolbar with button groups">
                        <ButtonGroup className="me-2" aria-label="First group">
                            <Button>Create</Button>{' '}
                        </ButtonGroup>
                        <ButtonGroup className="me-2" aria-label="Second group">
                            <Button>Find Someone</Button> 
                        </ButtonGroup>
                    </ButtonToolbar>
                </Stack>
                </Col>
                <Col className="col-sm-6">
                <Image src={heroImage2} className="image-fluid" width={360}/>
                </Col>
            </Row>

        </Container>
    )
}

export default Homepage;