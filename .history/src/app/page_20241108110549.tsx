import Navbar from "./components/Navbar"
import React from 'react';
// import Image from "next/image";
import Shop from "./components/Shop";
import About from "./components/About"
import ParallaxImage from "./components/MoveImg"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function Hero() {
  return (
    <div className="relative">
      <header>
        <Navbar />
      </header>
      <section
      className="relative h-screen bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/bg.webp')" }}
    >
      <div className="absolute inset-0  opacity-50"></div> {/* Optional overlay for better text visibility */}
      
      {/* <div className="flex items-center justify-center h-full">
        <div className="p-2 bg-white">
          <div className="bg-white p-10 text-center border border-customTextColor max-w-md">
            <h1 className="text-customTextColor text-5xl mb-4">FLAMINGO DESIGNS</h1>
            <hr className="border-t-2 border-customTextColor mb-4 w-1/2 mx-auto" />
            <p className="text-customTextColor text-lg">H A N D C R A F T E D C O L L E C T I O N</p>
          </div>
        </div>
      </div> */}
      <div className="flex items-center justify-center h-full p-4 md:p-8">
  <div className="p-2 bg-w ">
    <div className="bg-white p-6 sm:p-8 md:p-10 text-center border border-customTextColor max-w-sm sm:max-w-md mx-auto">
      <h1 className="text-customTextColor text-3xl sm:text-4xl md:text-5xl mb-4">
        FLAMINGO DESIGNS
      </h1>
      <hr className="border-t-2 border-customTextColor mb-4 w-1/2 mx-auto" />
      <p className="text-customTextColor text-md sm:text-lg">
        H A N D C R A F T E D C O L L E C T I O N
      </p>
    </div>
  </div>
</div>

    </section>

      <section>
        <div className="">
          <Shop />
        </div>
      </section>

      <section>
        <div className="">
          <About />
        </div>
      </section>

      <section>
        <div>
          <ParallaxImage />
        </div>
      </section>

      <section>
        <div>
          <Contact />
        </div>
      </section>

      <section>
        <div>
          <Footer />
        </div>
      </section>
    </div>
  )
}
