import aboutHeroImage from '../../../assets/images/about/about-hero-illustration.png'

function AboutHeroSection() {
  return (
    <section className="flex min-h-[calc(100svh-70px)] items-center bg-white px-5 py-12 sm:py-14">
      <div className="mx-auto grid w-full max-w-[1060px] grid-cols-1 items-center gap-10 lg:grid-cols-[1.5fr_0.9fr] lg:gap-12">

        {/* Text */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <p className="text-xs font-medium text-[#5F6368]">
              ABOUT GDGOC UGM
            </p>
          </div>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-[#202124] sm:text-5xl lg:text-[46px]">
            Built by students.
            <br />
            <span className="text-[#1A73E8]">
              For what’s next.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#5F6368] sm:text-lg">
            We’re a community of learners and makers at Universitas Gadjah Mada,
            connected by curiosity and the belief that technology can do good.
          </p>

          <p className="mt-5 text-[11px] font-medium text-[#80868B]">
            UNIVERSITAS GADJAH MADA · 2026/2027
          </p>
        </div>

        {/* Illustration */}
        <div className="mx-auto w-full max-w-[400px] lg:max-w-[420px]">
          <img
            src={aboutHeroImage}
            alt="Google Developer Groups on Campus illustration"
            className="h-auto w-full object-contain"
          />
        </div>

      </div>
    </section>
  )
}

export default AboutHeroSection