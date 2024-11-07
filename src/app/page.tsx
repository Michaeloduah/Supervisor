import React from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Signin from "@/components/Auth/Signin";

export const metadata: Metadata = {
  title: "ENSG PROJECT METER - Supervisor Login",
};

const SignIn: React.FC = () => {
  return (
    <>
      <div className="rounded-[10px] shadow-1 dark:bg-gray-dark dark:shadow-card">
        <div className="grid grid-cols-2 flex-wrap items-center h-screen">
          <div className="hidden w-full xl:block">
            <div className="my-auto overflow-hidden rounded-2xl dark:!bg-dark-2 dark:bg-none">
              <Link
                className="mb-10 inline-block flex justify-center"
                href="/dashboard"
              >
                <Image
                  src={"/images/logo/ensg-logo.png"}
                  alt="Logo"
                  width={200}
                  height={200}
                  className=""
                />
              </Link>
              <div className="mb-14 text-center">
                <p className="mb-3 text-xl font-medium text-dark dark:text-white">
                  Sign in to your account
                </p>

                <h1 className="mb-4 text-2xl font-bold text-dark dark:text-white sm:text-heading-3">
                  Welcome Back!
                </h1>

                <p className="w-full font-medium text-dark-4 dark:text-dark-6">
                  Please sign in to your account by completing the necessary
                  fields below
                </p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full p-4 sm:p-12.5 xl:p-15">
              <Signin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
