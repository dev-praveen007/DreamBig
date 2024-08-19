import Header from "../components/Header";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../assests/images/DANJ1869.webp";
import image2 from "../assests/images/01.jpg";
import image3 from "../assests/images/02.jpg";
import image4 from "../assests/images/04.jpg";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import Aos from "aos";
import Testimonals from "../components/Testimonals";
import prePlanImg from "../assests/images/Pre-planning.jpg";
import whatsappLottie from "../assests/Lottie/whatsapp.json";
import Lottie from "react-lottie";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import ContatusModal from "../components/ContactModal";
import NHAI1 from "../assests/images/DJI_0398.jpg";
import NHAI2 from "../assests/images/DJI_0443.jpg";
import toast from "react-hot-toast";

import weddingPhoto from "../assests/images/8530.jpg";
import BridePhoto from "../assests/images/DSC03324.jpg";
import CouplePhoto from "../assests/images/01.jpg";
import EngagementPhoto from "../assests/images/DBS_7173_2.jpg";
import PreweddingPhoto from "../assests/images/instagram post 01.jpg";
import PostWeddingPhoto from "../assests/images/DBS_22.jpg";
import MaterniyPhoto from "../assests/images/19.jpg";
import BabyPhoto from "../assests/images/05BA.jpg";
import GroomPhoto from "../assests/images/12.jpg";
import { Footer } from "../components/Footer";

