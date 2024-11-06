import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import TaskDetails from "@/components/Dashboard/TaskDetails";
import React from "react";

export const metadata: Metadata = {
  title: "ENSG PROJECT METER - Contractor Dashboard",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <>
          <TaskDetails />
        </>
      </DefaultLayout>
    </>
  );
}
