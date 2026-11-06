function ValueStrip() {
  const values = [
    {
      color: 'bg-blue-500',
      label: 'Learn by doing',
    },
    {
      color: 'bg-red-500',
      label: 'Connect across disciplines',
    },
    {
      color: 'bg-green-500',
      label: 'Build with purpose',
    },
  ]

  return (
    <section className="border-y border-[#E8EAED] bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 sm:grid-cols-3">
        {values.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-center gap-3 py-4"
          >
            <span className={`h-1.5 w-1.5 ${item.color}`} />

            <p className="text-xs font-medium text-[#202124]">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ValueStrip