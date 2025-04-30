import React from "react";

const WhyUsCard =({icon, title})=>{
    return(
        <div className="text-center p-8 space-y-4 bg-slate-100 hover:bg-black hover:text-white transition duration-200 ease-in-out rounded-md cursor-pointer">
            <p>{icon}</p>
            <h1 className="text-red-500 text-3xl font-bold">{title}</h1>
            <p className="text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, est aperiam, sapiente quis distinctio dolores atque amet doloremque illo eum necessitatibus cumque id, officiis similique quisquam quo recusandae a nam.
            </p>
            
        </div>
    )
}
export default WhyUsCard