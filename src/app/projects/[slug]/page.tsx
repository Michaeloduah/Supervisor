import { Metadata } from "next";
import ProjectDetails from "@/components/Dashboard/ProjectDetails";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";

export const metadata: Metadata = {
  title: "ENSG PROJECT METER - Contractor Dashboard",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <ProjectDetails />
      </DefaultLayout>
    </>
  );
}
