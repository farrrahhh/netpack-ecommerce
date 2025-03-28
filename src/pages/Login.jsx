"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import sparkle from "@assets/sparkle.png" 
import person1 from "@assets/person1.png" 
import person4 from "@assets/person4.png" 

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  })

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(`https://whispering-pollen-wolf.glitch.me/users`)
      const users = await response.json()

      const matchedUser = users.find(
        (user) =>
          user.email === credentials.email &&
          user.password === credentials.password
      )

      if (matchedUser) {
        console.log("Login successful:", matchedUser)
        // save user data to local storage
        localStorage.setItem("user", matchedUser.id)
        localStorage.setItem("userEmail", matchedUser.email)
        console.log(localStorage.getItem("user"));
        navigate("/dashboard")
      } else {
        alert("Email atau password salah.")
      }
    } catch (error) {
      console.error("Login error:", error)
      alert("Terjadi kesalahan saat login.")
    }
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
        {/* Left Column */}
        <div className="bg-[#27548A] w-full md:w-1/2 flex flex-col relative overflow-hidden">
            <div className="relative z-10 px-8 pt-10 flex flex-col items-center text-center mt-10">
                <div className="flex items-center gap-3 justify-center">
                    <h1 className="text-white text-[56px] md:text-[102px] font-extrabold leading-tight">Netpack</h1>
                    <div className="w-16 h-16">
                        <img src={sparkle} alt="Sparkle" className="w-full h-full object-contain" />
                    </div>
                </div>
                <p className="text-white mt-2 text-base md:text-2xl font-poorStory">Kuotamu, gaya kamu!</p>
            </div>

            <div className="relative flex-grow flex items-center justify-start overflow-hidden z-100">
                <div className="relative max-w-full h-auto max-h-96 -left-16 -top-14">
                    <picture>
                        <source media="(max-width: 640px)" srcSet={person4} />
                        <img src={person1} alt="PersonWithPhone" className="w-full h-auto object-contain" />
                    </picture>
                </div>
            </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 p-6 md:p-12 flex items-center justify-center">
            <div className="w-full max-w-md">
                <h2 className="text-3xl md:text-4xl font-bold text-[#27548A] mb-2">Selamat Datang Kembali!</h2>
                <p className="text-gray-600 mb-8">Yuk, masuk dulu biar bisa beli paket secepat kilat!</p>

                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                        <input
                            type="text"
                            id="email"
                            value={credentials.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#27548A] focus:border-transparent"
                            placeholder="Masukkan email kamu"
                        />
                    </div>

                    <div className="mb-8">
                        <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={credentials.password}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#27548A] focus:border-transparent"
                            placeholder="Masukkan password"
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
                    Belum punya akun?
                    <button
                        onClick={() => navigate("/sign-up")}
                        className="text-[#27548A] font-medium ml-1"
                    >
                        Daftar
                    </button>
                </p>
            </div>
        </div>
    </div>
)
}

export default Login