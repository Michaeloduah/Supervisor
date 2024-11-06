"use client";
import { SetStateAction, useState } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import Image1 from "../../../public/images/report/report1.png";
import Image2 from "../../../public/images/report/report2.png";
import Image3 from "../../../public/images/report/report3.png";

interface ImageData {
  id: number;
  url: string | StaticImageData;
  description: string;
}

const report = {
  id: 1,
  projectId: 1,
  title: "Quarterly Progress Report - Q1 2024",
  description:
    "Summary of the project's progress, challenges, and budget expenditure for Q1.",
  task: "John Doe",
  department: "Department of Urban Development",
  submissionDate: "2024-04-15",
  reportType: "Progress Report",
  status: "Reviewed",
  progress: 50,
  images: [
    {
      id: 1,
      url: Image1,
      description: "Overview of construction site progress",
    },
    {
      id: 2,
      url: Image2,
      description: "Close-up of completed road section",
    },
    {
      id: 3,
      url: Image3,
      description: "Inspection team on-site",
    },
  ],
};

const ReportDetailsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  const openModal = (image: ImageData) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };
  return (
    <>
      <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
        Report Details
      </h2>
      <div className="mx-auto rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="font-medium text-gray-600 dark:text-gray-400">
              Report Title:
            </span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {report.title}
            </span>
          </div>
          <hr />
          <div className="flex justify-between">
            <span className="font-medium text-gray-600 dark:text-gray-400">
              Description:
            </span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {report.description}
            </span>
          </div>
          <hr />
          <div className="flex justify-between">
            <span className="font-medium text-gray-600 dark:text-gray-400">
              Task:
            </span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {report.task}
            </span>
          </div>
          <hr />
          <div className="flex justify-between">
            <span className="font-medium text-gray-600 dark:text-gray-400">
              Department:
            </span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {report.department}
            </span>
          </div>
          <hr />
          <div className="flex justify-between">
            <span className="font-medium text-gray-600 dark:text-gray-400">
              Submission Date:
            </span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {report.submissionDate}
            </span>
          </div>
          <hr />
          <div className="flex justify-between">
            <span className="font-medium text-gray-600 dark:text-gray-400">
              Report Type:
            </span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {report.reportType}
            </span>
          </div>
          <hr />
          <div className="flex justify-between">
            <span className="font-medium text-gray-600 dark:text-gray-400">
              Status:
            </span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {report.status}
            </span>
          </div>
          <hr />
          <div className="flex justify-between">
            <span className="font-medium text-gray-600 dark:text-gray-400">
              Progress:
            </span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {report.progress}%
            </span>
          </div>
          <hr />
          <div>
            <span className="font-medium text-gray-600 dark:text-gray-400">
              Images:
            </span>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-3">
              {report.images.map((image) => (
                <div
                  key={image.id}
                  className="relative h-64 w-full cursor-pointer overflow-hidden rounded-lg shadow-md"
                  onClick={() => openModal(image)}
                >
                  <Image
                    src={image.url}
                    alt={image.description}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                  <p className="absolute bottom-2 left-2 bg-black bg-opacity-50 px-2 py-1 text-xs font-medium text-white">
                    {image.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Popup */}
          {isModalOpen && selectedImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="relative w-4/5 max-w-3xl rounded-lg bg-white p-6 dark:bg-gray-800">
                <div className="flex justify-end">
                  <button
                    className="rounded-full text-3xl text-red-500 hover:text-red-600"
                    onClick={closeModal}
                  >
                    ✕
                  </button>
                </div>
                <Image
                  src={selectedImage.url}
                  alt={selectedImage.description}
                  width={700}
                  height={500}
                  className="rounded-lg"
                />
                <p className="mt-4 text-center text-gray-900 dark:text-white">
                  {selectedImage.description}
                </p>
                <div className="flex justify-end">
                  <button
                    className="rounded-full text-2xl font-bold text-red-500 hover:text-red-600"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
          <hr />
          <div>
            <span className="font-medium text-gray-600 dark:text-gray-400">
              Actions:
            </span>
            <p className="mt-2 text-gray-900 dark:text-white">
              <div className="flex gap-3">
                <Link href="#">
                  <button className="rounded-lg bg-[#13802a] p-2 text-sm font-medium text-white transition hover:bg-opacity-90">
                    Download Report
                  </button>
                </Link>
                <Link href="#">
                  <button className="rounded-lg bg-[#13802a] p-2 text-sm font-medium text-white transition hover:bg-opacity-90">
                    View Project
                  </button>
                </Link>
              </div>
            </p>
          </div>
          <hr />
        </div>

        <Link href="/reports">
          <button className="mt-6 w-full rounded-lg bg-[#13802a] py-3 font-medium text-white transition hover:bg-opacity-90">
            Back to Reports
          </button>
        </Link>
      </div>
    </>
  );
};

export default ReportDetailsPage;
