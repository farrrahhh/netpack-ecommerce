"use client"

import { useState } from "react"

const Login = () => {
  const [credentials, setCredentials] = useState({
    emailOrPhone: "",
    password: "",
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setCredentials((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Login attempt with:", credentials)
    // Add your authentication logic here
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-poppins">
      {/* Left Column - Blue Background with Logo and Illustration */}
      <div className="bg-[#27548A] w-full md:w-1/2 p-6 md:p-12 flex flex-col relative overflow-hidden">
        <div className="z-10">
          <div className="flex items-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Netpack</h1>
            <div className="w-12 h-12 ml-2">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4L27.8 16.2L40 20L27.8 23.8L24 36L20.2 23.8L8 20L20.2 16.2L24 4Z" fill="#FFD700" />
                <path d="M36 12L37.4 16.6L42 18L37.4 19.4L36 24L34.6 19.4L30 18L34.6 16.6L36 12Z" fill="#FFD700" />
              </svg>
            </div>
          </div>
          <p className="text-white mt-2 md:mt-4">Kuotamu, gaya kamu!</p>
        </div>

        <div className="flex-grow flex items-center justify-center z-10">
          <div className="max-w-full h-auto max-h-96">
            <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Simplified illustration representing a person with phone */}
              <ellipse cx="200" cy="230" rx="120" ry="40" fill="#1e4372" opacity="0.7" />
              <rect x="160" y="100" width="80" height="120" rx="40" fill="#4B7CB8" />
              <circle cx="200" cy="80" r="40" fill="#F5D0C5" />
              <rect x="180" y="140" width="40" height="80" rx="10" fill="#333333" />
              <rect x="185" y="145" width="30" height="70" rx="5" fill="#FFFFFF" />
              <circle cx="200" cy="225" r="10" fill="#FFFFFF" />
              <rect x="230" y="130" width="30" height="30" rx="5" fill="#E74C3C" />
              <path d="M245 140L250 145L240 155" stroke="white" strokeWidth="2" />
              <rect x="140" y="150" width="40" height="30" rx="15" fill="#FFFFFF" />
            </svg>
          </div>
        </div>
      </div>

      {/* Right Column - Login Form */}
      <div className="w-full md:w-1/2 p-6 md:p-12 flex items-center justify-center">
        <div className="w-full max-w-md">
          <h2 className="text-3xl md:text-4xl font-bold text-[#27548A] mb-2">Welcome back!</h2>
          <p className="text-gray-600 mb-8">Yuk, masuk dulu biar bisa beli paket secepat kilat!</p>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="emailOrPhone" className="block text-gray-700 mb-2">
                Email / No. telepon
              </label>
              <input
                type="text"
                id="emailOrPhone"
                value={credentials.emailOrPhone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#27548A] focus:border-transparent"
                placeholder="Enter your email or phone number"
              />
            </div>

            <div className="mb-8">
              <label htmlFor="password" className="block text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={credentials.password}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#27548A] focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#27548A] text-white py-3 rounded-md font-medium hover:bg-[#1e4372] transition duration-300"
            >
              Login
            </button>
          </form>

          <p className="text-center mt-6">
            Don't have an account?
            <a href="#" className="text-[#27548A] font-medium ml-1">
              SignUp
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login

