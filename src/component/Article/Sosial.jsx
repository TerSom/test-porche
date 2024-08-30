import "boxicons/css/boxicons.min.css";

const Sosial = () => {
  return (
    <section className="bg-white">
      <div className=" mt-16 container mx-auto flex items-center h-32">
        <p className="font-bold text-5xl">Porsche Social</p>
      </div>
      <div className="container mx-auto h-80 flex justify-center items-center bg-[url('https://files.porsche.com/filestore/image/multimedia/none/module-background-leipzig/normal/dc3517d1-1668-11ea-80c6-005056bbdc38;sN/porsche-normal.jpg')] bg-cover bg-center ">
        <div className="  text-white w-[90%] h-[55%]">
          <p className="text-3xl font-semibold">
            Information on data processing
          </p>
          <p className="my-2">
            On our website we provide content from Storystream. To view this
            content, you must agree to the data processing by Storystream.
          </p>
          <button className="flex items-center w-48 h-14 justify-center border text-black border-black bg-white hover:bg-red-600 hover:text-white  transition-colors">
            <i className="bx bx-chevron-right text-4xl  "></i>
            <span className="text-xl mr-4">Agree</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sosial;
