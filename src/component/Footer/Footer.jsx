import React from "react";
import "boxicons/css/boxicons.min.css";

const Footer = () => {
  return (
    <footer className="bg-white py-28">
      <hr className="container mx-auto p-4  border-gray-500" />
      <div className="container mx-auto grid grid-cols-3 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold mb-4">Build & Find</h3>
          <ul className="space-y-9">
            <li>
              <a href="#" className="text-gray-600 hover:text-red-600">
                Build your Porsche
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-red-600">
                Find Your Porsche
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-red-600">
                Find a Porsche Centre
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Online Services</h3>
          <ul className="space-y-9">
            <li>
              <a href="#" className="text-gray-600 hover:text-red-600">
                Sign up for News
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Behind the Scenes</h3>
          <ul className="space-y-9">
            <li>
              <a href="#" className="text-gray-600 hover:text-red-600">
                Passion Motorsports
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-red-600">
                Porsche Classic
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-red-600">
                Visit Porsche Museum
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Porsche Company</h3>
          <ul className="space-y-9">
            <li>
              <a href="#" className="text-gray-600 hover:text-red-600">
                Latest News
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-red-600">
                At a Glance
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-red-600">
                Jobs & Careers
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-red-600">
                Contact & Information
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-red-600">
                Christophorus - The Porsche Magazine
              </a>
            </li>
          </ul>
          <div className="bg-gray-900 w-full h-14 flex items-center text-white my-10 hover:bg-red-600 cursor-pointer">
            <i className="bx bxs-share-alt mx-3 text-3xl"></i>
            <span className=" text-base">Share Page</span>
          </div>
          <div className=" w-full h-9">
            <span className="text-xl text-gray-500 font-semibold">Connect with Porsche</span>
            <div className=" w-full h-14 flex justify-around ">
              <div className="bg-gray-900 w-[15%] flex justify-center items-center text-4xl text-white hover:bg-blue-900">
                <i className="bx bxl-facebook"></i>
              </div>
              <div className="bg-gray-900 w-[15%] flex justify-center items-center text-4xl text-white hover:bg-red-700">
                <i className="bx bxl-youtube"></i>
              </div>
              <div className="bg-gray-900 w-[15%] flex justify-center items-center text-4xl text-white hover:bg-blue-400">
                <i className="bx bxl-twitter"></i>
              </div>
              <div className="bg-gray-900 w-[15%] flex justify-center items-center text-4xl text-white hover:bg-red-700">
                <i className="bx bxl-pinterest-alt"></i>
              </div>
              <div className="bg-gray-900 w-[15%] flex justify-center items-center text-4xl text-white hover:bg-blue-500">
                <i className="bx bxl-instagram"></i>
              </div>
              <div className="bg-gray-900 w-[15%] flex justify-center items-center text-4xl text-white hover:bg-blue-700">
                <i className="bx bxl-linkedin"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
