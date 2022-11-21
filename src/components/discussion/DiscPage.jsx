import React from "react";
import UploadForm from "./UploadForm";
import ViewProb from "./ViewProb";
import "./discussion.css";

const DiscPage = () => {
  return (
    <div className="disc__container">
      <div className="disc__left">
        <UploadForm />
      </div>
      <div className="disc__right">
        <ViewProb />
      </div>
    </div>
  );
};

export default DiscPage;
