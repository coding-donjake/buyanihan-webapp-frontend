"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faMagnifyingGlass, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="">
      <div className="flex flex-row items-center border-b border-[#450C00]">
        <img className="w-auto h-16" src="/assets/banner.jpg" alt="buyanihan" />
        <span className="ml-auto text-4xl text-[#006723] cursor-pointer sm:hidden" onClick={() => setIsOpen(true)}>
          <FontAwesomeIcon icon={faBars} />
        </span>
        <div className="hidden sm:flex flex-row ml-auto">
          <div className="flex flex-row gap-2 items-center px-4 rounded-full border mr-6 border-[#006723]">
            <input type="text" />
            <span className="cursor-pointer">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
          </div>
          <span className="ml-auto text-4xl text-[#006723] cursor-pointer">
            <FontAwesomeIcon icon={faBell} />
          </span>
          <span className="ml-auto text-4xl text-[#006723] cursor-pointer">
            <FontAwesomeIcon icon={faShoppingCart} />
          </span>
          <span className="ml-auto text-4xl text-[#006723] cursor-pointer">
            <FontAwesomeIcon icon={faUser} />
          </span>
        </div>
      </div>
      <div className="flex flex-row pt-2">
        <button
          className={`p-2 ${pathname == "/" ? "bg-[#006723] font-bold text-white" : ""} hover:underline`}
          onClick={() => router.push("/")}
        >
          Home
        </button>
        <button
          className={`p-2 ${pathname == "/products" ? "bg-[#006723] font-bold text-white" : ""} hover:underline`}
          onClick={() => router.push("/products")}
        >
          All Products
        </button>
        <button
          className={`p-2 ${pathname == "/contact-us" ? "bg-[#006723] font-bold text-white" : ""} hover:underline`}
          onClick={() => router.push("/contact-us")}
        >
          Contact Us
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${isOpen ? "absolute" : "hidden"} absolute top-0 left-0 z-10 w-screen max-w-screen h-screen max-h-screen bg-black/80`}
        onClick={() => setIsOpen(false)}
      >
        <div className="flex flex-col gap-4 w-64 h-screen ml-auto p-4 bg-white" onClick={(e) => e.stopPropagation()}>
          <button className={`p-2 ${pathname == "/" ? "bg-[#006723] font-bold text-white" : ""} hover:underline`}>
            Cart
          </button>
          <button
            className={`p-2 ${pathname == "/products" ? "bg-[#006723] font-bold text-white" : ""} hover:underline`}
          >
            Navigations
          </button>
          <button
            className={`p-2 ${pathname == "/contact-us" ? "bg-[#006723] font-bold text-white" : ""} hover:underline`}
          >
            Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
