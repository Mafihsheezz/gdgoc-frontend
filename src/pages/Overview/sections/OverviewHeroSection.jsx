import { useState } from "react";
import researchImage from "../../../assets/images/overview/overview-hero-illustration.svg";

function OverviewHeroSection() {
  const [activeSection, setActiveSection] = useState("learning-tracks");
  return (
    <>
      <section className="flex min-h-[calc(100svh-70px)] items-center bg-white px-5 py-8 sm:py-14">
        <div className="mx-auto grid w-full max-w-[1060px] grid-cols-1 items-center gap-3 sm:gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:gap-12">
          {/* Text */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              <p className="text-xm font-medium text-[#5F6368]">
                OVERVIEW · PROGRAMS & LEARNING TRACKS
              </p>
            </div>

            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-[#202124] sm:text-5xl lg:text-[64px]">
              Find your spark.
              <br />
              <span className="text-[#1A73E8]">Build your own path.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#5F6368] sm:text-xl">
              Explore how research, creativity, and development connect. Start
              with one interest. Grow through practice and the people around
              you.
            </p>
          </div>

          {/* Illustration */}
          <div className="relative flex w-full max-w-full justify-center overflow-visible lg:max-w-[500px] lg:translate-y-10">
            <img
              src={researchImage}
              alt="Overview learning illustration"
              className="relative -mb-8 left-1/2 block h-auto w-full max-w-[380px] -translate-x-[calc(50%+64px)] object-contain lg:left-auto lg:max-w-[500px] lg:translate-x-0"
            />
          </div>
        </div>
      </section>

      {/* Section Navigation */}

      <nav className="border-y border-[#E8EAED] bg-white px-5">
        <div className="mx-auto grid w-full max-w-[1060px] grid-cols-2 gap-x-4 gap-y-4 py-4 sm:flex sm:flex-wrap sm:justify-between sm:gap-6">
          <a
            href="#learning-tracks"
            onClick={() => setActiveSection("learning-tracks")}
            className={`text-[11px] transition-colors ${
              activeSection === "learning-tracks"
                ? "font-semibold text-[#1A73E8]"
                : "text-[#5F6368] hover:text-[#1A73E8]"
            }`}
          >
            Learning tracks ↓
          </a>

          <a
            href="#learning-formats"
            onClick={() => setActiveSection("learning-formats")}
            className={`text-[11px] transition-colors ${
              activeSection === "learning-formats"
                ? "font-semibold text-[#1A73E8]"
                : "text-[#5F6368] hover:text-[#1A73E8]"
            }`}
          >
            Learning formats ↓
          </a>

          <a
            href="#learning-journey"
            onClick={() => setActiveSection("learning-journey")}
            className={`text-[11px] transition-colors ${
              activeSection === "learning-journey"
                ? "font-semibold text-[#1A73E8]"
                : "text-[#5F6368] hover:text-[#1A73E8]"
            }`}
          >
            Your learning journey ↓
          </a>

          <a
            href="#starting-point"
            onClick={() => setActiveSection("starting-point")}
            className={`text-[11px] transition-colors ${
              activeSection === "starting-point"
                ? "font-semibold text-[#1A73E8]"
                : "text-[#5F6368] hover:text-[#1A73E8]"
            }`}
          >
            Find a starting point ↓
          </a>
        </div>
      </nav>
    </>
  );
}

export default OverviewHeroSection;
