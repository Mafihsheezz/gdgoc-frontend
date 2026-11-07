const steps = [
  {
    number: '01',
    title: 'Discover',
    description:
      'Explore a topic and find the questions you want to answer.',
  },
  {
    number: '02',
    title: 'Practice',
    description:
      'Try an exercise, work through a challenge, and ask for help.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Apply your learning to a small idea with a clear purpose.',
  },
  {
    number: '04',
    title: 'Share',
    description:
      'Show your process, gather feedback, and help someone else.',
  },
]

function LearningJourneySection() {
  return (
    <section
      id="learning-journey"
      className="scroll-mt-20 bg-white px-5 py-14 sm:py-16"
    >
      <div className="mx-auto w-full max-w-[1060px]">
        {/* Section Heading */}
        <div className="mb-8">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <p className="text-[10px] font-medium text-[#5F6368]">
              PROGRESS, NOT PERFECTION
            </p>
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#202124] sm:text-4xl">
            A journey you can keep building on.
          </h2>
        </div>

        {/* Journey Steps */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {steps.map((step) => (
            <article key={step.number}>
              <span className="text-3xl font-bold tracking-tight text-[#4285F4]">
                {step.number}
              </span>

              <div className="mt-4 border-t border-[#DADCE0] pt-4">
                <h3 className="text-base font-bold text-[#202124]">
                  {step.title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-[#5F6368]">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LearningJourneySection