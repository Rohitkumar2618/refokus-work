import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Button } from "./Button";

const Card = ({ width, start, para, hover }) => {
    return (
        // ! p-5 se div ke under element ne thodi jagha le liya
        // !isme dynamically widht pass ki classname me and 2 parts me divide ho gayi site
        <div className={`w-1/2 bg-zinc-800 p-5  rounded-xl 
        hover:bg-purple-500
         ${width} min-h-[30rem] flex flex-col justify-between `}>
            <div className="w-full">
                <div className="w-full flex justify-between items-center">
                    <h3>Up Next: News</h3>
                    <IoIosArrowRoundForward />
                </div>
                <h1 className="text-3xl font-medium mt-5"> Insights and behind the scenes </h1>
            </div>
            <div className="down w-full  ">

                {start && (
                    <>
                        <h1 className="text-6xl font-semibold  tracking-tight leading-none">
                            Start a Project
                        </h1>
                        <button className="rounded-full mt-5 py-2 px-5 border-t-[1px] border-zinc-50 ">
                            Contact Us
                        </button>
                    </>
                )}

                {para && (
                    <p className="text-sm text-zinc-500 font-medium ">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                )}

            </div>
        </div>
    );
};

export default Card;
