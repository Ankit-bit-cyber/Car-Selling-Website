import React from "react";
import CarsCard from "./CarsCard";

const OurCars =()=>{
    const carsData = [
        {
           id: 0,
           img: "/assets/img/car15.jpg", // Notice the leading "/"
           name: "Mercedes",
           price: "60,0000",
        },
        {
           id: 1,
           img: "/assets/img/car6.jpg",
           name: "Audi",
           price: "70,0000",
        },
        {
           id: 2,
           img: "/assets/img/car7.jpg",
           name: "BMW Series-5",
           price: "75,0000",
        },
        {
           id: 3,
           img: "/assets/img/car8.jpg",
           name: "Range Rover",
           price: "50,0000",
        },
        {
           id: 4,
           img: "/assets/img/car4.jpg",
           name: "BMW Series-3",
           price: "60,0000",
        },
        {
           id: 5,
           img: "/assets/img/car11.jpg",
           name: "Cadillac",
           price: "55,0000",
        },
     ]
     
    return(
        <div className="container pt-24">
            <div>
                <h1 className="font-bold text-4xl text-center">
                    Our <span className="text-red-500">Cars</span>
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                    {carsData.map((item)=>(
                        <div>
                            <CarsCard
                            key={item.id}
                            img={item.img}
                            name={item.name}
                            price={item.price}
                            />
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    )
}
export default OurCars