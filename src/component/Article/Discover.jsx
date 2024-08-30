import "boxicons/css/boxicons.min.css";

const Discover = () => {
    return (
      <section>
        <div className="container mx-auto flex items-center h-32">
          <p className="font-bold text-5xl">Discover</p>
        </div>
        <div className="container mx-auto flex flex-wrap bg-black cursor-pointer ">
          <div className="bg-white w-full sm:w-1/2 md:w-1/4 hover:text-red-600">
            <img
              src="https://files.porsche.com/filestore/image/multimedia/none/rd-2018-homepage-teaser-ww-e-performance-kw12/normal/f7cc8e7c-6599-11e9-80c4-005056bbdc38;sK;twebp/porsche-normal.webp"
              alt="Porsche 1"
              className="w-full h-auto"
            />
            <div className="flex items-center">
            <i className="bx bx-chevron-right text-4xl text-red-600"></i>
            <span>Porsche E-Performance</span>
            </div>
          </div>
          <div className="bg-white w-full sm:w-1/2 md:w-1/4 hover:text-red-600">
            <img
              src="https://files.porsche.com/filestore/image/multimedia/none/rd-2022-homepage-teaser-ww-pds-porschelifestyle-kw22/normal/585df047-db34-11ec-80ef-005056bbdc38;sK;twebp/porsche-normal.webp"
              alt="Porsche 2"
              className="w-full h-auto"
            />
            <div className="flex items-center">
            <i className="bx bx-chevron-right text-4xl text-red-600"></i>
            <span>Porsche Lifestyle.</span>
            </div>
          </div>
          <div className="bg-white w-full sm:w-1/2 md:w-1/4 hover:text-red-600">
            <img
              src="https://files.porsche.com/filestore/image/multimedia/none/rd-2019-homepage-teaser-ww-roadsbyporsche-kw23/normal/8127be1d-81f3-11e9-80c4-005056bbdc38;sK;twebp/porsche-normal.webp"
              alt="Porsche 3"
              className="w-full h-auto"
            />
            <div className="flex items-center">
            <i className="bx bx-chevron-right text-4xl text-red-600"></i>
            <span>The Scenic Routing Community by Porsche </span>
            </div>
          </div>
          <div className="bg-white w-full sm:w-1/2 md:w-1/4 hover:text-red-600">
            <img
              src="https://files.porsche.com/filestore/image/multimedia/none/rd-2017-homepage-teaser-porscheexclusivemanufaktur-kw24/normal/3cbd9b47-4c59-11e7-bfe2-0019999cd470;sK;twebp/porsche-normal.webp"
              alt="Porsche 4"
              className="w-full h-auto"
            />
            <div className="flex items-center">
            <i className="bx bx-chevron-right text-4xl text-red-600"></i>
            <span>Porsche Exclusive Manufaktur.</span>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Discover;
  