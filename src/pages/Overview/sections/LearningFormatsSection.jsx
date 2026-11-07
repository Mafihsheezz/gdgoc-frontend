import { useEffect, useState } from 'react'
import { getFormats } from '../../../services/api'

import studyGroupsIcon from '../../../assets/icons/overview/study-groups.svg'
import handsOnWorkshopsIcon from '../../../assets/icons/overview/hands-on-workshops.svg'
import projectCirclesIcon from '../../../assets/icons/overview/project-circles.svg'
import knowledgeSharingIcon from '../../../assets/icons/overview/knowledge-sharing.svg'

const formatVisuals = {
  'study-groups': {
    icon: studyGroupsIcon,
    color: 'bg-[#E8F0FE]',
    highlight: 'Best for · Learning the fundamentals',
  },
  'hands-on-workshops': {
    icon: handsOnWorkshopsIcon,
    color: 'bg-[#E6F4EA]',
    highlight: 'Best for · Trying something new',
  },
  'project-circles': {
    icon: projectCirclesIcon,
    color: 'bg-[#FEF7E0]',
    highlight: 'Best for · Putting skills into practice',
  },
  'knowledge-sharing': {
    icon: knowledgeSharingIcon,
    color: 'bg-[#FCE8E6]',
    highlight: 'Best for · Exchanging perspectives',
  },
}

function LearningFormatsSection() {
  const [formats, setFormats] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchFormats = async () => {
      try {
        const data = await getFormats()
        setFormats(data)
      } catch (err) {
        console.error('Failed to fetch formats:', err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchFormats()
  }, [])

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
        {loading ? (
          <p className="text-sm text-[#5F6368]">
            Loading learning formats...
          </p>
        ) : error ? (
          <p className="text-sm text-red-500">
            Failed to load learning formats. Please try again later.
          </p>
        ) : formats.length === 0 ? (
          <p className="text-sm text-[#5F6368]">
            No learning formats available at the moment.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {formats.map((format) => {
              const visual = formatVisuals[format.id]

              if (!visual) return null

              return (
                <article
                  key={format.id}
                  className="flex items-start gap-4 rounded-2xl bg-white p-5"
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${visual.color}`}
                  >
                    <img
                      src={visual.icon}
                      alt=""
                      className="h-8 w-8 object-contain"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-base font-bold text-[#202124]">
                      {format.name}
                    </h3>

                    <p className="mt-1 text-xs leading-relaxed text-[#5F6368]">
                      {format.description}
                    </p>

                    <p className="mt-2 text-[10px] font-medium text-[#1A73E8]">
                      {visual.highlight}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        )}

      </div>
    </section>
  )
}

export default LearningFormatsSection