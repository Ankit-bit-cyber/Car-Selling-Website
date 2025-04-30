import React from "react";
import img from "../../assets/img/vision.jpg"
const Vision =()=>{
    return(
        <div className="flex flex-col justify-center md:flex-row items-center gap-5 mt-16">
            {/*image section*/}
            <div className="w-full md:w-2/5">
                <img src={img} alt="img" className="rounded-lg"/>
            </div>
            <div className="w-full md:w-2/4 space-y-4">
                <h1 className="text-4xl font-bold">Our Vision</h1>
                <h2 className="font-semibold text-lg lg:text-2xl">
                  Enpower individuals to achieve sustainable mobility solutions and 
                  inspire a positive impact on the environment.
                </h2>
                <p className="text-sm lg:text-base">
                These platforms aim to reduce the hassle and uncertainty of traditional car buying, offering detailed information, clear pricing, and verified listings.
                </p>
                <p className="text-sm lg:text-base">
                These platforms often provide features like vehicle history reports, reviews, expert ratings, and pricing guides to help users make better choices.
                </p>
            </div>
        </div>
    )
}
export default Vision