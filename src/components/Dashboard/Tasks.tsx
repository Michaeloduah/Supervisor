"use client";
import Link from "next/link";
import React from "react";
import TaskTable from "../Tables/Tasks";

const Tasks: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="mb-1.5 text-heading-6 font-bold text-dark dark:text-white">
          Tasks
        </h1>

        <Link href="/tasks/new">
          <button className="rounded-full bg-[#13802a] px-2 py-3 font-medium text-white transition hover:bg-opacity-90">
            Add New Task
          </button>
        </Link>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-12">
          <TaskTable />
        </div>
      </div>
    </>
  );
};

export default Tasks;
