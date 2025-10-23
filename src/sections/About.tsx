
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";
import TitleHeader from "../components/TitleHeader";

const About = () => {


  return (
    <section className="c-space section-spacing mt-40" id="about">
      <TitleHeader
        title="About Me"
        sub="👋 Get to know me better"
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 - Main intro */}
        <div className="flex items-end p-6 bg-[#0E0E10] rounded-2xl md:col-span-4 lg:col-span-3 row-span-1 h-[15rem] md:h-full relative overflow-hidden hover:-translate-y-1 duration-200">
          <img
            src="assets/coding-pov.png"
            alt="Coding POV"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Alan Saji</p>
            <p className="subtext">
              Over the last 4 years, I developed my frontend and backend
              development skills to deliver dynamic software and web
              applications.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 2 - CTA */}
        <div className="p-6 bg-[#0E0E10] rounded-2xl md:col-span-4 lg:col-span-3 row-span-1 h-[15rem] md:h-full relative overflow-hidden hover:-translate-y-1 duration-200">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 3 - Tech Stack */}
        <div className="p-6 bg-[#0E0E10] rounded-2xl md:col-span-4 lg:col-span-6 row-span-1 h-[15rem] md:h-full relative overflow-hidden hover:-translate-y-1 duration-200">
          <div className="relative z-20 w-full lg:w-[50%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications.
            </p>
          </div>
          <div className="absolute top-45 bottom-0 md:inset-y-9 w-full h-full lg:start-[50%] md:scale-125 z-0">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
