import React from "react";
import Image from "next/image";

const contractorProfile = {
  id: 1,
  businessName: "Prime Builders Ltd.",
  ownerName: "Alex Johnson",
  businessType: "Construction Contractor",
  businessCAC: "RC123456789",
  yearsInBusiness: 12,
  contactInformation: {
    phone: "+234-800-123-4567",
    email: "contact@primebuilders.com",
    website: "www.primebuilders.com",
  },
  address: {
    street: "15 Industrial Road",
    city: "Lagos",
    state: "Lagos State",
    postalCode: "101001",
    country: "Nigeria",
  },
  servicesOffered: [
    "Residential Construction",
    "Commercial Construction",
    "Renovations",
    "Project Management",
  ],
  certifications: [
    {
      name: "ISO 9001:2015",
      issuedBy: "International Organization for Standardization",
      year: 2020,
    },
    {
      name: "Construction Safety Certification",
      issuedBy: "Nigerian Institute of Builders",
      year: 2022,
    },
  ],
  portfolio: [
    {
      projectId: 1,
      projectName: "Green Estates Housing Development",
      location: "Abuja",
      completionDate: "2023-09-15",
      description:
        "Construction of 50-unit residential estate with eco-friendly materials.",
      budget: "500,000,000",
    },
    {
      projectId: 2,
      projectName: "Silver Tower Office Complex",
      location: "Lagos",
      completionDate: "2022-06-20",
      description: "12-story commercial building with modern facilities.",
      budget: "800,000,000",
    },
  ],
  licenses: [
    {
      type: "General Contractor License",
      issuedBy: "Lagos State Building Authority",
      issueDate: "2019-08-15",
      expirationDate: "2024-08-15",
    },
    {
      type: "Environmental Compliance Certificate",
      issuedBy: "Nigerian Environmental Standards Authority",
      issueDate: "2021-10-01",
      expirationDate: "2026-10-01",
    },
  ],
  references: [
    {
      referenceName: "Emily Rogers",
      position: "Project Manager",
      organization: "GreenLand Developments",
      contact: "+234-800-654-3210",
      email: "emily.rogers@greenland.com",
      remarks:
        "Reliable contractor with a strong track record on timely project delivery.",
    },
    {
      referenceName: "Daniel Okoro",
      position: "Director of Operations",
      organization: "BlueSky Ltd.",
      contact: "+234-800-789-4561",
      email: "daniel.okoro@bluesky.com",
      remarks: "Excellent work quality and adherence to safety standards.",
    },
  ],
  bankDetails: {
    bankName: "Zenith Bank",
    accountNumber: "1234567890",
    accountType: "Business",
    bankVerificationNumber: "23456789012",
  },
  socialMedia: {
    linkedIn: "https://www.linkedin.com/company/prime-builders",
    instagram: "https://www.instagram.com/primebuilders",
    facebook: "https://www.facebook.com/primebuilders",
  },
};

const ContractorProfile = () => {
  return (
    <div className="p-6">
      <div className="relative z-30 mx-auto h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-[176px] sm:p-3">
        <div className="relative drop-shadow-2">
          <Image
            src="/images/user/user-03.png"
            width={160}
            height={160}
            className="overflow-hidden rounded-full"
            alt="profile"
          />
        </div>
      </div>

      <h2 className="mb-4 text-2xl font-bold">
        {contractorProfile.businessName}
      </h2>

      <div className="lg:gap:10 grid grid-cols-1 md:grid-cols-2 md:gap-5 lg:grid-cols-2">
        <section className="mb-6">
          <h3 className="text-xl font-semibold">Basic Information</h3>
          <p>
            <strong>Owner:</strong> {contractorProfile.ownerName}
          </p>
          <p>
            <strong>Business Type:</strong> {contractorProfile.businessType}
          </p>
          <p>
            <strong>CAC Number:</strong> {contractorProfile.businessCAC}
          </p>
          <p>
            <strong>Years in Business:</strong>{" "}
            {contractorProfile.yearsInBusiness}
          </p>
          <hr className="mt-5" />
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold">Contact Information</h3>
          <p>
            <strong>Phone:</strong> {contractorProfile.contactInformation.phone}
          </p>
          <p>
            <strong>Email:</strong> {contractorProfile.contactInformation.email}
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href={`https://${contractorProfile.contactInformation.website}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contractorProfile.contactInformation.website}
            </a>
          </p>
          <hr className="mt-5" />
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold">Address</h3>
          <p>
            {contractorProfile.address.street}, {contractorProfile.address.city}
            , {contractorProfile.address.state},{" "}
            {contractorProfile.address.country}
          </p>
          <p>
            <strong>Postal Code:</strong> {contractorProfile.address.postalCode}
          </p>
          <hr className="mt-5" />
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold">Services Offered</h3>
          <ul>
            {contractorProfile.servicesOffered.map((service, index) => (
              <li key={index}>- {service}</li>
            ))}
          </ul>
          <hr className="mt-5" />
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold">Certifications</h3>
          <ul>
            {contractorProfile.certifications.map((cert, index) => (
              <li key={index}>
                <strong>{cert.name}</strong> - {cert.issuedBy} ({cert.year})
              </li>
            ))}
          </ul>
          <hr className="mt-5" />
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold">Portfolio</h3>
          {contractorProfile.portfolio.map((project) => (
            <div key={project.projectId} className="mb-2">
              <p>
                <strong>Project:</strong> {project.projectName} (
                {project.location})
              </p>
              <p>
                <strong>Completion Date:</strong> {project.completionDate}
              </p>
              <p>
                <strong>Budget:</strong> {project.budget}
              </p>
              <p>{project.description}</p>
            </div>
          ))}
          <hr className="mt-5" />
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold">Licenses</h3>
          <ul>
            {contractorProfile.licenses.map((license, index) => (
              <li key={index}>
                <strong>{license.type}</strong> - {license.issuedBy}, Exp:{" "}
                {license.expirationDate}
              </li>
            ))}
          </ul>
          <hr className="mt-5" />
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold">References</h3>
          {contractorProfile.references.map((ref, index) => (
            <div key={index} className="mb-2">
              <p>
                <strong>{ref.referenceName}</strong>, {ref.position} -{" "}
                {ref.organization}
              </p>
              <p>
                Contact: {ref.contact} | Email: {ref.email}
              </p>
              <p>Remarks: {ref.remarks}</p>
            </div>
          ))}
          <hr className="mt-5" />
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold">Bank Details</h3>
          <p>
            <strong>Bank:</strong> {contractorProfile.bankDetails.bankName}
          </p>
          <p>
            <strong>Account Number:</strong>{" "}
            {contractorProfile.bankDetails.accountNumber}
          </p>
          <p>
            <strong>Account Type:</strong>{" "}
            {contractorProfile.bankDetails.accountType}
          </p>
          <hr className="mt-5" />
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold">Social Media</h3>
          <p>
            <a
              href={contractorProfile.socialMedia.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
          <p>
            <a
              href={contractorProfile.socialMedia.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </p>
          <p>
            <a
              href={contractorProfile.socialMedia.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </p>
          <hr className="mt-5" />
        </section>
      </div>
    </div>
  );
};

export default ContractorProfile;
