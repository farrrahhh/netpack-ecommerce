"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import sparkle from "@assets/sparkle.png"
import person1 from "@assets/person1.png"
import person4 from "@assets/person4.png"

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    birthDate: "",
    province: "",
    city: "",
    password: "",
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert("Signup berhasil! Silakan login.")
        navigate("/")
      } else {
        alert("Gagal signup. Coba lagi nanti.")
      }
    } catch (error) {
      console.error("Signup error:", error)
      alert("Terjadi kesalahan saat signup.")
    }
  }

  return (
    <div className="h-screen flex flex-col md:flex-row font-poppins overflow-hidden">
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

      {/* Right */}
      <div className="w-full md:w-1/2 p-6 md:p-10 flex items-center justify-center overflow-y-auto">
        <div className="w-full max-w-sm md:max-w-md text-sm md:text-base">
          <h2 className="text-2xl md:text-3xl font-bold text-[#27548A] mb-2">Buat Akun Baru</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
  {[
    { id: "name", label: "Nama" },
    { id: "email", label: "Email" },
    { id: "phone", label: "Nomor Telepon" },
    { id: "gender", label: "Jenis Kelamin", type: "select" },
    { id: "birthDate", label: "Tanggal Lahir", type: "date" },
    { id: "province", label: "Provinsi" },
    { id: "city", label: "Kota/Kabupaten" },
    { id: "password", label: "Password", type: "password" },
  ].map(({ id, label, type = "text" }) => (
    <div key={id}>
      <label htmlFor={id} className="block text-gray-700 mb-1">{label}</label>
      {type === "select" ? (
        <select
          id={id}
          value={formData[id]}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#27548A] focus:border-transparent"
        >
          <option value="">Pilih jenis kelamin</option>
          <option value="Laki-laki">Laki-laki</option>
          <option value="Perempuan">Perempuan</option>
        </select>
      ) : (
        <input
          type={type}
          id={id}
          value={formData[id]}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#27548A] focus:border-transparent"
          placeholder={`Masukkan ${label.toLowerCase()}`}
        />
      )}
    </div>
  ))}

  <button
    type="submit"
    className="w-full bg-[#27548A] text-white py-2 rounded-md font-medium hover:bg-[#1e4372] transition duration-300"
  >
    Daftar
  </button>
</form>

          <p className="text-center mt-4">
            Sudah punya akun?
            <button
              onClick={() => navigate("/")}
              className="text-[#27548A] font-medium ml-1"
            >
              Masuk
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup