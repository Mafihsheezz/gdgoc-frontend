import { useState } from 'react'

const faqs = [
  {
    question: 'Do I need to know how to code?',
    answer:
      'No. Start with an interest in technology and a willingness to learn. Research and design are part of the journey, too.',
  },
  {
    question: 'Is this only for computer science students?',
    answer:
      'Different disciplines bring different perspectives. Explore the overview to find a starting point that fits your interests.',
  },
  {
    question: 'How can I find learning opportunities?',
    answer:
      'Keep an eye on @gdgoc.ugm for community updates. You can also use the contact page to ask about getting involved.',
  },
]

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

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
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
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
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection