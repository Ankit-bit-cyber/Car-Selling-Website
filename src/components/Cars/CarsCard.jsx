import React from "react";

const CarsCard =({id, img, name, price})=>{
    return(
        <div className="border-2 border-black bg-slate-100 text-black rounded-md mb-2 cursor-pointer"
            key={id}
        >
            <img src={img} alt="img"/>
            <h1 className="font-bold text-xl pl-5 text-red-500">{name}</h1>
            <p className="pl-5 pb-4">
               
            </p>
            <div className="flex justify-between px-6 pb-2">
                <h3 className="font-semibold text-xl">${price}</h3>
                <button className="bg-black text-white text-base md:text-lg px-2 md:px-3 py-1 rounded-md hover:bg-red-500 transition duration-200 ease-linear">
                    Book Now
                </button>
            </div>

        </div>
    )
}
export default CarsCard