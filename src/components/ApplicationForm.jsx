import { useState } from "react";
import Modal from "./Modal";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    personalEmail: "",
    contact: "",
    dob: "",
    collegeInstitution: "",
    branch: "",
    yearOfStudy: "",
    yearOfCompletion: "",
    teamName: "",
    teamMembers: [
      { name: "", yearOfStudy: "", contact: "", branch: "", email: "" },
      { name: "", yearOfStudy: "", contact: "", branch: "", email: "" },
      { name: "", yearOfStudy: "", contact: "", branch: "", email: "" },
    ],
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTeamMemberChange = (index, e) => {
    const { name, value } = e.target;
    const updatedTeamMembers = [...formData.teamMembers];
    updatedTeamMembers[index][name] = value;
    setFormData((prevData) => ({
      ...prevData,
      teamMembers: updatedTeamMembers,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(formData, null, 2));
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="bg-[#F5CF6B] p-8">
        <header className="relative bg-gradient-to-r from-[#17212e] to-[#1c293a] py-6 px-6 text-white rounded-3xl">
          {/* Decorative background gradient */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#17212e] via-[#3a4763] to-[#17212e] opacity-80 pointer-events-none rounded-3xl"></div>

          {/* Main Content */}
          <div className="relative z-10 max-w-7xl mx-auto flex flex-row items-center justify-between">
            {/* Title Section */}
            <div className="text-center md:text-left flex-1">
              <h1 className="text-3xl sm:text-4xl md:text-8xl font-extrabold tracking-tight leading-tight mb-2 sm:mb-3 md:mb-0 md:ml-8">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F5CF6B] to-[#F5CF6B]">
                  Application
                </span>
              </h1>
              <div className="h-1 w-20 sm:w-24 bg-[#F5CF6B] rounded-full mx-auto  md:ml-8 mt-4"></div>
            </div>

            {/* Image Section */}
            <div className="w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-auto lg:h-96 md:mr-20">
              <img
                src="/register-header.png"
                alt="Hackathon"
                className="object-fill w-full h-full rounded-lg md:scale-110"
              />
            </div>
          </div>
        </header>

        <div className="min-h-screen flex flex-col items-center justify-center md:my-8 my-4">
          <div className="w-full max-w-screen-lg bg-[#17212e] text-white rounded-lg p-8 shadow-lg">
            <h1 className="text-4xl font-bold mb-6">Application</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Info Section */}
              <section>
                <h2 className="text-2xl font-semibold mb-4">Personal Info</h2>
                <div className="flex space-x-4 mb-4">
                  <input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    type="text"
                    placeholder="First Name"
                    className="w-full bg-gray-100 text-black p-2 rounded-lg placeholder:text-black"
                  />
                  <input
                    name="middleName"
                    value={formData.middleName}
                    onChange={handleChange}
                    type="text"
                    placeholder="Middle Name"
                    className="w-full bg-gray-100 text-black p-2 rounded-lg placeholder:text-black"
                  />
                  <input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    type="text"
                    placeholder="Last Name"
                    className="w-full bg-gray-100 text-black p-2 rounded-lg placeholder:text-black"
                  />
                </div>

                <input
                  name="personalEmail"
                  value={formData.personalEmail}
                  onChange={handleChange}
                  type="email"
                  placeholder="Personal Email"
                  className="w-full bg-gray-100 text-black p-2 rounded-lg mb-4 placeholder:text-black"
                />

                <div className="flex space-x-4 mb-4">
                  <input
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    type="tel"
                    placeholder="Contact"
                    className="w-full bg-gray-100 text-black p-2 rounded-lg placeholder:text-black"
                  />
                  <input
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    type="date"
                    className="w-full bg-gray-100 text-black p-2 rounded-lg placeholder:text-black"
                  />
                </div>
              </section>

              {/* Educational Info Section */}
              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  Educational Info
                </h2>
                <input
                  name="collegeInstitution"
                  value={formData.collegeInstitution}
                  onChange={handleChange}
                  type="text"
                  placeholder="College Institution"
                  className="w-full bg-gray-100 text-black p-2 rounded-lg mb-4 placeholder:text-black"
                />
                <input
                  name="branch"
                  value={formData.branch}
                  onChange={handleChange}
                  type="text"
                  placeholder="Branch"
                  className="w-full bg-gray-100 text-black p-2 rounded-lg mb-4 placeholder:text-black"
                />

                <div className="flex space-x-4 mb-4">
                  <input
                    name="yearOfStudy"
                    value={formData.yearOfStudy}
                    onChange={handleChange}
                    type="text"
                    placeholder="Year of Study"
                    className="w-full bg-gray-100 text-black p-2 rounded-lg placeholder:text-black"
                  />
                  <input
                    name="yearOfCompletion"
                    value={formData.yearOfCompletion}
                    onChange={handleChange}
                    type="text"
                    placeholder="Year Of Completion"
                    className="w-full bg-gray-100 text-black p-2 rounded-lg placeholder:text-black"
                  />
                </div>
              </section>

              {/* Team Details Section */}
              <section>
                <h2 className="text-2xl font-semibold mb-4">Team Details</h2>
                <input
                  name="teamName"
                  value={formData.teamName}
                  onChange={handleChange}
                  type="text"
                  placeholder="Team Name"
                  className="w-full bg-gray-100 text-black p-2 rounded-lg mb-4 placeholder:text-black"
                />

                {formData.teamMembers.map((member, index) => (
                  <div key={index} className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">
                      Team Member {index + 1}
                    </h3>
                    <input
                      name="name"
                      value={member.name}
                      onChange={(e) => handleTeamMemberChange(index, e)}
                      type="text"
                      placeholder="Name"
                      className="w-full bg-gray-100 text-black p-2 rounded-lg mb-4 placeholder:text-black"
                    />
                    <div className="flex space-x-4 mb-4">
                      <input
                        name="yearOfStudy"
                        value={member.yearOfStudy}
                        onChange={(e) => handleTeamMemberChange(index, e)}
                        type="text"
                        placeholder="Year of Study"
                        className="w-full bg-gray-100 text-black p-2 rounded-lg placeholder:text-black"
                      />
                      <input
                        name="contact"
                        value={member.contact}
                        onChange={(e) => handleTeamMemberChange(index, e)}
                        type="tel"
                        placeholder="Contact"
                        className="w-full bg-gray-100 text-black p-2 rounded-lg placeholder:text-black"
                      />
                    </div>
                    <input
                      name="branch"
                      value={member.branch}
                      onChange={(e) => handleTeamMemberChange(index, e)}
                      type="text"
                      placeholder="Branch"
                      className="w-full bg-gray-100 text-black p-2 rounded-lg mb-4 placeholder:text-black"
                    />
                    <input
                      name="email"
                      value={member.email}
                      onChange={(e) => handleTeamMemberChange(index, e)}
                      type="email"
                      placeholder="Email"
                      className="w-full bg-gray-100 text-black p-2 rounded-lg placeholder:text-black"
                    />
                  </div>
                ))}
              </section>

              {/* New Section for Domain and Problem Statement */}
              <section>
                <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
                <label className="block text-lg font-semibold mb-2">
                  Enter Your Domain
                </label>
                <input
                  name="domain"
                  value={formData.domain}
                  onChange={handleChange}
                  type="text"
                  // placeholder="Enter Your Domain"
                  className="w-full bg-gray-100 text-black p-2 rounded-lg mb-4 placeholder:text-black"
                />

                <label className="block text-lg font-semibold mb-2">
                  Enter Your Problem Statement
                </label>
                <input
                  name="problemStatement"
                  value={formData.problemStatement}
                  onChange={handleChange}
                  type="text"
                  // placeholder="Enter Your Problem Statement"
                  className="w-full bg-gray-100 text-black p-2 rounded-lg mb-4 placeholder:text-black"
                />
              </section>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#F5CF6B] text-[#17212e] font-bold py-3 rounded-lg hover:bg-yellow-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default ApplicationForm;
