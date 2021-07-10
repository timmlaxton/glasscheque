import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Carousel, Form, Button } from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Product from "../components/Product";
import "../components/Cards.css";
import { listProducts } from "../actions/productActions";
import "./HomeScreen.css";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeScreen = () => {
  const [status, setStatus] = useState("Subscribe");

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { email } = e.target.elements;
    let details = {
      email: email.value,
    };
    let baseUrl =
      process.env.NODE_ENV === "development" ? "" : window.location.origin;
    let response = await fetch(`${baseUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  AOS.init();

  return (
    <>
      {/* <Jumbotron>
				<div className="jumbotron-address">
					<p>Pivo</p>
					<p>157 Great Western Road</p>
					<p>Glasgow</p>
					<p> G20 4BE </p>
				</div>
				<div className="jumbotron-hours">
					Hours <p>Sun: 12 - 8 </p>
					<p>Mon: 11- 9 </p>
					<p>Tue: 11- 9 </p>
					<p>Wed: 11- 9</p>
					<p>Thr: 11- 9 </p>
					<p>Fr: 11- 9 </p>
					<p>Sat: 11- 9 </p>{' '}
				</div>
			</Jumbotron> */}
      <div className="background">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://wakeupwithzest.com/wp-content/uploads/2018/04/website-images-800-x-400-px-2.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://wakeupwithzest.com/wp-content/uploads/2018/04/website-images-800-x-400-px-2.png"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://wakeupwithzest.com/wp-content/uploads/2018/04/website-images-800-x-400-px-2.png"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="delivery-discount">
          <h1>FREE LOCAL DELIVERY*</h1>
          <h3> On Orders over £60</h3>
        </div>
      </div>

      <h1 className="beer-title">
        <Link to="/beer">Beers</Link>
      </h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row className="cards__item">
          {products
            .filter((product) => product.category === "beer")
            .map((product) => (
              <Col data-aos="fade-up" key={product._id} sm={3}>
                <Product product={product} />
              </Col>
            ))}
        </Row>
      )}
      <h1>
        <Link to="/spirits">Spirits</Link>
      </h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row className="cards__item">
          {products
            .filter((product) => product.category === "gin")
            .map((product) => (
              <Col data-aos="fade-right" key={product._id} sm={3}>
                <Product product={product} />
              </Col>
            ))}
        </Row>
      )}
      <h1>
        <Link to="/whiskey">Whiskey</Link>
      </h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row className="cards__item">
          {products
            .filter((product) => product.category === "whiskey")
            .map((product) => (
              <Col data-aos="fade-left" key={product._id} sm={3}>
                <Product product={product} />
              </Col>
            ))}
        </Row>
      )}

      <div className="newsletter">
        <Row>
          <Col md={6} className="mx-auto">
            <Form className="newsletter-form" onSubmit={handleSubmit}>
              <Form.Group className="form">
                <Form.Label
                  className="newsletter-label"
                  htmlFor="exampleFormControlInput1"
                ></Form.Label>
                <Form.Control
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="enter your email address*"
                />
              </Form.Group>
              <Button
                className="newsletter-button"
                variant="primary"
                type="submit"
              >
                {status}
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default HomeScreen;
