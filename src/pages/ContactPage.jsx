// src/pages/ContactPage.jsx
import React from "react";
import HeroContact from "../components/HeroContact";
import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <>
      <HeroContact />
      <section id="contact-form" >
        <Contact />
      </section>
    </>
  );
}



