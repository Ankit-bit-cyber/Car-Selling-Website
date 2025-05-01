import React from "react";
import { SiWebmoney } from "react-icons/si";
import { FaUsers, FaShippingFast } from "react-icons/fa";
import WhyUsCard from "./WhyUsCard";

const WhyUs = () => {
  const icon1 = <SiWebmoney className="text-green-700 mx-auto" size={48} />;
  const icon2 = <FaUsers className="text-green-700 mx-auto" size={48} />;
  const icon3 = <FaShippingFast className="text-green-700 mx-auto" size={48} />;

  return (
    <div className="flex flex-col justify-center container md:mt-16 py-10">
      <h1 className="font-bold text-4xl text-center">
        Why choose <span className="text-red-500">WheelsDeal</span>?
      </h1>
      <p className="text-center">
        We are committed to providing a seamless and customer-focused experience every step of the way.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
        <WhyUsCard
          icon={icon1}
          title="Financing Options"
          description="Getting behind the wheel of your dream car has never been easier with our flexible financing options. Whether you're buying your first car or upgrading to something new, we offer a variety of financing plans designed to fit your budget. Our team works closely with trusted lenders to secure competitive rates and affordable terms, ensuring you get the best deal possible."
        />
        <WhyUsCard
          icon={icon2}
          title="Satisfied Customers"
          description="At [WheelsDeal], customer satisfaction is at the heart of everything we do. Our dedicated team goes above and beyond to ensure each customer drives away with a vehicle they love and a buying experience they can trust. With countless positive reviews and repeat clients, we take pride in our reputation for exceptional service, transparency, and reliability."
        />
        <WhyUsCard
          icon={icon3}
          title="Fast & Easy Booking"
          description="Finding and reserving your perfect car has never been simpler with our fast and easy booking process. Our user-friendly platform lets you browse available vehicles, compare options, and schedule a test drive or reserve a car—all in just a few clicks. No long wait times or complicated steps—just a smooth, efficient experience from start to finish. "
        />
      </div>
    </div>
  );
};

export default WhyUs;
