"use client";
import React, { useState, useEffect } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import TeamImage1 from "../../../public/images/user/user-01.png";
import TeamImage2 from "../../../public/images/user/user-02.png";
import TeamImage3 from "../../../public/images/user/user-03.png";
import TeamImage4 from "../../../public/images/user/user-04.png";
import TeamImage5 from "../../../public/images/user/user-05.png";
import TeamImage6 from "../../../public/images/user/user-01.png";
import TeamImage7 from "../../../public/images/user/user-01.png";
import TeamImage8 from "../../../public/images/user/user-01.png";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";

type Project =
  | "City Infrastructure Development"
  | "Urban Green Space Initiative"
  | "Transportation Network Expansion"
  | "Digital Infrastructure Upgrade";

type TeamMember = {
  id: number;
  fullName: string;
  role: string;
  responsibilities: string;
  contact: string;
  availability: string;
  startDate: string;
  endDate?: string;
  imageUrl: string | StaticImport;
  payment: string;
};

// Sample data: Projects and team members
const teamData = {
  "City Infrastructure Development": [
    {
      id: 1,
      fullName: "Jane Doe",
      role: "Project Manager",
      responsibilities: "Oversee project planning and execution.",
      contact: "jane.doe@example.com",
      availability: "Full-time",
      startDate: "2024-01-15",
      endDate: "2025-12-30",
      imageUrl: TeamImage1, // replace with actual image
      payment: "200,000"
    },
    {
      id: 2,
      fullName: "John Smith",
      role: "Civil Engineer",
      responsibilities: "Design and supervise construction plans.",
      contact: "john.smith@example.com",
      availability: "Full-time",
      startDate: "2024-01-15",
      imageUrl: TeamImage2,
      payment: "200,000"
    },
  ],
  "Urban Green Space Initiative": [
    {
      id: 3,
      fullName: "Emily Brown",
      role: "Landscape Architect",
      responsibilities: "Develop landscape designs for green spaces.",
      contact: "emily.brown@example.com",
      availability: "Part-time",
      startDate: "2024-03-01",
      endDate: "2024-12-31",
      imageUrl: TeamImage3,
      payment: "200,000"
    },
    {
      id: 4,
      fullName: "Michael Lee",
      role: "Environmental Consultant",
      responsibilities: "Assess environmental impact of urban projects.",
      contact: "michael.lee@example.com",
      availability: "Consultant",
      startDate: "2024-04-15",
      imageUrl: TeamImage4,
      payment: "200,000"
    },
  ],
  "Transportation Network Expansion": [
    {
      id: 5,
      fullName: "Sarah Connor",
      role: "Logistics Coordinator",
      responsibilities: "Coordinate logistics and manage schedules.",
      contact: "sarah.connor@example.com",
      availability: "Full-time",
      startDate: "2024-05-10",
      endDate: "2025-05-10",
      imageUrl: TeamImage5,
      payment: "200,000"
    },
    {
      id: 6,
      fullName: "David Kim",
      role: "Transportation Engineer",
      responsibilities:
        "Design transportation routes and analyze traffic flow.",
      contact: "david.kim@example.com",
      availability: "Full-time",
      startDate: "2024-06-20",
      imageUrl: TeamImage6,
      payment: "200,000"
    },
  ],
  "Digital Infrastructure Upgrade": [
    {
      id: 7,
      fullName: "Laura Nguyen",
      role: "IT Project Manager",
      responsibilities:
        "Oversee digital infrastructure upgrades and manage IT teams.",
      contact: "laura.nguyen@example.com",
      availability: "Full-time",
      startDate: "2024-02-01",
      endDate: "2024-12-01",
      imageUrl: TeamImage7,
      payment: "200,000"
    },
    {
      id: 8,
      fullName: "James Clark",
      role: "Software Engineer",
      responsibilities: "Develop software solutions for project requirements.",
      contact: "james.clark@example.com",
      availability: "Full-time",
      startDate: "2024-02-15",
      imageUrl: TeamImage8,
      payment: "200,000"
    },
  ],
};

