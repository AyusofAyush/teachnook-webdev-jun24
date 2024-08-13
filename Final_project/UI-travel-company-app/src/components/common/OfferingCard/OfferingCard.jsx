import React from "react";
import "./OfferingCard.scss";

function OfferingCard({
  offeringNo,
  offeringHeader,
  offeringDescription,
  offeringImg,
}) {
  return (
    <div className="flex offering-card-parent">
      <div className={`flex offering-left column px-[5%] py-[10%] w-[50%] gap-4 ${offeringNo % 2 === 0 ? 'order-2' : 'order-1'}`}>
        <h5>0{offeringNo}</h5>
        <h3 className="text-3xl font-medium">{offeringHeader}</h3>
        <p className="text-lg">{offeringDescription}</p>
      </div>
      <div className={`flex offering-img w-[50%] ${offeringNo % 2 === 0 ? 'order-1' : 'order-2'}`}>
        <img src={offeringImg} alt={offeringHeader} />
      </div>
    </div>
  );
}

export default OfferingCard;
