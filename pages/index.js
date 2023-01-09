import Head from "next/head";
import React, { useEffect } from "react";
import MainContainer from "../components/MainContainer"
import BookHoliday from "../components/BookHoliday"
import ContactContainer from "../components/ContactContainer"
import PackagesContainer from "../components/PackagesContainer";
import ServicesContainer from "../components/ServicesContainer";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import Review from "../components/Review";
import Partners from "../components/Partners";

export default function Home() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
  }, [])
  
  return (
    <>
      <Head>
        <title>Tourister</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer />
      <BookHoliday />
      <PackagesContainer/>
      <ServicesContainer/>
      <Gallery/>
      <Review/>
      <Partners/>
      <ContactContainer />
      <Footer/>
    </>
  );
  }
