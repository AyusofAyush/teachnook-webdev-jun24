import React from "react";
import Header from "../../components/common/Header/Header";
import Button from "../../components/common/Button/Button";
import "./Home.scss";

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
    </>
  );
}

export default Home;
