import React from "react";

const ServicesCards =({icon, title, description})=>{
    return(
        <div className="text-center p-8 space-y-4 bg-slate-100 border-2 border-black hover:bg-black hover:text-white transition duration-300 ease-in-out rounded-md cursor-pointer">
            <p>{icon}</p>
            <h1 className="text-red-500 text-3xl font-bold">{title}</h1>
            <p className="text-gray-600 mt-2">{description}</p>
        </div>
    )
}
export default ServicesCards