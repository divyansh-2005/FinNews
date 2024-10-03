import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import './StartUp.css';

const startupData = [
  {
    id: 1,
    organizationName: "Tech Innovators",
    organizationImage: "https://example.com/image1.jpg",
    startupImage: "https://example.com/startup1.jpg",
    startupHeading: "Tech for Tomorrow",
    summary: "Innovating solutions for a sustainable future.",
    about: "Tech Innovators focuses on creating environmentally friendly technology solutions, promoting sustainability in the tech industry.",
    link:"https://www.techstars.com/"
  },
  {
    id: 2,
    organizationName: "Health Solutions",
    organizationImage: "https://example.com/image2.jpg",
    startupImage: "https://example.com/startup2.jpg",
    startupHeading: "Revolutionizing Healthcare",
    summary: "Transforming health services through technology.",
    about: "Health Solutions provides cutting-edge telehealth services that bridge the gap between patients and healthcare providers.",
    link:"https://www.netmeds.com/"
  },
  {
    id: 3,
    organizationName: "EduTech",
    organizationImage: "https://example.com/image3.jpg",
    startupImage: "https://example.com/startup3.jpg",
    startupHeading: "Learning Made Easy",
    summary: "Making education accessible for everyone.",
    about: "EduTech offers an online learning platform that caters to diverse learning styles, making education more accessible.",
    link:"https://www.gostudent.org/"
  },
  {
    id: 4,
    organizationName: "Green Energy Corp",
    organizationImage: "https://example.com/image4.jpg",
    startupImage: "https://example.com/startup4.jpg",
    startupHeading: "Powering the Future",
    summary: "Leading the way in renewable energy.",
    about: "Green Energy Corp specializes in developing solar and wind energy solutions to reduce reliance on fossil fuels."
  },
  {
    id: 5,
    organizationName: "Foodie Connect",
    organizationImage: "https://example.com/image5.jpg",
    startupImage: "https://example.com/startup5.jpg",
    startupHeading: "Connecting Food Lovers",
    summary: "Bringing food enthusiasts together.",
    about: "Foodie Connect is a social platform for food lovers to share recipes, experiences, and culinary adventures."
  },
];

function StartUp() {
  return (
    <>
      <SectionHeading title="StartUp Insights" />
      <div className="startup-insights">
        {startupData.map((startup) => (
          <div className="startup-container" key={startup.id}>
            <div className="startup" style={{ backgroundImage: `url(${startup.startupImage})` }}></div>
            <div className="top-box">
              <div className="img" style={{ backgroundImage: `url(${startup.organizationImage})` }}></div>
              <div className="organization-details">
                <div className="organization-img" style={{ backgroundImage: `url(${startup.organizationImage})` }}></div>
                <div className="organization">{startup.organizationName}</div>
              </div>
              <div className="startup-heading">{startup.startupHeading}</div>
              
            </div>
            <div className="description-container">
              <div className="about">About</div>
              <div className="paragraph">{startup.about}</div>
              <a href={startup.link} className="link">Learn More</a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default StartUp;
