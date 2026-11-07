import { Link } from 'react-router-dom'

function CTASection() {
  return (
    <section className="bg-white px-5 py-12 sm:py-16">
      <div className="mx-auto flex w-full max-w-[1060px] flex-col justify-between gap-6 rounded-2xl bg-[#EAF2FF] p-6 sm:flex-row sm:items-center sm:px-10 sm:py-8">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <p className="text-[9px] font-medium text-gray-500">
              YOUR NEXT CHAPTER
            </p>
          </div>

          <h2 className="text-2xl font-bold leading-tight tracking-tight text-[#202124] sm:text-3xl">
            Bring your curiosity.
            <br />
            We'll build from there.
          </h2>

          <p className="mt-3 text-xs leading-relaxed text-[#5F6368]">
            Find a learning track, meet a collaborator, or start a conversation.
          </p>
        </div>

        <div className="flex shrink-0 flex-col items-start gap-3 sm:items-end">
          <Link
            to="/overview"
            className="inline-flex items-center gap-3 rounded-md bg-[#4285F4] px-4 py-2.5 text-[10px] font-medium text-white transition-colors hover:bg-[#1A73E8]"
          >
            Explore the overview
            <span aria-hidden="true">→</span>
          </Link>

          <Link
            to="/contact"
            className="text-[10px] font-medium text-[#1A73E8] hover:underline"
          >
            Talk to the community →
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTASection