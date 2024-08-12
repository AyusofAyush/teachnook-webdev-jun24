import React from "react";
import Button from "../Button/Button";
import "./Footer.scss";

function Footer() {
  return (
    <footer>
      <section className="flex footer-section-parent column">
        <div className="flex center gap-8 highlight-overlay column px-[20%] h-100">
          <h4 className="text-lg font-light uppercase text-center">
            Prefix for the Footer Call to action section will be here
          </h4>
          <h1 className="text-4xl text-center font-semibold">
            We Will Write a Convincing Call To Action to Engage Your Audience
            Here
          </h1>
          <Button />
        </div>
      </section>
      <div className="flex copyright-section center py-[2%]">
        Copyright © {new Date().getFullYear()} Travel Company
      </div>
    </footer>
  );
}

export default Footer;
