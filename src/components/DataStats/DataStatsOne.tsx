import React from "react";
import Link from "next/link";
import { dataStats } from "@/types/dataStats";
import { GrProjects } from "react-icons/gr";
import { TbReport } from "react-icons/tb";
import { MdOutlineWorkOutline } from "react-icons/md";
import { BsListTask } from "react-icons/bs";

const dataStatsList = [
  {
    icon: <GrProjects size={26} fill="#13802a" />,
    color: "#3FD97F",
    title: "Projects",
    value: "18",
    route: "/projects",
  },
  {
    icon: <MdOutlineWorkOutline size={26} fill="#13802a" />,
    color: "#8155FF",
    title: "Contractors",
    value: "9",
    route: "/contractors",
  },
  {
    icon: <BsListTask size={26} fill="#13802a" />,
    color: "#FF9C55",
    title: "Active Task",
    value: "90",
    route: "/tasks",
  },
  {
    icon: <TbReport size={26} fill="#13802a" />,
    color: "#FF9C55",
    title: "Reports",
    value: "45",
    route: "/reports",
  },
];

const DataStatsOne: React.FC<dataStats> = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-1 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {dataStatsList.map((item, index) => (
          <Link href={item.route} key={index}>
            <div className="rounded-[10px] bg-[#fff] p-6 shadow-1 dark:bg-gray-dark">
              <div
                className="flex h-14.5 w-auto items-center justify-between rounded-full"
                // style={{ backgroundColor: item.color }}
              >
                <span className="text-lg font-bold">{item.title}</span>
                <span>{item.icon}</span>
              </div>

              <div className="mt-6 flex items-end justify-between">
                <div>
                  <h4 className="mb-1.5 text-heading-6 font-bold text-dark dark:text-white">
                    {item.value}
                  </h4>
                </div>

                {/* <span
                  className={`flex items-center gap-1.5 text-body-sm font-medium ${
                    item.growthRate > 0 ? "text-green" : "text-red"
                  }`}
                >
                  {item.growthRate}%
                  {item.growthRate > 0 ? (
                    <svg
                      className="fill-current"
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.35716 2.3925L0.908974 5.745L5.0443e-07 4.86125L5 -5.1656e-07L10 4.86125L9.09103 5.745L5.64284 2.3925L5.64284 10L4.35716 10L4.35716 2.3925Z"
                        fill=""
                      />
                    </svg>
                  ) : (
                    <svg
                      className="fill-current"
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.64284 7.6075L9.09102 4.255L10 5.13875L5 10L-8.98488e-07 5.13875L0.908973 4.255L4.35716 7.6075L4.35716 7.6183e-07L5.64284 9.86625e-07L5.64284 7.6075Z"
                        fill=""
                      />
                    </svg>
                  )}
                </span> */}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default DataStatsOne;
