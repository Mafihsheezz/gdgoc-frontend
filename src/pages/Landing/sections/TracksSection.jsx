import researchImage from "../../../assets/images/landing/research-illustration.png";
import designImage from "../../../assets/images/landing/design-illustration.png";
import developmentImage from "../../../assets/images/landing/development-illustration.png";
import { Link } from "react-router-dom";

const tracks = [
  {
    label: "EXPLORE THE WHY",
    title: "Research & discovery",
    description:
      "Ask better questions, understand people, and turn insight into a clear problem worth solving.",
    category: "Problem framing · User research · Product thinking",
    color: "bg-[#EAF2FF]",
    image: researchImage,
    imagePosition: 'translate-y-12',
  },
  {
    label: "MAKE IT MEANINGFUL",
    title: "Design & creativity",
    description:
      "Translate ideas into thoughtful experiences, from a first sketch to a prototype people can use.",
    category: "UI/UX · Visual storytelling · Prototyping",
    color: "bg-[#FFF6DD]",
    image: designImage,
    imagePosition: 'translate-y-8',
  },
  {
    label: "BRING IDEAS TO LIFE",
    title: "Development",
    description:
      "Learn the tools, write the code, and build useful things with people who enjoy figuring it out.",
    category: "Web & mobile · Cloud · AI foundations",
    color: "bg-[#E8F5EC]",
    image: developmentImage,
    imagePosition: 'translate-y-12',
  },
];

function TracksSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-[1060px] px-5 sm:px-4">
        {/* Section Heading */}
        <div className="mb-8">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <p className="text-[10px] font-medium text-gray-500">
              FIND YOUR STARTING POINT
            </p>
          </div>

          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-[#202124] sm:text-4xl">
                Many interests. One shared journey.
              </h2>

              <p className="mt-3 text-sm text-[#5F6368]">
                Follow what excites you. Explore a track, then connect the dots
                with others.
              </p>
            </div>

            <Link
              to="/overview"
              className="inline-flex shrink-0 items-center gap-2 text-xs font-medium text-[#1A73E8] hover:text-blue-700"
            >
              See the overview <span>→</span>
            </Link>
          </div>
        </div>

        {/* Track Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tracks.map((track) => (
            <article
              key={track.title}
              className="overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white transition-shadow duration-300 hover:shadow-lg"
            >
              {/* Illustration */}
              <div
                className={`relative flex h-40 items-center justify-center overflow-hidden ${track.color}`}
                >
                <img
                  src={track.image}
                  alt={track.title}
                  className={`h-[265px] w-[240px] max-w-none shrink-0 object-contain ${track.imagePosition}`}
                />
              </div>

              {/* Card Content */}
              <div className="p-4">
                <p className="text-[9px] font-medium text-[#1A73E8]">
                  {track.label}
                </p>

                <h3 className="mt-2 text-lg font-bold text-[#202124]">
                  {track.title}
                </h3>

                <p className="mt-2 min-h-[48px] text-xs leading-relaxed text-[#5F6368]">
                  {track.description}
                </p>

                <div className="my-3 border-t border-[#E8EAED]" />

                <p className="text-[10px] text-[#80868B]">{track.category}</p>

                <Link
                  to="/overview"
                  className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-[#1A73E8] hover:text-blue-700"
                >
                  Explore this track <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TracksSection;
