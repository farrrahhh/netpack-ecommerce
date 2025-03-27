"use client"

import { ChevronDown, Search } from "lucide-react"

const FilterBar = ({
  phoneNumber,
  setPhoneNumber,
  selectedProvider,
  setSelectedProvider,
  selectedType,
  setSelectedType,
}) => {
  const providers = ["Semua Provider", "Telkomsel", "XL", "Indosat", "Tri", "Smartfren"]
  const quotaTypes = ["Semua Jenis", "Internet", "Telepon", "SMS", "Combo", "Entertainment"]

  return (
    <div className="bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-md p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Provider Filter */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">Provider</label>
              <div className="relative">
                <select
                  value={selectedProvider}
                  onChange={(e) => setSelectedProvider(e.target.value)}
                  className="block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-[#27548A] focus:border-[#27548A] rounded-lg appearance-none bg-white border"
                >
                  {providers.map((provider) => (
                    <option key={provider} value={provider}>
                      {provider}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ChevronDown className="h-5 w-5" />
                </div>
              </div>
            </div>

            {/* Quota Type Filter */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">Jenis Kuota</label>
              <div className="relative">
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-[#27548A] focus:border-[#27548A] rounded-lg appearance-none bg-white border"
                >
                  {quotaTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ChevronDown className="h-5 w-5" />
                </div>
              </div>
            </div>

            {/* Phone Number Input */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">Nomor Telepon</label>
              <div className="relative rounded-lg shadow-sm">
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="block w-full pl-3 pr-10 py-3 border-gray-300 focus:outline-none focus:ring-[#27548A] focus:border-[#27548A] rounded-lg border"
                  placeholder="Masukkan nomor telepon"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterBar

