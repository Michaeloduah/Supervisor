import { useState } from "react";
import Link from "next/link";
import reportData from "@/data/reports"

const Reports = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const filteredData = reportData.filter((report) =>
    report.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const currentData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage,
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(parseInt(e.target.value));
    setCurrentPage(1); // Reset to first page on rows per page change
  };

  const startEntry = (currentPage - 1) * rowsPerPage + 1;
  const endEntry = Math.min(currentPage * rowsPerPage, filteredData.length);

  return (
    <div className="rounded-[10px] bg-white p-5 shadow-md dark:bg-gray-dark dark:shadow-card">
      <div className="mb-5 flex items-center justify-between">
        <h4 className="text-lg font-bold text-dark dark:text-white">
          Project Reports
        </h4>
        <Link href="/reports" className="font-medium text-blue-400">
          See All Reports
        </Link>
      </div>

      <div className="mb-4 flex items-center justify-between">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by Report title"
          className="w-full rounded-md border p-2 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
        />
        <select
          value={rowsPerPage}
          onChange={handleRowsPerPageChange}
          className="ml-4 rounded-md border p-2 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-dark-3">
          <thead>
            <tr>
              <th className="px-4 py-4 text-left text-sm font-semibold text-gray-700 dark:text-white">Title</th>
              <th className="px-4 py-4 text-left text-sm font-semibold text-gray-700 dark:text-white">Author</th>
              <th className="px-4 py-4 text-left text-sm font-semibold text-gray-700 dark:text-white">Department</th>
              <th className="px-4 py-4 text-left text-sm font-semibold text-gray-700 dark:text-white">Report Type</th>
              <th className="px-4 py-4 text-left text-sm font-semibold text-gray-700 dark:text-white">Status</th>
              <th className="px-4 py-4 text-left text-sm font-semibold text-gray-700 dark:text-white">Submission Date</th>
              <th className="px-4 py-4 text-left text-sm font-semibold text-gray-700 dark:text-white">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-dark-3">
            {currentData.map((report) => (
              <tr key={report.id}>
                <td className="px-4 py-4 text-left font-medium text-gray-900 dark:text-white">{report.title}</td>
                <td className="px-4 py-4 text-left font-medium text-gray-900 dark:text-white">{report.author}</td>
                <td className="px-4 py-4 text-left font-medium text-gray-900 dark:text-white">{report.department}</td>
                <td className="px-4 py-4 text-left font-medium text-gray-900 dark:text-white">{report.reportType}</td>
                <td className="px-4 py-4 text-left font-medium text-gray-900 dark:text-white">{report.status}</td>
                <td className="px-4 py-4 text-left font-medium text-gray-900 dark:text-white">{report.submissionDate}</td>
                <td className="px-4 py-4 text-left font-medium text-gray-900 dark:text-white">
                  <Link href={"/reports/" + report.id}>
                    <button className="cursor-pointer rounded-lg bg-[#13802a] p-3 font-medium text-white transition hover:bg-opacity-90">
                      View Details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm text-gray-700 dark:text-gray-300">
          Showing {startEntry} to {endEntry} of {filteredData.length} entries
        </span>

        <div className="flex items-center space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`rounded-md px-3 py-1 ${
                currentPage === page
                  ? "bg-[#13802a] text-white"
                  : "bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reports;
