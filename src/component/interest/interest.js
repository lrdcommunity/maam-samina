import React from "react";
import "./interest.css";
// import images

const infoData = [
  {
    no: "Sociolinguistics, Linguistic Anthropology",
  },
  {
    no: "Language and Gender",
  },
  {
    no: "Language Documentation",
  },
  {
    no: "Discourse Analysis",
  },
  {
    no: "Language Attitudes",
  },
  {
    no: "Multilingualism",
  },
  {
    no: "Language and Identity",
  },
  {
    no: "Language in the mass media",
  },
  {
    no: "Sociolinguistics, Linguistic Anthropology",
  },
  
];

const Interest = () => {
  return (
    // <div>
      <div className="interest">
        {infoData.map((data) => {
          return (
            <div className="interCard">
              <p>{data.no}</p>
            </div>
          );
        })}
      </div>
    // </div>
  );
};

export default Interest;
