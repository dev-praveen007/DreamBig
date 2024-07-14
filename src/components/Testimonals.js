import React from "react";
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


  return (
    <div className="pt-5 pb-5 testimon-full-cont">
      <h1 className="text-center pb-5" data-aos="fade-up" >Testimonials</h1>
          <div className="d-flex  justify-content-center align-items-center"  data-aos="fade-up"  >
        <Carousel
          fade
          className="w-100 d-flex justify-content-center align-items-center mb-5"
          indicators={false}
        >
            {arr.map((val,i)=>(
               i % 2 !== 0 ?
                <Carousel.Item
                  className="w-100 d-flex justify-content-center align-items-center gap-1"
                  interval={2000}
                >
                  <div className="testimonals-text-container ">
                    <div className="w-75">
                      <p className="text-center fs-10">
                        {val.desc}
                      </p>
                      <p className="text-center mb-0 fs-14 fw-600">
                        - {val.name}
                      </p>
                      <p className="text-center fs-13 fw-600">
                        {val.from}
                      </p>
                    </div>
                  </div>
                  <img alt="FirstImg" className="testimo-img " src={val.image} />
                </Carousel.Item>
                :
                <Carousel.Item
                  className="w-100 d-flex justify-content-center align-items-center gap-1"
                  interval={2000}
                >
                  <img alt="FirstImg" className="testimo-img " src={val.image} />
                  <div className="testimonals-text-container ">
                    <div className="w-75">
                      <p className="text-center fs-10">
                        {val.desc}
                      </p>
                      <p className="text-center mb-0 fs-14 fw-600">
                        - {val.name}
                      </p>
                      <p className="text-center fs-13 fw-600">
                        {val.from}
                      </p>
                    </div>
                  </div>
                </Carousel.Item>
            ))}
          
        </Carousel>
      </div>
    </div>
  );
}

export default Testimonals;
