import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import image2 from "../assests/images/jkskfd.webp";
import image1 from "../assests/images/Candid Photography.webp";
import image3 from "../assests/images/02-1@2x.png";
import image4 from "../assests/images/WhatsApp Image 2022-10-12 at 2_09_34 PM.webp";

function Testimonals() {
  const arr = [
    {
      image: image1,
      desc: "I highly recommend Fifth Angle Studios. Thanks for making my wedding memorable with your phenomenal work.",
      from: "chennai",
      name: "Siddharth & Swetha",
    },
    {
      image: image2,
      desc: "An excellent service! The whole team are extremely professional, reliable and pleasure to work with. Down to the initial phone call, their knowledge, to the photography and post production, their customer service was outstanding. Kavi did a great job till the end of the process.The photography has had a huge impact and I would highly recommend them to all.",
      from: "chennai",
      name: "Oviya & Bharani",
    },
    {
      image: image3,
      desc: "Thanks for the lovely Wedding album by your team.I haven't seen it yet, but my parents said it's really extraordinary !! Loads of love !! to you and Fifthangle Team.... any other weddings or Festivals in my closed circle I will strongly recommend your team to be a part of the celebration. I myself wanted to text u.",
      from: "chennai",
      name: "Nakkeeran & Hemalatha",
    },
    {
      image: image4,
      desc: "I came to India few weeks back and checked my Wedding album now it is fantastic.. very nice !! I've never seen such a luxurious at the same time a classic wedding album. Kudos to your team.",
      from: "Berlin, Germany",
      name: "Padmasini",
    },
  ];

  const [activeIndex,setActiveIndex]=useState();

  const handleSelect = (selectedIndex, e) => {
    console.log('Slide started',selectedIndex);
    setActiveIndex(selectedIndex)
  };

  return (
    <div className="pt-5 pb-4 testimon-full-cont" data-aos="fade-up">
     {/* <div class="custom-shape-divider-bottom-1721451173">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div> */}
      <h1 className="text-center ">Testimonials</h1>
      <div className="underline mb-5"></div>
      <div className="d-flex  justify-content-center align-items-center" >
        <Carousel
          fade
          className="w-100 d-flex justify-content-center align-items-center mb-5"
          indicators={false}
          touch
          pause={false}
          onSelect={handleSelect}
        >
          {arr.map((val, i) =>
            i % 2 !== 0 ? (
              <Carousel.Item
                className="w-100 d-flex justify-content-center align-items-center"
                interval={3000}
              >
                <div className={`testimonals-text-container ${activeIndex === i ? "opacity-animation" : ""}`}>
                  <div className="w-75">
                    <p className="text-center fs-10">{val.desc}</p>
                    <p className="text-center mb-0 fs-14 fw-600">
                      - {val.name}
                    </p>
                    <p className="text-center fs-13 fw-600">{val.from}</p>
                  </div>
                </div>
                <img alt="FirstImg" className={`testimo-img  ${activeIndex === i ? "testi-animation-left" :""}`} src={val.image} />
              </Carousel.Item>
            ) : (
              <Carousel.Item
                className="w-100 d-flex justify-content-center align-items-center "
                interval={3000}
              >
                <img alt="FirstImg" className={`testimo-img ${(activeIndex === i || activeIndex === 0) ? "testi-animation-rightt":""}`} src={val.image}/>
                <div className={`testimonals-text-container ${(activeIndex === i || activeIndex === 0) ? "opacity-animation":""}`} >
                  <div className="w-75">
                    <p className="text-center fs-10">{val.desc}</p>
                    <p className="text-center mb-0 fs-14 fw-600">
                      - {val.name}
                    </p>
                    <p className="text-center fs-13 fw-600">{val.from}</p>
                  </div>
                </div>
              </Carousel.Item>
            )
          )}
        </Carousel>
      </div>
    </div>
  );
}

export default Testimonals;
