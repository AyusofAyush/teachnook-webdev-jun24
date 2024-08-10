import React from "react";
import Header from "../../components/common/Header/Header";
import Button from "../../components/common/Button/Button";
import "./Home.scss";
import aboutUsImg from "../../assets/about.jpg";
import CoreValue from "../../components/common/CoreValue/CoreValue";
import {coreValArray, testimonialsArray, uniqueValueArray} from '../../utils/constants';
import Testimonials from "../../components/common/Testimonials/Testimonials";
import Footer from "../../components/common/Footer/Footer";

function Home() {


  return (
    <>
      <Header />
      <section className="flex center hero-section px-[5%]">
        <div className="flex center gap-8 hero-overlay column px-[25%]">
          <h4 className="text-xl font-light uppercase">
            Prefix describing what your business does will be here
          </h4>
          <h1 className="text-6xl text-center">
            We Will Write a Headline Highlighting Your Business Offerings Here
          </h1>
          <Button />
        </div>
      </section>
      <main className="flex headline-parent column gap-2 px-[10%] pb-[10%]">
        <section className="flex about-us-parent space-btw">
          <div className="flex about-us-desc column gap-4 hrtlCenter px-[5%] w-[50%]">
            <h5 className="uppercase text-base">About Us</h5>
            <h1 className="text-[40px] font-medium">
              Short Headline for Company About Section Will Be Here
            </h1>
            <p className="tracking-wide font-light mb-2">
              This part will introduce you or your business to website visitors.
              We'll write about you, your organization, the products or services
              you offer, and why your company exists.
            </p>
            <div>
              <Button />
            </div>
          </div>
          <div className="about-us-img">
            <img src={aboutUsImg} alt="about us img" />
          </div>
        </section>
        <section className="flex headline-body column mt-[5%] gap-5">
          <h5 className="text-center uppercase tracking-wider">
            Prefix describing what your business does will be here
          </h5>
          <h1 className="text-center text-[40px] px-[20%]">
            Headline Describing Your Company Core Values Will Come Here
          </h1>
          <div className="flex mt-8 gap-4">
            {coreValArray?.map((item) => {
              return (
                <CoreValue
                  coreNo={item.coreNo}
                  coreValue={item.coreValue}
                  corePara={item.corePara}
                />
              );
            })}
          </div>
        </section>
      </main>

      <section className="flex highlight-section-parent column">
        <div className="flex center gap-8 highlight-overlay column px-[20%] h-100">
          <h4 className="text-lg font-light uppercase text-center">
            Prefix describing what your business does will be here
          </h4>
          <h1 className="text-4xl text-center font-semibold">
            Heading for the Middle Call to Action Will Be Written Here
          </h1>
          <Button />
        </div>
      </section>

      <section className="flex value-section-parent mx-[10%] py-[10%]">
        <div className="flex value-left column gap-10 px-[10%]">
          <h4 className="text-lg font-light uppercase">
            We will write a prefix describing what makes people choose your
            business here
          </h4>
          <h1 className="text-4xl font-semibold">
            Headline for Company About Section Will Be Here
          </h1>
          <p className="tracking-wide font-light mb-2">
            In this part, we will write a sub-headline briefly describing your
            company's unique value proposition.
          </p>
        </div>
        <div className="flex value-right column">
          {uniqueValueArray?.map((item) => {
            return (
              <CoreValue
                coreValue={item.coreValue}
                corePara={item.corePara}
                showCoreNo={item.showCoreNo}
              />
            );
          })}
        </div>
      </section>

      <section className="flex testimonials-section column px-[10%] py-[5%] gap-10">
        <h1 className="text-center text-4xl">Short Heading for Testimonials Section </h1>
        <div className="flex testimonial-group gap-8">
          {
            testimonialsArray?.map(item => {
              return <Testimonials testimonialPara={item.testimonialPara} />
            })
          }
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
