import { useState } from "react";
import { BRAND } from "@/types/brand";
import Image from "next/image";
import Link from "next/link";

const brandData: BRAND[] = [
  {
    logo: "/images/brand/brand-01.svg",
    name: "Google",
    visitors: 3.5,
    revenues: "5,768",
    sales: 590,
    conversion: 4.8,
  },
  {
    logo: "/images/brand/brand-02.svg",
    name: "X.com",
    visitors: 2.2,
    revenues: "4,635",
    sales: 467,
    conversion: 4.3,
  },
  {
    logo: "/images/brand/brand-03.svg",
    name: "Github",
    visitors: 2.1,
    revenues: "4,290",
    sales: 420,
    conversion: 3.7,
  },
  {
    logo: "/images/brand/brand-04.svg",
    name: "Vimeo",
    visitors: 1.5,
    revenues: "3,580",
    sales: 389,
    conversion: 2.5,
  },
  {
    logo: "/images/brand/brand-05.svg",
    name: "Facebook",
    visitors: 1.2,
    revenues: "2,740",
    sales: 230,
    conversion: 1.9,
  },
  {
    logo: "/images/brand/brand-01.svg",
    name: "Google",
    visitors: 3.5,
    revenues: "5,768",
    sales: 590,
    conversion: 4.8,
  },
  {
    logo: "/images/brand/brand-02.svg",
    name: "X.com",
    visitors: 2.2,
    revenues: "4,635",
    sales: 467,
    conversion: 4.3,
  },
  {
    logo: "/images/brand/brand-03.svg",
    name: "Github",
    visitors: 2.1,
    revenues: "4,290",
    sales: 420,
    conversion: 3.7,
  },
  {
    logo: "/images/brand/brand-04.svg",
    name: "Vimeo",
    visitors: 1.5,
    revenues: "3,580",
    sales: 389,
    conversion: 2.5,
  },
  {
    logo: "/images/brand/brand-05.svg",
    name: "Facebook",
    visitors: 1.2,
    revenues: "2,740",
    sales: 230,
    conversion: 1.9,
  },
  // Add more data if needed
];

const TableOne = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const filteredData = brandData.filter((brand) =>
    brand.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const currentData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
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
      <div className="flex items-center justify-between mb-5">
        <h4 className="text-lg font-bold text-dark dark:text-white">Active Projects</h4>
        <Link href="/projects" className="text-blue-400 font-medium">See More</Link>
      </div>

      <div className="mb-4 flex items-center justify-between">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by Project name"
          className="w-full p-2 border rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600"
        />
        <select
          value={rowsPerPage}
          onChange={handleRowsPerPageChange}
          className="ml-4 p-2 border rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600"
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
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 dark:text-white">Project</th>
              <th className="py-3 px-4 text-center text-sm font-semibold text-gray-700 dark:text-white">Visitors</th>
              <th className="py-3 px-4 text-center text-sm font-semibold text-gray-700 dark:text-white">Revenues</th>
              <th className="py-3 px-4 text-center text-sm font-semibold text-gray-700 dark:text-white">Sales</th>
              <th className="py-3 px-4 text-center text-sm font-semibold text-gray-700 dark:text-white">Conversion</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-dark-3">
            {currentData.map((brand, index) => (
              <tr key={index}>
                <td className="py-4 px-6 flex items-center space-x-3">
                  <Image src={brand.logo} alt={`${brand.name} Logo`} width={40} height={40} className="flex-shrink-0" />
                  <span className="font-medium text-gray-900 dark:text-white">{brand.name}</span>
                </td>
                <td className="py-4 px-6 text-center font-medium text-gray-900 dark:text-white">{brand.visitors}K</td>
                <td className="py-4 px-6 text-center font-medium text-green-500">${brand.revenues}</td>
                <td className="py-4 px-6 text-center font-medium text-gray-900 dark:text-white">{brand.sales}</td>
                <td className="py-4 px-6 text-center font-medium text-gray-900 dark:text-white">{brand.conversion}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <span className="text-sm text-gray-700 dark:text-gray-300">
          Showing {startEntry} to {endEntry} of {filteredData.length} entries
        </span>

        <div className="flex items-center space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded-md ${
                currentPage === page
                  ? "bg-[#13802a] text-white"
                  : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
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

export default TableOne;
