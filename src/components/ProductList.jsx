"use client"

import { useState } from "react"
import ProductCard from "./ProductCard"
import { ChevronLeft, ChevronRight } from "lucide-react"

const ProductList = ({ products }) => {
  const [scrollPosition, setScrollPosition] = useState(0)

  const scrollLeft = () => {
    const container = document.getElementById("product-container")
    if (container) {
      const newPosition = Math.max(scrollPosition - 300, 0)
      container.scrollTo({ left: newPosition, behavior: "smooth" })
      setScrollPosition(newPosition)
    }
  }

  const scrollRight = () => {
    const container = document.getElementById("product-container")
    if (container) {
      const newPosition = Math.min(scrollPosition + 300, container.scrollWidth - container.clientWidth)
      container.scrollTo({ left: newPosition, behavior: "smooth" })
      setScrollPosition(newPosition)
    }
  }

  return (
    <div className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Paket Data Populer</h2>
            <p className="text-gray-600 mt-1">Pilih paket data sesuai kebutuhanmu</p>
          </div>

          <div className="hidden sm:flex space-x-2">
            <button
              onClick={scrollLeft}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 focus:outline-none"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            <button
              onClick={scrollRight}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 focus:outline-none"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Mobile Grid View */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Desktop Horizontal Scroll */}
        <div
          id="product-container"
          className="hidden md:flex overflow-x-auto space-x-4 pb-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product) => (
            <div key={product.id} className="flex-none w-72">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a href="#" className="text-[#27548A] font-medium hover:underline">
            Lihat semua paket data →
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProductList

