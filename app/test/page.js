"use client";
import CountUp from "react-countup";

const Page = () => {
  return (
    <div>
      <div className="h-screen bg-red-400 ">Hi </div>
      <CountUp end={500} duration={10} enableScrollSpy />
      <div className="h-screen bg-red-400 ">Hi </div>
      
    </div>
  );
};

export default Page;
