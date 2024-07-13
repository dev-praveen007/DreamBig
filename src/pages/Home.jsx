import Header from "../components/Header";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../assests/images/DANJ1869.webp";
import image2 from "../assests/images/jkskfd.webp";
import image3 from "../assests/images/skjnefksen.webp";
import image4 from "../assests/images/imageee.webp";
import { Col, Row } from "react-bootstrap";
import { useEffect } from "react";
import Aos from "aos";

function Home() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <>
      <Header />
      <div className="d-flex  justify-content-center align-items-center">
        <Carousel
          fade
          className="w-75 d-flex justify-content-center align-items-center mb-5"
        >
          <Carousel.Item
            className="w-100 d-flex justify-content-center align-items-center "
            interval={2000}
          >
            <img alt="FirstImg" className="img-fluid w-100" src={image2} />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item
            className="w-100 d-flex justify-content-center align-items-center "
            interval={2000}
          >
            <img alt="FirstImg" className="img-fluid w-100" src={image3} />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item
            className="w-100 d-flex justify-content-center align-items-center "
            interval={2000}
          >
            <img alt="FirstImg" className="img-fluid w-100" src={image4} />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="middle-back-img">
        <div className="body-div">
          <p className="home-left-letter" data-aos="fade-right">
            Dream Big Studios,
          </p>
          <p className="home-left-letter" data-aos="fade-right">
            {" "}
            Are Storytellers at Heart.
          </p>

          <div
            className="mt-5 d-flex justify-content-center align-items-center"
            data-aos="fade-up"
          >
            <div className="center-text-div">
              <p className="fs-50 text-center">About us</p>
              <p className="mt-5 mb-0 lead text-center desc">
                Established in 2015 by Manoj Nagarajan, Fifth Angle Studios has
                an 8+year legacy, capturing over 1000+ weddings. Our steadfast
                commitment lies in dedicating ourselves to crafting beautiful
                moments that exceed our client's expectations. Clients'
                satisfaction is our top priority as we lovingly deliver the
                heart of their special day with exceptional creativity.
              </p>
            </div>
          </div>

          <div
            className="mt-5 d-flex justify-content-between"
            data-aos="fade-up"
          >
            <div className="center-text-div">
              <p className="fs-50 text-center">Our Mission</p>
              <p className="mt-5 mb-0 lead text-center desc">
                Our mission is to establish ourselves as a leading authority in
                wedding filmmaking, and photography, ensuring that every event
                is captured with the utmost care and professionalism. From the
                initial booking to the final delivery of albums and videos, we
                take full responsibility for ensuring a pleasant experience for
                our clients.
              </p>
              <p className="mt-5 mb-0 lead text-center desc">
                Our primary aim is to turn your special moments into cinematic
                masterpieces, providing you with beautiful memories that will
                last for generations. We are dedicated to continuously improving
                and upgrading our equipment and techniques to uphold the premium
                quality of our services and set a new trend in the wedding
                industry.
              </p>
            </div>

            <div className="center-text-div">
              <p className="fs-50 text-center">Our Vision</p>
              <p className="mt-5 mb-0 lead text-center desc">
                Our vision is to become the first choice for couples and parents
                in search of wedding or photography services. We aim to expand
                our Chennai-based brand globally in the upcoming years, covering
                diverse weddings from south to north India and globally.
                Additionally, we are actively capturing various events,
                including corporate events, government functions, brand
                campaigns, and concerts. We strive to set trends in the industry
                and we are dedicated to providing you with satisfying and
                premium services.
              </p>
            </div>
          </div>

          <div
            className="mt-5 d-flex justify-content-center align-items-center"
            data-aos="fade-up"
          >
            <div className="mb-5 our_service">
              <p className="fs-50 text-center">Our Services</p>
              <div className="underline"></div>
              <p className="mt-5 mb-0 lead text-center descp">
                Fifth Angle Studios is already renowned for its expertise and
                professional photography services in the fields of wedding
                photography and filmmaking. In addition to that, we offer
                services for engagements, baby showers/maternity, family
                portraits, birthdays, portfolios, corporate events, concerts,
                and other special occasions. If you require photography for
                specific events, feel free to call us, and we will collaborate
                with you to plan and capture those moments beautifully.
              </p>
            </div>
          </div>

          <div className="mt-5">
            <Row>
              <Col
                md={4}
                className="d-grid justify-content-center"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <img
                  alt="imagade"
                  src={image1}
                  className="home-img img-fluid"
                />
                <p className="mt-3 text-center fs-24">Wedding Photos</p>
              </Col>
              <Col
                md={4}
                className="d-grid justify-content-center"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <img alt="image" src={image1} className="home-img img-fluid" />
                <p className="mt-3 text-center fs-24">Wedding Photos</p>
              </Col>
              <Col
                md={4}
                className="d-grid justify-content-center"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <img alt="image" src={image1} className="home-img img-fluid" />
                <p className="mt-3 text-center fs-24">Wedding Photos</p>
              </Col>
            </Row>

            <Row>
              <Col
                md={4}
                className="d-grid justify-content-center"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <img
                  alt="imagade"
                  src={image1}
                  className="home-img img-fluid"
                />
                <p className="mt-3 text-center fs-24">Wedding Photos</p>
              </Col>
              <Col
                md={4}
                className="d-grid justify-content-center"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <img alt="image" src={image1} className="home-img img-fluid" />
                <p className="mt-3 text-center fs-24">Wedding Photos</p>
              </Col>
              <Col
                md={4}
                className="d-grid justify-content-center"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <img alt="image" src={image1} className="home-img img-fluid" />
                <p className="mt-3 text-center fs-24">Wedding Photos</p>
              </Col>
            </Row>
            <Row>
              <Col
                md={4}
                className="d-grid justify-content-center"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <img
                  alt="imagade"
                  src={image1}
                  className="home-img img-fluid"
                />
                <p className="mt-3 text-center fs-24">Wedding Photos</p>
              </Col>
              <Col
                md={4}
                className="d-grid justify-content-center"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <img alt="image" src={image1} className="home-img img-fluid" />
                <p className="mt-3 text-center fs-24">Wedding Photos</p>
              </Col>
              <Col
                md={4}
                className="d-grid justify-content-center"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <img alt="image" src={image1} className="home-img img-fluid" />
                <p className="mt-3 text-center fs-24">Wedding Photos</p>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
