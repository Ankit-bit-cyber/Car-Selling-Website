import React from "react";
import img from "../../../assets/img/car3.jpg";

const Hero =()=>{
    return (
        <div className="bg-black text-white">
            <div className="h-screen container flex flex-col justify-center md:flex-row items-center">
                <div className="w-full md:w-2/4 space-y-5 mt-10">
                    <h1 className="text-4xl lg:text-6xl fond-bold leading-tight">Find Your Perfect Ride Today</h1>
                    <p className="text-lg lg:text-2xl font-medium">Over 1000+ New Cars Available</p>
                    <p className="text-sm lg:text-base">Wheather You are looking for a new brand new car or a reliable 
                        pre-owened vehicles, we offer a wide selection of top brand
                        models to suit every budget and lifestyle.

                    </p>

                    <div className="flex gap-8">
                        <button className="bg-red-500 py-1 px-4 rounded-md cursor-pointer hover:scale-95 transition duration-150 ease-linear">Explore More</button>
                        <button className="border-2 border-red-500 py-1 px-4 rounded-md cursor-pointer hover:bg-red-500 transition duration-200 ease-linear">See Cars</button>
                    </div>
                </div>
                <div className="w-full  md:w-2/4 mt-4">
                    <img src={img} alt="imgage"/>
                </div>
            </div>
        </div>
    )
}
export default Hero;