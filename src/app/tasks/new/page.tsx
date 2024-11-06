import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import AddTask from "@/components/Dashboard/AddTask"
import React from "react";

export const metadata: Metadata = {
  title: "ENSG PROJECT METER - Contractor Dashboard",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <AddTask/>
      </DefaultLayout>
    </>
  );
}
