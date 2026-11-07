import sparkleIcon from '../../../assets/icons/sparkle.svg'

function FinalBannerSection() {
  return (
    <section className="bg-[#EAF5EE] px-5 py-8 sm:py-10">
      <div className="mx-auto flex w-full max-w-[1060px] items-center gap-5 sm:gap-8">
        <img
          src={sparkleIcon}
          alt=""
          className="h-10 w-10 shrink-0 sm:h-14 sm:w-14"
        />

        <div>
          <h2 className="text-lg font-bold leading-tight text-[#202124] sm:text-2xl">
            Different majors. Different starting points.
            <br className="hidden sm:block" />
            A place for all of them.
          </h2>

          <p className="mt-2 text-[10px] leading-relaxed text-[#5F6368] sm:text-xs">
            You don't have to be the most experienced person in the room.
            Curiosity, kindness, and a willingness to learn are good places to start.
          </p>
        </div>
      </div>
    </section>
  )
}

export default FinalBannerSection