import { Link } from 'react-router-dom'

function AboutSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">

        {/* Left Content */}
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />

            <p className="text-[10px] font-medium tracking-wide text-gray-500">
              A CAMPUS. A COMMUNITY.
            </p>
          </div>

          <h2 className="max-w-lg text-3xl font-bold leading-tight tracking-tight text-[#202124] sm:text-4xl">
            Not just learning tech.
            <br />
            Finding your people.
          </h2>

          <Link
            to="/about"
            className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-[#1A73E8] transition-colors hover:text-blue-700"
          >
            More about GDGoC UGM
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center">
          <p className="text-sm leading-relaxed text-[#5F6368]">
            Google Developer Groups on Campus, Universitas Gadjah Mada
            brings students together around one simple idea: we can go{' '}
            <span className="font-semibold text-[#3C4043]">
              further when we learn
            </span>{' '}
            with each other.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-[#5F6368]">
            From your first line of code to your next product idea,
            there’s room to ask questions, share what you know,
            and try something new.
          </p>

          {/* Community Values */}
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full bg-[#F1F3F4] px-3 py-1.5 text-[10px] font-medium text-[#5F6368]">
              Student-led
            </span>

            <span className="rounded-full bg-[#F1F3F4] px-3 py-1.5 text-[10px] font-medium text-[#5F6368]">
              Peer-powered
            </span>

            <span className="rounded-full bg-[#F1F3F4] px-3 py-1.5 text-[10px] font-medium text-[#5F6368]">
              Curiosity-first
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default AboutSection