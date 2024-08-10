import React from "react";
import quotes from "../../../assets/quotes.svg";
import './Testimonials.scss';

function Testimonials({
  testimonialPara = "",
  author = "– Testimonial Author Name",
}) {
  return (
    <div className="flex testimonials-cell column gap-4">
      <div className="quote-img">
        <img src={quotes} alt="quotes mark" />
      </div>
      <p className="text-base">"{testimonialPara}"</p>
      <h4>{author}</h4>
    </div>
  );
}

export default Testimonials;
