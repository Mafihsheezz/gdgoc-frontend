import { useState } from "react";

const inquiryTopics = [
  {
    icon: "↗",
    title: "Joining & learning",
    description: "Getting started, learning tracks, and participation",
  },
  {
    icon: "+",
    title: "Collaboration",
    description: "Community activities and shared ideas",
  },
  {
    icon: "◇",
    title: "Speaking & sharing",
    description: "Workshops, knowledge sharing, and mentorship",
  },
  {
    icon: "?",
    title: "General inquiry",
    description: "Anything else you'd like to ask",
  },
];

function ContactHeroSection() {
  const [selectedTopic, setSelectedTopic] = useState("Joining & learning");

  return (
    <section className="bg-white px-5 py-12 sm:py-16">
      <div className="mx-auto max-w-[1060px]">
        {/* Heading */}
        <div className="mb-10">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4285F4]" />
            <p className="text-[10px] font-medium text-[#5F6368]">
              CONTACT · LET'S CONNECT
            </p>
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#202124] sm:text-5xl lg:text-[48px]">
            Good things start with{" "}
            <span className="text-[#1A73E8]">hello.</span>
          </h1>

          <p className="mt-4 max-w-[560px] text-base leading-relaxed text-[#5F6368]">
            A question, a collaboration, or an idea for the community? Tell
            us what’s on your mind.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          {/* Left Column */}
          <div>
            <h2 className="text-xl font-bold text-[#202124]">
              What brings you here?
            </h2>

            <p className="mt-2 text-xs text-[#5F6368]">
              Pick the closest topic in the form. We’ll take it from there.
            </p>

            {/* Topic Cards */}
            <div className="mt-5 space-y-3">
              {inquiryTopics.map((topic) => (
                <button
                  key={topic.title}
                  type="button"
                  onClick={() => setSelectedTopic(topic.title)}
                  className={`flex w-full items-center gap-4 rounded-xl border px-4 py-4 text-left transition-colors ${
                    selectedTopic === topic.title
                      ? "border-[#E8F0FE] bg-[#E8F0FE]"
                      : "border-[#DADCE0] bg-white hover:bg-[#F8F9FA]"
                  }`}
                >
                  <span className="w-5 shrink-0 text-center text-xl font-medium text-[#1A73E8]">
                    {topic.icon}
                  </span>

                  <span>
                    <span className="block text-xs font-semibold text-[#202124]">
                      {topic.title}
                    </span>
                    <span className="mt-1 block text-[10px] leading-relaxed text-[#5F6368]">
                      {topic.description}
                    </span>
                  </span>
                </button>
              ))}
            </div>

            {/* Community Card */}
            <div className="mt-5 rounded-2xl bg-[#FFF7E0] p-5">
              <div className="mb-3 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#4285F4]" />
                <p className="text-[9px] font-medium text-[#5F6368]">
                  STAY CURIOUS, STAY CONNECTED
                </p>
              </div>

              <h3 className="text-lg font-bold leading-tight text-[#202124]">
                Looking for community updates?
              </h3>

              <p className="mt-3 text-xs leading-relaxed text-[#5F6368]">
                Follow <strong>@gdgoc.ugm</strong> for learning opportunities
                and what’s happening in the community.
              </p>

              <a
                href="https://www.instagram.com/gdgoc.ugm/"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-[#1A73E8] hover:underline"
              >
                Find @gdgoc.ugm <span>→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="rounded-2xl bg-[#F1F3F4] p-5 sm:p-7">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-bold text-[#202124] sm:text-2xl">
                Send us a message
              </h2>
              <span className="text-xl text-[#1A73E8]">↗</span>
            </div>

            <p className="mb-5 text-[10px] text-[#5F6368]">
              Fields marked * are required.
            </p>

            <form className="space-y-4">
              {/* Name */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[10px] font-semibold text-[#3C4043]">
                    First name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your first name"
                    className="w-full rounded-md border border-[#DADCE0] bg-white px-3 py-3 text-xs outline-none transition focus:border-[#4285F4]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[10px] font-semibold text-[#3C4043]">
                    Last name
                  </label>
                  <input
                    type="text"
                    placeholder="Your last name"
                    className="w-full rounded-md border border-[#DADCE0] bg-white px-3 py-3 text-xs outline-none transition focus:border-[#4285F4]"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-[10px] font-semibold text-[#3C4043]">
                  Email address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="Where we can reply to you"
                  className="w-full rounded-md border border-[#DADCE0] bg-white px-3 py-3 text-xs outline-none transition focus:border-[#4285F4]"
                />
              </div>

              {/* Organization */}
              <div>
                <label className="mb-2 block text-[10px] font-semibold text-[#3C4043]">
                  University / organization
                </label>
                <input
                  type="text"
                  placeholder="Where you study or work (optional)"
                  className="w-full rounded-md border border-[#DADCE0] bg-white px-3 py-3 text-xs outline-none transition focus:border-[#4285F4]"
                />
              </div>

              {/* Category */}
              <div>
                <label className="mb-2 block text-[10px] font-semibold text-[#3C4043]">
                  Inquiry category *
                </label>

                <div className="relative">
                  <select
                    required
                    value={selectedTopic}
                    onChange={(e) => setSelectedTopic(e.target.value)}
                    className="w-full appearance-none rounded-md border border-[#DADCE0] bg-white px-3 py-3 pr-10 text-xs text-[#5F6368] outline-none transition focus:border-[#4285F4]"
                  >
                    {inquiryTopics.map((topic) => (
                      <option key={topic.title} value={topic.title}>
                        {topic.title}
                      </option>
                    ))}
                  </select>

                  <svg
                    className="pointer-events-none absolute right-4 top-1/2 h-3 w-3 -translate-y-1/2 rotate-90 text-[#5F6368]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="mb-2 block text-[10px] font-semibold text-[#3C4043]">
                  Subject *
                </label>
                <input
                  type="text"
                  required
                  placeholder="A short introduction to your question"
                  className="w-full rounded-md border border-[#DADCE0] bg-white px-3 py-3 text-xs outline-none transition focus:border-[#4285F4]"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-[10px] font-semibold text-[#3C4043]">
                  Your message *
                </label>
                <textarea
                  required
                  rows="5"
                  placeholder="Tell us a little about your question or idea..."
                  className="w-full resize-none rounded-md border border-[#DADCE0] bg-white px-3 py-3 text-xs outline-none transition focus:border-[#4285F4]"
                />
              </div>

              {/* Consent */}
              <label className="flex items-start gap-2 text-[9px] leading-relaxed text-[#5F6368]">
                <input
                  type="checkbox"
                  required
                  className="mt-0.5 accent-[#1A73E8]"
                />
                <span>
                  I agree that the information I share can be used to respond
                  to this inquiry.
                </span>
              </label>

              {/* Submit */}
              <div className="flex flex-col items-start justify-between gap-4 pt-1 sm:flex-row sm:items-center">
                <button
                  type="button"
                  className="inline-flex items-center gap-4 rounded-md bg-[#4285F4] px-4 py-3 text-xs font-medium text-white transition hover:bg-[#1A73E8]"
                >
                  Send message <span>→</span>
                </button>

                <p className="max-w-[180px] text-[9px] leading-relaxed text-[#80868B]">
                  Please don't include passwords or sensitive personal
                  information.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactHeroSection;