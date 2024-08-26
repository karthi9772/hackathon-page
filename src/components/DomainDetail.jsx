// import rectb from "./images/Rectangle 42.png";
// import recty from "./images/Rectangle.png";
// import line1 from "./images/Line 1.png";
// import line2 from "./images/Line 2.png";
// import line3 from "./images/Line 3.png";
// import header from "./images/header.png";

import { Link } from "react-router-dom";

const DomainDetail = ({ domain }) => {
  return (
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
                {domain.title}
              </span>
            </h1>
            <div className="h-1 w-20 sm:w-24 bg-[#F5CF6B] rounded-full mx-auto  md:ml-8"></div>
          </div>

          {/* Image Section */}
          <div className="w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-96 lg:h-96 md:mr-20">
            <img
              src={`/${domain.img}.png`}
              alt="Hackathon"
              className="object-cover w-full h-full rounded-lg scale-110"
            />
          </div>
        </div>
      </header>

      <div className="p-8">
        <div className="p-6 bg-white rounded-xl mb-6">
          <h1 className="text-2xl font-bold mb-5 flex justify-center">
            Description:{" "}
          </h1>
          <p className="text-xl mb-6 md:px-24 px-3 text-center">
            {domain.description}
          </p>
          <div className="flex justify-center">
            <button className="bg-[#F5CF6B] text-[#17212e] text-xl py-3 px-6 rounded-lg">
              Choose One from below
            </button>
          </div>
        </div>

        <div className="bg-[#17212e] p-8 py-12 rounded-xl">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Problem Statements
          </h2>
          {domain.problemStatements.map((problem, index) => (
            <div key={index} className="p-4 bg-white shadow-lg mb-4 rounded-lg">
              <h3 className="text-2xl font-semibold flex justify-center">
                {problem.title}
              </h3>
              <p className="text-lg mt-2 flex justify-center text-center md:px-24 px-3">
                {problem.problem}
              </p>
              <div className="flex justify-center">
                <Link to="/hackathon/levels">
                  <button className="mt-4 px-4 py-2 bg-[#F5CF6B] hover:bg-yellow-500 text-[#17212e] rounded ">
                    Select
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DomainDetail;
