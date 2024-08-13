import React from "react";
import Header from "../../components/common/Header/Header";
import "./About.scss";
import Footer from "../../components/common/Footer/Footer";

function About() {
  return (
    <>
      <Header />
      <section className="flex center about-us-hero-section px-[5%]">
        <div className="flex center gap-8 hero-overlay column px-[30%]">
          <h4 className="text-xl font-light uppercase">About Us</h4>
          <h1 className="text-6xl text-center">
            Headline for the About Page Will Be Here
          </h1>
        </div>
      </section>

      <section className="flex about-headline-section p-[8%] px-[10%]">
        <div className="flex left-part column gap-5">
          <h4 className="text-xl font-light uppercase">
            Prefix for the About Section will be written here
          </h4>
          <h1 className="text-5xl">
            Short Headline for Company About Section Will Be Here​
          </h1>
        </div>
        <div className="flex right-part column gap-5 hrtlCenter">
          <p className="p1 text-lg">
            This part will introduce you or your business to website visitors.
            We'll write about you, your organization, the products or services
            you offer, and why your company exists.
          </p>
          <p className="p2 text-md">
            For this part, we will write an additional introduction of yourself
            or your business. This can be about your company history, success
            stories, or the product or services you offer. It can also tell
            about how you helped clients achieve their desired results.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
