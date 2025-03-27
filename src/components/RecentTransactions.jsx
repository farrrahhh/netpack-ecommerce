const TransactionCard = ({ transaction }) => {
    return (
      <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 border border-white border-opacity-20">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="text-white font-medium">{transaction.name}</h4>
            <p className="text-white text-opacity-80 text-sm">{transaction.provider}</p>
          </div>
          <span className="text-xs text-white text-opacity-70">{transaction.date}</span>
        </div>
  
        <div className="mt-2 space-y-1">
          <div className="flex items-center text-sm text-white text-opacity-90">
            <svg
              className="w-4 h-4 mr-1 text-white text-opacity-70"
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
            <span>{transaction.quota}</span>
          </div>
        </div>
  
        <div className="mt-3 flex justify-between items-center">
          <span className="text-white font-bold">{transaction.price}</span>
          <button className="px-3 py-1 bg-white text-[#27548A] rounded-full text-xs font-medium hover:bg-opacity-90 transition duration-300">
            Beli lagi
          </button>
        </div>
      </div>
    )
  }
  
  export default TransactionCard
  
  