import { Metadata } from "next";
import Projects from "@/components/Dashboard/Projects";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";

export const metadata: Metadata = {
  title: "ENSG PROJECT METER - Supervisor Dashboard",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Projects />
      </DefaultLayout>
    </>
  );
}
