import levelsData from "../data/levelsData.json";
// import levelimg from "/level."

const Levels = () => {
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
                Levels
              </span>
            </h1>
            <div className="h-1 w-20 sm:w-24 bg-[#F5CF6B] rounded-full mx-auto  md:ml-8"></div>
          </div>

          {/* Image Section */}
          <div className="w-40 h-40 sm:w-60 sm:h-60 md:w-auto md:h-72 lg:w-auto lg:h-96 md:mr-20">
            <img
              src="/level1.jpg"
              alt="Hackathon"
              className="object-cover w-full h-full rounded-lg scale-100"
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
            {levelsData.description}
          </p>
          <div className="flex justify-center">
            <button className="bg-[#F5CF6B] text-[#17212e] text-xl py-3 px-6 rounded-lg">
              {levelsData.buttonText}
            </button>
          </div>
        </div>

        <div className="bg-[#17212e] p-8 py-12 rounded-xl">
          <h2 className="text-6xl font-bold mb-4 text-white flex justify-center underline">
            Levels
          </h2>
          {levelsData.levels.map((level, index) => (
            <div
              key={index}
              className="p-4 bg-white shadow-lg mb-4 rounded-lg w-[80%] mx-auto"
            >
              <h3 className="text-2xl font-semibold flex justify-center">
                {level.title}
              </h3>
              <p className="text-lg mt-2 flex justify-center text-center md:px- px-3">
                {level.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Levels;
