import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navigation from "./components/Navigation";
// import product from "/assets/product.webp";

const page = () => {
  return (
    <div className="p-4 px-10 max-w-5xl mx-auto">
      <Navigation />
      <div className="mt-8">
        <div className="font-bold text-3xl text-[#006723]">Buy Agricultural Products Online</div>
        <div className="mt-6 font-medium text-xl text-[#006723]">Top Selling Products</div>
        <div className="flex flex-row gap-2 items-center mt-2">
          <div className="flex flex-row flex-wrap gap-4 justify-center w-full p-6 rounded-md bg-[#F5EFDD]">
            <div className="w-52 h-52 border border-gray-100 rounded shadow-lg cursor-pointer bg-white">
              <img className="w-full h-full object-cover" src="/assets/product.webp" alt="" />
            </div>
            <div className="hidden sm:block w-52 h-52 border border-gray-100 rounded shadow-lg cursor-pointer bg-white">
              <img className="w-full h-full object-cover" src="/assets/product.webp" alt="" />
            </div>
            <div className="hidden lg:block w-52 h-52 border border-gray-100 rounded shadow-lg cursor-pointer bg-white">
              <img className="w-full h-full object-cover" src="/assets/product.webp" alt="" />
            </div>
            <div className="hidden lg:block w-52 h-52 border border-gray-100 rounded shadow-lg cursor-pointer bg-white">
              <img className="w-full h-full object-cover" src="/assets/product.webp" alt="" />
            </div>
          </div>
          <div className="absolute left-1/2 w-screen -translate-x-1/2 max-w-5xl">
            <div className="flex flex-row justify-between">
              <span className="text-4xl text-[#006723] cursor-pointer">
                <FontAwesomeIcon icon={faChevronLeft} />
              </span>
              <span className="text-4xl text-[#006723] cursor-pointer">
                <FontAwesomeIcon icon={faChevronRight} />
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center my-8">
          <div className="text-xl italic text-[#006723]">Interested in selling products?</div>
          <button className="p-2 bg-[#B68424] text-white hover:underline">Click to Know More</button>
        </div>
      </div>
    </div>
  );
};

export default page;
