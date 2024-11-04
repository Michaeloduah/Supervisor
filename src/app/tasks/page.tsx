import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Tasks from "@/components/Dashboard/Tasks";
import React from "react";

export const metadata: Metadata = {
  title: "ENSG PROJECT METER - Supervisor Dashboard",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Tasks/>
      </DefaultLayout>
    </>
  );
}
