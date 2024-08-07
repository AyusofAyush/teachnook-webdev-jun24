import React from "react";
import './Button.scss';

function Button({btnType = 'call-to-action-btn'}) {
  return (
    <button className={`flex ${btnType} center font-semibold uppercase`}>
      Call to Action
    </button>
  );
}

export default Button;
