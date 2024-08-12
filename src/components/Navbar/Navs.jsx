import React from "react";
import { Link } from "react-router-dom";
import { GrOverview } from "react-icons/gr";
import { IoAnalyticsSharp } from "react-icons/io5";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { CgArrowTopRight } from "react-icons/cg";

const Navs = () => {
  return (
    <div className="flex flex-col py-3 gap-4">
      <Link to="/">
        <div className="flex h-[55px] w-[90%] bg-white text-[#0D0D0D] justify-between items-center rounded-full">
          <div className="bg-[#FFAB2D] w-[50px] h-[50px] ml-[3px] rounded-full flex justify-center items-center">
            <GrOverview />
          </div>
          <Link className="text-sm text-[#A4A4A4]" to="/">
            Overview
          </Link>
          <div className=" pr-5">
            <CgArrowTopRight size={20} />
          </div>
        </div>
      </Link>
      <Link to="/analytics">
        <div className="flex h-[55px] w-[90%] bg-white text-[#0D0D0D] justify-between items-center rounded-full">
          <div className="bg-[#FFAB2D] w-[50px] h-[50px] ml-[3px] rounded-full flex justify-center items-center">
            <IoAnalyticsSharp />
          </div>

          <Link className="text-sm text-[#A4A4A4]" to="/analytics">
            Analytics
          </Link>
          <div className=" pr-5">
            <CgArrowTopRight size={20} color="#0d0d0d" />
          </div>
        </div>
      </Link>
      <Link to="/finance">
        <div className="flex h-[55px] w-[90%] bg-white text-[#0D0D0D] justify-between items-center rounded-full">
          <div className="bg-[#FFAB2D] w-[50px] h-[50px] ml-[3px] rounded-full flex justify-center items-center">
            <MdOutlineAccountBalanceWallet />
          </div>
          <Link className="text-sm text-[#A4A4A4]" to="/finance">
            Finance
          </Link>
          <div className="pr-5">
            <CgArrowTopRight size={20} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navs;
