import React from "react";
import { GiCarWheel } from "react-icons/gi";
import { SiGoogleearthengine } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { SiCoronaengine } from "react-icons/si";
import ServicesCards from "./ServicesCards";

const OurServices = () => {
  const icon1 = <GiCarWheel className="text-green-700 mx-auto" size={48} />;
  const icon2 = <SiGoogleearthengine className="text-green-700 mx-auto" size={48} />;
  const icon3 = <MdDesignServices className="text-green-700 mx-auto" size={48} />;
  const icon4 = <IoSettings className="text-green-700 mx-auto" size={48} />;
  const icon5 = <FaCar className="text-green-700 mx-auto" size={48} />;
  const icon6 = <SiCoronaengine className="text-green-700 mx-auto" size={48} />;

  return (
    <div className="container pt-24">
      <div>
        <h1 className="font-bold text-4xl text-center">
          Our <span className="text-red-500">Services</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
        <ServicesCards
          icon={icon1}
          title="Tires and Wheels"
          description="Ensure your vehicle runs smoothly and safely with our premium tire and wheel services. Whether you're looking for tire replacement, wheel alignment, or balancing, we offer a wide range of options to meet your needs. Our expert technicians will help you choose the perfect tires and wheels for your car, ensuring optimal performance, comfort, and fuel efficiency. Trust us to provide top-quality products and professional installation that keeps you rolling with confidence on any road."


        />
        <ServicesCards
          icon={icon2}
          title="Exhaust System"
          description="Upgrade your vehicle’s performance and reduce emissions with our comprehensive exhaust system services. From diagnostic inspections to full system replacements, we ensure your car runs more efficiently and quietly. A well-maintained exhaust system enhances fuel efficiency, reduces harmful emissions, and prevents costly repairs in the future."
        />
        <ServicesCards
          icon={icon3}
          title="Cars Maintenance"
          description="Keep your car in peak condition with our expert car maintenance services. Regular maintenance is key to extending the lifespan of your vehicle and ensuring it performs at its best. From oil changes and fluid checks to brake inspections and tire rotations, our team provides comprehensive services designed to prevent costly breakdowns and keep your car running smoothly. Trust us to help maintain the reliability and safety of your vehicle, so you can enjoy worry-free driving for years to come."
        />
        <ServicesCards
          icon={icon4}
          title="Brake Repairs"
          description="Your safety is our top priority, and that why we offer reliable and efficient brake repair services. Whether you're experiencing squeaky brakes, reduced responsiveness, or unusual vibrations, our expert technicians are here to ensure your braking system is functioning properly. From brake pad replacements to full system repairs, we use high-quality parts and advanced techniques to provide a smooth, safe driving experience."
        />
        <ServicesCards
          icon={icon5}
          title="Body Service"
          description="Restore your car’s appearance and protect its value with our professional body services. Whether it's a minor dent, scratch repair, or a complete body restoration, our skilled technicians provide high-quality repairs to bring your vehicle back to its original beauty. We use advanced techniques and top-grade materials to ensure a flawless finish, whether it's a small touch-up or extensive work. Trust us to handle your car with care and precision, so it looks and feels as good as new."
        />
        <ServicesCards
          icon={icon6}
          title="Engine Services"
          description="Keep your vehicle’s heart running smoothly with our expert engine services. From routine diagnostics and oil changes to complete engine overhauls, our experienced technicians are equipped to handle all aspects of engine care. Regular engine maintenance ensures optimal performance, improves fuel efficiency, and prevents costly breakdowns. Trust us to provide top-quality service that keeps your engine running like new, so you can enjoy reliable, long-lasting performance on every drive."
        />
      </div>
    </div>
  );
};

export default OurServices;