function Home() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    handleShow();
    window.scrollTo(0, 0);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: whatsappLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Header />

      <button className="booknow-btn" onClick={() => setShow(!show)}>
        Book now
      </button>

      <div className="d-flex  justify-content-center align-items-center pt-4">
        <Carousel
          fade
          className="w-100 d-flex justify-content-center align-items-center mb-5"
          indicators={false}
        >
          <Carousel.Item
            className="w-100 d-flex justify-content-center align-items-center "
            interval={2000}
          >
            <img alt="FirstImg" className="img-fluid w-100 " src={image2} />

            <Carousel.Caption>
              <p className="h3">First slide label</p>
              <p className="carousal-p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item
            className="w-100 d-flex justify-content-center align-items-center "
            interval={2000}
          >
            <img alt="FirstImg" className="img-fluid w-100 " src={image3} />
            <Carousel.Caption>
              <p className="h3">Second slide label</p>
              <p className="carousal-p">
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item
            className="w-100 d-flex justify-content-center align-items-center "
            interval={2000}
          >
            <img alt="FirstImg" className="img-fluid w-100 " src={image4} />
            <Carousel.Caption>
              <p className="h3">Third slide label</p>
              <p className="carousal-p">
                Praesent com modo cursus magna, vel scelerisque nisl
                consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <Container className="container-width">
        <div className="middle-back-img">
          {/* <div className="body-div"> */}
          <p className="home-left-letter" data-aos="fade-right">
            Dream Big Studio,
          </p>
          <p className="home-left-letter" data-aos="fade-right">
            {" "}
            Are Storytellers at Heart.
          </p>

          <div
            className="mt-5 d-flex justify-content-center align-items-center"
            data-aos="fade-up"
          >
            <div className="center-text-div w-50" id="aboutus">
              <p className="home-headings text-center mb-0">About us</p>
              <div className="underline"></div>
              <p className="mt-5 mb-0 lead text-center desc">
                Welcome to Dream Big Studio, your go-to budget-friendly
                photography studio in Madurai! With over five years of
                experience, we are the experts in candid wedding photography and
                much more. From pre-wedding to post-wedding, outdoor adventures
                to maternity shoots, and everything in between, we capture it
                all with exceptional skill and creativity. Our team of
                passionate professionals, widely appreciated across Tamil Nadu,
                specializes in creative wedding filmmaking and has a unique
                style that beautifully enhances your precious moments. Not only
                do we serve Madurai and Chennai, but our services extend
                throughout Tamil Nadu, and we're available for assignments all
                over South India.
              </p>
            </div>
          </div>

          <Row
            className="mt-5 d-flex justify-content-between"
            data-aos="fade-up"
          >
            <Col md={6} xs={12} className="center-text-div mb-2">
              {/* <div > */}
              <p className="home-headings text-center mb-0">Our Mission</p>
              <div className="underline"></div>
              <p className="mt-5 mb-0 lead text-center desc">
                Our mission is to craft visual magic, one click at a time,
                ensuring that every milestone, every laugh, and every tear is
                frozen in its most genuine form. With unwavering dedication, we
                vow to curate personalized experiences, capturing the essence of
                your journey with precision and flair. Dream Big Studios is
                committed to nurturing a collaborative and joyous atmosphere,
                where dreams are embraced, memories cherished, and hearts
                forever inspired.
              </p>
              {/* <p className="mt-5 mb-0 lead text-center desc">
                Our primary aim is to turn your special moments into cinematic
                masterpieces, providing you with beautiful memories that will
                last for generations. We are dedicated to continuously improving
                and upgrading our equipment and techniques to uphold the premium
                quality of our services and set a new trend in the wedding
                industry.
              </p> */}
              {/* </div> */}
            </Col>

            <Col md={6} xs={12} className="center-text-div">
              <p className="home-headings text-center mb-0">Our Vision</p>
              <div className="underline"></div>
              <p className="mt-5 mb-0 lead text-center desc">
                At Dream Big Studios, our vision is to be the guardian of your
                cherished memories, transforming them into captivating tales
                that transcend time. We aim to inspire hearts, weaving emotions
                and creativity into every frame, ensuring your stories are
                eternally cherished and celebrated. With our lenses as
                storytellers, we endeavor to be the beacon of innovation and
                excellence, setting new standards in visual artistry.
              </p>
            </Col>
          </Row>
          {/* 
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
          </div> */}

          <div
            className="mt-5 d-flex justify-content-center align-items-center"
            data-aos="fade-up"
            id="ourSevices"
          >
            <div className="mb-5 our_service">
              <p className="home-headings text-center mb-0">Our Services</p>
              <div className="underline"></div>
              <p className="mt-5 mb-0 lead text-center descp">
                At Dream Big Studios, we offer a diverse range of photography
                and videography services that celebrate life's most beautiful
                moments. Our team of skilled professionals is dedicated to
                ensuring that your memories are captured with precision and
                creativity. Here are the services we provide
              </p>
            </div>
          </div>

          <div className="mt-5">
            <Row>
              <Col
                md={6}
                lg={4}
                xxl={3}
                sm={6}
                className="d-grid justify-content-center"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <img alt="image" src={BridePhoto} className="home-img" />
                <p className="mt-3 text-center fs-18">Bride Portraits </p>
              </Col>

              <Col
                md={6}
                lg={4}
                xxl={3}
                sm={6}
                className="d-grid justify-content-center"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <img alt="imagade" src={GroomPhoto} className="home-img " />
                <p className="mt-3 text-center fs-18">Groom Portraits</p>
              </Col>

              <Col
                md={6}
                lg={4}
                xxl={3}
                sm={6}
                className="d-grid justify-content-center"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <img alt="image" src={CouplePhoto} className="home-img" />
                <p className="mt-3 text-center fs-18">Couple Portraits</p>
              </Col>
              <Col
                md={6}
                lg={4}
                xxl={3}
                sm={6}
                className="d-grid justify-content-center"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <img alt="imagade" src={weddingPhoto} className="home-img" />
                <p className="mt-3 text-center fs-18">Wedding Photography</p>
              </Col>
              <Col
                md={6}
                lg={4}
                xxl={3}
                sm={6}
                className="d-grid justify-content-center"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <img alt="image" src={EngagementPhoto} className="home-img" />
                <p className="mt-3 text-center fs-18">Engagement</p>
              </Col>
              <Col
                md={6}
                lg={4}
                xxl={3}
                sm={6}
                className="d-grid justify-content-center"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <img alt="image" src={PreweddingPhoto} className="home-img" />
                <p className="mt-3 text-center fs-18">
                  Pre-Wedding Photography
                </p>
              </Col>
              <Col
                md={6}
                lg={4}
                xxl={3}
                sm={6}
                className="d-grid justify-content-center"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <img
                  alt="imagade"
                  src={PostWeddingPhoto}
                  className="home-img"
                />
                <p className="mt-3 text-center fs-18">
                  Post-Wedding Photography
                </p>
              </Col>
              <Col
                md={6}
                lg={4}
                xxl={3}
                sm={6}
                className="d-grid justify-content-center"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <img alt="image" src={MaterniyPhoto} className="home-img" />
                <p className="mt-3 text-center fs-18">Maternity Shoot</p>
              </Col>
              <Col
                md={6}
                lg={4}
                xxl={3}
                sm={6}
                className="d-grid justify-content-center"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <img alt="image" src={BabyPhoto} className="home-img" />
                <p className="mt-3 text-center fs-18">Baby Shoot</p>
              </Col>
            </Row>

            {/* <Row>
              <Col
                md={6}
                className="d-grid justify-content-center"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <img alt="imagade" src={weddingPhoto} className="home-img" />
                <p className="mt-3 text-center fs-18">Wedding Photography</p>
              </Col>
              <Col
                md={4}
                className="d-grid justify-content-center"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <img alt="image" src={EngagementPhoto} className="home-img" />
                <p className="mt-3 text-center fs-18">Engagement</p>
              </Col>
              <Col
                md={4}
                className="d-grid justify-content-center"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <img alt="image" src={PreweddingPhoto} className="home-img" />
                <p className="mt-3 text-center fs-18">
                  Pre-Wedding Photography
                </p>
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
                  src={PostWeddingPhoto}
                  className="home-img"
                />
                <p className="mt-3 text-center fs-18">
                  Post-Wedding Photography
                </p>
              </Col>
              <Col
                md={4}
                className="d-grid justify-content-center"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <img alt="image" src={MaterniyPhoto} className="home-img" />
                <p className="mt-3 text-center fs-18">Maternity Shoot</p>
              </Col>
              <Col
                md={4}
                className="d-grid justify-content-center"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <img alt="image" src={BabyPhoto} className="home-img" />
                <p className="mt-3 text-center fs-18">Baby Shoot</p>
              </Col>
            </Row> */}
          </div>
          {/* </div> */}
        </div>
      </Container>

      <Container>
        <div className="mb-5">
          <p className="home-headings text-center mb-4">Goverment Project</p>
          <div
            className="underline"
            // data-aos="fade-up"
          ></div>
          <Row className="mt-5">
            <Col className="nhai-text-col" md={6}>
              <p className="nhai-text">NHAI Project</p>
              <p className="nhai-text">Madurai - Natham Flyoverx</p>
            </Col>

            <Col md={6} className="d-flex justify-content-center">
              <img alt="image" src={NHAI2} className=" nhai-image" />
            </Col>
          </Row>
        </div>
      </Container>

      <Testimonals />
      {/* <Container className="container-width"> */}
      <div className="our-process-bg pb-5">
        <div
          className="center-a-div testimo-bottom-div mt-5 "
          data-aos="fade-up"
        >
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
            <div
              className="underline"
              // data-aos="fade-up"
            ></div>
            <img src={prePlanImg} className="img-fluid" />
          </div>
        </div> */}
      </div>

      <div className="center-a-div ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1070.7986293303582!2d78.09882859070137!3d9.906424701679676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c50e6ac0f2c3%3A0x794eec4e6d6fdb30!2sDream%20big%20studio!5e0!3m2!1sen!2sin!4v1721150053666!5m2!1sen!2sin"
          width="100%"
          height="500"
          frameborder="0"
          style={{ border: "1px solid white" }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
          title="Google map"
          loading="lazy"
        />
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1070.7986293303582!2d78.09882859070137!3d9.906424701679676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c50e6ac0f2c3%3A0x794eec4e6d6fdb30!2sDream%20big%20studio!5e0!3m2!1sen!2sin!4v1721150053666!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
      </div>
      <Footer />

      <a
        className="whatsapp-lottie"
        href={`https://wa.me/9585972207?text=Hi`}
        target="__blank"
      >
        <Lottie className="whatsapp-lottie" options={defaultOptions} />
      </a>

      {/* </Container> */}

      <ContatusModal
        show={show}
        handleShow={handleShow}
        handleClose={handleClose}
      />
    </>
  );
}

export default Home;
