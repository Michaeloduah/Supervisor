import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import AddTeam from "@/components/Dashboard/AddTeam"
import React from "react";

export const metadata: Metadata = {
  title: "ENSG PROJECT METER - Contractor Dashboard",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <AddTeam />
      </DefaultLayout>
    </>
  );
}
