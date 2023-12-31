import React, { useState } from "react";
import ReactModal from "./Modal";
import Image from "next/image";
import { SearchIcon } from "@heroicons/react/solid";
import { AiOutlinePlus } from "react-icons/ai";
import { HiDotsVertical } from "react-icons/hi";
import { TbLanguageKatakana } from "react-icons/tb";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { CiKeyboard } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
import { useRouter } from "next/router";
function Header() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const onTrueShow = () => {
    setShowModal(true);
  };
  const onFalseShow = () => {
    setShowModal(false);
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      {/* Left */}
      <div className="  sticky top-0 z-50 flex flex-wrap shadow-md outline-2 py-1 px-1 w-100 cursor-pointer w-[100%] ">
        <div onClick={() => router.push("/Homepage")}>
          <Image
            src="/tt.jpg"
            width={170}
            height={42}
            objectFit="contain"
            objectPosition="left"
            alt="Image not found"
            quality={100}
            backgroundcolor="red"
          />
        </div>
        {/* Middle */}
        <div className="flex grow justify-center  ">
          <div className="flex group items-center bg-[#F1F1F2] w-[500px] border-[2px] rounded-full border-slate-100 hover:border-slate-300 pl-6 justify-between overflow-hidden">
            <input
              className="flex bg-inherit rounded-full focus:outline-none text-sm py-3 text-gray-600 placeholder-slate-400 w-[90%]"
              type="text"
              placeholder={"Search"}
            />
            <div className="h-[80%] w-[1px] bg-slate-400"></div>
            <div className="text-slate-300 w-[10%] group-hover:bg-gray-100 group-hover:text-black h-full flex items-center justify-center">
              <SearchIcon className="w-6" />
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="flex items-center space-x-4 justify-end text-gray-400">
          <div className="rounded-md x cursor-pointer px-4 py-2 border-[1px] border-slate-300 flex items-center gap-2 text-black font-bold justify-center">
            <AiOutlinePlus className="" />
            <button onClick={onTrueShow}>Upload</button>
            {showModal && (
              <ReactModal showModal={showModal} setShowModal={setShowModal} />
            )}
          </div>
          <div className="rounded-md x cursor-pointer px-4 py-2 border-[1px] border-slate-300 flex items-center gap-2 text-white font-bold justify-center bg-[#FD5B61] w-[100px]">
            Login
          </div>
          <div
            className="text-gray-500 space-x-1 p-1 relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <HiDotsVertical size={25} className="pr-1 cursor-pointer" />
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-60 bg-white border border-gray-200 rounded-md shadow-lg">
                <div className="py-1">
                  <div
                    className=" block px-4 py-2 text-gray-800 hover:bg-gray-200 w-[100%]"
                    onClick={() => {
                      // Handle option 1 click
                    }}
                  >
                    <div className="flex items-center gap-2 text-gray-800 ">
                      <div className="font bold">
                        <TbLanguageKatakana
                          className=" cursor pointer"
                          size={20}
                        />
                      </div>
                      English
                    </div>
                  </div>
                  <div
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={() => {
                      router.push("/Feedback");
                    }}
                  >
                    <div className="flex items-center gap-2  text-gray-800 ">
                      <div className="font bold">
                        <RxQuestionMarkCircled className="font-bold cursor-pointer" />
                      </div>
                      Feeback and help
                    </div>
                  </div>
                  <div
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={() => {
                      // Handle option 2 click
                    }}
                  >
                    <div className=" gap-2  w-[100%] flex items-center text-gray-800">
                      <div className="font bold">
                        <CiKeyboard className="font-bold" />
                      </div>
                      Keyboard Shortcuts
                    </div>
                  </div>
                  <div
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    // onClick={DarkModeToggle}
                  >
                    <div className=" gap-2  w-[100%] flex items-center text-gray-800 ">
                      <div className="font bold">
                        <MdOutlineDarkMode className="font-bold" />
                      </div>
                      Dark Mode
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
