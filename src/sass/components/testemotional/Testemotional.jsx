import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import img1 from "../../../assets/testimonial1.png";
import img2 from "../../../assets/testimonial2.png";
import img3 from "../../../assets/testimonial3.png";

const testimonials = [
  {
    id: 1,
    image: img1,
    name: "John Doe",
    role: "Web Developer",
    testemotional:
      "This service is fantastic! Highly recommend it to anyone looking for quality work.",
  },
  {
    id: 2,
    image: img2,
    name: "Jane Smith",
    role: "Designer",
    testemotional:
      "Amazing experience! The team was very professional and delivered on time.",
  },
  {
    id: 3,
    image: img3,
    name: "Sam Wilson",
    role: "Product Manager",
    testemotional:
      "They exceeded our expectations in every way. Top-notch quality!",
  },
];
const Testemotional = () => {
  const sittings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="testemotional section">
      <div className="container">
        <div className="title">
          <h1 className="section__title">Testimonial</h1>
          <p className="section__subtitle">My clients say</p>
        </div>
        <Slider {...sittings}>
          {/* <div className="testemotional-cards"> */}
            {testimonials.map((emotion) => (
              <Card key={emotion.id} emotion={emotion} />
            ))}
          {/* </div> */}
        </Slider>
      </div>
    </section>
  );
};

export default Testemotional;
