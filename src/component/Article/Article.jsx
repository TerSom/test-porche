import React from "react";
import logo from "../assets/arrow.png";
import Models from "./Models";

const Article = () => {
  return (
    <section className="bg-white">
      <div className="relative flex justify-center items-center">
        <img
          className="h-auto object-cover"
          src="https://files.porsche.com/filestore/image/multimedia/none/rd-2024-homepage-banner-ww-sos992gts-kw22/normal/508723fb-1c15-11ef-812b-005056bbdc38;sK;twebp/porsche-normal.webp"
          alt="Porsche"
        />
        <div className="container mx-auto mr-5 absolute bottom-20 flex items-center gap-3 cursor-pointer">
          <img className="w-17 h-17 mb-6" src={logo} alt="Arrow left" />
          <div className="text-white hover:text-red-600 cursor-pointer">
            <span className="block text-5xl font-bold mx-1">
              The one and always.
            </span>
            <span className="block text-3xl font-bold">The new 911.</span>
          </div>
        </div>
      </div>
      <Models></Models>
    </section>
  );
};

export default Article;
