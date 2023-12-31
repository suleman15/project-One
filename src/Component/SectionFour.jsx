import React from "react";
import { BsTruckFlatbed, BsFileEarmarkText } from "react-icons/bs";
import { BiTachometer, BiLayer } from "react-icons/bi";
import { motion } from "framer-motion";
import OnView from "./OnView";
import UpwardAnimate from "./UpwardAnimate";

const SectionFour = () => {
  return (
    <div className="bg-[#F3F5FA] py-10">
      <OnView css="flex flex-col justify-center items-center p-5 gap-3 bg-[#F3F5FA]">
        <motion.div
          variants={{
            hidden: { y: 75, opacity: 0, scale: 0.7 },
            visible: { y: 0, opacity: 1, scale: 1 },
          }}
          initial={"hidden"}
          animate={"visible"}
          transition={{ duration: 1 }}
          className="text-[28px] uppercase  font-bold text-[#37517E]   py-3  relative after:content-[''] after:absolute after:w-[100px]  after:h-[3px] after:bg-[#33333333] after:left-[calc(50%-50px)] after:bottom-[-3px] after:z-8 before:content-[''] before:absolute before:w-[50px]  before:h-[3px] before:bg-[dodgerblue] before:left-[calc(50%-25px)] before:bottom-[-3px] before:z-10"
        >
          SERVICES
        </motion.div>
        <motion.div
          variants={{
            hidden: { y: 75, opacity: 0, scale: 0.7 },
            visible: { y: 0, opacity: 1, scale: 1 },
          }}
          initial={"hidden"}
          animate={"visible"}
          transition={{ duration: 0.5 }}
          className="text-[#444444]"
        >
          We make it simple, and take care of the tough parts for you with:
        </motion.div>
        <div className="grid my-10 gap-10 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
          <UpwardAnimate css="  bg-white rounded-lg hover:text-[dodgerblue] gap-3 p-3 w-[225px] h-[225px] text-[#333333] text-lg    flex flex-col justify-center items-center text-center">
            <BsTruckFlatbed className="text-3xl text-[dodgerblue]" />
            Same Day Shipping
          </UpwardAnimate>
          <UpwardAnimate css=" bg-white rounded-lg hover:text-[dodgerblue] gap-3 p-3  w-[225px] h-[225px] text-[#333333] text-lg     flex flex-col justify-center items-center text-center">
            <BsFileEarmarkText className="text-3xl text-[dodgerblue]" />
            World Class Customer Services
          </UpwardAnimate>
          <UpwardAnimate css=" bg-white rounded-lg hover:text-[dodgerblue] gap-3 p-3  w-[225px] h-[225px] text-[#333333] text-lg    flex flex-col justify-center items-center text-center">
            <BiTachometer className="text-3xl text-[dodgerblue]" />
            NO____Minimums
          </UpwardAnimate>
          <UpwardAnimate css=" bg-white rounded-lg  hover:text-[dodgerblue] gap-3 p-3 w-[225px] h-[225px] text-[#333333] text-lg    flex flex-col justify-center items-center text-center">
            <BiLayer className="text-3xl text-[dodgerblue]" />
            Flat Rate Shipping
          </UpwardAnimate>
        </div>
      </OnView>
    </div>
  );
};

export default SectionFour;
