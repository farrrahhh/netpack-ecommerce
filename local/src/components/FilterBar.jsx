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
  const providers = ["Semua Provider", "Telkomsel", "XL", "Indosat", "Tri", "Smartfren", "Axis", "by.U" ]
  const quotaTypes = ["Semua Jenis", "Internet", "Telepon", "SMS", "Combo", "Entertainment"]

  return (
    <div className="bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Provider Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Provider</label>
              <div className="relative">
                <select
                  value={selectedProvider}
                  onChange={(e) => setSelectedProvider(e.target.value)}
                  className="block w-full pl-3 pr-10 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-[#27548A] focus:border-[#27548A] appearance-none bg-white"
                >
                  {providers.map((provider) => (
                    <option key={provider} value={provider}>
                      {provider}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
                  <ChevronDown className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Kuota Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Jenis Kuota</label>
              <div className="relative">
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="block w-full pl-3 pr-10 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-[#27548A] focus:border-[#27548A] appearance-none bg-white"
                >
                  {quotaTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
                  <ChevronDown className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Phone Number Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nomor Telepon</label>
              <div className="relative">
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="08xxxxxxxxxx"
                  className="block w-full pl-3 pr-10 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-[#27548A] focus:border-[#27548A]"
                />
                <div className="absolute inset-y-0 right-3 flex items-center text-gray-400">
                  <Search className="w-5 h-5" />
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