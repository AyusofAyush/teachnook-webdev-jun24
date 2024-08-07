import React from "react";
import Header from "../../components/common/Header/Header";
import Button from "../../components/common/Button/Button";
import "./Home.scss";
import aboutUsImg from "../../assets/about.jpg";
import CoreValue from "../../components/common/CoreValue/CoreValue";

function Home() {
  let coreValArray = [
    {
      coreNo: "01",
      coreValue: "Core Value 1",
      corePara:
        "In this part, we will write about the core values and guiding principles that influence your business choices and operations.",
    },
    {
      coreNo: "02",
      coreValue: "Core Value 2",
      corePara:
        "In this part, we will write about the core values and guiding principles that influence your business choices and operations.",
    },
    {
      coreNo: "03",
      coreValue: "Core Value 3",
      corePara:
        "In this part, we will write about the core values and guiding principles that influence your business choices and operations.",
    },
  ];
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
      <main className="flex headline-parent column gap-2 px-[10%]">
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
            <img src={aboutUsImg} />
          </div>
        </section>
        <section className="flex headline-body column mt-[5%] gap-5">
          <h5 className="text-center uppercase tracking-wider">
            Prefix describing what your business does will be here
          </h5>
          <h1 className="text-center text-[40px] px-[20%]">
            Headline Describing Your Company Core Values Will Come Here
          </h1>
          {coreValArray?.map((item) => {
            return (
              <CoreValue
                coreNo={item.coreNo}
                coreValue={item.coreValue}
                corePara={item.corePara}
              />
            );
          })}
        </section>
      </main>
    </>
  );
}

export default Home;
