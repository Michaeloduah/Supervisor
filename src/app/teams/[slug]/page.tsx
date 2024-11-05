import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";

export const metadata: Metadata = {
  title: "ENSG PROJECT METER - Supervisor Dashboard",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <>
          <h1 className="mb-1.5 text-heading-6 font-bold text-dark dark:text-white">
            Team Details
          </h1>
        </>
      </DefaultLayout>
    </>
  );
}
