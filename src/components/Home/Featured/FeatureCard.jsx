import React from "react";
const FetureCard =({id, img, name, price})=>{
    return(
        <div className="border-2 border-black bg-slat-100 text-black rounded-xl mb-2 cursor-pointer hover:scale-95 transition duration-200 ease-linear">
            <div>
                <img src={img} alt="" className="rounded-t-xl w-full"/>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h1 className="font-semibold text-xl text-red-500 pt-2">{name}</h1>
                <div className="flex-gap-10 pt-2">
                    <h2 className="font-medium text-lg">Starting at ${price}</h2>
                </div>
            </div>
        </div>
    )
}
export default FetureCard