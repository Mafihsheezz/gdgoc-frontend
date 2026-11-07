import { Link } from 'react-router-dom'

function StartingPointSection() {
  return (
    <section
      id="starting-point"
      className="scroll-mt-20 bg-[#FFF7E0] px-5 py-10 sm:py-12"
    >
      <div className="mx-auto grid w-full max-w-[1060px] grid-cols-1 items-center gap-5 sm:grid-cols-[0.8fr_1.2fr] sm:gap-10">

        {/* Left Content */}
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <p className="text-[10px] font-medium text-[#5F6368]">
              START WHERE YOU ARE
            </p>
          </div>

          <h2 className="max-w-xs text-2xl font-bold leading-tight tracking-tight text-[#202124] sm:text-3xl">
            New to tech?
            <br />
            That’s a starting point, too.
          </h2>
        </div>

        {/* Right Content */}
        <div>
          <p className="text-xs leading-relaxed text-[#5F6368] sm:text-sm">
            You don’t need a finished portfolio or the perfect track choice.
            Pick a topic you’re curious about. If you’re unsure, tell us what
            interests you and we can start a conversation.
          </p>

          <Link
            to="/contact"
            className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#1A73E8] transition-colors hover:text-[#174EA6]"
          >
            Ask about getting started
            <span aria-hidden="true">→</span>
          </Link>
        </div>

      </div>
    </section>
  )
}

export default StartingPointSection