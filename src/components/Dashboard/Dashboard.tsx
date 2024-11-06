"use client";
import React from "react";
import ChatCard from "../Chat/ChatCard";
import ProjectTable from "../Tables/Projects";
import DataStatsOne from "@/components/DataStats/DataStatsOne";
import Reports from "../Tables/Reports";
import Tasks from "../Tables/Tasks";

const Dashboard: React.FC = () => {
  return (
    <>
      {/* <h1 className="mb-1.5 text-heading-6 font-bold text-dark dark:text-white">Projects</h1> */}
      <DataStatsOne />

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-8">
          <ProjectTable />
        </div>
        <ChatCard />
      </div>
      <div className="mt-4 grid grid-cols-12 md:grid-cols-2 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
        <div className="">
          <Reports />
        </div>
        <div className="">
          <Tasks />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
