import { Link } from "react-router-dom";

const HackathonSection = () => {
  return (
    <div className="bg-[#F5CF6B] p-8">
      {/* Header */}
      <header className="relative bg-gradient-to-r from-[#17212e] to-[#1c293a] py-6 px-6 text-white rounded-3xl">
        {/* Decorative background gradient */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#17212e] via-[#3a4763] to-[#17212e] opacity-80 pointer-events-none rounded-3xl"></div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-row items-center justify-between">
          {/* Title Section */}
          <div className="text-center md:text-left flex-1">
            <h1 className="text-3xl sm:text-4xl md:text-8xl font-extrabold tracking-tight leading-tight mb-2 sm:mb-3 md:mb-0 md:ml-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F5CF6B] to-[#F5CF6B]">
                Hackathon
              </span>
            </h1>
            <div className="h-1 w-20 sm:w-24 bg-[#F5CF6B] rounded-full mx-auto  md:ml-8"></div>
          </div>

          {/* Image Section */}
          <div className="w-40 h-40 sm:w-60 sm:h-60 md:w-auto md:h-72 lg:w-auto lg:h-96 md:mr-20">
            <img
              src="/header.png"
              alt="Hackathon"
              className="object-cover w-full h-full rounded-lg md:scale-125"
            />
          </div>
        </div>
      </header>

      {/* Overview Section */}
      <div className="bg-white mt-6 p-6 rounded-lg shadow-lg py-12">
        <h2 className="text-3xl font-bold mb-4">Overview</h2>
        <p className="text-gray-700 text-lg px-10 font-semibold">
          Welcome to the Hackathon Name!, an innovative event where creativity
          meets technology! Join us for an exciting journey of problem-solving,
          collaboration, and cutting-edge development. Whether you’re a seasoned
          coder or a passionate beginner, our Hackathon offers challenges across
          various domains to ignite your ingenuity. Compete for awards and
          prizes, gain invaluable experience, and connect with industry experts
          and like-minded peers. Let’s come together to build solutions that can
          change the world!
        </p>
      </div>

      {/* Why Participate Section */}
      <div className="bg-[#17212E] text-white mt-6 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">
          Why Participate?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
          <div className="bg-white text-black text-xl font-bold p-4 rounded-lg md:ml-24">
            Win Exciting Prizes
          </div>
          <div className="bg-white text-black text-xl font-bold p-4 rounded-lg md:mr-24">
            Boost Your Career
          </div>
          <div className="bg-white text-black text-xl font-bold p-4 rounded-lg md:ml-24">
            Unlock Your Potential
          </div>
          <div className="bg-white text-black text-xl font-bold p-4 rounded-lg md:mr-24">
            Gain Real-World Experience
          </div>
          <div className="col-span-full bg-white text-black text-xl font-bold p-4 rounded-lg w-fit mx-auto">
            Connect with top Industry experts, mentors, and like-minded peers
          </div>
        </div>
      </div>

      {/* Steps to Follow Section */}
      <div className="bg-[#17212e] p-6  shadow-lg max-w-2xl mx-auto my-12 rounded-lg">
        <h2 className="text-4xl font-bold text-[#F5CF6B] mb-6">
          Steps to follow
        </h2>
        <div className="relative pl-10">
          {/* Vertical line */}
          <div className="absolute top-0 left-[2.85rem] w-1 bg-[#F5CF6B] h-full"></div>

          {/* Step 1 */}
          <Link to="/hackathon/domains">
            <div className="flex items-center mb-4">
              <div className="w-4 h-4 bg-[#F5CF6B] rounded-full"></div>
              <p className="ml-6 text-2xl font-semibold text-[#F5CF6B] cursor-pointer">
                Choose the domain
              </p>
            </div>
          </Link>

          {/* Step 2 */}
          <div className="flex items-center mb-4">
            <div className="w-4 h-4 bg-[#F5CF6B] rounded-full"></div>
            <p className="ml-6 text-2xl font-semibold text-[#F5CF6B] cursor-pointer">
              Choose the Problem Statement
            </p>
          </div>

          {/* Step 3 */}
          <Link to="/hackathon/applform">
            <div className="flex items-center mb-4">
              <div className="w-4 h-4 bg-[#F5CF6B] rounded-full"></div>
              <p className="ml-6 text-2xl font-semibold text-[#F5CF6B] cursor-pointer">
                Register
              </p>
            </div>
          </Link>

          {/* Step 4 */}
          <div className="flex items-center mb-4">
            <div className="w-4 h-4 bg-[#F5CF6B] rounded-full"></div>
            <p className="ml-6 text-2xl font-semibold text-[#F5CF6B] cursor-pointer">
              Level 1
            </p>
          </div>

          {/* Step 5 */}
          <div className="flex items-center mb-4">
            <div className="w-4 h-4 bg-[#F5CF6B] rounded-full"></div>
            <p className="ml-6 text-2xl font-semibold text-[#F5CF6B] cursor-pointer">
              Level 2
            </p>
          </div>

          {/* Step 6 */}
          <div className="flex items-center mb-4">
            <div className="w-4 h-4 bg-[#F5CF6B] rounded-full"></div>
            <p className="ml-6 text-2xl font-semibold text-[#F5CF6B] cursor-pointer">
              Awards - Cash Prize
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white rounded-lg shadow-lg p-6 flex flex-col gap-5 md:flex-row  justify-around items-center">
        <Link to="/hackathon/domains">
          <div>
            <button className="text-xl font-bold px-4 py-2 text-[#F5CF6B] bg-[#17212e] rounded-md">
              See All Domains
            </button>
          </div>
        </Link>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold mb-4">Registration End Date</h2>
          <p className="text-3xl">20th August 2024</p>
          <p className="text-xl">11:59 PM</p>
        </div>

        <Link to="/hackathon/applform">
          <div>
            <button className="text-xl font-bold px-4 py-2 text-[#F5CF6B] bg-[#17212e] rounded-md">
              Register Now!
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HackathonSection;
