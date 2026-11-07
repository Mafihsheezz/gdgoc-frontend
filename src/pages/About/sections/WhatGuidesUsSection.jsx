import { useEffect, useState } from 'react'
import { getValues } from '../../../services/api'

const principleIcons = {
  'stay-curious': 'book',
  'make-room': 'users',
  'learn-by-building': 'code',
  'give-something-back': 'heart',
}

function PrincipleIcon({ type }) {
  const commonProps = {
    className: 'h-3.5 w-3.5',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    viewBox: '0 0 24 24',
  }

  return (
    <svg {...commonProps}>
      {type === 'book' && (
        <>
          <path d="M12 7v13" />
          <path d="M3 5.5A2.5 2.5 0 0 1 5.5 3H12v17H5.5A2.5 2.5 0 0 0 3 22z" />
          <path d="M21 5.5A2.5 2.5 0 0 0 18.5 3H12v17h6.5a2.5 2.5 0 0 1 2.5 2z" />
        </>
      )}

      {type === 'users' && (
        <>
          <circle cx="9" cy="8" r="3" />
          <path d="M3 20v-1a6 6 0 0 1 12 0v1z" />
          <path d="M16 5.5a3 3 0 0 1 0 5.8" />
          <path d="M18 14a5 5 0 0 1 3 4.5V20h-3" />
        </>
      )}

      {type === 'code' && (
        <>
          <path d="m8 5-6 7 6 7" />
          <path d="m16 5 6 7-6 7" />
        </>
      )}

      {type === 'heart' && (
        <path d="M20.8 8.8c0 5.2-8.8 11-8.8 11s-8.8-5.8-8.8-11A4.8 4.8 0 0 1 12 6.1a4.8 4.8 0 0 1 8.8 2.7Z" />
      )}
    </svg>
  )
}

function WhatGuidesUsSection() {
  const [principles, setPrinciples] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchValues = async () => {
      try {
        const data = await getValues()
        setPrinciples(data)
      } catch (err) {
        console.error('Failed to fetch values:', err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchValues()
  }, [])

  return (
    <section className="bg-white px-5 py-14 sm:py-16">
      <div className="mx-auto w-full max-w-[1060px]">

        {/* Heading */}
        <div className="mb-7">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <p className="text-[10px] font-medium text-[#5F6368]">
              WHAT GUIDES US
            </p>
          </div>

          <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-[#202124] sm:text-4xl">
            Good technology starts with good company.
          </h2>
        </div>

        {/* Principle Cards */}
        {loading ? (
          <p className="text-sm text-[#5F6368]">
            Loading principles...
          </p>
        ) : error ? (
          <p className="text-sm text-red-500">
            Failed to load principles. Please try again later.
          </p>
        ) : principles.length === 0 ? (
          <p className="text-sm text-[#5F6368]">
            No principles available at the moment.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle) => (
              <article
                key={principle.id}
                className="min-h-[145px] rounded-2xl border border-[#DADCE0] bg-white p-4 transition-shadow duration-200 hover:shadow-sm"
              >
                <div
                  className="mb-4 h-[2px] w-7"
                  style={{ backgroundColor: principle.color }}
                />

                <div
                  className="mb-3"
                  style={{ color: '#4285F4' }}
                >
                  <PrincipleIcon
                    type={principleIcons[principle.id]}
                  />
                </div>

                <h3 className="text-sm font-bold text-[#202124]">
                  {principle.title}
                </h3>

                <p className="mt-2 text-[10px] leading-relaxed text-[#5F6368]">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        )}

      </div>
    </section>
  )
}

export default WhatGuidesUsSection