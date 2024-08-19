import React, { useState } from "react";

import img1 from "../assests/images/01.jpg";
import img2 from "../assests/images/02.jpg";
import img3 from "../assests/images/03-1@2x.png";
import img4 from "../assests/images/04.jpg";
import img5 from "../assests/images/05.jpg";
import img6 from "../assests/images/2023 logo update.jpg";
import img7 from "../assests/images/LEE_5269 (2)_JPG.webp";
import img8 from "../assests/images/P3860954.webp";
import img9 from "../assests/images/skjnefksen.webp";
import img10 from "../assests/images/Candid Photography.webp";
import img11 from "../assests/images/DANJ1869.webp";
import img12 from "../assests/images/DJI_0398.jpg";
import img13 from "../assests/images/DJI_0443.jpg";
import img14 from "../assests/images/DSC00415_edited_edited.webp";
import img15 from "../assests/images/imageee.webp";
import img16 from "../assests/images/WhatsApp Image 2022-10-17 at 5_49_edited.webp";
import img17 from "../assests/images/WhatsApp Image 2022-10-12 at 2_09_34 PM.webp";
import img18 from "../assests/images/WhatsApp Image 2022-10-17 at 5_49_edited (1).webp";
import img19 from "../assests/images/imaneje.webp";
import img20 from "../assests/images/jkskfd.webp";
import Header from "../components/Header";
import ContatusModal from "../components/ContactModal";
import whatsappLottie from "../assests/Lottie/whatsapp.json";
import Lottie from "react-lottie";
import { Col, Row } from "react-bootstrap";
import { Footer } from "../components/Footer";

function Portfolio() {
  const arr = [
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
    {
      img: img4,
    },
    {
      img: img5,
    },
    {
      img: img6,
    },
    {
      img: img7,
    },
    {
      img: img8,
    },
    {
      img: img9,
    },
    {
      img: img10,
    },
    {
      img: img11,
    },
    {
      img: img12,
    },
    {
      img: img13,
    },
    {
      img: img14,
    },
    {
      img: img15,
    },
    {
      img: img16,
    },
    {
      img: img17,
    },
    {
      img: img18,
    },
    {
      img: img19,
    },
    {
      img: img20,
    },
  ];

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: whatsappLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Header />
      <button className="booknow-btn" onClick={() => setShow(!show)}>
        Book now
      </button>
      <div className="py-5">
      {/* <div className="w-100 pt-5 d-flex justify-content-center align-items-center">
        <div className=" w-75 mb-5 our_service">
          <p className="home-headings text-center mb-0">Portfolio</p>
          <div className="underline"></div>
          <p className="mt-5 mb-0 lead text-center descp">
            Take a glimpse into our portfolio to see the love stories we've had
            the honor to document. Discover why we're your perfect choice for
            event photography and videography. Explore our skillful captures and
            heartfelt moments that bring your special day to life.
          </p>
        </div>
      </div> */}
      <div className="gallery">
        {arr.map((val, i) => {
          return (
            <div className="pics" key={i}>
              <img src={val.img} alt="add" className="w-100" />
            </div>
          );
        })}
      </div>
      </div>
      <Footer />
      <a
        className="whatsapp-lottie"
        href={`https://wa.me/9585972207?text=Hi`}
        target="__blank"
      >
        <Lottie className="whatsapp-lottie" options={defaultOptions} />
      </a>
      <ContatusModal
        show={show}
        handleShow={handleShow}
        handleClose={handleClose}
      />
    </>
  );
}

export default Portfolio;
