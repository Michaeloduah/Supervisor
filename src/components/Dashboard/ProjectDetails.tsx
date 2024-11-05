import Link from "next/link";

const project = {
  id: 1,
  name: "City Infrastructure Development",
  department: "Department of Urban Development",
  location: "Downtown Metro City",
  startDate: "2024-01-15",
  endDate: "2025-12-30",
  status: "In Progress",
  budget: "15,000,000",
  expenditure: "7,500,000",
  team: "Metro Build Co.",
  projectManager: "Jane Doe",
  progress: 50,
  remarks: "Project on track, minor delays expected due to weather conditions.",
};

const ProjectDetailsPage = () => {
  return (
    <>
      <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
        Project Details
      </h2>
      <div className="mx-auto rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="font-medium text-gray-600 dark:text-gray-400">
              Project Name:
            </span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {project.name}
            </span>
          </div>
          <hr />
          <div className="flex justify-between">
            <span className="font-medium text-gray-600 dark:text-gray-400">
              Department:
            </span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {project.department}
            </span>
          </div>
          <hr />
          <div className="flex justify-between">
            <span className="font-medium text-gray-600 dark:text-gray-400">
              Location:
            </span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {project.location}
            </span>
          </div>
          <hr />
          <div className="flex justify-between">
            <span className="font-medium text-gray-600 dark:text-gray-400">
              Start Date:
            </span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {project.startDate}
            </span>
          </div>
          <hr />
          <div className="flex justify-between">
            <span className="font-medium text-gray-600 dark:text-gray-400">
              End Date:
            </span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {project.endDate}
            </span>
          </div>
          <hr />
          <div className="flex justify-between">
            <span className="font-medium text-gray-600 dark:text-gray-400">
              Status:
            </span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {project.status}
            </span>
          </div>
          <hr />
          <div className="flex justify-between">
            <span className="font-medium text-gray-600 dark:text-gray-400">
              Budget:
            </span>
            <span className="font-semibold text-green-600 dark:text-green-400">
              N{project.budget}
            </span>
          </div>
          <hr />
          <div className="flex justify-between">
            <span className="font-medium text-gray-600 dark:text-gray-400">
              Expenditure:
            </span>
            <span className="font-semibold text-red-500 dark:text-red-400">
              N{project.expenditure}
            </span>
          </div>
          <hr />
          <div className="flex justify-between">
            <span className="font-medium text-gray-600 dark:text-gray-400">
              Teams:
            </span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {project.team}
            </span>
          </div>
          <hr />
          <div className="flex justify-between">
            <span className="font-medium text-gray-600 dark:text-gray-400">
              Project Manager:
            </span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {project.projectManager}
            </span>
          </div>
          <hr />
          <div className="flex justify-between">
            <span className="font-medium text-gray-600 dark:text-gray-400">
              Progress:
            </span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {project.progress}%
            </span>
          </div>
          <hr />
          <div>
            <span className="font-medium text-gray-600 dark:text-gray-400">
              Remarks:
            </span>
            <p className="mt-2 text-gray-900 dark:text-white">
              {project.remarks}
            </p>
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
                    View Reports
                  </button>
                </Link>
                <Link href="#">
                  <button className="rounded-lg bg-[#13802a] p-2 text-sm font-medium text-white transition hover:bg-opacity-90">
                    Project Tracker
                  </button>
                </Link>
                <Link href="#">
                  <button className="rounded-lg bg-[#13802a] p-2 text-sm font-medium text-white transition hover:bg-opacity-90">
                    Expends Tracker
                  </button>
                </Link>
              </div>
            </p>
          </div>
          <hr />
        </div>

        <Link href="/projects">
          <button className="mt-6 w-full rounded-lg bg-[#13802a] py-3 font-medium text-white transition hover:bg-opacity-90">
            Back to Projects
          </button>
        </Link>
      </div>
    </>
  );
};

export default ProjectDetailsPage;
