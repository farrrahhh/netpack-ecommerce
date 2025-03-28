"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
  
  const [credentials, setCredentials] = useState({
    emailOrPhone: "",
    password: "",
  })

  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Login attempt with:", credentials)
    navigate("/dashboard") // Arahkan ke dashboard
    }
  const handleChange = (e) => {
    const { id, value } = e.target
    setCredentials((prev) => ({
      ...prev,
      [id]: value,
    }))
  }


  return (
    <div className="min-h-screen flex flex-col md:flex-row font-poppins">
      {/* Left Column - Blue Background with Logo and Illustration */}
      <div className="bg-[#27548A] w-full md:w-1/2 flex flex-col relative overflow-hidden">
        <div className="relative z-20 px-8 pt-10 flex flex-col items-center text-center mt-10">
            <div className="flex items-center gap-3 justify-center">
                <h1 className="text-white text-[56px] md:text-[102px] font-extrabold leading-tight">Netpack</h1>
                <div className="w-16 h-16">
                    <img
                        src="/src/assets/sparkle.png"
                        alt="Sparkle"
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>
            <p className="text-white mt-2 text-base md:text-2xl font-poorStory">Kuotamu, gaya kamu!</p>
        </div>
        <div className="relative flex-grow flex items-center justify-start overflow-hidden">
            <div className="relative max-w-full h-auto max-h-96 -left-16 -top-14">
                <img
                src="/src/assets/person1.png"
                alt="PersonWithPhone"
                className="w-full h-full object-contain"
                />
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

