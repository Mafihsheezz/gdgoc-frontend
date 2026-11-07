import { Link } from "react-router-dom";

import researchImage from "../../../assets/images/landing/research-illustration.png";
import designImage from "../../../assets/images/landing/design-illustration.png";
import developmentImage from "../../../assets/images/landing/development-illustration.png";

const tracks = [
  {
    label: "EXPLORE THE WHY",
    title: "Research & discovery",
    description:
      "Ask better questions, understand people, and turn insight into a clear problem worth solving.",
    topics: "Problem framing · User research · Product thinking",
    image: researchImage,
    background: "bg-[#E8F0FE]",
    imagePosition: 'translate-y-12',
  },
  {
    label: "MAKE IT MEANINGFUL",
    title: "Design & creativity",
    description:
      "Translate ideas into thoughtful experiences, from a first sketch to a prototype people can use.",
    topics: "UI/UX · Visual storytelling · Prototyping",
    image: designImage,
    background: "bg-[#FEF7E0]",
    imagePosition: 'translate-y-9',
  },
  {
    label: "BRING IDEAS TO LIFE",
    title: "Development",
    description:
      "Learn the tools, write the code, and build useful things with people who enjoy figuring it out.",
    topics: "Web & mobile · Cloud · AI foundations",
    image: developmentImage,
    background: "bg-[#E6F4EA]",
    imagePosition: 'translate-y-12',
  },
];

const comparisons = [
  {
    pathway: "Research & discovery",
    practice: "Listening, problem framing, and testing assumptions",
    outcome: "A research insight and a focused problem brief",
  },
  {
    pathway: "Design & creativity",
    practice: "Ideation, user flows, and prototype feedback",
    outcome: "An interactive prototype and a design story",
  },
  {
    pathway: "Development",
    practice: "Coding, testing, and connecting tools",
    outcome: "A working demo with a clear explanation",
  },
];

function LearningTracksSection() {
  return (
    <section
      id="learning-tracks"
      className="scroll-mt-20 bg-white px-5 py-14 sm:py-16"
    >
      <div className="mx-auto w-full max-w-[1060px]">
        {/* Heading */}
        <div className="mb-8 max-w-xl">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <p className="text-[10px] font-medium text-[#5F6368]">
              EXPLORE YOUR INTERESTS
            </p>
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#202124] sm:text-4xl">
            Three ways in. Plenty of ways forward.
          </h2>

          <p className="mt-3 text-xs leading-relaxed text-[#5F6368] sm:text-sm">
            These pathways are starting points, not boxes. Follow one deeply or
            bring different skills together.
          </p>
        </div>

        {/* Track Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tracks.map((track) => (
            <article
              key={track.title}
              className="overflow-hidden rounded-2xl border border-[#DADCE0] bg-white"
            >
              <div
                className={`relative flex h-40 items-center justify-center overflow-hidden ${track.background}`}
              >
                <img
                  src={track.image}
                  alt={`${track.title} illustration`}
                  className={`h-[265px] w-[240px] max-w-none shrink-0 object-contain ${track.imagePosition}`}
                />
              </div>

              <div className="p-4">
                <p className="text-[9px] font-medium text-[#1A73E8]">
                  {track.label}
                </p>

                <h3 className="mt-2 text-base font-bold text-[#202124]">
                  {track.title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-[#5F6368]">
                  {track.description}
                </p>

                <div className="mt-3 border-t border-[#E8EAED] pt-3">
                  <p className="text-[9px] leading-relaxed text-[#5F6368]">
                    {track.topics}
                  </p>
                </div>

                <Link
                  to="/contact"
                  className="mt-3 inline-flex items-center gap-2 text-[10px] font-semibold text-[#1A73E8] transition-colors hover:text-[#174EA6]"
                >
                  Explore this track <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mt-10">
          <h3 className="mb-5 text-xl font-bold tracking-tight text-[#202124] sm:text-2xl">
            From an interest to something you can show.
          </h3>

          <div className="overflow-x-auto rounded-xl border border-[#DADCE0]">
            <table className="w-full min-w-[620px] border-collapse text-left">
              <thead>
                <tr className="bg-[#F1F3F4]">
                  <th className="px-4 py-3 text-[10px] font-semibold text-[#5F6368]">
                    Pathway
                  </th>
                  <th className="px-4 py-3 text-[10px] font-semibold text-[#5F6368]">
                    What you can practice
                  </th>
                  <th className="px-4 py-3 text-[10px] font-semibold text-[#5F6368]">
                    A possible outcome
                  </th>
                </tr>
              </thead>

              <tbody>
                {comparisons.map((item) => (
                  <tr key={item.pathway} className="border-t border-[#E8EAED]">
                    <td className="px-4 py-4 text-[10px] font-semibold text-[#202124]">
                      {item.pathway}
                    </td>

                    <td className="px-4 py-4 text-[10px] text-[#5F6368]">
                      {item.practice}
                    </td>

                    <td className="px-4 py-4 text-[10px] text-[#5F6368]">
                      {item.outcome}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-[9px] leading-relaxed text-[#80868B]">
            Illustrative learning outcomes. Topics and opportunities are shared
            through community updates.
          </p>
        </div>
      </div>
    </section>
  );
}

export default LearningTracksSection;
