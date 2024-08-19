import React from 'react'
import { Col, Row } from 'react-bootstrap'

export const Footer = () => {
  return (
    
    <div className="contact-us-container">
    <div className="background-filter"></div>
    <div className="content-wrapper">
      <p
        className=" mb-0 home-headings text-center fw-500"
        //  data-aos="fade-up"
      >
        Contact us
      </p>
      <div
        className="underline"
        // data-aos="fade-up"
      ></div>

      <div
        className="pt-5 d-flex justify-content-center align-items-center"
        // data-aos="fade-up"
      >
        <Row className="w-100 mb-3">
          <Col md={4} className="">
            <div className="">
              <p className="fs-25 fw-500 text-center">Address</p>
              <p className="mb-0 text-center desc">
                No 35, 1st floor, Vasantha Nagar, 1st Street,
              </p>
              <p className="mb-0 text-center desc">Madurai, Tamil Nadu.</p>
            </div>
            <div className="mt-5">
              <p className="fs-25 fw-500 text-center">Opening Hours</p>
              <p className="mb-0 text-center desc">
                Monday - Saturday 09:30 am - 08:00 pm
              </p>
              <p className="mb-0 text-center desc">​Sunday Closed</p>
            </div>
          </Col>
          <Col md={4} className="center-a-div footer-contact">
            <div className="">
              <p className="fs-25 fw-500 text-center">Contact</p>
              <p className="fs-25 mb-0 text-center desc">+91 98942 11704</p>
              <p className="fs-25 mb-0 text-center desc">+91 95859 72207</p>
            </div>
          </Col>
          <Col
            md={4}
            className="d-flex align-items-center justify-content-center gap-4 footer-contact"
          >
            <div className="social-media-div">
              <i className="bi bi-instagram fs-24 "></i>
              <i className="bi bi-facebook fs-24 "></i>
              <i className="bi bi-youtube fs-24 "></i>
              <i className="bi bi-whatsapp fs-24 "></i>
            </div>
            <div className="social-media-div2">
              <p className="text-center mb-0">Instagram</p>
              <p className="text-center mb-0">Facebook</p>
              <p className="text-center mb-0">Youtube</p>
              <p className="text-center mb-0">Whatsapp</p>
            </div>
          </Col>
        </Row>
      </div>

      {/* <div
        className="py-3 d-flex justify-content-center align-items-center"
        // data-aos="fade-up"
      >
        <Row className="w-100">
          <Col md={6} className="d-flex align-items-center justify-content-center">
          <div className="d-flex align-items-center gap-2 ">
          <i className="bi bi-envelope-at fs-24 "></i>
          <a className="gmail-footer" href="mailto:dreambigstudio.in@gmail.com" >

          <p className="mb-0">dreambigstudio.in@gmail.com</p>
          </a>
        </div>
          </Col>
          <Col md={6} className="">
          <div className="social-media-div">
          <i className="bi bi-instagram fs-24 "></i>
          <i className="bi bi-facebook fs-24 "></i>
          <i className="bi bi-youtube fs-24 "></i>
          <i className="bi bi-whatsapp fs-24 "></i>
        </div>
          </Col>
        </Row>
      </div> */}

      {/* <div
        className="d-flex justify-content-evenly align-items-center"
        // data-aos="fade-up"
      >
        <div className="d-flex align-items-center gap-2 ">
          <i className="bi bi-envelope-at fs-24 "></i>
          <a href="mailto:dreambigstudio.in@gmail.com" >

          <p className="mb-0">dreambigstudio.in@gmail.com</p>
          </a>
        </div>

        <div className="social-media-div">
          <i className="bi bi-instagram fs-24 "></i>
          <i className="bi bi-facebook fs-24 "></i>
          <i className="bi bi-youtube fs-24 "></i>
          <i className="bi bi-whatsapp fs-24 "></i>
        </div>
      </div> */}
    </div>
  </div>
  )
}
