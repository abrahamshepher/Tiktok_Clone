import React from "react";
import Headers from "../Components/Headers";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import About from "../Constants/About";
function HomePage() {
  return (
    <div>
      <Headers />
      {/* main */}
      <div className="grid grid-cols-3 gap-4 w-[100%]  ">
        {/* left */}
        <div className="w-[40%] flex flex-wrap mt-4 pl-4 px-4 gap-6  ">
          {/* //HomeIcon */}
          <div className="image-with-text">
            <Image
              className=""
              src="/home.png"
              width={25}
              height={0}
              alt="arrow"
            />
            <p className="font-bold text-[18px] text-[#FD5B61] cursor-pointer">
              For You
            </p>
          </div>
          {/* //userIcon */}
          <div className="image-with-text w-80">
            <Image
              className=""
              src="/user.png"
              width={25}
              height={0}
              alt="arrow"
            />
            <p className="font-bold text-[18px] cursor-pointer ">Following</p>
          </div>
          {/* //exploreicon */}
          <div className="image-with-text">
            <Image
              className=""
              src="/explore.png"
              width={25}
              height={0}
              alt="arrow"
            />
            <p className="font-bold text-[18px] cursor-pointer">Explore</p>
            <div className="ml-2 px-2 rounded-full bg-[#FD5B61] text-white">
              {" "}
              New
            </div>
          </div>
          <style jsx>{`
            .image-with-text {
              display: inline-flex;
              align-items: center;
            }

            .image-with-text p {
              margin-left: 10px;
            }
          `}</style>
          <div>Log in to follow creators, like videos, and view comments.</div>
          <div className="align-bottom text-[#FD5B61] text-[20px] border-[2px] border-red-400 h-13 px-5 py-2 w-60 block cursor-pointer ">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Login{" "}
          </div>
          <div className="cursor-pointer mt-[130%] flex flex-wrap text-sm text-gray-500">
            <div>
              {" "}
              <About
                ButtonText={"About"}
                onClick={() => {
                  Router.push("/About");
                }}
              />
            </div>
            <div>
              {" "}
              <About
                ButtonText={"Newsroom"}
                onClick={() => {
                  Router.push("/About");
                }}
              />
            </div>
            <div>
              {" "}
              <About
                ButtonText={"Contact"}
                onClick={() => {
                  Router.push("/About");
                }}
              />
            </div>
            <div>
              {" "}
              <About
                ButtonText={"Careers"}
                onClick={() => {
                  Router.push("/About");
                }}
              />
            </div>
            <div>
              {" "}
              <About
                ButtonText={"ByteDance"}
                onClick={() => {
                  Router.push("/About");
                }}
              />
            </div>
            <div>
              {" "}
              <About
                ButtonText={"Tiktok for Good Advertise Developers Transparency"}
                onClick={() => {
                  Router.push("/About");
                }}
              />
            </div>
            <div>
              {" "}
              <About
                ButtonText={"Tiktok Rewards"}
                onClick={() => {
                  Router.push("/About");
                }}
              />
            </div>
            <div>
              {" "}
              <About
                ButtonText={"Tiktok Embeds"}
                onClick={() => {
                  Router.push("/About");
                }}
              />
            </div>
            <div>
              {" "}
              <About
                ButtonText={"Help"}
                onClick={() => {
                  Router.push("/About");
                }}
              />
            </div>
            <div>
              {" "}
              <About
                ButtonText={"Safety "}
                onClick={() => {
                  Router.push("/About");
                }}
              />
            </div>
            <div>
              {" "}
              <About
                ButtonText={"Terms "}
                onClick={() => {
                  Router.push("/About");
                }}
              />
            </div>
            <div>
              {" "}
              <About
                ButtonText={"Privacy"}
                onClick={() => {
                  Router.push("/About");
                }}
              />
            </div>
            <div>
              {" "}
              <About
                ButtonText={"Creator Portal"}
                onClick={() => {
                  Router.push("/About");
                }}
              />
            </div>
            <div>
              {" "}
              <About
                ButtonText={"Community Guidelines"}
                onClick={() => {
                  Router.push("/About");
                }}
              />
            </div>
            <div className="px-2 mt-3">© 2023 TikTok</div>
          </div>
        </div>

        {/* middle */}
        <div className="bg-gray-300 flex items-center justify-center w-[100%]">
          <p>middledjkhalid</p>
        </div>
        {/* right */}
        <div className="bg-slate-200  mr-3 w-[30%] right-6">
          <p>right</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
