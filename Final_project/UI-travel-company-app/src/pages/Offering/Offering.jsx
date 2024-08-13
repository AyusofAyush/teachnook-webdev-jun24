import React, { useEffect } from "react";
import "./Offering.scss";
import Header from "../../components/common/Header/Header";
import Footer from "../../components/common/Footer/Footer";
import { useState } from "react";
import { getOfferings } from "../../service.js/api";
import OfferingCard from "../../components/common/OfferingCard/OfferingCard";

function Offering() {
  const [offeringsArray, setofferingsArray] = useState([]);

  useEffect(() => {
    getOfferings().then((items) => setofferingsArray(items?.data));
  }, []);

  return (
    <>
      <Header />
      <section className="flex center offering-hero-section px-[5%]">
        <div className="flex center gap-8 hero-overlay column px-[30%]">
          <h4 className="text-xl font-light uppercase">Offering</h4>
          <h1 className="text-6xl text-center">
            Headline for the Offering Page Will Be Here
          </h1>
        </div>
      </section>

      <main className="flex offerings-section px-[10%]">
        <div className="flex offering-wrapper column">
          {offeringsArray?.map((item) => {
            return (
              <OfferingCard
                offeringNo={item.offeringNo}
                offeringHeader={item.offeringHeader}
                offeringImg={item.offeringImg}
                offeringDescription={item.offeringDescription}
              />
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Offering;
