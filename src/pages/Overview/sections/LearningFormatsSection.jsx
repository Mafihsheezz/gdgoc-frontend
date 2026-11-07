const formats = [
  {
    icon: '▣',
    title: 'Study groups',
    description:
      'Build foundations with peers. Work through a topic, compare approaches, and make space for questions.',
    highlight: 'Best for · Learning the fundamentals',
    color: 'bg-[#E8F0FE]',
    iconColor: 'text-[#4285F4]',
  },
  {
    icon: '‹ ›',
    title: 'Hands-on workshops',
    description:
      'Get introduced to a tool or method, follow a practical exercise, and take away something to keep exploring.',
    highlight: 'Best for · Trying something new',
    color: 'bg-[#E6F4EA]',
    iconColor: 'text-[#34A853]',
  },
  {
    icon: '♧',
    title: 'Project circles',
    description:
      'Connect research, design, and development around a shared problem. Learn through making and feedback.',
    highlight: 'Best for · Putting skills into practice',
    color: 'bg-[#FEF7E0]',
    iconColor: 'text-[#F9AB00]',
  },
  {
    icon: '♧',
    title: 'Knowledge sharing',
    description:
      'Walk through an idea, share a lesson from your process, and discover how other students approach their work.',
    highlight: 'Best for · Exchanging perspectives',
    color: 'bg-[#FCE8E6]',
    iconColor: 'text-[#EA4335]',
  },
]

function LearningFormatsSection() {
  return (
    <section
      id="learning-formats"
      className="scroll-mt-20 bg-[#F1F3F4] px-5 py-14 sm:py-16"
    >
      <div className="mx-auto w-full max-w-[1060px]">
        {/* Heading */}
        <div className="mb-8 max-w-xl">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <p className="text-[10px] font-medium text-[#5F6368]">
              WAYS TO LEARN
            </p>
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#202124] sm:text-4xl">
            The format changes. The curiosity stays.
          </h2>

          <p className="mt-3 text-xs leading-relaxed text-[#5F6368] sm:text-sm">
            Explore the kinds of experiences that help you move from
            understanding to doing.
          </p>
        </div>

        {/* Format Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {formats.map((format) => (
            <article
              key={format.title}
              className="flex items-start gap-4 rounded-2xl bg-white p-5"
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${format.color} ${format.iconColor}`}
              >
                <span className="text-lg font-semibold">
                  {format.icon}
                </span>
              </div>

              <div className="min-w-0">
                <h3 className="text-base font-bold text-[#202124]">
                  {format.title}
                </h3>

                <p className="mt-1 text-xs leading-relaxed text-[#5F6368]">
                  {format.description}
                </p>

                <p className="mt-2 text-[10px] font-medium text-[#1A73E8]">
                  {format.highlight}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LearningFormatsSection