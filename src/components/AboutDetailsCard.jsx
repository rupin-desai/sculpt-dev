import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const AboutDetailsCard = ({ title, description }) => {
  return (
    <div className="flex flex-col text- pl-3 pb-3 text-white">
      <div className="flex flex-row text-center my-auto">
        <div className="flex pr-3 my-auto">
          <FontAwesomeIcon icon={faCircleCheck} className="text-white text-2xl" />
        </div>
        <div className="flex">{title}</div>
      </div>
      <div className="flex flex-row">
        <div className="flex pr-3 opacity-0">
          <FontAwesomeIcon icon={faCircleCheck} className="text-white text-2xl" />
        </div>
        <div className="flex text-xs font-thin">{description}</div>
      </div>
    </div>
  );
};

export default AboutDetailsCard;
