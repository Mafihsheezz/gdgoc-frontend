import { useEffect, useState } from 'react'
import { getFaqs } from '../../../services/api'

function FAQSection() {
  const [faqs, setFaqs] = useState([])
  const [openIndex, setOpenIndex] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        setLoading(true)

        const data = await getFaqs()
        setFaqs(data)
        setError('')
      } catch (err) {
        console.error('Gagal mengambil FAQ:', err)
        setError('Gagal memuat pertanyaan. Silakan refresh halaman.')
      } finally {
        setLoading(false)
      }
    }

    fetchFaqs()
  }, [])

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid w-full max-w-[1060px] grid-cols-1 gap-10 px-5 sm:px-4 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <p className="text-[10px] font-medium text-gray-500">
              A FEW GOOD QUESTIONS
            </p>
          </div>

          <h2 className="max-w-[260px] text-3xl font-bold leading-tight tracking-tight text-[#202124] sm:text-4xl">
            Wondering where to begin?
          </h2>

          <a
            href="mailto:gdgoc.ugm@gmail.com"
            className="mt-4 inline-block text-xs font-medium text-[#1A73E8] hover:underline"
          >
            Ask us a question →
          </a>
        </div>

        <div>
          {loading ? (
            <p className="py-5 text-xs text-[#5F6368]">
              Loading FAQs...
            </p>
          ) : error ? (
            <p className="py-5 text-xs text-red-500">
              {error}
            </p>
          ) : faqs.length === 0 ? (
            <p className="py-5 text-xs text-[#5F6368]">
              No FAQs available.
            </p>
          ) : (
            faqs.map((faq, index) => (
              <div
                key={faq.id}
                className="border-b border-[#E8EAED]"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-sm font-medium text-[#202124]">
                    {faq.question}
                  </span>

                  <svg
                    className={`h-4 w-4 shrink-0 text-[#4285F4] transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                {openIndex === index && (
                  <p
                    id={`faq-answer-${index}`}
                    className="pb-5 pr-8 text-xs leading-relaxed text-[#5F6368]"
                  >
                    {faq.answer}
                  </p>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default FAQSection