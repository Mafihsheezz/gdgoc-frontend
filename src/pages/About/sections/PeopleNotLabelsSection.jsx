import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getRoles } from '../../../services/api'

function PeopleNotLabelsSection() {
  const [contributions, setContributions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const data = await getRoles()
        setContributions(data)
      } catch (err) {
        console.error('Failed to fetch roles:', err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchRoles()
  }, [])

  return (
    <section className="bg-white px-5 py-16 sm:py-20">
      <div className="mx-auto grid w-full max-w-[1060px] grid-cols-1 gap-9 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

        {/* Left Content */}
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <p className="text-[10px] font-medium text-[#5F6368]">
              PEOPLE, NOT LABELS
            </p>
          </div>

          <h2 className="max-w-sm text-3xl font-bold leading-tight tracking-tight text-[#202124] sm:text-4xl">
            There’s more than one way to contribute.
          </h2>

          <p className="mt-4 max-w-sm text-xs leading-relaxed text-[#5F6368] sm:text-sm">
            You can be learning one day and helping someone else the next.
            A community grows through both.
          </p>
        </div>

        {/* Right Content */}
        <div>
          {loading ? (
            <p className="text-sm text-[#5F6368]">
              Loading contributions...
            </p>
          ) : error ? (
            <p className="text-sm text-red-500">
              Failed to load contributions. Please try again later.
            </p>
          ) : contributions.length === 0 ? (
            <p className="text-sm text-[#5F6368]">
              No contributions available at the moment.
            </p>
          ) : (
            contributions.map((item) => (
              <article
                key={item.id}
                className="border-b border-[#DADCE0] py-4 first:pt-0"
              >
                <h3 className="text-base font-bold text-[#202124] sm:text-lg">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-[#5F6368] sm:text-sm">
                  {item.description}
                </p>
              </article>
            ))
          )}

          <Link
            to="/contact"
            className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-[#1A73E8] transition-colors hover:text-[#174EA6]"
          >
            Let’s talk about getting involved
            <span aria-hidden="true">→</span>
          </Link>
        </div>

      </div>
    </section>
  )
}

export default PeopleNotLabelsSection