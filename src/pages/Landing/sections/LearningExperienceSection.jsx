const experiences = [
  {
    icon: '▣',
    title: 'Study together',
    description:
      'Work through foundations in peer learning sessions. Bring your questions; leave with a next step.',
    link: 'Study groups & guided practice',
  },
  {
    icon: '‹ ›',
    title: 'Try it hands-on',
    description:
      'Explore a tool or technique in a workshop, then put it to work in a small experiment.',
    link: 'Workshops & technical sessions',
  },
  {
    icon: '♧',
    title: 'Share the process',
    description:
      'Exchange feedback, explain your decisions, and learn from different ways of thinking.',
    link: 'Project circles & sharing sessions',
  },
]

function LearningExperienceSection() {
  return (
    <section className="bg-[#F1F3F4] py-14 sm:py-16">
      <div className="mx-auto w-full max-w-[1060px] px-5 sm:px-4">

        {/* Heading */}
        <div className="mb-7">
          <div className="mb-2 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <p className="text-[10px] font-medium text-gray-500">
              MORE THAN A CLASSROOM
            </p>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-[#202124] sm:text-4xl">
            Less watching. More making.
          </h2>

          <p className="mt-3 text-sm text-[#5F6368]">
            Learn in a way that turns a new concept into something you can actually use.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {experiences.map((item) => (
            <article
              key={item.title}
              className="flex min-h-[180px] flex-col rounded-2xl bg-white p-5"
            >
              <span className="mb-4 text-sm font-semibold text-[#4285F4]">
                {item.icon}
              </span>

              <h3 className="text-base font-bold text-[#202124]">
                {item.title}
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-[#5F6368]">
                {item.description}
              </p>

              <div className="mt-auto border-t border-[#E8EAED] pt-3">
                <p className="text-[10px] font-medium text-[#1A73E8]">
                  {item.link}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default LearningExperienceSection