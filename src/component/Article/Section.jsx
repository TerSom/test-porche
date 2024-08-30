import "boxicons/css/boxicons.min.css";

const Section = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto flex items-center h-32">
        <p className="font-bold text-5xl">Find a Porsche near you</p>
      </div>
      <div className="container mx-auto w-full h-auto flex justify-center px-4 lg:px-0">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="w-full flex flex-col items-center  ">
            <img
              src="https://files.porsche.com/filestore/image/multimedia/none/homepage-teaser-icc-718/normal/db4be0ec-f8f4-11eb-80db-005056bbdc38;sO;twebp/porsche-normal.webp"
              alt=""
              className="w-full h-auto"
            />
            <button className="flex items-center px-4 py-2 border text-white border-black bg-gray-900 hover:bg-red-600 transition-colors">
              <i className="bx bx-chevron-right text-4xl "></i>
              <span>FInd 718 Models</span>
            </button>
          </div>
          <div className="w-full flex flex-col items-center">
            <img
              src="https://files.porsche.com/filestore/image/multimedia/none/homepage-teaser-icc-911/normal/e7c2070d-f8f4-11eb-80db-005056bbdc38;sO;twebp/porsche-normal.webp"
              alt=""
              className="w-full h-auto"
            />
            <button className="flex items-center px-4 py-2 border text-white border-black bg-gray-900 hover:bg-red-600 transition-colors">
              <i className="bx bx-chevron-right text-4xl "></i>
              <span>FInd 911 Models</span>
            </button>
          </div>
          <div className="w-full flex flex-col items-center">
            <img
              src="https://files.porsche.com/filestore/image/multimedia/none/homepage-teaser-icc-taycan/normal/253ef544-f8f5-11eb-80db-005056bbdc38;sO;twebp/porsche-normal.webp"
              alt=""
              className="w-full h-auto"
            />
            <button className="flex items-center px-4 py-2 border text-white border-black bg-gray-900 hover:bg-red-600 transition-colors">
              <i className="bx bx-chevron-right text-4xl "></i>
              <span>FInd taycan Models</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
