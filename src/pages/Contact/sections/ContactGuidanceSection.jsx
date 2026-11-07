function ContactGuidanceSection() {
  const guidanceItems = [
    {
      title: "For learning questions",
      description:
        "Tell us which topic interests you and where you are in your learning journey.",
    },
    {
      title: "For collaborations",
      description:
        "Share the idea, who it’s for, and how you imagine working with the community.",
    },
    {
      title: "Not sure which category fits?",
      description:
        "Choose General inquiry. A clear question is always a good starting point.",
    },
  ];

  return (
    <section className="border-t border-[#E8EAED] bg-white px-5 py-12 sm:py-16">
      <div className="mx-auto grid max-w-[1060px] grid-cols-1 gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">
        {/* Left Content */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4285F4]" />
            <p className="text-[9px] font-medium text-[#5F6368]">
              A LITTLE GUIDANCE
            </p>
          </div>

          <h2 className="max-w-[300px] text-3xl font-bold leading-tight tracking-tight text-[#202124] sm:text-4xl">
            Help us understand your idea.
          </h2>

          <a
            href="/overview"
            className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-[#1A73E8] transition hover:underline"
          >
            Explore the programs first <span>→</span>
          </a>
        </div>

        {/* Right Content */}
        <div>
          {guidanceItems.map((item, index) => (
            <div
              key={item.title}
              className={`py-4 ${
                index !== guidanceItems.length - 1
                  ? "border-b border-[#DADCE0]"
                  : ""
              }`}
            >
              <h3 className="text-sm font-bold text-[#202124] sm:text-base">
                {item.title}
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-[#5F6368] sm:text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactGuidanceSection;