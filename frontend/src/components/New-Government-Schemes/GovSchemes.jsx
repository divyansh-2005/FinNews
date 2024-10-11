import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./GovSchemes.css";
import { useMediaQuery } from "react-responsive";
import scheme from "../../assets/nationalBefinifitScheme.png";

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
    image: scheme,
    title: "Indira Gandhi National Old Age Pension Scheme",
    description:
      "Old aged person of 65 years & above belonging to BPL Family are eligible under this Scheme. Beneficiaries under this scheme receive Rs.200/- from Govt. of India & Rs.400/- from Govt. of Maharashtra under Shravanbal Seva Rajya Nivrutti vetan Yojana. In all the beneficiary receives Rs. 600/- per month..",
  },
  {
    id: 3,
    image: scheme,
    title: "Indira Gandhi National Disability Pension Scheme",
    description:
      "A Disable person in the age group of 18 to 65 years and having 80 percent disability is eligible under this Scheme. He / She is entitled to receive Rs. 200/- per month under this Scheme. He / She also receives Rs 400/- per month under State sponsored Sanjay Gandhi Niradhar Anudan Yojana.",
  },
  {
    id: 4,
    image: scheme,
    title: "Aam Adami Bima Yojana",
    description:
      "This scheme is meant for land less labourers in rural areas in the age Group of 18-59 years. The premium charged under the scheme will be Rs. 200/- per annum per member out of which 50% is subsidized by the State Govt. and Central Govt.",
  },
  {
    id: 5,
    image: scheme,
    title: "Sanjay Gandhi Niradhar Anudan Yojana",
    description:
      "This scheme is applicable to destitute persons of age below 65 years, orphan children, all types of handicapped, person suffering from critical illness like T. B. cancer, AIDS and leprosy, destitute widows including those of farmers who committed suicide,",
  },
  {
    id: 6,
    image: scheme,
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

// List of government schemes
const schemes = [
  {
    title: "Pradhan Mantri Kisan Samman Nidhi",
    description: "Direct income support for farmers to ensure a minimum income.",
    image: "./assets/image/pm-kisan.png",
    link: "#"
  },
  {
    title: "Mahatma Gandhi National Rural Employment",
    description: "Provides 100 days of unskilled wage employment in a financial year.",
    image: "./assets/image/mgnrega.png",
    link: "#"
  },
  {
    title: "Supplemental Nutrition Assistance Program ",
    description: "Food-purchasing assistance for low- and no-income families.",
    image: "./assets/image/snap.png",
    link: "#"
    
  },
  {
    title: "Ayushman Bharat                          ",
    description: "Health insurance scheme for economically vulnerable families.",
    image: "./assets/image/ayushman-bharat.png",
    link: "#"
  },
  {
    title: "Affordable Care Act (ACA)",
    description: "Expands access to health insurance and lowers costs.",
    image: "./assets/image/aca.png",
    link: "#"
  },
  {
    title: "Universal Credit",
    description: "Helps with living costs for low-income individuals.",
    image: "./assets/image/universal-credit.png",
    link: "#"
  },
  {
    title: "JobSeeker Payment",
    description: "Financial help for those looking for work or who are sick.",
    image: "./assets/image/jobseeker.png",
    link: "#"
  },
  {
    title: "Canada Child Benefit",
    description: "Monthly payment to help with raising children costs.",
    image: "./assets/image/ccb.png",
    link: "#"
  },
  {
    title: "Bolsa Família",
    description: "Conditional cash transfer program to reduce poverty.",
    image: "./assets/image/bolsa-familia.png",
    link: "#"
  },
  {
    title: "Child Allowance",
    description: "Financial support for families with children rasing.",
    image: "./assets/image/child-allowance.png",
    link: "#"
  },
  // Add more schemes as needed...
];


function GovSchemes() {
  const isMobile = useMediaQuery({ maxWidth: 400 });
  const inTab = useMediaQuery({ maxWidth: 1000, minWidth: 450 });

  return (
    <>
      <SectionHeading title="New Government Schemes" />
<div className="govt-introduction">
  <h2>Empowering Citizens Through Government Schemes</h2>
  <p>
    Government schemes play a crucial role in enhancing the welfare of citizens
    by providing financial support and services that cater to various needs. 
    These schemes are designed to empower individuals and families, improve 
    livelihoods, and promote social equality. Here, we present a list of 
    significant government schemes that aim to create a better future for all.
  </p>
</div>

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
  <div className="govt-news">
    {schemes.map((scheme, index) => (
      <div key={index} className="govt-container">
        <div className="govt-image" style={{ backgroundImage: `url(${scheme.image})` }}></div>
        <div className="govt-content">
          <div className="govt-heading">{scheme.title}</div>
          <div className="govt-description">{scheme.description}</div>
          <div className="govt-line"></div>
          <a href={scheme.link} className="govt-learn-more">
            <span className="learn-more-text">Learn more</span>
            <span className="arrow-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.4492 2.94922L17.4999 9.99994L10.4492 17.0507" stroke="#8D8BA7" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.4999 10L2.5 10" stroke="#8D8BA7" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
        </div>
      </div>
    ))}
  </div>
)}

    </>
  );
}

export default GovSchemes;
