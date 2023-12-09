import React from "react";
import "./process.css";
import { Link } from "react-router-dom";
import process1 from "./../../assets/phone.svg";
import process2 from "./../../assets/hospital.svg";
import process3 from "./../../assets/fly.svg";
import process4 from "./../../assets/welcome.svg";
import ready_to_go from "./../../assets/doctors.jpg";
import userapp from "./../../assets/userapp.png";
import playstore from "./../../assets/playstore.svg";
import appstore from "./../../assets/appstore.svg";
import testimony1 from "./../../assets/Ellipse 19.jpg";
import testimony2 from "./../../assets/Ellipse 20.jpg";
import testimony3 from "./../../assets/Ellipse 21.jpg";

import icon1 from "./../../assets/care.svg";
import icon2 from "./../../assets/flight.svg";
import icon3 from "./../../assets/med.svg";
import icon4 from "./../../assets/care.svg";


import card_image1 from "./../../assets/attendant.jpg";

import card_image2 from "./../../assets/hospital.jpg";


import card_image3 from "./../../assets/travel.jpg";

const card_data = [
  {
    image: card_image2,
    title: "image1",
    header: "Apply",
    text: "",
    icon: "",
    icon_position: "right",
    background_color: "",
  },
  {
    image: "",
    title: "image1",
    header: "Choose Quote",
    text: "Focus on the affordable & efficient",
    icon: icon1,
    icon_position: "right",
    background_color: "#204eb7",
  },
  {
    image: card_image1,
    title: "image1",
    header: "Visa Assist",
    text: "",
    icon: icon3,
    icon_position: "",
    background_color: "#094fed",
  },
  {
    image: "",
    title: "image1",
    header: "Arrival",
    text: "Easy & Timely Airport Pickup",
    icon: icon2,
    icon_position: "",
    background_color: "#ffa700",
  },

  {
    image: card_image3,
    title: "image1",
    header: "Arrival",
    text: "",
    icon: icon4,
    icon_position: "",
    background_color: "",
  },

  {
    image: "",
    title: "image1",
    header: "Arrival",
    text: "Experience the CARE.",
    icon: "",
    icon_position: "",
    background_color: "#98d7f9",
  },
];
const process_data = [
  {
    image: process1,
    title: "image1",
    header: "Apply",
    text: "Upload Reports & Scans",
  },
  {
    image: process2,
    title: "image1",
    header: "Choose Quote",
    text: "Quotations from Hospitals",
  },
  {
    image: process3,
    title: "image1",
    header: "Visa Assist",
    text: "Plan, Prepare to Fly",
  },
  {
    image: process4,
    title: "image1",
    header: "Arrival",
    text: "Waiting to receive you",
  },
];

const testimony_data = [
  {
    image: testimony1,
    name: "Salah Mohammed",
    text: "As a student, I can say that my experience at this university has been truly transformative. The professors are dedicated and passionate about their subjects, and their enthusiasm is infectious.",
  },

  {
    image: testimony2,
    name: "Viola Abubakar",
    text: "I have made lifelong friendships here and have had the opportunity to participate in a variety of extracurricular activities.",
  },

  {
    image: testimony3,
    name: "MO Tahir",
    text: "Overall, I am grateful for the education and experiences I have gained at this university. I feel prepared to tackle any challenge that comes my way and confident in my ability to make a positive impact in my future career.",
  },
];

const Process = () => {
  return (
    <div className="proccess_section">
      <div className="process">
        <div className="top-info">
          <h3>The Process</h3>
          <p>Easy and transparent</p>
        </div>
        <div className="process-info">
          <div className="row">
            {process_data.map((process, index) => {
              return (
                <div className="col-lg-3 col-md-6">
                  <img
                    className="img_process"
                    src={process.image}
                    alt={process.title}
                  />
                  <h3 className="text-center h_header">{process.header}</h3>
                  <p className="text-center t_text">{process.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="focus">
        <div className="row focus_redirect">
          {card_data.map((card, index) => {
            return (
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div
                  style={{
                    backgroundColor: card.background_color,
                    backgroundImage: card.image
                      ? `url(${card.image})`
                      : "none",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                  className="card_info"
                >
                  {card.icon && card.icon !== "" && (
                    <img className="icon_icon" src={card.icon} alt="icon" />
                  )}

                  <p className="p_focus">{card.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="nutshell">
        <div className="detail_nutshell">
          <h3>In A Nutshell</h3>
          <p>
            India boasts a vast network of modern and well-equipped hospitals,
            clinics, and healthcare centers. Many of these facilities are
            accredited by international organizations and provide world-class
            medical care. One of the primary attractions of medical tourism in
            India is the cost-effectiveness of medical procedures and
            treatments. Medical services in India are often significantly
            cheaper compared to many Western countries, making it an affordable
            option for patients seeking quality healthcare. The country is also
            known for its iconic landmarks such as the Taj Mahal, historic forts
            and palaces, and beautiful beaches.
          </p>
        </div>
      </div>
      <div className="ready_to_go">
        <div className="row ready_inner">
          <div className="col-lg-6 col-md-6 left">
            <p>India Ranks Top in Medicine & Surgery</p>
            <h3>Ready To Plan A Surgery?</h3>
            <div className="link_process">
              <Link>Get Started</Link>
            </div>
          </div>
          <div className="col-lg-6  col-md-6 right">
            <img src={ready_to_go} alt="Ready to go" />
          </div>
        </div>
      </div>
      <div className="download">
        <div className="row">
          <div className="col-lg-7 col-md-12 left_download">
            <img src={userapp} alt="download app" />
          </div>

          <div className="col-lg-5 col-md-12 right_download">
            <p>MEDTOUR</p>
            <h3>Download The App Today!</h3>
            <div className="download_icon">
              <Link>
                <img id="playstore" src={playstore} alt="google play" />
              </Link>
              <Link>
                <img id="appstore" src={appstore} alt="app store" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="testimony">
        <h3 className="header">What People Have To Say</h3>
        <p className="text">Experience & Success Stories</p>
        <div className="row g-4">
          {testimony_data.map((testimony, index) => {
            return (
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="info">
                  <p>{testimony.text}</p>
                  <div className="row bottom_div">
                    <div className="col-lg-4 ">
                      <img
                        className="img_test"
                        src={testimony.image}
                        alt={testimony.name}
                      />
                    </div>
                    <div className="col-lg-8">
                      <h4 className="text-center">{testimony.name}</h4>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Process;
