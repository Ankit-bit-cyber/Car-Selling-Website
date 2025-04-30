import React from "react";
import img from "../../../assets/img/mission.jpg";

const OurMission =()=>{
    return(
        <div className="container my-10">
            <div>
                <h1 className="font-bold text-4xl text-center">
                    Our <span className="text-red-500">Mission</span>
                </h1>
            </div>
            <div className="flex flex-col justify md:flex-row items-center gap-5  mt-8">
                {/* image section*/}
                <div className="w-full md:w-2/4">
                    <img src ={img} alt="img" className="rounded-lg"/>
                </div>
                <div className="w-full md:w-2/4 space-y-4">
                    <h1 className="font-bold text-red-500 text-lg lg:text-3xl">
                        To create a community where every journey is extraordinary.

                    </h1>
                    <h2 className="font-semibold text-lg lg:text-3xl">
                        Enpower individuals to achieve sustainable mobility solutions and 
                        inspire a positive impact on the environment. 
                    </h2>
                    <p className="text-sm lg:text-base">
                    "To create a transparent, honest marketplace where consumers can confidently buy and sell cars."
                    </p>
                    <p className="text-sm lg:text-base">
                    "To provide a wide selection of cars, ensuring that theres a perfect option for everyone.
                    Offering a broad inventory of new, used, and certified pre-owned vehicles ensures customers have diverse choices to fit their preferences and needs"
                    </p>
                </div>
            </div>
        </div>
    )
}
export default OurMission