import Header from "../components/Header";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../assests/images/DANJ1869.webp";
import image2 from "../assests/images/jkskfd.webp";
import image3 from "../assests/images/skjnefksen.webp";
import image4 from "../assests/images/imageee.webp";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import Aos from "aos";
import Testimonals from "../components/Testimonals";
import prePlanImg from "../assests/images/Pre-planning.webp";

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

      <Container className="container-width">
        <div className="d-flex  justify-content-center align-items-center">
          <Carousel
            fade
            className="w-100 d-flex justify-content-center align-items-center mb-5"
          >
            <Carousel.Item
              className="w-100 d-flex justify-content-center align-items-center "
              interval={2000}
            >
              <img
                alt="FirstImg"
                className="img-fluid w-100 b-radios-10"
                src={image2}
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item
              className="w-100 d-flex justify-content-center align-items-center "
              interval={2000}
            >
              <img
                alt="FirstImg"
                className="img-fluid w-100 b-radios-10"
                src={image3}
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item
              className="w-100 d-flex justify-content-center align-items-center "
              interval={2000}
            >
              <img
                alt="FirstImg"
                className="img-fluid w-100 b-radios-10"
                src={image4}
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="middle-back-img">
          {/* <div className="body-div"> */}
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
              <p className="home-headings text-center mb-0">About us</p>
              <div className="underline"></div>
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
              <p className="home-headings text-center mb-0">Our Mission</p>
              <div className="underline"></div>
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
              <p className="home-headings text-center mb-0">Our Vision</p>
              <div className="underline"></div>
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
              <p className="home-headings text-center mb-0">Our Services</p>
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
                <p className="mt-3 text-center fs-18">Wedding Photos</p>
              </Col>
              <Col
                md={4}
                className="d-grid justify-content-center"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <img alt="image" src={image1} className="home-img img-fluid" />
                <p className="mt-3 text-center fs-18">Wedding Photos</p>
              </Col>
              <Col
                md={4}
                className="d-grid justify-content-center"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <img alt="image" src={image1} className="home-img img-fluid" />
                <p className="mt-3 text-center fs-18">Wedding Photos</p>
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
                <p className="mt-3 text-center fs-18">Wedding Photos</p>
              </Col>
              <Col
                md={4}
                className="d-grid justify-content-center"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <img alt="image" src={image1} className="home-img img-fluid" />
                <p className="mt-3 text-center fs-18">Wedding Photos</p>
              </Col>
              <Col
                md={4}
                className="d-grid justify-content-center"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <img alt="image" src={image1} className="home-img img-fluid" />
                <p className="mt-3 text-center fs-18">Wedding Photos</p>
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
                <p className="mt-3 text-center fs-18">Wedding Photos</p>
              </Col>
              <Col
                md={4}
                className="d-grid justify-content-center"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <img alt="image" src={image1} className="home-img img-fluid" />
                <p className="mt-3 text-center fs-18">Wedding Photos</p>
              </Col>
              <Col
                md={4}
                className="d-grid justify-content-center"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <img alt="image" src={image1} className="home-img img-fluid" />
                <p className="mt-3 text-center fs-18">Wedding Photos</p>
              </Col>
            </Row>
          </div>
          {/* </div> */}
        </div>
      </Container>

      <Testimonals />
      <Container className="container-width">
        <div className="center-a-div testimo-bottom-div" data-aos="fade-up">
          <p className="testimo-bottom-text">
            Having shot more than 1000+ weddings in the last eight years, we
            have covered both grandeur royal weddings and humble backyard
            weddings. Be it elite or ecstatic, we have always been there where
            there's love. There are reasons why most celebrities and businessmen
            prefer our services as being there unnoticed and capturing some
            lively moments are our specialties.
          </p>
        </div>

        {/* <div
          className="mt-5 d-flex justify-content-center align-items-center"
          data-aos="fade-up"
        >
          <div className="w-75">
            <p className="home-headings text-center mb-0">Our Process</p>
            <img src={prePlanImg} className="img-fluid" />
          </div>
        </div> */}

        <p className="pt-5 mb-0 home-headings text-center"  data-aos="fade-up">Contact us</p>
        <div className="underline"  data-aos="fade-up"></div>

        <div
          className="mt-5 d-flex justify-content-center align-items-center"
          data-aos="fade-up"
        >
          <Row className="w-100 pb-5" >
            <Col md={4} >
            <div className="">
              <p className="fs-25 fw-400 text-center">Address</p>
              <p className="mb-0 text-center desc">
              No 35, 1st floor, Vasantha Nagar, 1st Street,
              </p>
              <p className="mb-0 text-center desc">
              Madurai, Tamil Nadu.
              </p>
            </div>
            </Col>
            <Col md={4}>
            <div className="">
              <p className="fs-25 fw-400 text-center">Contact</p>
              <p className="mb-0 text-center desc">
                +91 98942 11704
              </p>
              <p className="mb-0 text-center desc">
                +91 95859 72207
              </p>
            </div>
            </Col>
            <Col md={4}>
            <div className="">
              <p className="fs-25 fw-400 text-center">Opening Hours</p>
              <p className="mb-0 text-center desc">
                Monday - Saturday 09:30 am - 08:00 pm
              </p>
              <p className="mb-0 text-center desc">
                ​Sunday Closed
              </p>
            </div>
            </Col>

          </Row>
        </div>
        
        <div className="d-flex justify-content-evenly align-items-center" data-aos="fade-up">
          <div className="d-flex align-items-center gap-2 ">
          <i className="bi bi-envelope-at fs-24 "></i>
          <p className="mb-0" >
          dreambigstudio.in@gmail.com
          </p>
          </div>
          
          <div className="social-media-div" >
          <i className="bi bi-instagram fs-24 "></i>
          <i className="bi bi-facebook fs-24 "></i>
          <i className="bi bi-youtube fs-24 "></i>
          <i className="bi bi-whatsapp fs-24 "></i>
          </div>
        </div>

        <div className="center-a-div mt-5 pb-4" data-aos="fade-up">
        <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1070.7986293303582!2d78.09882859070137!3d9.906424701679676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c50e6ac0f2c3%3A0x794eec4e6d6fdb30!2sDream%20big%20studio!5e0!3m2!1sen!2sin!4v1721150053666!5m2!1sen!2sin"
                width="100%"
                height="500"
                frameborder="0"
                style={{ border: "1px solid white"  }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
                title="Google map"
            />
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1070.7986293303582!2d78.09882859070137!3d9.906424701679676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c50e6ac0f2c3%3A0x794eec4e6d6fdb30!2sDream%20big%20studio!5e0!3m2!1sen!2sin!4v1721150053666!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        </div>
      </Container>
    </>
  );
}

export default Home;
