import { Link } from "react-router-dom";
import domainsData from "../data/domainsData.json";

const DomainCards = () => {
  return (
    <div className="p-8 bg-[#F5CF6B] ">
      <header className="relative bg-gradient-to-r from-[#17212e] to-[#1c293a] py-6 px-6 text-white rounded-3xl">
        {/* Decorative background gradient */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#17212e] via-[#3a4763] to-[#17212e] opacity-80 pointer-events-none rounded-3xl"></div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-row items-center justify-between">
          {/* Title Section */}
          <div className="text-center md:text-left flex-1">
            <h1 className="text-3xl sm:text-4xl md:text-8xl font-extrabold tracking-tight leading-tight mb-2 sm:mb-3 md:mb-0 md:ml-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F5CF6B] to-[#F5CF6B]">
                Domains
              </span>
            </h1>
            <div className="h-1 w-20 sm:w-24 bg-[#F5CF6B] rounded-full mx-auto  md:ml-8"></div>
          </div>

          {/* Image Section */}
          <div className="w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-auto lg:h-96 md:mr-20">
            <img
              src="/domain-header.png"
              alt="Hackathon"
              className="object-cover w-full h-full rounded-lg scale-110"
            />
          </div>
        </div>
      </header>
      <div className="p-6 flex flex-wrap justify-center bg-[#17212e] rounded-xl mt-8">
        {domainsData.map((domain) => (
          <Link to={`/domain/${domain.id}`} key={domain.id}>
            <div className="w-64 h-80 bg-white shadow-lg m-4 rounded-lg flex flex-col justify-center items-center cursor-pointer">
              <img
                src={`/${domain.img}.png`}
                alt={domain.title}
                className="w-64 h-72 object-contain  p-2"
              />
              <h2 className="text-2xl font-bold text-center mb-2">
                {domain.title}
              </h2>
              {/* <div
                key={domain.id}
                className="bg-white rounded-lg shadow-lg p-4 text-center"
              >
                <img
                  src={`/${domain.img}.png`}
                  alt={domain.name}
                  className="w-64 h-68 mx-auto"
                />
                <h2 className="text-xl font-bold ">{domain.name}</h2>
              </div> */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DomainCards;
