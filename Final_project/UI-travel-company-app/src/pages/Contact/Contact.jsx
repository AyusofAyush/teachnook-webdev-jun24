import React from "react";
import Footer from "../../components/common/Footer/Footer";
import Header from "../../components/common/Header/Header";
import "./Contact.scss";

function Contact() {
  return (
    <>
      <Header />
      <section className="flex center contact-hero-section px-[5%]">
        <div className="flex center gap-8 hero-overlay column px-[30%]">
          <h4 className="text-xl font-light uppercase">Contact</h4>
          <h1 className="text-6xl text-center">
            Headline for the Contact Page Will Be Here
          </h1>
        </div>
      </section>

      <section className="flex column p-[20%] gap-5">
        <h1 className="text-4xl">Short heading for the Contact Us Section Will Be Here</h1>
        <p>We will write a sub-headline for the Contact Us Section here</p>
        <address>
          A: 2360 Hood Avenue, San Diego, CA, 92123 P: 202-555-0188 E:
          contact@example.com
        </address>
        <h2 className="text-2xl">Follow Us:</h2>
        {/* Social media icons here */}
      </section>
      <Footer />
    </>
  );
}

export default Contact;
