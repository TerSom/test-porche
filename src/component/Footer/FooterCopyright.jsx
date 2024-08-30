import "boxicons/css/boxicons.min.css";

const FooterCopyright = () => {
  return (
    <div className="w-full h-80 flex justify-center items-center ">
      <div className="bg-gray-900 max-w-[1920px] h-full w-full flex justify-center items-center">
        <div className="container mx-auto h-[80%]">
          <span className="text-3xl font-bold text-white">
            Change country/region:
          </span>
          <div className="flex gap-6 flex-wrap">
          <button className="flex border w-96 h-14 text-white border-black bg-gray-500 my-4 items-center">
            <span className="ml-4">FInd taycan Models</span>
            <i className='bx bx-chevron-down text-3xl ml-48'  ></i>
          </button>
          <button className="flex border w-96 h-14 text-white border-black bg-gray-500 my-4 items-center">
            <span className="ml-4">Select a country/region</span>
            <i className='bx bx-chevron-down text-3xl ml-40' ></i>
          </button>
          </div>
          <hr className="container mx-auto p-4 border-gray-500 my-5" />
          <span className="text-white text-center">
            © 2024 Porsche Asia Pacific Pte. Ltd.{" "}
            <a href="#" className="underline hover:text-red-500">Legal Notice</a>.{" "}
            <a href="#" className="underline hover:text-red-500">Privacy Policy</a>.{" "}
            <a href="#" className="underline hover:text-red-500">Cookie Policy</a>.{" "}
            <a href="#" className="underline hover:text-red-500">Open Source Software Notice</a>.{" "}
            <a href="#" className="underline hover:text-red-500">Whistleblower System</a>.
          </span>
        </div>
      </div>
    </div>
  );
};

export default FooterCopyright;
