import React from "react";
import "./infocards.css";
// import images

import Project from "../../image/project.svg";
import Research from "../../image/research.svg";
import Experience from "../../image/experience.svg";
import Awards from "../../image/awards.svg";

const infoData = [
  {
    img: Project,
    no: "02",
    title: "Projects",
  },
  {
    img: Research,
    no: "08",
    title: "Research",
  },
  {
    img: Experience,
    no: "03",
    title: "Experience Years",
  },
  {
    img: Awards,
    no: "02",
    title: "Awards",
  },
];

const Infocards = () => {
  return (
    <div style={{ backgroundColor:'rgba(248, 230, 255, 0.33)'}}  id="Qualification">
      <div className="infocards">
        {infoData.map((data) => {
          return (
            <div className="infoCard">
              <img src={data.img} alt="" />
              <p>{data.no}</p>
              <span>{data.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Infocards;
