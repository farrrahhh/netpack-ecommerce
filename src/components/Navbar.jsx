"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react" // Hapus ShoppingCart dan User

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-[#27548A] text-3xl font-bold">Netpack</span>
            </div>
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a
                href="#"
                className="border-[#27548A] text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-[20px] font-medium"
              >
                Beli Paket
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-[20px] font-medium"
              >
                Transaksi
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-[20px] font-medium"
              >
                Akun
              </a>
            </div>
          </div>

          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
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
            <a
              href="#"
              className="bg-[#27548A] bg-opacity-10 border-l-4 border-[#27548A] text-[#27548A] block pl-3 pr-4 py-2 text-[20px] font-medium"
            >
              Beli Paket
            </a>
            <a
              href="#"
              className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-[20px] font-medium"
            >
              Transaksi
            </a>
            <a
              href="#"
              className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-[20px] font-medium"
            >
              Akun
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar