const steps = [
  {
    number: '01',
    title: 'Follow your curiosity',
    description:
      'Start with a topic, a question, or an idea you want to explore. You do not need to know everything yet.',
  },
  {
    number: '02',
    title: 'Learn alongside others',
    description:
      'Meet people with different interests, exchange perspectives, and grow through shared experiences.',
  },
  {
    number: '03',
    title: 'Turn learning into action',
    description:
      'Apply what you learn through experiments, collaborations, and projects that make a difference.',
  },
]

function JourneySection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-[1060px] px-5 sm:px-4">

        {/* Heading */}
        <div className="mb-9">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />

            <p className="text-[10px] font-medium text-gray-500">
              YOUR JOURNEY STARTS HERE
            </p>
          </div>

          <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-[#202124] sm:text-4xl">
            You don't need to have it all figured out.
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#5F6368]">
            Every journey starts somewhere. Take one step, stay curious,
            and discover what you can build along the way.
          </p>
        </div>

        {/* Journey Steps */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="border-t-2 border-[#E8EAED] pt-5"
            >
              <span className="text-3xl font-bold tracking-tight text-[#4285F4]">
                {step.number}
              </span>

              <h3 className="mt-4 text-base font-bold text-[#202124]">
                {step.title}
              </h3>

              <p className="mt-3 text-xs leading-relaxed text-[#5F6368]">
                {step.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default JourneySection