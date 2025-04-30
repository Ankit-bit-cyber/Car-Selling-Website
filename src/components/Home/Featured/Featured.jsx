import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FetureCard from "./FeatureCard";

const Featured =()=>{
    const carsData =[
        {
            id: 0,
            img: "src/assets/img/car15.jpg",
            name: "Mercedes",
            price: "60,0000",
        },
        {
            id: 1,
            img: "src/assets/img/car6.jpg",
            name: "Audi",
            price: "70,0000",
        },
        {
            id: 2,
            img: "src/assets/img/car7.jpg",
            name: "BMW Series-5",
            price: "75,0000",
        },
        {
            id: 3,
            img: "src/assets/img/car8.jpg",
            name: "Range Rover",
            price: "50,0000",
        },
        {
            id: 4,
            img: "src/assets/img/car4.jpg",
            name: "BMW Series-3",
            price: "60,0000",
        },
        {
            id: 5,
            img: "src/assets/img/car11.jpg",
            name: "Cadillac",
            price: "55,0000",
        },
    ]
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase:"linear",
        arrows: false,
        responsive: [
            {
                breakpoint:1023,
                settings:{
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,

                },

            },
            {
                breakpoint:768,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,

                },

            },
            {
                breakpoint:480,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },

            },
        ]

    }
    return ( 
        <div className="container mt-14">
            <h1 className="font-bold text-4xl text-center">
                Featured <span className="text-red-500">Cars</span>
            </h1>
            <p className="text-center">
                Cars come with a wide variety of features that enhance comfort,safety,Performance,and convenience.
            </p>
            <div>
                <Slider {...settings} >
                    {carsData.map((item)=>(
                        <FetureCard
                           key={item.id} 
                           img={item.img}
                           name={item.name}
                           price={item.price}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    )
}
export default Featured