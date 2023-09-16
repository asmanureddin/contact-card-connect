import React from "react";
import { ReactDOM } from "react";
import { Container, FormLabel } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


import logoFooter from "../images/logo-footer-2.png"


const Footer = () => {

    return(
        <footer className="px-0 mx-0 gx-0 bx-0">
            <Container>
            <Row className="py-5">
                <Col className="col-12 col-md-6 py-2">
                <div className="text-start">
                    <Image src={logoFooter} width={100}/>
                </div>
                </Col>
                <Col className="py-2 col-md-6 col-12">
                <Form className="text-start" >
                    <Row >
                        <h6 className="py-1">Subscribe to our newsletter</h6>
                    </Row>
                    <Row>
                    <Col className="col-sm-6 col-12 py-1">
                    <input className="form-control " placeholder="youremail@email.com"/>
                    </Col>
                    <Col className="col-sm-4 py-1"><Button className="col-12">Subscribe</Button></Col>
                    </Row>
                </Form>
                </Col>
            </Row>
            <Row>
                <Col className="col-12 col-md-6">
                <Stack gap={2} className="text-start col-12 col-md-8" >
                    <h6>CONNECT MADE EASY!</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Cras elementum imperdiet imperdiet. Sed at aliquet dui. 
                    Nulla massa magna, accumsan sit amet quam nec, 
                    volutpat imperdiet lectus. 
                    Praesent posuere nisl mollis libero feugiat blandit.</p>
                </Stack>
                </Col>
                <Col className="col-md-2 py-2">
                <Stack gap={2} className="text-start">
                    <h6>NAVIGATE</h6>
                    <ul className="list-unstyled">
                        <li>Contacts</li>
                        <li>Find a contact</li>
                        <li>Report</li>
                        <li>Help</li>
                        <li>Resources</li>
                        <li>Terms of use</li>
                    </ul>
                </Stack>
                </Col>
                <Col className="col-md-2 py-2">
                <Stack gap={2} className="text-start">
                    <h6>ACCOUNT</h6>
                    <ul className="list-unstyled">
                        <li>Settings</li>
                        <li>My Profile</li>
                        <li>Create Account</li>
                        <li>Verify a Profile</li>
                        <li>Resources</li>
                    </ul>
                </Stack>
                </Col>
                <Col className="col-md-2 py-2">
                <Stack gap={2} className="text-start">
                    <h6>ABOUT US</h6>
                    <ul className="list-unstyled">
                        <li>Contact</li>
                        <li>Our Blog</li>
                        <li>Community</li>
                        <li>Customers</li>
                        <li>Partnerships</li>
                        <li>Our Policy</li>
                    </ul>
                </Stack>
                </Col>
            </Row>
        </Container>
        <Container className="px-0 mx-0 gx-0 bx-0">
            <Row>
            <div class=" py-4 bg-light ">
                <strong>© 2021 Copyright</strong>
            </div>
            </Row>
        </Container>
        </footer>
        
    )
}

export default Footer;



/*
<!-- Footer -->
<footer class="text-center text-lg-start bg-white text-muted">
  <!-- Section: Social media -->
  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <!-- Left -->
    <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    <!-- Left -->

    <!-- Right -->
    <div>
      <a href="" class="me-4 link-secondary">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="" class="me-4 link-secondary">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="" class="me-4 link-secondary">
        <i class="fab fa-google"></i>
      </a>
      <a href="" class="me-4 link-secondary">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="" class="me-4 link-secondary">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="" class="me-4 link-secondary">
        <i class="fab fa-github"></i>
      </a>
    </div>
    <!-- Right -->
  </section>
  <!-- Section: Social media -->

  <!-- Section: Links  -->
  <section class="">
    <div class="container text-center text-md-start mt-5">
      <!-- Grid row -->
      <div class="row mt-3">
        <!-- Grid column -->
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <!-- Content -->
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3 text-secondary"></i>Company name
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" class="text-reset">Angular</a>
          </p>
          <p>
            <a href="#!" class="text-reset">React</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Vue</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Laravel</a>
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" class="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Help</a>
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i class="fas fa-home me-3 text-secondary"></i> New York, NY 10012, US</p>
          <p>
            <i class="fas fa-envelope me-3 text-secondary"></i>
            info@example.com
          </p>
          <p><i class="fas fa-phone me-3 text-secondary"></i> + 01 234 567 88</p>
          <p><i class="fas fa-print me-3 text-secondary"></i> + 01 234 567 89</p>
        </div>
        <!-- Grid column -->
      </div>
      <!-- Grid row -->
    </div>
  </section>
  <!-- Section: Links  -->

  <!-- Copyright -->
  <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.025);">
    © 2021 Copyright:
    <a class="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
  <!-- Copyright -->
</footer>
<!-- Footer -->

*/