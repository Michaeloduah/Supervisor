"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SidebarItem from "@/components/Sidebar/SidebarItem";
import ClickOutside from "@/components/ClickOutside";
import useLocalStorage from "@/hooks/useLocalStorage";
import { TbSmartHome, TbReport } from "react-icons/tb";
import { MdOutlineWorkOutline } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { BiLogOutCircle } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const menuGroups = [
  {
    name: "MAIN MENU",
    menuItems: [
      {
        icon: <TbSmartHome size={24} />,
        label: "Dashboard",
        route: "/",
      },
      {
        icon: <MdOutlineWorkOutline size={24} />,
        label: "Contractors",
        route: "/forms/form-layout",
        // children: [
        //   { label: "Form Elements", route: "/forms/form-elements" },
        //   { label: "Form Layout", route: "/forms/form-layout" },
        // ],
      },
      {
        icon: <GrProjects size={24} />,
        label: "Projects",
        route: "/tables",
      },
      {
        icon: <TbReport size={24} />,
        label: "Reports",
        route: "/calendar",
      },
    ],
  },
  {
    name: "OTHERS",
    menuItems: [
      {
        icon: <FaRegUser size={24} />,
        label: "Profile",
        route: "/profile",
      },
      {
        icon: <IoSettingsOutline size={24} />,
        label: "Settings",
        route: "/settings",
      },
      {
        icon: <BiLogOutCircle size={24} />,
        label: "LogOut",
        route: "#",
      },
    ],
  },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();

  const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");

  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden border-r border-stroke bg-[#13802a] dark:border-stroke-dark dark:bg-gray-dark lg:static lg:translate-x-0 ${
          sidebarOpen
            ? "translate-x-0 duration-300 ease-linear"
            : "-translate-x-full"
        }`}
      >
        {/* <!-- SIDEBAR HEADER --> */}
        <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5 xl:py-10">
          <Link href="/">
            <h1 className="text-2xl font-black text-white">Logo</h1>
          </Link>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="block lg:hidden"
          >
            <AiOutlineClose size={24} color="white" />
          </button>
        </div>
        {/* <!-- SIDEBAR HEADER --> */}

        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          {/* <!-- Sidebar Menu --> */}
          <nav className="mt-1 px-4 lg:px-6">
            {menuGroups.map((group, groupIndex) => (
              <div key={groupIndex}>
                <h3 className="mb-5 text-sm font-medium text-white dark:text-dark-6">
                  {group.name}
                </h3>

                <ul className="mb-6 flex flex-col gap-2">
                  {group.menuItems.map((menuItem, menuIndex) => (
                    <SidebarItem
                      key={menuIndex}
                      item={menuItem}
                      pageName={pageName}
                      setPageName={setPageName}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </nav>
          {/* <!-- Sidebar Menu --> */}
        </div>
      </aside>
    </ClickOutside>
  );
};

export default Sidebar;
