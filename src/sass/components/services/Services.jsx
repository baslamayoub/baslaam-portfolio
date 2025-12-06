import React from "react";
import { MdDevices, MdAnimation, MdWeb } from "react-icons/md";
import { FaRocket, FaPaintBrush, FaMobileAlt, FaCode } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
const services = [
  {
    title: "Responsive Design",
    icon: <MdDevices />,
    description:
      "Crafting websites that look stunning and work flawlessly across all devices.",
  },
  {
    title: "Performance & SEO",
    icon: <FaRocket />,
    description: "Optimizing websites for speed and search engine visibility.",
  },
  {
    title: "UI/UX Implementation",
    icon: <FaPaintBrush />,
    description:
      "Transforming designs into interactive, user-friendly experiences.",
  },
  {
    title: "Custom Animations",
    icon: <MdAnimation />,
    description: "Creating engaging animations that elevate user interactions.",
  },
  {
    title: "API Integration",
    icon: <AiOutlineApi />,
    description:
      "Seamlessly connecting front-end applications with back-end systems.",
  },
  {
    title: "Cross-Browser Compatibility",
    icon: <MdWeb />,
    description: "Ensuring consistent functionality across all major browsers.",
  },
  {
    title: "Mobile-First Development",
    icon: <FaMobileAlt />,
    description:
      "Designing responsive experiences with a focus on mobile usability.",
  },
  {
    title: "Design-to-Code Conversion",
    icon: <FaCode />,
    description:
      "Turning Figma, PSD, or Sketch designs into pixel-perfect code.",
  },
];
const Services = () => {
  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="title">
          <h1 className="section__title">Services</h1>
          <p className="section__subtitle">What i offer</p>
        </div>
        <div className="services__list">
          {services.map((service, ind) => (
            <div key={ind} className="services__list--card">
              
              <p className="services__list--card-icon">{service.icon}</p>
              <h3 className="services__list--card-title">{service.title} </h3>
              <p className="services__list--card-subtitle">{service.description} </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
