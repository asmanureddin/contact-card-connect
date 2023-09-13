import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure';
import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';



import userAvatar from "../images/user-profile-avatar.png"

const Profile = () => {

    // function to control the tooltip of profile actions
    const favoriteActionTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Favorite
        </Tooltip>
    );

    return(
        <Container className="m-6">
            <Row>
                <Col>
                <Figure>
                    <Figure.Image
                    src={userAvatar}
                    rounded
                    width={240}/>
                </Figure>
                </Col>

                <Col>
                <Stack className="text-start">
                    <h2>Full Name</h2>
                    <h4> Headline</h4>
                    <h6>Position</h6>
                    <h6>Company Name</h6>
                    <h6>City, Country</h6>
                </Stack>
                </Col>

                <Col>
                <OverlayTrigger placement="left"
                delay={{ show: 250, hide: 400 }}
                overlay={favoriteActionTooltip}>
                    <Button variant="primary">Fav</Button>
                </OverlayTrigger>
                </Col>
            </Row>
        </Container>
    )
}

export default Profile;