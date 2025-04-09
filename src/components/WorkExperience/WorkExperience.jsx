import './WorkExperience.css';
import { WORK_EXPERIENCE } from '../../assets/Utils/data';
import ExperienceCard from './ExperienceCard/ExperienceCard';
import React, { useRef } from 'react';
import Slider from "react-slick";
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';



const WorkExperience = () => {
  const slideRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const slideRight = () => {
    slideRef.current.slickNext();
  };
  const slideLeft = () => {
    slideRef.current.slickPrev();
  };
  return (
    <section className="experience-container" id="workexpereience" >

      <h5>
        Work Experience
      </h5>
      <div className="experience-content">
        <div className="arrow-right" onClick={slideRight}>
          <span class="material-symbols-outlined">
            <FaChevronRight />
          </span>
        </div>
        <div className="arrow-left" onClick={slideLeft}>
          <span class="material-symbols-outlined">
            <FaChevronLeft />
          </span>
        </div>


        <Slider ref={slideRef} {...settings} >
          {WORK_EXPERIENCE.map((item) => (
            <ExperienceCard key={item.title} details={item} />

          ))}
        </Slider>
      </div>
    </section>
  )
}

export default WorkExperience