import Link from "next/link";

const report = {
  id: 1,
  projectId: 1,
  title: "Quarterly Progress Report - Q1 2024",
  description: "Summary of the project's progress, challenges, and budget expenditure for Q1.",
  author: "John Doe",
  department: "Department of Urban Development",
  submissionDate: "2024-04-15",
  reportType: "Progress Report",
  status: "Reviewed",
  progress: 50,
};

const ReportDetailsPage = () => {
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
              Author:
            </span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {report.author}
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
