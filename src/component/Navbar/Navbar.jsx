import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white h-20 ">
      <div className="container mx-auto flex items-center h-full ">
        <div className="flex items-center gap-1 hover:bg-stone-400 rounded-md cursor-pointer">
          <img
            className="w-6"
            src="https://cdn.ui.porsche.com/porsche-design-system/icons/menu-lines.min.e3322162121fb57b7109e6c245865e77.svg"
            alt=""
          />
          <p>Menu</p>
        </div>
        <div className="flex mx-auto justify-center">
          <h1 className="porsche text-3xl cursor-pointer mr-5 ri">PORSCHE</h1>
        </div>
        <di className="text-xl hover:text-red-700">
          <a href="/test-porche/">Log out</a>
        </di>
      </div>
    </nav>
  );
};

export default Navbar;
