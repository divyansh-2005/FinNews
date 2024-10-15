import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./GovSchemes.css";
import { useMediaQuery } from "react-responsive";
import scheme from "../../assets/nationalBefinifitScheme.png";
import scheme2 from "../../assets/IndiraGandhi.jpeg";
import scheme3 from "../../assets/pension.jpeg";
import scheme4 from "../../assets/aamadmi.png";
import scheme5 from "../../assets/snajaygandhi.jpeg";
import scheme6 from "../../assets/shravan.png";


const schemes = [
  {
    id: 1,
    image: scheme,
    title: "National Family Benefit Scheme",
    description:
      "Under this Scheme in case of death of a primary bread winner in the BPL Family in the age group of 18 to 59 years, the affected family is provided with one time Lump sum Financial assistance of Rs. 20000/- from the central government.",
  },
  {
    id: 2,
    image: scheme2,
    title: "Indira Gandhi National Old Age Pension Scheme",
    description:
      "Old aged person of 65 years & above belonging to BPL Family are eligible under this Scheme. Beneficiaries under this scheme receive Rs.200/- from Govt. of India & Rs.400/- from Govt. of Maharashtra under Shravanbal Seva Rajya Nivrutti vetan Yojana. In all the beneficiary receives Rs. 600/- per month..",
  },
  {
    id: 3,
    image: scheme3,
    title: "Indira Gandhi National Disability Pension Scheme",
    description:
      "A Disable person in the age group of 18 to 65 years and having 80 percent disability is eligible under this Scheme. He / She is entitled to receive Rs. 200/- per month under this Scheme. He / She also receives Rs 400/- per month under State sponsored Sanjay Gandhi Niradhar Anudan Yojana.",
  },
  {
    id: 4,
    image: scheme4,
    title: "Aam Adami Bima Yojana",
    description:
      "This scheme is meant for land less labourers in rural areas in the age Group of 18-59 years. The premium charged under the scheme will be Rs. 200/- per annum per member out of which 50% is subsidized by the State Govt. and Central Govt.",
  },
  {
    id: 5,
    image: scheme5,
    title: "Sanjay Gandhi Niradhar Anudan Yojana",
    description:
      "This scheme is applicable to destitute persons of age below 65 years, orphan children, all types of handicapped, person suffering from critical illness like T. B. cancer, AIDS and leprosy, destitute widows including those of farmers who committed suicide,",
  },
  {
    id: 6,
    image: scheme6,
    title: "Shravanbal Seva Rajya Nivruttivetan Yojana",
    description:
      " this scheme, every destitute person of age 65 years and above and belonging to BPL family is eligible to get pension of Rs. 400/- per month from the state Govt. and the same beneficiary also receives pension of Rs.200/- per month from the Central Govt., under Indira Gandhi National Old Age pension Scheme.",
  },
];

const maxLength = (text, maxText) => {
  if (text.length > maxText) {
    return text.slice(0, maxText) + "...";
  }
  return text;
};

function GovSchemes() {
  const isMobile = useMediaQuery({ maxWidth: 400 });
  const inTab = useMediaQuery({ maxWidth: 1000, minWidth: 450 });

  return (
    <>
      <SectionHeading title="New Government Schemes" />
      {isMobile ? (
        <Swiper spaceBetween={20} slidesPerView={1} className="gov-carousel">
          {schemes.map((scheme) => (
            <SwiperSlide key={scheme.id}>
              <div className="gover-card">
                <img
                  src={scheme.image}
                  alt={scheme.title}
                  className="scheme-image"
                />
                <h3 className="scheme-title">{scheme.title}</h3>
                <p className="scheme-description">
                  {maxLength(scheme.description, 200)}
                </p>
                <button className="explore-btn">Explore More</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : inTab ? (
        <Swiper spaceBetween={20} slidesPerView={2} className="gov-carousel">
          {schemes.map((scheme) => (
            <SwiperSlide key={scheme.id}>
              <div className="gover-card">
                <img
                  src={scheme.image}
                  alt={scheme.title}
                  className="scheme-image"
                />
                <h3 className="scheme-title">{scheme.title}</h3>
                <p className="scheme-description">
                  {maxLength(scheme.description, 200)}
                </p>
                <button className="explore-btn">Explore More</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="gov-container">
          {schemes.map((scheme) => (
            <div className="gover-card" key={scheme.id}>
              <img
                src={scheme.image}
                alt={scheme.title}
                className="scheme-image"
              />
              <h3 className="scheme-title">{scheme.title}</h3>
              <p className="scheme-description">
                {maxLength(scheme.description, 200)}
              </p>
              <button className="explore-btn">Explore More</button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default GovSchemes;