const SidebarWithTeamMembers: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Project>(
    "City Infrastructure Development",
  );

  // State for modal visibility and selected food item
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Function to handle category selection
  const handleCategoryClick = (category: Project) => {
    setSelectedCategory(category);
  };

  // Function to open the modal and set the selected food
  const handleViewDetails = (teamMember: TeamMember) => {
    setSelectedMember(teamMember);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="mb-1.5 text-heading-6 font-bold text-dark dark:text-white">
          Teams
        </h1>

        <Link href="/teams/new">
        <button className="rounded-full bg-[#13802a] px-2 py-3 font-medium text-white transition hover:bg-opacity-90">
          Add New Team Member
        </button>
        </Link>
      </div>
      <div className="flex gap-3">
        <div className="flex items-center justify-between"></div>
        {/* Sidebar */}
        <div className="md:p-6">
          <div className="sticky top-30">
            <h2 className="mb-5 text-lg font-medium text-[#13802a] dark:text-white">
              Projects
            </h2>
            <ul className="text-md text-black">
              {(Object.keys(teamData) as Array<Project>) // Cast the keys to Project[]
                .map((category) => (
                  <li key={category}>
                    <button
                      onClick={() => handleCategoryClick(category)}
                      className={`my-2 block w-full rounded-lg p-4 text-left text-lg font-medium text-[#13802a] dark:text-white ${
                        selectedCategory === category
                          ? "bg-white bg-opacity-90 dark:bg-gray-700"
                          : ""
                      }`}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        {/* Main content area */}
        <div className="flex-1 md:p-8">
          <h2 className="mb-6 flex flex-row-reverse text-lg font-semibold text-[#13802a] dark:text-white">
            {selectedCategory.charAt(0).toUpperCase() +
              selectedCategory.slice(1)}{" "}
          </h2>

          {/* Food Items */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {teamData[selectedCategory]?.length > 0 ? (
              teamData[selectedCategory].map((teamMember) => (
                <div
                  key={teamMember.id}
                  className="rounded-lg bg-white p-6 shadow-lg dark:bg-dark"
                >
                  {/* Image */}
                  <Image
                    src={teamMember.imageUrl}
                    alt={teamMember.fullName}
                    className="mb-4 h-[100px] w-auto rounded-lg object-cover"
                  />

                  {/* Team Name */}
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                    {teamMember.fullName}
                  </h3>

                  {/* Price */}
                  <p className="mb-4 text-lg text-gray-900 dark:text-white">
                    {teamMember.role}
                  </p>

                  {/* Action Icons: View, Edit, Delete */}
                  <div className="flex justify-between">
                    <button
                      className="text-blue-600"
                      onClick={() => handleViewDetails(teamMember)}
                    >
                      <FaEye size={20} />
                    </button>
                    <Link href={`/teams/${teamMember.id}`}>
                      <button className="text-green-600">
                        <FaEdit size={20} />
                      </button>
                    </Link>
                    <button className="text-[#dc2626]">
                      <FaTrash size={20} />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-lg text-gray-600">
                No team member available in this project.
              </p>
            )}
          </div>
        </div>

        {/* Modal for viewing food details */}
        {isModalOpen && selectedMember && (
          <div className="fixed inset-0 top-10 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 md:top-24">
            <div className="mx-3 w-full max-w-lg rounded-lg bg-white p-8 shadow-lg dark:bg-dark">
              {/* Close button */}
              <button
                className="relative left-[100%] text-2xl text-[#dc2626]"
                onClick={handleCloseModal}
              >
                &times;
              </button>

              {/* Food Image */}
              <Image
                src={selectedMember.imageUrl}
                alt={selectedMember.fullName}
                className="mb-4 h-[100px] w-auto rounded-lg object-cover"
              />

              {/* Full Name */}
              <h2 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
                {selectedMember.fullName}
              </h2>

              {/* Role */}
              <p className="mb-4 text-lg text-gray-900 dark:text-white">
                Role: {selectedMember.role}
              </p>

              {/* Responsibilities */}
              <p className="text-md font-bold text-gray-900 dark:text-white">
                Responsibilities: {selectedMember.responsibilities}
              </p>

              {/* Payment */}
              <p className="text-md font-bold text-gray-900 dark:text-white">
                Payment: {selectedMember.payment}
              </p>

              {/* Contact */}
              <p className="text-md font-bold text-gray-900 dark:text-white">
                Contact: {selectedMember.contact}
              </p>

              {/* Start Date */}
              <p className="text-md font-bold text-gray-900 dark:text-white">
                Start Date: {selectedMember.startDate}
              </p>

              {/* End Date */}
              <p className="text-md font-bold text-gray-900 dark:text-white">
                End Date: {selectedMember.endDate}
              </p>

              {/* Close button */}
              <div className="mt-6 flex justify-end">
                <button
                  className="rounded-lg bg-[#dc2626] px-4 py-2 text-white hover:bg-[#dc2626]"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SidebarWithTeamMembers;
