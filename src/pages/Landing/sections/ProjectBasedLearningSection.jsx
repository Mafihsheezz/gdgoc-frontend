import { Link } from 'react-router-dom'

function ProjectBasedLearningSection() {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto grid w-full max-w-[1060px] grid-cols-1 items-center gap-8 px-5 sm:px-4 lg:grid-cols-2 lg:gap-12">

        {/* Prototype Illustration */}
        <div className="flex min-h-[250px] flex-col justify-between rounded-2xl bg-[#FFF6DD] p-5 sm:min-h-[270px] sm:p-6">

          <div className="flex items-center justify-between">
            <p className="text-[9px] font-medium text-[#80868B]">
              IDEA → PROTOTYPE
            </p>

            <span className="text-sm font-semibold text-[#4285F4]">
              {'</>'}
            </span>
          </div>

          <div className="rounded-xl border border-[#E8EAED] bg-white p-4 shadow-sm">

            <div className="mb-3 flex gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
            </div>

            <h3 className="text-base font-bold leading-tight text-[#202124] sm:text-lg">
              A little less friction.
              <br />
              A better campus day.
            </h3>

            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="rounded-md bg-[#EAF2FF] px-2 py-2 text-center text-[9px] font-semibold text-[#202124]">
                Discover
              </div>

              <div className="rounded-md bg-[#E8F5EC] px-2 py-2 text-center text-[9px] font-semibold text-[#202124]">
                Connect
              </div>

              <div className="rounded-md bg-[#FCE8E6] px-2 py-2 text-center text-[9px] font-semibold text-[#202124]">
                Share
              </div>
            </div>

            <p className="mt-4 text-[9px] text-[#80868B]">
              Start with a student need. Build a small, useful solution.
            </p>
          </div>

          <p className="text-[8px] font-medium text-[#80868B]">
            EXAMPLE PROJECT BRIEF · NOT A LAUNCHED PRODUCT
          </p>
        </div>

        {/* Text Content */}
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />

            <p className="text-[9px] font-medium text-gray-500">
              BUILD SOMETHING THAT MATTERS
            </p>
          </div>

          <h2 className="max-w-md text-3xl font-bold leading-tight tracking-tight text-[#202124] sm:text-4xl">
            Your next project could start on campus.
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-[#5F6368]">
            What if finding a study partner, sharing resources, or navigating campus felt easier? Small, familiar problems can be the beginning of meaningful work.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-[#5F6368]">
            Bring research, design, and development together. Try an idea, get feedback, and make the next version better.
          </p>

          <Link
            to="/overview"
            className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-[#1A73E8] transition-colors hover:text-blue-700"
          >
            Explore project-based learning
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  )
}

export default ProjectBasedLearningSection