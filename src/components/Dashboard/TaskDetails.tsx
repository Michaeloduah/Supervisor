import Link from "next/link";

const task = {
  id: 1,
  title: "Develop Feature X",
  description: "Implement the new feature X for the client dashboard.",
  assignedTo: "John Smith",
  role: "Frontend Engineer",
  priority: "High",
  status: "In Progress",
  startDate: "2024-11-01",
  endDate: "2024-12-15",
  progress: 60,
  remarks: "Facing some delays due to API integration issues.",
};

const TaskDetails = () => {
  return (
    <>
      <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
        Task Details
      </h2>
      <div className="mx-auto rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="font-medium text-gray-600 dark:text-gray-400">
              Task Title:
            </span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {task.title}
            </span>
          </div>
          <hr />
          <div className="flex justify-between">
            <span className="font-medium text-gray-600 dark:text-gray-400">
              Description:
            </span>
            <p className="font-semibold text-gray-900 dark:text-white">
              {task.description}
            </p>
          </div>
          <hr />
          <div className="flex justify-between">
            <span className="font-medium text-gray-600 dark:text-gray-400">
              Assigned To:
            </span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {task.assignedTo}
            </span>
          </div>
          <hr />
          <div className="flex justify-between">
            <span className="font-medium text-gray-600 dark:text-gray-400">
              Role:
            </span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {task.role}
            </span>
          </div>
          <hr />
          <div className="flex justify-between">
            <span className="font-medium text-gray-600 dark:text-gray-400">
              Priority:
            </span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {task.priority}
            </span>
          </div>
          <hr />
          <div className="flex justify-between">
            <span className="font-medium text-gray-600 dark:text-gray-400">
              Status:
            </span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {task.status}
            </span>
          </div>
          <hr />
          <div className="flex justify-between">
            <span className="font-medium text-gray-600 dark:text-gray-400">
              Start Date:
            </span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {task.startDate}
            </span>
          </div>
          <hr />
          <div className="flex justify-between">
            <span className="font-medium text-gray-600 dark:text-gray-400">
              End Date:
            </span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {task.endDate}
            </span>
          </div>
          <hr />
          <div className="flex justify-between">
            <span className="font-medium text-gray-600 dark:text-gray-400">
              Progress:
            </span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {task.progress}%
            </span>
          </div>
          <hr />
          {task.remarks && (
            <div>
              <span className="font-medium text-gray-600 dark:text-gray-400">
                Remarks:
              </span>
              <p className="mt-2 text-gray-900 dark:text-white">
                {task.remarks}
              </p>
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
          <div className="mt-4">
            <Link href="/tasks">
              <button className="w-full rounded-lg bg-[#13802a] py-3 font-medium text-white transition hover:bg-opacity-90">
                Back to Tasks
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskDetails;
