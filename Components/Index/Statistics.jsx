"use client";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
const div1 = "flex flex-col justify-center items-center w-full";
const div2 = "text-white text-4xl font-bold flex items-center";
const div3 =
  "text-white text-2xl font-semibold camelcase tracking-wide mt-2 font-nunito";

const Statistics = () => {
  const [happyClients, setHappyClients] = useState(0);
  const [campaigns, setCampaigns] = useState(0);
  const [globalPresence, setGlobalPresence] = useState(0);
  const [awards, setAwards] = useState(0);

  useEffect(() => {
    // Set the initial count for each statistic here
    setHappyClients(1000);
    setCampaigns(250);
    setGlobalPresence(50);
    setAwards(100);
  }, []);

  return (
    <div
      className="max-w-screen-lg mx-auto rounded-lg  h-48 bg-blue-400 flex justify-center items-center mb-4 mt-12 font-nunito"
      style={{
        background: "linear-gradient(to bottom, #a157e7, #00429b)",
      }}
    >
      <div className={div1}>
        <div className={div2}>
          <span className="mr-2">+</span>
          <CountUp start={0} end={happyClients} duration={2.5} separator="," />
        </div>
        <div className={div3}>Happy Clients</div>
      </div>
      <div className={div1}>
        <div className={div2}>
          <span className="mr-2">+</span>
          <CountUp start={0} end={campaigns} duration={2.5} separator="," />
        </div>
        <div className={div3}>Campaigns</div>
      </div>
      <div className={div1}>
        <div className={div2}>
          <span className="mr-2">+</span>
          <CountUp
            start={0}
            end={globalPresence}
            duration={2.5}
            separator=","
          />
        </div>
        <div className={div3}>Global Presence</div>
      </div>
      <div className={div1}>
        <div className={div2}>
          <span className="mr-2">+</span>
          <CountUp start={0} end={awards} duration={2.5} separator="," />
        </div>
        <div className={div3}>Awards</div>
      </div>
    </div>
  );
};

export default Statistics;
