function WhyWeComeTogetherSection() {
  return (
    <section className="bg-[#F1F3F4] px-5 py-14 sm:py-16">
      <div className="mx-auto grid w-full max-w-[1060px] grid-cols-1 items-start gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

        {/* Heading */}
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <p className="text-[10px] font-medium text-[#5F6368]">
              WHY WE COME TOGETHER
            </p>
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#202124] sm:text-4xl">
            A bridge from
            <br />
            <span className="text-[#1A73E8]">“I wonder”</span> to
            <br />
            <span className="text-[#4285F4]">“I made this.”</span>
          </h2>
        </div>

        {/* Description */}
        <div>
          <h3 className="text-base font-medium leading-relaxed text-[#202124] sm:text-lg">
            Learning feels different when there’s someone to exchange ideas
            with, a problem you care about, and the space to give it a try.
          </h3>

          <p className="mt-4 text-xs leading-relaxed text-[#5F6368] sm:text-sm">
            That’s the spirit of Google Developer Groups on Campus at UGM.
            We create room for students to explore technology, develop
            practical skills, and learn from one another.
          </p>

          <p className="mt-4 text-xs leading-relaxed text-[#5F6368] sm:text-sm">
            Our campus is the starting point. The questions we ask and the
            things we build can reach beyond it.
          </p>
        </div>

      </div>
    </section>
  )
}

export default WhyWeComeTogetherSection