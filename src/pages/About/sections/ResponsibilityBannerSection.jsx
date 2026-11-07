import sparkleYellow from '../../../assets/icons/sparkle-yellow.svg'

function ResponsibilityBannerSection() {
  return (
    <section className="bg-[#FFF7E0] px-5 py-8 sm:py-9">
      <div className="mx-auto flex w-full max-w-[1060px] flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-9">

        {/* Sparkle Icon */}
        <img
          src={sparkleYellow}
          alt=""
          aria-hidden="true"
          className="h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12"
        />

        {/* Text */}
        <div>
          <h2 className="text-lg font-bold leading-tight text-[#202124] sm:text-xl">
            A space to learn. A responsibility to care.
          </h2>

          <p className="mt-2 max-w-4xl text-xs leading-relaxed text-[#5F6368] sm:text-sm">
            We want every conversation and learning experience to be
            respectful, inclusive, and constructive. Be kind, give credit,
            and make room for people who are just getting started.
          </p>
        </div>

      </div>
    </section>
  )
}

export default ResponsibilityBannerSection