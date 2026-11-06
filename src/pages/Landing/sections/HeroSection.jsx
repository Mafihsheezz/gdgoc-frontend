import { Link } from 'react-router-dom'

import heroIllustration from '../../../assets/images/landing/hero-illustration.png'

function HeroSection() {
  return (
    <section className="flex min-h-[calc(100svh-70px)] items-center bg-white">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 px-5 py-8 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-0">

        {/* Hero Content */}
        <div className="flex -translate-y-2 flex-col items-start">
          <div className="mb-5 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />

            <p className="text-[10px] font-medium tracking-wide text-gray-500">
              GDGoC UGM · 2026/2027
            </p>
          </div>

          <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-[#202124] sm:text-5xl lg:text-6xl">
            Big ideas.
            <span className="block text-[#1A73E8]">
              Built together.
            </span>
          </h1>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-[#5F6368] sm:text-base">
            A place for curious minds at{' '}
            <span className="font-semibold text-[#3C4043]">
              Universitas Gadjah Mada
            </span>{' '}
            to learn, connect, and build technology that matters.
          </p>

          {/* Hero Actions */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              to="/overview"
              className="inline-flex items-center gap-3 rounded-md bg-[#4285F4] px-4 py-2.5 text-xs font-medium text-white transition-colors duration-200 hover:bg-[#1A73E8]"
            >
              Find your learning track

              <span aria-hidden="true">→</span>
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center gap-3 rounded-md border border-gray-200 px-4 py-2.5 text-xs font-medium text-[#3C4043] transition-colors duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-[#1A73E8]"
            >
              Get to know us

              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Supporting Text */}
          <div className="mt-7 flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            </div>

            <p className="text-[10px] text-gray-500">
              Different backgrounds. A shared curiosity.
            </p>
          </div>
        </div>

        {/* Hero Illustration */}
        <div className="relative flex w-full -translate-x-4 translate-y-6 justify-center lg:translate-x-0 lg:translate-y-18">
          <img
            src={heroIllustration}
            alt="GDGoC UGM learning and technology illustration"
            className="block h-auto w-full max-w-lg object-contain"
          />
        </div>

      </div>
    </section>
  )
}

export default HeroSection