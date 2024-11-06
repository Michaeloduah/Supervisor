"use client";
import React, { useState } from "react";

const ReportForm = () => {
  const [images, setImages] = useState([{ id: 1, url: "", description: "" }]);

  const handleAddImage = () => {
    setImages([...images, { id: images.length + 1, url: "", description: "" }]);
  };

  const handleRemoveImage = (id: number) => {
    setImages(images.filter((image) => image.id !== id));
  };

  const handleImageChange = (id: number, field: string, value: string) => {
    setImages(
      images.map((image) =>
        image.id === id ? { ...image, [field]: value } : image,
      ),
    );
  };

  return (
    <>
      <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
        Add New Report
      </h2>
      <form className="mx-auto rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
        <div className="mb-4">
          <label className="mb-1 block">Project Name</label>
          <input
            type="text"
            className="w-full rounded border p-2"
            placeholder="Project Name"
          />
        </div>

        <div className="mb-4">
          <label className="mb-1 block">Title</label>
          <input
            type="text"
            className="w-full rounded border p-2"
            placeholder="Quarterly Progress Report - Q1 2024"
          />
        </div>

        <div className="mb-4">
          <label className="mb-1 block">Description</label>
          <textarea
            className="w-full rounded border p-2"
            placeholder="Summary of the project's progress, challenges, and budget expenditure for Q1."
          />
        </div>

        <div className="mb-4">
          <label className="mb-1 block">Task</label>
          <input
            type="text"
            className="w-full rounded border p-2"
            placeholder="John Doe"
          />
        </div>

        <div className="mb-4">
          <label className="mb-1 block">Department</label>
          <input
            type="text"
            className="w-full rounded border p-2"
            placeholder="Department of Urban Development"
          />
        </div>

        <div className="mb-4">
          <label className="mb-1 block">Submission Date</label>
          <input type="date" className="w-full rounded border p-2" />
        </div>

        <div className="mb-4">
          <label className="mb-1 block">Report Type</label>
          <input
            type="text"
            className="w-full rounded border p-2"
            placeholder="Progress Report"
          />
        </div>

        <div className="mb-4">
          <label className="mb-1 block">Status</label>
          <select className="w-full rounded border p-2">
            <option value="Reviewed">Reviewed</option>
            <option value="Pending">Pending</option>
            <option value="Draft">Draft</option>
          </select>
        </div>

        {/* Dynamic Image Fields */}
        <div className="mb-4">
          <h3 className="mb-2 font-semibold">Images</h3>
          {images.map((image) => (
            <div key={image.id} className="mb-3 rounded border p-3">
              <div className="mb-2">
                <label className="mb-1 block">Image URL</label>
                <input
                  type="file"
                  className="w-full rounded border p-2"
                  placeholder="Image URL"
                  value={image.url}
                  onChange={(e) =>
                    handleImageChange(image.id, "url", e.target.value)
                  }
                />
              </div>
              <div className="mb-2">
                <label className="mb-1 block">Description</label>
                <input
                  type="text"
                  className="w-full rounded border p-2"
                  placeholder="Description"
                  value={image.description}
                  onChange={(e) =>
                    handleImageChange(image.id, "description", e.target.value)
                  }
                />
              </div>
              <button
                type="button"
                onClick={() => handleRemoveImage(image.id)}
                className="text-red-500"
              >
                Remove Image
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddImage}
            className="mt-2 text-blue-600"
          >
            + Add Another Image
          </button>
        </div>

        <button
          type="submit"
          className="mt-4 rounded bg-[#13802a] p-2 text-white"
        >
          Submit Report
        </button>
      </form>
    </>
  );
};

export default ReportForm;
