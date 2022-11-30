import React from 'react'
import "./quil.css";
// import images
import Img1 from "../../image/portOne.png";
import Img2 from "../../image/portTwo.png";
const Quali = () => {
  return (
    <div className="qual-cards">
        <div className="qual-card">
            <div className="content">
                <p>Year</p>
                <span>2016 - 2018</span>
                <p>Degree</p>
                <span>M.phil Linguistics( Sociolinguistics Concentration)</span>
                <p>Institution</p>
                <span>North Carolina State</span>
            </div>
            <div className="image">
                <img src={Img2} alt=''/>
            </div>
        </div>
        <div className="qual-card">
            <div className="content">
                <p>Year</p>
                <span>2013 - 2015</span>
                <p>Degree</p>
                <span>M.A(Literature & Linguistics)</span>
                <p>Institution</p>
                <span>National University of Modern Languages</span>
            </div>
            <div className="image">
                <img src={Img1} alt=''/>
            </div>
        </div>
    </div>
  )
}

export default Quali;