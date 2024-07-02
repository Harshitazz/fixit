import React from "react";
import { GoogleLogin } from '@react-oauth/google';


function Navbar({ onLoginSuccess, onLoginError }) {
   

  return (
    <header className=" fixed top-0 z-50 w-full left-0 right-0   transition-all ease   duration-200  py-0  h-[60px]   bg-black block">
      <nav className="flex items-center justify-between w-[95%] sm:w-[85%]  mx-auto">
        <div className="flex items-center justify-between w-[95%] sm:w-[85%]  mx-auto">
          <a href="/">
            <div className="flex items-center transition-all ease  duration-200  gap-x-2">
              <img
                decoding="async"
                style={{ color: "transparent" }}
                src="https://www.fix-it.ai/_next/static/media/fixit_white_bg.3734d2d4.svg"
                loading="lazy"
                data-nimg="1"
                width="25"
                height="25"
              />
              <h4 className="text-white text-[2rem]">fiXit</h4>
            </div>
          </a>
          <div></div>

          <div
            className="hidden md:flex text-sm   lg:w-80 max-w-80 justify-end
         items-center gap-x-5 false"
          >
            <a className="flex   min-w-fit " href="/about">
              <button className=" rounded-sm border px-3  py-1.5 flex  min-w-fit font-bold text-white border-transparent">
                {" "}
                about us
              </button>
            </a>
            <a
              href=""
              className=" rounded-sm border px-3 py-1.5 flex w-full min-w-max    font-bold 
              text-white border-transparent"
            >
              call auditing
            </a>

            <a
              href=""
              className=" rounded-sm border px-3 py-1.5 flex w-full min-w-max    font-bold 
              text-white border-transparent" 
            >
              <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
              </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
