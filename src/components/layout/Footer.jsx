import { Link } from "react-router-dom";
import gdgLogo from "../../assets/images/gdgoc-identity.svg";

function Footer() {
  return (
    <footer className="bg-[#F1F3F4] px-5 py-8 text-[#202124] sm:py-10">
      <div className="mx-auto w-full max-w-[1060px]">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-[1.5fr_0.7fr_0.7fr] sm:gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block">
              <img
                src={gdgLogo}
                alt="Google Developer Groups on Campus Universitas Gadjah Mada"
                className="h-auto w-[200px] max-w-full object-contain object-left"
              />
            </Link>

            <p className="mt-3 max-w-xs text-xs leading-relaxed text-[#5F6368]">
              A student community for curious minds, shared learning, and
              technology with purpose.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-xs font-semibold">Explore</h3>

            <ul className="mt-3 space-y-2 text-xs text-[#5F6368]">
              <li>
                <Link
                  to="/"
                  className="transition-colors duration-200 hover:text-[#1A73E8]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="transition-colors duration-200 hover:text-[#1A73E8]"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/overview"
                  className="transition-colors duration-200 hover:text-[#1A73E8]"
                >
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="transition-colors duration-200 hover:text-[#1A73E8]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-xs font-semibold">Keep in the loop</h3>

            <a
              href="https://www.instagram.com/gdgoc.ugm/"
              target="_blank"
              rel="noreferrer"
              className="mt-3 block text-xs text-[#1A73E8] hover:underline"
            >
              @gdgoc.ugm
            </a>

            <div className="mt-3 flex items-center gap-4 text-[#5F6368]">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/gdgoc.ugm/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram GDG on Campus UGM"
                className="hover:text-[#202124]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="18" cy="6" r="1" fill="currentColor" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@gdgocugm"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="hover:text-[#202124]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M23 7a3 3 0 0 0-2.1-2.1C19 4.4 12 4.4 12 4.4s-7 0-8.9.5A3 3 0 0 0 1 7a31 31 0 0 0-.5 5 31 31 0 0 0 .5 5 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5A3 3 0 0 0 23 17a31 31 0 0 0 .5-5 31 31 0 0 0-.5-5ZM9.5 15.5v-7l6 3.5-6 3.5Z" />
                </svg>
              </a>
            </div>

            <p className="mt-3 text-[10px] text-[#5F6368]">
              Learn together. Build together.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-7 flex flex-col justify-between gap-3 border-t border-[#DADCE0] pt-4 sm:flex-row sm:items-center">
          <p className="text-[10px] text-[#80868B]">
            © GDG on Campus Universitas Gadjah Mada · 2026/2027
          </p>

          <p className="text-[10px] text-[#80868B]">
            Made for the campus. Open to possibilities.
          </p>
        </div>

        {/* Google colors */}
        <div className="mt-4 flex h-[2px] w-16 overflow-hidden">
          <span className="w-1/4 bg-[#4285F4]" />
          <span className="w-1/4 bg-[#EA4335]" />
          <span className="w-1/4 bg-[#FBBC04]" />
          <span className="w-1/4 bg-[#34A853]" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
