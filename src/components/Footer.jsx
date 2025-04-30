import React from "react";
import {Link} from "react-router-dom";

const Footer =()=>{
    return(
        <footer className="mt-14 bg-black text-white">
            <div className="flex flex-col md: flex-row justify-between p-8 lg:px-28 md:px-16 px-5">
                <div className="w-full md:w-1/4">
                    <h3 className="font-semibold text-2xl pb-4">WheelsDeal</h3>
                    <p className="mb-2 text-sm">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam pariatur quibusdam culpa quae voluptas aperiam minima illo praesentium fugit. Obcaecati?
                    </p>
                </div>
                <div>
                    <h1 className="font-semibold text-xl pb-4 pt-5 md:pt-0">Pages Links</h1>
                    <div className="flex flex-col gap-2 font-medium">
                    <Link
                     to="/about"
                      className="hover:translate-x-3 transition duration-200 ease-linear"
                    >
                        About us
                    </Link>
                    <Link
                     to="/cars"
                      className="hover:translate-x-3 transition duration-200 ease-linear"
                    >
                        Our Cars
                    </Link>
                    <Link
                     to="/services"
                      className="hover:translate-x-3 transition duration-200 ease-linear"
                    >
                        Services
                    </Link>
                    </div>
                </div>
                <div>
                    <h1 className="font-semibold text-xl pb-4 pt-5 md:pt-0">Used Cars for sale</h1>
                    <div className="flex flex-col gap-2 font-medium">
                    <Link
                     to="/services"
                      className="hover:translate-x-3 transition duration-200 ease-linear"
                    >
                        Toyota Camry
                    </Link>

                    <Link
                     to="/services"
                      className="hover:translate-x-3 transition duration-200 ease-linear"
                    >
                        Chevrolet corvette
                    </Link> 

                    <Link
                     to="/services"
                      className="hover:translate-x-3 transition duration-200 ease-linear"
                    >
                        Volkswagen Golf
                    </Link> 

                    <Link
                     to="/services"
                      className="hover:translate-x-3 transition duration-200 ease-linear"
                    >
                        Nissan Rogue
                    </Link>   
                    </div>
                </div>
                <div>
                    <h1 className="font-semibold text-xl pb-4 pt-5 md:pt-0">Learn More</h1>
                    <div className="flex flex-col gap-2 font-medium">
                    <Link
                     to="/services"
                      className="hover:translate-x-3 transition duration-200 ease-linear"
                    >
                        User-friendly
                    </Link>

                    <Link
                     to="/services"
                      className="hover:translate-x-3 transition duration-200 ease-linear"
                    >
                        Search and Filters
                    </Link> 

                    <Link
                     to="/services"
                      className="hover:translate-x-3 transition duration-200 ease-linear"
                    >
                        Secure Payment
                    </Link> 

                    <Link
                     to="/services"
                      className="hover:translate-x-3 transition duration-200 ease-linear"
                    >
                        Geolocation Services
                    </Link> 
                    </div>
                </div>
            </div>
            <div>
                <p className="text-center py-4">
                    @copyright developed by
                    <span className="text-red-500 font-semibold mx-2">
                        Champion Programmers
                    </span>
                    | All rights reserved
                </p>
            </div>
        </footer>
    )
}
export default Footer