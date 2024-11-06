import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Teams from "@/components/Dashboard/Teams";
import React from "react";

export const metadata: Metadata = {
  title: "ENSG PROJECT METER - Contractor Dashboard",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Teams />
      </DefaultLayout>
    </>
  );
}
