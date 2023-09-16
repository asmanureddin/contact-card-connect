import React from "react";
import ReactDom from 'react-dom'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure';
import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward , faStar, faArrowRightLong, faUserPlus, 
    faUserGroup, faFile, faFileLines, faGlobe,  } from '@fortawesome/free-solid-svg-icons'

import { faFacebook, faLinkedin, faGithub, faInstagram, faBehance, 
    faWordpress, faSkype, faStackOverflow} from '@fortawesome/free-brands-svg-icons';
import userAvatar from "../images/user-profile-avatar.png"
import ProfileOptional from "./ProfileOptional";


const iconStar = <FontAwesomeIcon icon={faStar} />
const iconAward = <FontAwesomeIcon icon={faAward} />
const iconArrow = <FontAwesomeIcon icon={faArrowRightLong} />
const iconFriendPlus = <FontAwesomeIcon icon={faUserPlus} />
const iconUserGroup = <FontAwesomeIcon icon={faUserGroup} />
const iconPortfolio = <FontAwesomeIcon icon={faFile} size="2xl"/>
const iconResume = <FontAwesomeIcon icon={faFileLines} size="2xl"/>
const iconGlobe = <FontAwesomeIcon icon={faGlobe} size="2xl"/>
const iconLinkedin = <FontAwesomeIcon icon={faLinkedin} size="2xl"/>
const iconFacebook = <FontAwesomeIcon icon={faFacebook} size="2xl" />
const iconGithub = <FontAwesomeIcon icon={faGithub} size="2xl"/>
const iconInstagram = <FontAwesomeIcon icon={faInstagram} size="2xl"/>
const iconBehance = <FontAwesomeIcon icon={faBehance} size="2xl" />
const iconWordpress = <FontAwesomeIcon icon={faWordpress} size="2xl"/>
const iconSkype = <FontAwesomeIcon icon={faSkype} size="2xl"/>
const iconStackOverflow = <FontAwesomeIcon icon={faStackOverflow} size="2xl"/>

const ProfileMain = () => {

    // function to control the tooltip of profile actions
    // first favorite action
    const friendActionTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Add contact
        </Tooltip>
    );

    //second appreciate {full name} action
    const appreciateActionTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Award this user
        </Tooltip>
    )


    return(
        <Container className="bg-light py-2 p-3">
            <Row className="py-4">
                <Col className="text-end" md={{ span: 2, offset: 10 }} xs={{ span:4, offset: 8}}>
                    <Stack gap={2} direction="horizontal">
                        <OverlayTrigger placement="top"
                        delay={{show: 250, hide: 400}}
                        overlay={friendActionTooltip}>
                            <Button variant="outline-secondary">{iconFriendPlus}</Button>
                        </OverlayTrigger>
                        <OverlayTrigger placement="top"
                        delay={{show: 250, hide: 400}}
                        overlay={appreciateActionTooltip}>
                            <Button variant="outline-secondary">{iconAward}</Button>
                        </OverlayTrigger>
                    </Stack>
                </Col>
            </Row>
            <Row>
                <Col className="col-sm-2 col-12">
                    <Figure >
                        <Figure.Image src={userAvatar}
                        rounded className="image-fluid" width={200}/>
                    </Figure>
                </Col>

                <Col className="col-sm-10 col-12">
                <Stack className="text-start">
                    <h2>First Name, Last Name</h2>
                    <h4 className="lead"> Headline</h4>
                    <h6>Position</h6>
                    <h6>Company Name</h6>
                    <h6>City, Country</h6>
                </Stack>
                </Col>
            </Row>
            <Row>
                <Col className=" col-12 col-sm-2 ">
                    <Stack direction="horizontal" gap={4}>
                        <Stack direction="horizontal" gap={2}>
                            <p>{iconUserGroup}</p>
                            <p className="lead">2784</p>
                        </Stack>
                        <Stack direction="horizontal" gap={2}>
                            <p>{iconAward}</p>
                            <p className="lead">26</p>
                        </Stack>
                    </Stack>
                </Col>
                <Col className="text-start col-12  col-sm-10 ">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Cras elementum imperdiet imperdiet. Sed at aliquet dui. 
                    Nulla massa magna, accumsan sit amet quam nec, 
                    Proin a sapien enim.</p>
                </Col>
                
            </Row>
            <Row className="py-2">
                <Col className="col-12 col-sm-2">
                </Col>
                <Col className="col-12 col-sm-10">
                <ButtonToolbar className="" aria-label="Toolbar with button groups">
                    <ButtonGroup className="me-1  col-2 " aria-label="First group">
                        <Button>Call</Button>
                    </ButtonGroup>
                    <ButtonGroup className="me-1  col-4 " aria-label="Second group">
                        <Button>Message</Button>
                    </ButtonGroup>
                    <ButtonGroup className="me-1  col-4" aria-label="Third group">
                        <Button>Email</Button>
                    </ButtonGroup>
                    <ButtonGroup className="me-1 col-1 " aria-label="Third group">
                        <Button>{iconStar}</Button>
                    </ButtonGroup>
                </ButtonToolbar>
                </Col>
            </Row>
            <Row>
                <Col className="col-12 col-sm-2">
                </Col>
                <Col className="col-12 col-sm-10">
                    <ButtonToolbar>
                        <Button variant="outline-secondary" className="col-6">Edit Profile</Button>
                        <Button variant="link" data-bs-theme="light" className="col-5">Profile Settings</Button>
                    </ButtonToolbar>
                    
                </Col>
                <Col className="col-4 col-sm-4">
                    
                </Col>
            </Row>
            <Row className="py-4">
                <Col className="col-sm-2 col-12">
                    <h6 className="py-2">GET IN TOUCH</h6>
                </Col>
                <Col className="col-12 col-sm-10">
                    <Row gap={4} className="col-12 col-sm-12">
                        <Col>
                            <Button variant="light">{iconPortfolio}</Button>
                            <p>Portfolio</p>
                        </Col>
                        <Col>
                            <Button variant="light">{iconResume}</Button>
                            <p>Resume</p>
                        </Col>
                        <Col>
                            <Button variant="light">{iconGlobe}</Button>
                            <p>Website</p>
                        </Col>
                        <Col>
                            <Button variant="light">{iconLinkedin}</Button>
                            <p>Linkedin</p>
                        </Col>
                        <Col>
                            <Button variant="light">{iconGithub}</Button>
                            <p>Github</p>
                        </Col>
                        <Col>
                            <Button variant="light">{iconFacebook}</Button>
                            <p>Facebook</p>
                        </Col>
                        <Col>
                            <Button variant="light">{iconInstagram}</Button>
                            <p>Instagram</p>
                        </Col>
                        <Col>
                            <Button variant="light">{iconSkype}</Button>
                            <p>Skype</p>
                        </Col>
                        <Col>
                            <Button variant="light">{iconBehance}</Button>
                            <p>Behance</p>
                        </Col>
                        <Col>
                            <Button variant="light">{iconWordpress}</Button>
                            <p>Wordpress</p>
                        </Col>
                        <Col>
                            <Button variant="light">{iconStackOverflow}</Button>
                            <p>StackOverflow</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <ProfileOptional/>
            </Row>
        </Container>
    )
}

export default ProfileMain;