const ProductCard = ({ product }) => {
    return (
      <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 border border-gray-100">
        <div className="p-5">
          <div className="flex justify-between items-start">
            <div>
              <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-[#27548A] mb-2">
                {product.provider}
              </span>
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
            </div>
            <div className="bg-[#27548A] bg-opacity-10 rounded-full p-2">
              <svg
                className="w-6 h-6 text-[#27548A]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
  
          <div className="mt-3 space-y-1">
            <div className="flex items-center text-sm text-gray-600">
              <svg
                className="w-4 h-4 mr-1 text-[#27548A]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>{product.quota}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <svg
                className="w-4 h-4 mr-1 text-[#27548A]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{product.duration}</span>
            </div>
          </div>
  
          <div className="mt-4 flex justify-between items-center">
            <span className="text-xl font-bold text-[#27548A]">{product.price}</span>
            <button className="px-4 py-2 bg-[#27548A] text-white rounded-full text-sm font-medium hover:bg-opacity-90 transition duration-300">
              Beli
            </button>
          </div>
        </div>
      </div>
    )
  }
  
  export default ProductCard
  
  