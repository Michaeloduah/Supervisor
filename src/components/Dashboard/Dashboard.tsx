"use client";
import React from "react";
import ChatCard from "../Chat/ChatCard";
import TableOne from "../Tables/TableOne";
import DataStatsOne from "@/components/DataStats/DataStatsOne";
// import ChartThree from "../Charts/ChartThree";
// import ChartTwo from "../Charts/ChartTwo";
// import MapOne from "../Maps/MapOne";
// import ChartOne from "@/components/Charts/ChartOne";

const Dashboard: React.FC = () => {
  return (
    <>
      {/* <h1 className="mb-1.5 text-heading-6 font-bold text-dark dark:text-white">Projects</h1> */}
      <DataStatsOne />
      
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
        {/* <ChartOne />
        <ChartTwo />
        <ChartThree />
        <MapOne /> */}
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <ChatCard />
      </div>
    </>
  );
};

export default Dashboard;
