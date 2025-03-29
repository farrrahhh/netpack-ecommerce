"use client"

import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Link, useLocation, useNavigate } from "react-router-dom"

const Navbar = () => {
  const handleLogOut = () => {
    // Clear any authentication tokens or user data here
    localStorage.removeItem("userEmail") // Remove user email from local storage
    localStorage.removeItem("userId") // Remove user ID from local storage
    localStorage.removeItem("userName") // Remove user name from local storage
    navigate("/") // Redirect to the login page
  }
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const location = useLocation()
  const navigate = useNavigate()

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleNavigateAndScroll = (sectionId) => {
    setActiveSection(sectionId) // 👈 set active section

    if (location.pathname !== "/dashboard") {
      navigate("/dashboard")
      setTimeout(() => scrollToSection(sectionId), 100)
    } else {
      scrollToSection(sectionId)
    }

    setIsMenuOpen(false)
  }

  const isPage = (path) => location.pathname === path

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-[#27548A] text-3xl font-bold">Netpack</span>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8 relative">
            <button
              onClick={() => handleNavigateAndScroll("filter")}
              className={`text-[20px] font-medium inline-flex items-center px-1 pt-1 border-b-2 ${
                isPage("/dashboard") && activeSection === "filter"
                  ? "text-[#27548A] border-[#27548A] font-semibold"
                  : "text-gray-500 border-transparent hover:text-[#27548A] hover:border-[#27548A]"
              }`}
            >
              Beli Paket
            </button>

            <button
              onClick={() => handleNavigateAndScroll("transaksi")}
              className={`text-[20px] font-medium inline-flex items-center px-1 pt-1 border-b-2 ${
                isPage("/dashboard") && activeSection === "transaksi"
                  ? "text-[#27548A] border-[#27548A] font-semibold"
                  : "text-gray-500 border-transparent hover:text-[#27548A] hover:border-[#27548A]"
              }`}
            >
              Transaksi
            </button>

            {/* Akun Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className={`text-[20px] font-medium inline-flex items-center px-1 pt-1 border-b-2 ${
                  isPage("/akun")
                    ? "text-[#27548A] border-[#27548A] font-semibold"
                    : "text-gray-500 border-transparent hover:text-[#27548A] hover:border-[#27548A]"
                }`}
              >
                Akun <ChevronDown size={16} className="ml-1" />
              </button>
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded shadow-lg z-50 font-poppins">
                  <Link
                    to="/akun"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Akun
                  </Link>
                  <button
                    onClick={() => handleLogOut()}
                    className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
                  >
                    Keluar
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile toggle */}
          <div className="-mr-2 flex sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden font-poppins">
          <div className="pt-2 pb-3 space-y-1">
            <button
              onClick={() => handleNavigateAndScroll("filter")}
              className={`block w-full text-left pl-3 pr-4 py-2 border-l-4 text-[20px] font-medium ${
                activeSection === "filter"
                  ? "text-[#27548A] bg-[#27548A]/10 border-[#27548A]"
                  : "text-gray-500 border-transparent hover:text-[#27548A]"
              }`}
            >
              Beli Paket
            </button>
            <button
              onClick={() => handleNavigateAndScroll("transaksi")}
              className={`block w-full text-left pl-3 pr-4 py-2 border-l-4 text-[20px] font-medium ${
                activeSection === "transaksi"
                  ? "text-[#27548A] bg-[#27548A]/10 border-[#27548A]"
                  : "text-gray-500 border-transparent hover:text-[#27548A]"
              }`}
            >
              Transaksi
            </button>
            <div className="pl-3 pr-4">
              <Link
                to="/akun"
                className={`block py-2 text-[20px] font-medium ${
                  isPage("/akun")
                    ? "text-[#27548A] font-semibold underline"
                    : "text-gray-500 hover:text-[#27548A]"
                }`}
              >
                Profil
              </Link>
              <button
                onClick={() => handleLogOut()}
                className="block w-full text-left py-2 text-[18px] text-red-500 hover:text-red-600"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar