import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import gdgocLogo from '../../assets/images/gdgoc-identity.svg'

const navItems = [
  { label: 'Home', path: '/', end: true },
  { label: 'About', path: '/about' },
  { label: 'Overview', path: '/overview' },
  { label: 'Contact', path: '/contact' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const getNavLinkClass = ({ isActive }) => {
    const baseClass =
        'rounded-full px-3 py-2 text-sm transition-all duration-200'

    const activeClass = isActive
        ? 'bg-[#E8F0FE] font-semibold text-[#1A73E8]'
        : 'font-normal text-[#5F6368] hover:bg-[#E8F0FE] hover:text-[#1A73E8]'

    return `${baseClass} ${activeClass}`
 }

  return (
    <header className="relative z-50 w-full border-b border-[#E8E9EB] bg-white">
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex h-[70px] w-full items-center justify-between px-5 sm:px-8 lg:px-11"
      >
        {/* Logo */}
        <NavLink
          to="/"
          aria-label="GDGoC UGM - Home"
          onClick={closeMenu}
          className="shrink-0"
        >
          <img
            src={gdgocLogo}
            alt="Google Developer Groups On Campus Universitas Gadjah Mada"
            className="h-auto w-[190px] sm:w-[220px] lg:w-[235px]"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.end}
                className={getNavLinkClass}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <NavLink
          to="/overview"
          className="hidden items-center gap-3 rounded-md bg-[#4285F4] px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-[#3367D6] lg:inline-flex"
        >
          Find your track

          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isMenuOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((previousState) => !previousState)}
          className="flex size-10 items-center justify-center rounded-lg text-gray-700 transition-colors hover:bg-gray-100 lg:hidden"
        >
          {isMenuOpen ? (
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m18 6-12 12" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16" />
              <path d="M4 12h16" />
              <path d="M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile and Tablet Navigation */}
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="absolute left-0 top-full w-full border-b border-[#E8E9EB] bg-white px-5 py-5 shadow-lg sm:px-8 lg:hidden"
        >
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.end}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-3 text-sm transition-colors ${
                      isActive
                        ? 'bg-[#E8F0FE] font-semibold text-[#1A73E8]'
                        : 'text-[#5F6368] hover:bg-gray-100'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <NavLink
            to="/overview"
            onClick={closeMenu}
            className="mt-4 flex w-full items-center justify-center gap-3 rounded-md bg-[#4285F4] px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-[#3367D6]"
          >
            Find your track

            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </NavLink>
        </div>
      )}
    </header>
  )
}

export default Navbar