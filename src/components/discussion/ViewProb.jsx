import React from "react";
import "./discussion.css";
import statCard from "./statCard";

const ViewProb = () => {
  return (
    <div className="viewStat__container">
      <h1>All Problem Statements</h1>
      <hr />
      <div className="single__stat">
        <statCard />
      </div>
    </div>
  );
};

export default ViewProb;
