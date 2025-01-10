import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const AboutDetailsCard = ({ title, description }) => {
  return (
    <div className="flex flex-col text-white p-2">
      <div className="flex items-center mb-2">
        <FontAwesomeIcon icon={faCircleCheck} className="text-white text-lg mr-2" />
        <div className="text-sm font-semibold">{title}</div>
      </div>
      <div className="pl-6 text-xs font-light">{description}</div>
    </div>
  );
};

export default AboutDetailsCard;
