import React from "react";
import "./exper.css";
import Line from "../../image/Line.svg";


const data = [
    {
        inst: "Lecturer Karakoram International University",
        date: "2017- Till Now",
    },
    {
        inst: "Lecturer Aga Khan Higher Secondary School, Gilgit",
        date: "2014- 2017",
    },
    {
        inst: "Lecturer Karakoram International University",
        date: "2017- Till Now",
    },
    {
        inst: "Lecturer Karakoram International University",
        date: "2017- Till Now",
    }
]
const Experince = () => {
  return (
    <div className="exper" id="Experience">
      <div className="exper-contact">
        <h2>Experience</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Suspendisse varius enim in eros
        </p>
      </div>
      <div className="cards">
        {
            data.map((e)=>{
                return(
                    <div className="card">
                        <img src={Line} alt="" />
                        <span>{e.inst}</span>
                        <p>{e.date}</p>
                    </div>
                )
            })
        }
      </div>
    </div>
  );
};

export default Experince;
