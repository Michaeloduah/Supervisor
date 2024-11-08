"use client";
import React from "react";
import ProjectTable from "../Tables/Projects";

const Projects: React.FC = () => {
  return (
    <>
      <h1 className="mb-1.5 text-heading-6 font-bold text-dark dark:text-white">Projects</h1>
      
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-12">
          <ProjectTable />
        </div>
      </div>
    </>
  );
};

export default Projects;
