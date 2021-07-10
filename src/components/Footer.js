import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <Container className="p-4">
        <Row>
          <Col lg={2} md={2} className="hours">
            <h5 className="text-uppercase">Opening Hours</h5>

            <p>10am to 10pm - Monday to Saturday</p>
            <p>12pm to 8pm - Sunday</p>
          </Col>
          <Col lg={2} md={2} className="contact">
            <h5 className="text-uppercase">Contact Us</h5>
            <p>swally@gmail.com</p>
            <p>0141 553 3467</p>
            <p>89 Gin Lane, G1 9BG Glasgow</p>
          </Col>

          <Col lg={2} md={22} className="follow">
            <h5 className="text-uppercase">Follow Us</h5>
            <div>
              <a href={"https://www.facebook.com/citycentrecomics"}>
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
            <div>
              <a href={"https://twitter.com/citycentrecomic"}>
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </Col>
        </Row>
        <div className="copyright">Copyright &copy; Swally </div>
      </Container>
    </footer>
  );
};

export default Footer;
