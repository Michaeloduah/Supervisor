"use client";
import React, { useState } from "react";

const TeamMemberForm: React.FC = () => {
  // Dummy project data
  const projects = [
    { id: 1, name: "Urban Development Project" },
    { id: 2, name: "Healthcare System Revamp" },
    { id: 3, name: "Educational Infrastructure Upgrade" },
  ];

  // Initial form state
  const [teamMember, setTeamMember] = useState({
    projectId: "",
    fullName: "",
    role: "",
    responsibilities: "",
    contact: "",
    availability: "",
    startDate: "",
    endDate: "",
    imageUrl: "",
    payment: "", // New payment field
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setTeamMember({
      ...teamMember,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", teamMember);
    // Add form submission logic here
  };

  return (
    <>
      <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
        Add New Team Member
      </h2>

      <form onSubmit={handleSubmit} className="mx-auto rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
        {/* Project Selection */}
        <div className="mb-4">
          <label className="mb-1 block">Select Project</label>
          <select
            name="projectId"
            value={teamMember.projectId}
            onChange={handleChange}
            className="w-full rounded border p-2"
          >
            <option value="" disabled>
              Select Project
            </option>
            {projects.map((project) => (
              <option key={project.id} value={project.id}>
                {project.name}
              </option>
            ))}
          </select>
        </div>

        {/* Full Name */}
        <div className="mb-4">
          <label className="mb-1 block">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={teamMember.fullName}
            onChange={handleChange}
            className="w-full rounded border p-2"
            placeholder="Jane Doe"
          />
        </div>

        {/* Role */}
        <div className="mb-4">
          <label className="mb-1 block">Role</label>
          <input
            type="text"
            name="role"
            value={teamMember.role}
            onChange={handleChange}
            className="w-full rounded border p-2"
            placeholder="Project Manager"
          />
        </div>

        {/* Responsibilities */}
        <div className="mb-4">
          <label className="mb-1 block">Responsibilities</label>
          <textarea
            name="responsibilities"
            value={teamMember.responsibilities}
            onChange={handleChange}
            className="w-full rounded border p-2"
            placeholder="Oversee project planning and execution."
          />
        </div>

        {/* Contact */}
        <div className="mb-4">
          <label className="mb-1 block">Contact</label>
          <input
            type="email"
            name="contact"
            value={teamMember.contact}
            onChange={handleChange}
            className="w-full rounded border p-2"
            placeholder="jane.doe@example.com"
          />
        </div>

        {/* Availability */}
        <div className="mb-4">
          <label className="mb-1 block">Availability</label>
          <input
            type="text"
            name="availability"
            value={teamMember.availability}
            onChange={handleChange}
            className="w-full rounded border p-2"
            placeholder="Full-time"
          />
        </div>

        {/* Start Date */}
        <div className="mb-4">
          <label className="mb-1 block">Start Date</label>
          <input
            type="date"
            name="startDate"
            value={teamMember.startDate}
            onChange={handleChange}
            className="w-full rounded border p-2"
          />
        </div>

        {/* End Date */}
        <div className="mb-4">
          <label className="mb-1 block">End Date</label>
          <input
            type="date"
            name="endDate"
            value={teamMember.endDate}
            onChange={handleChange}
            className="w-full rounded border p-2"
          />
        </div>

        {/* Image URL */}
        <div className="mb-4">
          <label className="mb-1 block">Image URL</label>
          <input
            type="file"
            name="imageUrl"
            value={teamMember.imageUrl}
            onChange={handleChange}
            className="w-full rounded border p-2"
            placeholder="Image URL"
          />
        </div>

        {/* Payment */}
        <div className="mb-4">
          <label className="mb-1 block">Payment</label>
          <input
            type="number"
            name="payment"
            value={teamMember.payment}
            onChange={handleChange}
            className="w-full rounded border p-2"
            placeholder="5000"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 rounded bg-[#13802a] px-4 py-2 text-white"
        >
          Add Team Member
        </button>
      </form>
    </>
  );
};

export default TeamMemberForm;
