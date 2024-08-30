import React, { useState } from "react";
import "boxicons/css/boxicons.min.css";

const Models = () => {
  const [cart, Setcart] = useState(0);

  const addCart = () => {
    Setcart(cart + 1);
  };

  return (
    <section className="bg-white">
      <div className="container mx-auto flex items-center h-32">
        <p className="font-bold text-5xl">Models</p>
        <i className="bx bx-cart text-4xl ml-[90%] cursor-pointer"></i>
        <p className="ml-2 cursor-pointer">{cart}</p>
      </div>
      <div className="flex justify-center">
        <div className="max-w-[1920px] bg-white flex flex-wrap justify-center w-screen ">
          <div className="w-full lg:w-1/3 h-[430px] flex justify-center items-center bg-black bg-[url('https://files.porsche.com/filestore/image/multimedia/none/carrange-flyout-718/small/e7041e23-0b8d-11ef-8128-005056bbdc38;sM;twebp;c892;gc/porsche-small.webp')] bg-cover bg-center">
            <div className=" w-[89%] h-[89%]">
              <div className="text-white font-semibold">
                <h1 className="text-5xl">718</h1>
                <span className="text-xl">
                  For price inquiries, please contact your official local
                  Porsche Dealer.
                </span>
              </div>
              <div className="mt-56 flex gap-2">
                <button className="flex items-center px-4 py-2 border border-black bg-white hover:bg-red-600 hover:text-white transition-colors">
                  <i className="bx bx-link-external mr-2 text-xl"></i>
                  <span>Build Your Own</span>
                </button>
                <button className="flex items-center px-4 py-2 border border-white text-white hover:text-red-600 hover:border-red-600 transition-colors">
                  <i className="bx bx-chevron-right text-4xl "></i>
                  <span>All Models</span>
                </button>
                <button
                  onClick={addCart}
                  className="flex items-center px-4 py-2 border border-white text-white hover:text-red-600 hover:border-red-600 transition-colors"
                >
                  <i className="bx bx-chevron-right text-4xl "></i>
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 h-[430px] flex justify-center items-center bg-black bg-[url('https://files.porsche.com/filestore/image/multimedia/none/carrange-flyout-911/small/0e1cf3c0-0b8e-11ef-8128-005056bbdc38;sG;twebp;c890;gc/porsche-small.webp')] bg-cover bg-center">
            <div className=" w-[89%] h-[89%]">
              <div className="text-white font-semibold">
                <h1 className="text-5xl">911</h1>
                <span className="text-xl">
                  For price inquiries, please contact your official local
                  Porsche Dealer.
                </span>
              </div>
              <div className="mt-56 flex gap-2">
                <button className="flex items-center px-4 py-2 border border-black bg-white hover:bg-red-600 hover:text-white transition-colors">
                  <i className="bx bx-link-external mr-2 text-xl"></i>
                  <span>Build Your Own</span>
                </button>
                <button className="flex items-center px-4 py-2 border border-white text-white hover:text-red-600 hover:border-red-600 transition-colors">
                  <i className="bx bx-chevron-right text-4xl "></i>
                  <span>All Models</span>
                </button>
                <button
                  onClick={addCart}
                  className="flex items-center px-4 py-2 border border-white text-white hover:text-red-600 hover:border-red-600 transition-colors"
                >
                  <i className="bx bx-chevron-right text-4xl "></i>
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 h-[430px] flex justify-center items-center bg-black bg-[url('https://files.porsche.com/filestore/image/multimedia/none/carrange-flyout-taycan/small/06c7f690-0b8d-11ef-8128-005056bbdc38;sG;twebp;c890;gc/porsche-small.webp')] bg-cover bg-center">
            <div className=" w-[89%] h-[89%]">
              <div className="text-white font-semibold">
                <h1 className="text-5xl">Taycan</h1>
                <span className="text-xl">
                  For price inquiries, please contact your official local
                  Porsche Dealer.
                </span>
              </div>
              <div className="mt-56 flex gap-2">
                <button className="flex items-center px-4 py-2 border border-black bg-white hover:bg-red-600 hover:text-white transition-colors">
                  <i className="bx bx-link-external mr-2 text-xl"></i>
                  <span>Build Your Own</span>
                </button>
                <button className="flex items-center px-4 py-2 border border-white text-white hover:text-red-600 hover:border-red-600 transition-colors">
                  <i className="bx bx-chevron-right text-4xl "></i>
                  <span>All Models</span>
                </button>
                <button
                  onClick={addCart}
                  className="flex items-center px-4 py-2 border border-white text-white hover:text-red-600 hover:border-red-600 transition-colors"
                >
                  <i className="bx bx-chevron-right text-4xl "></i>
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 h-[430px] flex justify-center items-center bg-black bg-[url('https://files.porsche.com/filestore/image/multimedia/none/carrange-flyout-panamera/small/34c0f4d3-0b8e-11ef-8128-005056bbdc38;sG;twebp;c890;gc/porsche-small.webp')] bg-cover bg-center">
            <div className=" w-[89%] h-[89%]">
              <div className="text-white font-semibold">
                <h1 className="text-5xl">Panamera</h1>
                <span className="text-xl">
                  For price inquiries, please contact your official local
                  Porsche Dealer.
                </span>
              </div>
              <div className="mt-56 flex gap-2">
                <button className="flex items-center px-4 py-2 border border-black bg-white hover:bg-red-600 hover:text-white transition-colors">
                  <i className="bx bx-link-external mr-2 text-xl"></i>
                  <span>Build Your Own</span>
                </button>
                <button className="flex items-center px-4 py-2 border border-white text-white hover:text-red-600 hover:border-red-600 transition-colors">
                  <i className="bx bx-chevron-right text-4xl "></i>
                  <span>All Models</span>
                </button>
                <button
                  onClick={addCart}
                  className="flex items-center px-4 py-2 border border-white text-white hover:text-red-600 hover:border-red-600 transition-colors"
                >
                  <i className="bx bx-chevron-right text-4xl "></i>
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 h-[430px] flex justify-center items-center bg-black bg-[url('https://files.porsche.com/filestore/image/multimedia/none/carrange-flyout-macan/small/58522db0-0b8e-11ef-8128-005056bbdc38;sG;twebp;c890;gc/porsche-small.webp')] bg-cover bg-center">
            <div className=" w-[89%] h-[89%]">
              <div className="text-white font-semibold">
                <h1 className="text-5xl">Macan</h1>
                <span className="text-xl">
                  For price inquiries, please contact your official local
                  Porsche Dealer.
                </span>
              </div>
              <div className="mt-56 flex gap-2">
                <button className="flex items-center px-4 py-2 border border-black bg-white hover:bg-red-600 hover:text-white transition-colors">
                  <i className="bx bx-link-external mr-2 text-xl"></i>
                  <span>Build Your Own</span>
                </button>
                <button className="flex items-center px-4 py-2 border border-white text-white hover:text-red-600 hover:border-red-600 transition-colors">
                  <i className="bx bx-chevron-right text-4xl "></i>
                  <span>All Models</span>
                </button>
                <button
                  onClick={addCart}
                  className="flex items-center px-4 py-2 border border-white text-white hover:text-red-600 hover:border-red-600 transition-colors"
                >
                  <i className="bx bx-chevron-right text-4xl "></i>
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 h-[430px] flex justify-center items-center bg-black bg-[url('https://files.porsche.com/filestore/image/multimedia/none/carrange-flyout-cayenne/small/6d03d962-0b8e-11ef-8128-005056bbdc38;sG;twebp;c890;gc/porsche-small.webp')] bg-cover bg-center">
            <div className=" w-[89%] h-[89%]">
              <div className="text-white font-semibold">
                <h1 className="text-5xl">Cayenne</h1>
                <span className="text-xl">
                  For price inquiries, please contact your official local
                  Porsche Dealer.
                </span>
              </div>
              <div className="mt-56 flex gap-2">
                <button className="flex items-center px-4 py-2 border border-black bg-white hover:bg-red-600 hover:text-white transition-colors">
                  <i className="bx bx-link-external mr-2 text-xl"></i>
                  <span>Build Your Own</span>
                </button>
                <button className="flex items-center px-4 py-2 border border-white text-white hover:text-red-600 hover:border-red-600 transition-colors">
                  <i className="bx bx-chevron-right text-4xl "></i>
                  <span>All Models</span>
                </button>
                <button
                  onClick={addCart}
                  className="flex items-center px-4 py-2 border border-white text-white hover:text-red-600 hover:border-red-600 transition-colors"
                >
                  <i className="bx bx-chevron-right text-4xl "></i>
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Models;
