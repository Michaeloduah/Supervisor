"use client";
import { useState } from "react";

const EditDetailsForm: React.FC = () => {
  // State for dynamic form fields
  const [services, setServices] = useState<string[]>([""]);
  const [certifications, setCertifications] = useState([
    { name: "", issuedBy: "", year: "" },
  ]);
  const [portfolio, setPortfolio] = useState([
    { projectName: "", location: "", date: "", description: "", budget: "" },
  ]);
  const [licenses, setLicenses] = useState([
    { type: "", issuedBy: "", startDate: "", endDate: "" },
  ]);
  const [references, setReferences] = useState([
    { name: "", position: "", organization: "", contact: "", email: "" },
  ]);
  const [bankDetails, setBankDetails] = useState([
    { bankName: "", accountNumber: "", accountType: "", bvn: "" },
  ]);

  // Helper to add a new entry
  const addEntry = (
    setter: React.Dispatch<React.SetStateAction<any[]>>,
    template: any,
  ) => {
    setter((prev) => [...prev, { ...template }]);
  };

  // Helper to remove an entry by index
  const removeEntry = (
    setter: React.Dispatch<React.SetStateAction<any[]>>,
    index: number,
  ) => {
    setter((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <form>
      <h2 className="mb-4 text-xl font-bold">Edit Details</h2>
      <div className="mx-auto rounded-lg bg-white p-5 shadow-md dark:bg-gray-800">
        {/* Business Information Section */}
        <div className="my-3 rounded-xl border p-3">
          <h3 className="mb-2 font-semibold">Business Information</h3>
          <div className="mb-4">
            <label className="mb-1 block">Business Name</label>
            <input
              type="text"
              className="w-full rounded-md border p-2"
              placeholder="Prime Builders Ltd."
            />
          </div>

          <div className="mb-4">
            <label className="mb-1 block">Owner Name</label>
            <input
              type="text"
              className="w-full rounded-md border p-2"
              placeholder="Alex Johnson"
            />
          </div>

          <div className="mb-4">
            <label className="mb-1 block">Business Type</label>
            <input
              type="text"
              className="w-full rounded-md border p-2"
              placeholder="Construction Contractor"
            />
          </div>

          <div className="mb-4">
            <label className="mb-1 block">CAC Registration Number</label>
            <input
              type="text"
              className="w-full rounded-md border p-2"
              placeholder="RC123456789"
            />
          </div>

          <div className="mb-4">
            <label className="mb-1 block">Years in Business</label>
            <input
              type="number"
              className="w-full rounded-md border p-2"
              placeholder="12"
            />
          </div>
        </div>

        {/* Contact Information */}
        <div className="my-3 rounded-xl border p-3">
          <h3 className="mb-2 font-semibold">Contact Information</h3>
          <div className="mb-4">
            <label className="mb-1 block">Phone</label>
            <input
              type="text"
              className="w-full rounded-md border p-2"
              placeholder="+234-800-123-4567"
            />
          </div>
          <div className="mb-4">
            <label className="mb-1 block">Email</label>
            <input
              type="email"
              className="w-full rounded-md border p-2"
              placeholder="contact@primebuilders.com"
            />
          </div>
          <div className="mb-4">
            <label className="mb-1 block">Website</label>
            <input
              type="url"
              className="w-full rounded-md border p-2"
              placeholder="www.primebuilders.com"
            />
          </div>
        </div>

        {/* Address Information */}
        <div className="my-3 rounded-xl border p-3">
          <h3 className="mb-2 font-semibold">Address Information</h3>
          <div className="mb-4">
            <label className="mb-1 block">Street</label>
            <input
              type="text"
              className="w-full rounded-md border p-2"
              placeholder="15 Industrial Road"
            />
          </div>
          <div className="mb-4">
            <label className="mb-1 block">City</label>
            <input
              type="text"
              className="w-full rounded-md border p-2"
              placeholder="Lagos"
            />
          </div>
          <div className="mb-4">
            <label className="mb-1 block">State</label>
            <input
              type="text"
              className="w-full rounded-md border p-2"
              placeholder="Lagos State"
            />
          </div>
          <div className="mb-4">
            <label className="mb-1 block">Postal Code</label>
            <input
              type="text"
              className="w-full rounded-md border p-2"
              placeholder="101001"
            />
          </div>
          <div className="mb-4">
            <label className="mb-1 block">Country</label>
            <input
              type="text"
              className="w-full rounded-md border p-2"
              placeholder="Nigeria"
            />
          </div>
        </div>

        {/* Services Offered Section */}
        <div className="my-3 rounded-xl border p-3">
          <h3 className="mb-2 font-semibold">Services Offered</h3>
          {services.map((service, index) => (
            <div key={index} className="mb-4 ">
              <input
                type="text"
                className="mb-2 w-full rounded-md border p-2"
                placeholder="Service Name"
              />
              <button
                type="button"
                className="ml-2 text-red-600"
                onClick={() => removeEntry(setServices, index)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            className="text-blue-600"
            onClick={() => addEntry(setServices, "")}
          >
            + Add Another Service
          </button>
        </div>

        {/* Certifications Section */}
        <div className="my-3 rounded-xl border p-3">
          <h3 className="mb-2 font-semibold">Certifications</h3>
          {certifications.map((cert, index) => (
            <div className="mb-2 rounded-xl border p-3">
              <div key={index} className="mb-4 ">
                <input
                  type="text"
                  className="mb-2 w-full rounded-md border p-2"
                  placeholder="Certification Name"
                />
                <input
                  type="text"
                  className="mb-2 w-full rounded-md border p-2"
                  placeholder="Issued By"
                />
                <input
                  type="number"
                  className="mb-2 w-full rounded-md border p-2"
                  placeholder="Year"
                />
                <button
                  type="button"
                  className="ml-2 text-red-600"
                  onClick={() => removeEntry(setCertifications, index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <button
            type="button"
            className="text-blue-600"
            onClick={() =>
              addEntry(setCertifications, { name: "", issuedBy: "", year: "" })
            }
          >
            + Add Another Certification
          </button>
        </div>

        {/* Portfolio Section */}
        <div className="my-3 rounded-xl border p-3">
          <h3 className="mb-2 font-semibold">Portfolio</h3>
          {portfolio.map((project, index) => (
            <div className="mb-2 rounded-xl border p-3">
              <div key={index} className="mb-4 ">
                <input
                  type="text"
                  className="mb-2 w-full rounded-md border p-2"
                  placeholder="Project Name"
                />
                <input
                  type="text"
                  className="mb-2 w-full rounded-md border p-2"
                  placeholder="Location"
                />
                <input
                  type="date"
                  className="mb-2 w-full rounded-md border p-2"
                />
                <input
                  type="text"
                  className="mb-2 w-full rounded-md border p-2"
                  placeholder="Description"
                />
                <input
                  type="number"
                  className="mb-2 w-full rounded-md border p-2"
                  placeholder="Budget"
                />
                <button
                  type="button"
                  className="ml-2 text-red-600"
                  onClick={() => removeEntry(setPortfolio, index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <button
            type="button"
            className="text-blue-600"
            onClick={() =>
              addEntry(setPortfolio, {
                projectName: "",
                location: "",
                date: "",
                description: "",
                budget: "",
              })
            }
          >
            + Add Another Project
          </button>
        </div>

        {/* Licenses Section */}
        <div className="my-3 rounded-xl border p-3">
          <h3 className="mb-2 font-semibold">Licenses</h3>
          {licenses.map((license, index) => (
            <div className="mb-2 rounded-xl border p-3">
              <div key={index} className="mb-4 ">
                <input
                  type="text"
                  className="mb-2 w-full rounded-md border p-2"
                  placeholder="License Type"
                />
                <input
                  type="text"
                  className="mb-2 w-full rounded-md border p-2"
                  placeholder="Issued By"
                />
                <input
                  type="date"
                  className="mb-2 w-full rounded-md border p-2"
                />
                <input
                  type="date"
                  className="mb-2 w-full rounded-md border p-2"
                />
                <button
                  type="button"
                  className="ml-2 text-red-600"
                  onClick={() => removeEntry(setLicenses, index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <button
            type="button"
            className="text-blue-600"
            onClick={() =>
              addEntry(setLicenses, {
                type: "",
                issuedBy: "",
                startDate: "",
                endDate: "",
              })
            }
          >
            + Add Another License
          </button>
        </div>

        {/* References Section */}
        <div className="my-3 rounded-xl border p-3">
          <h3 className="mb-2 font-semibold">References</h3>
          {references.map((reference, index) => (
            <div className="mb-2 rounded-xl border p-3">
              <div key={index} className="mb-4 ">
                <input
                  type="text"
                  className="mb-2 w-full rounded-md border p-2"
                  placeholder="Reference Name"
                />
                <input
                  type="text"
                  className="mb-2 w-full rounded-md border p-2"
                  placeholder="Position"
                />
                <input
                  type="text"
                  className="mb-2 w-full rounded-md border p-2"
                  placeholder="Organization"
                />
                <input
                  type="text"
                  className="mb-2 w-full rounded-md border p-2"
                  placeholder="Contact"
                />
                <input
                  type="email"
                  className="mb-2 w-full rounded-md border p-2"
                  placeholder="Email"
                />
                <button
                  type="button"
                  className="ml-2 text-red-600"
                  onClick={() => removeEntry(setReferences, index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <button
            type="button"
            className="text-blue-600"
            onClick={() =>
              addEntry(setReferences, {
                name: "",
                position: "",
                organization: "",
                contact: "",
                email: "",
              })
            }
          >
            + Add Another Reference
          </button>
        </div>

        {/* Bank Details Section */}
        <div className="my-3 rounded-xl border p-3">
          <h3 className="mb-2 font-semibold">Bank Details</h3>
          {bankDetails.map((bank, index) => (
            <div className="mb-2 rounded-xl border p-3">
              <div key={index} className="mb-4 ">
                <input
                  type="text"
                  className="mb-2 w-full rounded-md border p-2"
                  placeholder="Bank Name"
                />
                <input
                  type="text"
                  className="mb-2 w-full rounded-md border p-2"
                  placeholder="Account Number"
                />
                <input
                  type="text"
                  className="mb-2 w-full rounded-md border p-2"
                  placeholder="Account Type"
                />
                <input
                  type="text"
                  className="mb-2 w-full rounded-md border p-2"
                  placeholder="Bank Verification Number"
                />
                <button
                  type="button"
                  className="ml-2 text-red-600"
                  onClick={() => removeEntry(setBankDetails, index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <button
            type="button"
            className="text-blue-600"
            onClick={() =>
              addEntry(setBankDetails, {
                bankName: "",
                accountNumber: "",
                accountType: "",
                bvn: "",
              })
            }
          >
            + Add Another Bank Account
          </button>
        </div>

        {/* Social Media */}
        <div className="my-3 rounded-xl border p-3">
          <h3 className="mb-2 font-semibold">Social Media</h3>
          <div className="mb-4">
            <input
              type="url"
              className="mb-2 w-full rounded-md border p-2"
              placeholder="LinkedIn Profile"
            />
            <input
              type="url"
              className="mb-2 w-full rounded-md border p-2"
              placeholder="Instagram Profile"
            />
            <input
              type="url"
              className="mb-2 w-full rounded-md border p-2"
              placeholder="Facebook Profile"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditDetailsForm;
