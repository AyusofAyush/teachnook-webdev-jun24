import React from "react";
import { ReactComponent as MySVG } from "../../../assets/quotes.svg";
// import quotes from "../../../assets/quotes.svg"; // this is also one way to import 
import './Testimonials.scss';

function Testimonials({
  testimonialPara = "",
  author = "– Testimonial Author Name",
}) {
  return (
    <div className="flex testimonials-cell column gap-4">
      <div className="quote-img">
        {/* <img src={quotes} alt="quotes mark" />
         */}
         <MySVG style={{ fill: 'teal' }} />
      </div>
      <p className="text-base">"{testimonialPara}"</p>
      <h4>{author}</h4>
    </div>
  );
}

export default Testimonials;
