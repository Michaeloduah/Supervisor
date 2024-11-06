"use client";
import React, { useState } from "react";

const TaskForm: React.FC = () => {
  const [title, setTitle] = useState("Develop Feature X");
  const [description, setDescription] = useState(
    "Implement the new feature X for the client dashboard.",
  );
  const [assignedTo, setAssignedTo] = useState(["John Smith"]);
  const [role, setRole] = useState("Frontend Engineer");
  const [priority, setPriority] = useState("High");
  const [status, setStatus] = useState("In Progress");
  const [startDate, setStartDate] = useState("2024-11-01");
  const [endDate, setEndDate] = useState("2024-12-15");
  const [progress, setProgress] = useState(60);
  const [remarks, setRemarks] = useState(
    "Facing some delays due to API integration issues.",
  );

  const handleAddAssignedTo = () => {
    setAssignedTo([...assignedTo, ""]);
  };

  const handleRemoveAssignedTo = (index: number) => {
    setAssignedTo(assignedTo.filter((_, i) => i !== index));
  };

  const handleAssignedToChange = (index: number, value: string) => {
    const newAssignedTo = [...assignedTo];
    newAssignedTo[index] = value;
    setAssignedTo(newAssignedTo);
  };

  return (
    <>
      <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
        Edit Task Detail
      </h2>
      <form className="mx-auto rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
        {/* Title */}
        <div className="mb-4">
          <label className="mb-1 block font-semibold">Title</label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded border p-2"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="mb-1 block font-semibold">Description</label>
          <textarea className="w-full rounded border p-2" />
        </div>

        {/* Dynamic AssignedTo */}
        <div className="mb-4">
          <label className="mb-1 block font-semibold">Assigned To</label>
          {assignedTo.map((person, index) => (
            <div key={index} className="mb-2 flex items-center">
              <input
                type="text"
                className="mr-2 flex-1 rounded border p-2"
                placeholder="Assigned to"
              />
              <button
                type="button"
                onClick={() => handleRemoveAssignedTo(index)}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddAssignedTo}
            className="text-blue-600"
          >
            + Add Another
          </button>
        </div>

        {/* Role */}
        <div className="mb-4">
          <label className="mb-1 block font-semibold">Role</label>
          <input
            type="text"
            onChange={(e) => setRole(e.target.value)}
            className="w-full rounded border p-2"
          />
        </div>

        {/* Priority */}
        <div className="mb-4">
          <label className="mb-1 block font-semibold">Priority</label>
          <input
            type="text"
            onChange={(e) => setPriority(e.target.value)}
            className="w-full rounded border p-2"
          />
        </div>

        {/* Status */}
        <div className="mb-4">
          <label className="mb-1 block font-semibold">Status</label>
          <input
            type="text"
            onChange={(e) => setStatus(e.target.value)}
            className="w-full rounded border p-2"
          />
        </div>

        {/* Dates */}
        <div className="mb-4">
          <label className="mb-1 block font-semibold">Start Date</label>
          <input
            type="date"
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full rounded border p-2"
          />
        </div>
        <div className="mb-4">
          <label className="mb-1 block font-semibold">End Date</label>
          <input
            type="date"
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full rounded border p-2"
          />
        </div>

        {/* Progress */}
        <div className="mb-4">
          <label className="mb-1 block font-semibold">Progress</label>
          <input
            type="number"
            onChange={(e) => setProgress(Number(e.target.value))}
            className="w-full rounded border p-2"
          />
        </div>

        {/* Remarks */}
        <div className="mb-4">
          <label className="mb-1 block font-semibold">Remarks</label>
          <textarea
            onChange={(e) => setRemarks(e.target.value)}
            className="w-full rounded border p-2"
          />
        </div>

        <button
          type="submit"
          className="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
        >
          Save Task
        </button>
      </form>
    </>
  );
};

export default TaskForm;
