import React from "react";
import img from "../../assets/img/approch.jpg";

const Approch =()=>{
    return(
        <div className="flex flex-col-reverse justify-center md:flex-row items-center gap-5 mt-14">
            <div className="w-full md:w-2/4 space-y-4">
                <h1 className="text-4xl font-bold">Our Approch</h1>
                <h2 className="font-semibold text-lg lg:text-2xl">
                  Enpower individuals to achieve sustainable mobility solutions and 
                  inspire a positive impact on the environment.
                </h2>
                <p className="text-sm lg:text-base">
                The goal is to minimize the friction in finding the perfect car based on the buyer’s preferences.


                </p>
                <p className="text-sm lg:text-base">
                These websites provide detailed information on each vehicle, including high-resolution images, vehicle history reports (like Carfax), pricing history, and expert reviews. This ensures that customers feel well-informed before making a purchase.
                </p>
            </div>
            <div className="w-full md:w-2/5">
                <img src={img} alt="img" className="rounded-lg"/>
            </div>
        </div>
    )
}
export default Approch