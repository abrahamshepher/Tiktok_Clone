import React from "react";
import Header from "../components/Header";
import { useState } from "react";
import { useRouter } from "next/router";
import ArrowButton from "../Constants/ArrowButton";
import Arrowbtn from "../Constants/Arrowbtn";
import Home from "../pages/Home";

function Feedback() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const router = useRouter();
  const handleNavigation = () => {
    router.push("/Feedback");
  };

  return (
    <div className="w-screen">
      <div className="w-full max-w-5xl mx-auto">
        <Header />
        <div className="my-12 text-4xl font-bold cursor-pointer ">
          <h1>Feedback and help</h1>
          <h6 className="text-[18px] my-1 mt-1 px-1 font-thin text-gray-500 cursor-pointer">
            SELECT A TOPIC{" "}
          </h6>
        </div>
        <div className="w-full flex flex-wrap">
          {/* left */}
          <div className=" w-[40%] ">
            <p className="mr-4 py-2 px-2 cursor-pointer"> Suggestions </p>

            {isDropdownOpen && (
              <div className="absolute  mt-2 w-80  rounded-md ">
                <div className="py-1">
                  <div
                    className=" block px-4 py-2 text-gray-800 hover:bg-gray-200 w-[100%] cursor-pointer"
                    onClick={() => {
                      // Handle option 1 click
                    }}
                  >
                    <ArrowButton
                      ButtonText={"My Account & Settings"}
                      onClick={() => alert("THIS SHIT IS WORKING")}
                    />
                  </div>
                  <div
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      handleNavigation();
                    }}
                  >
                    {/* <div className="flex items-center gap-2  text-gray-800 ">
                      Creator tools
                    </div> */}
                    <ArrowButton
                      className="cursor-pointer"
                      ButtonText={"Creator tools"}
                      onClick={() => alert("THIS SHIT IS WORKING")}
                    />
                  </div>
                  <div
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      // Handle option 2 click
                    }}
                  >
                    {/* <div className=" gap-2  w-[100%] flex items-center text-gray-800">
                      Feed/Search/Share/Embed
                    </div> */}
                    <ArrowButton
                      ButtonText={"Feed/Search/Share/Embed"}
                      onClick={() => alert("THIS SHIT IS WORKING")}
                    />
                  </div>
                  <div
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {}}
                  >
                    {/* <div className=" gap-2  w-[100%] flex items-center text-gray-800 ">
                      Video and Sound
                    </div> */}
                    <ArrowButton
                      ButtonText={" Video and Sound"}
                      onClick={() => alert("THIS SHIT IS WORKING")}
                    />
                  </div>
                  <div
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {}}
                  >
                    {/* <div className=" gap-2  w-[100%] flex items-center text-gray-800 ">
                      Follow/Like/Comment
                    </div> */}
                    <ArrowButton
                      ButtonText={"     Follow/Like/Comment"}
                      onClick={() => alert("THIS SHIT IS WORKING")}
                    />
                  </div>
                  <div
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {}}
                  >
                    {/* <div className=" gap-2  w-[100%] flex items-center text-gray-800 ">
                      Notification/messages{" "}
                    </div> */}
                    <ArrowButton
                      ButtonText={"      Notification/messages"}
                      onClick={() => alert("THIS SHIT IS WORKING")}
                    />
                  </div>
                  <div
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {}}
                  >
                    {/* <div className=" gap-2  w-[100%] flex items-center text-gray-800 ">
                      LIVE{" "}
                    </div> */}
                    <ArrowButton
                      ButtonText={"      LIVE"}
                      onClick={() => alert("THIS SHIT IS WORKING")}
                    />
                  </div>
                  <div
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {}}
                  >
                    {/* <div className=" gap-2  w-[100%] flex items-center text-gray-800 ">
                      Abuse Report{" "}
                    </div> */}
                    <ArrowButton
                      ButtonText={"      Abuse Report"}
                      onClick={() => alert("THIS SHIT IS WORKING")}
                    />
                  </div>
                  <div
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {}}
                  >
                    {/* <div className=" gap-2  w-[100%] flex items-center text-gray-800 ">
                      Tiktok Balance{" "}
                    </div> */}
                    <ArrowButton
                      ButtonText={"       Tiktok Balance"}
                      onClick={() => alert("THIS SHIT IS WORKING")}
                    />
                  </div>
                  <div
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {}}
                  >
                    {/* <div className=" gap-2  w-[100%] flex items-center text-gray-800 ">
                      Not Responding/Lagging/Other
                    </div> */}
                    <ArrowButton
                      ButtonText={"     Not Responding/Lagging/Other"}
                      onClick={() => alert("THIS SHIT IS WORKING")}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Right */}

          <div className="h-[450px] p-2 w-[60%]  bg-white border  rounded-md shadow-md cursor-pointer">
            <div className="mt-5 text-xl font-bold">
              FREQUENTLY ASKED QUESTIONS
            </div>

            <div className="mt-5 text-l ">
              {isDropdownOpen && (
                <div className=" mt-2  ">
                  <div className="py-1">
                    <div
                      className=" block px-4 py-2 text-gray-800 hover:bg-gray-200 w-[100%]"
                      onClick={() => {
                        // Handle option 1 click
                      }}
                    >
                      {/* <div className="flex items-center gap-2  text-gray-800 ">
                        How to log in
                      </div> */}
                      <Arrowbtn ButtonText={"How to log in"} />
                    </div>
                    <div
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      onClick={() => {
                        handleNavigation();
                      }}
                    >
                      <Arrowbtn
                        ButtonText={" This phone number is already registered"}
                      />
                    </div>
                    <div
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      onClick={() => {
                        // Handle option 2 click
                      }}
                    >
                      <Arrowbtn
                        ButtonText={" Why couldn't I complete the payment?"}
                      />
                    </div>
                    <div
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      onClick={() => {
                        // Handle option 2 click
                      }}
                    >
                      <Arrowbtn
                        ButtonText={
                          "    Why didn't I receive my coins after making a payment?"
                        }
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="mr-4 px-2 mt-8 py-1  cursor-pointer ">
          {" "}
          Report a problem
        </div>
      </div>
    </div>
  );
}

export default Feedback;
