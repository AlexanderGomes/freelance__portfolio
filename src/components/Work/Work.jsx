import React from "react";
import { history } from "../../constans/constans";
import "./Work.css";

const Work = () => {
  return (
    <div className="work__main">
      <h1 className="top__text">Work History</h1>
      <p className="disclousure">(Some of the work can't be disclosed)</p>
      {history.map((work) => (
        <Card work={work} key={work.id} />
      ))}
    </div>
  );
};

const Card = ({ work }) => {
  return (
    <div className="card__main">
      <h1>{work.company}</h1>
      <p className="position">{work.position}</p>
      {work.responsabilities.map((res, i) => (
        <p key={i}>{res}</p>
      ))}
    </div>
  );
};

export default Work;
