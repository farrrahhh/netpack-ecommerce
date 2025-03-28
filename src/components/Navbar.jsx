"use client"

import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-[#27548A] text-3xl font-bold">Netpack</span>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8 relative">
            <Link
              to="/"
              className={`text-[20px] font-medium inline-flex items-center px-1 pt-1 border-b-2 ${
                isActive("/")
                  ? "text-[#27548A] border-[#27548A] font-semibold"
                  : "text-gray-500 border-transparent hover:text-[#27548A] hover:border-[#27548A]"
              }`}
            >
              Beli Paket
            </Link>
            <Link
              to="/transaksi"
              className={`text-[20px] font-medium inline-flex items-center px-1 pt-1 border-b-2 ${
                isActive("/transaksi")
                  ? "text-[#27548A] border-[#27548A] font-semibold"
                  : "text-gray-500 border-transparent hover:text-[#27548A] hover:border-[#27548A]"
              }`}
            >
              Transaksi
            </Link>

            {/* Akun with Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className={`text-[20px] font-medium inline-flex items-center px-1 pt-1 border-b-2 ${
                  isActive("/akun")
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
                    onClick={() => alert("Logged out!")}
                    className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
                  >
                    Keluar
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Toggle */}
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
            <Link
              to="/"
              className={`block pl-3 pr-4 py-2 border-l-4 text-[20px] font-medium ${
                isActive("/")
                  ? "text-[#27548A] bg-[#27548A]/10 border-[#27548A]"
                  : "text-gray-500 border-transparent hover:text-[#27548A]"
              }`}
            >
              Beli Paket
            </Link>
            <Link
              to="/transaksi"
              className={`block pl-3 pr-4 py-2 border-l-4 text-[20px] font-medium ${
                isActive("/transaksi")
                  ? "text-[#27548A] bg-[#27548A]/10 border-[#27548A]"
                  : "text-gray-500 border-transparent hover:text-[#27548A]"
              }`}
            >
              Transaksi
            </Link>
            <div className="pl-3 pr-4">
              <Link
                to="/akun"
                className={`block py-2 text-[20px] font-medium ${
                  isActive("/akun")
                    ? "text-[#27548A] font-semibold underline"
                    : "text-gray-500 hover:text-[#27548A]"
                }`}
              >
                Profil
              </Link>
              <button
                onClick={() => alert("Logged out!")}
                className="block w-full text-left py-2 text-[18px] text-red-500 hover:text-red-600"
              >
                Keluar
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar