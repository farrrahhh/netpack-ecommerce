"use client"

import {  useState } from "react"
import { Camera } from "lucide-react"

const UserProfile = ({ userData }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({ ...userData })

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSave = async () => {
    try {
      const res = await fetch(`https://whispering-pollen-wolf.glitch.me/users/${userData.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        alert("Profil berhasil diperbarui!")
        setIsEditing(false)
      } else {
        alert("Gagal menyimpan perubahan.")
      }
    } catch (error) {
      console.error("Gagal update user:", error)
      alert("Terjadi kesalahan.")
    }
  }

  return (
    <div className="bg-[#f3f6f8] font-poppins px-4 py-10 md:py-14">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl font-bold text-[#333] mb-10">Akun</h1>

        <div className="flex flex-col md:flex-row md:items-start gap-10 w-full">
          {/* Avatar */}
          <div className="flex flex-col items-center">
            <div className="relative w-44 h-44 bg-[#27548A] rounded-full flex items-center justify-center">
              <Camera className="w-12 h-12 text-white" />
              <div className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow cursor-pointer">
                <Camera className="w-4 h-4 text-[#27548A]" />
              </div>
            </div>
            <a href="#" className="text-red-500 hover:text-red-600 underline text-sm mt-4">
              Change Password
            </a>
          </div>

          {/* Form */}
          <div className="w-full md:w-[100%]">
            <div className="bg-[#27548A] text-white rounded-xl shadow p-6 relative min-h-[450px]">
              <button
                onClick={isEditing ? handleSave : () => setIsEditing(true)}
                className="absolute top-4 right-4 bg-white text-[#27548A] px-4 py-2 rounded font-medium hover:bg-gray-100"
              >
                {isEditing ? "Save" : "Edit"}
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mt-6">
                {[
                  { id: "name", label: "Nama" },
                  { id: "email", label: "Email", readOnly: true },
                  { id: "phone", label: "Nomor Telepon" },
                  { id: "gender", label: "Jenis Kelamin" },
                  { id: "birthDate", label: "Tanggal Lahir" },
                  { id: "province", label: "Provinsi" },
                  { id: "city", label: "Kota/Kabupaten" },
                ].map(({ id, label, readOnly }) => (
                  <div key={id}>
                    <label className="text-lg font-semibold">{label}</label>
                    {isEditing ? (
                      <input
                        id={id}
                        type="text"
                        value={formData[id] || ""}
                        onChange={handleInputChange}
                        readOnly={readOnly}
                        className={`w-full bg-[#3A6AA3] border border-[#5A8AC3] rounded-md p-3 mt-1 text-white text-base ${
                          readOnly ? "cursor-not-allowed opacity-70" : ""
                        }`}
                      />
                    ) : (
                      <p className="text-base text-white mt-1">{formData[id]}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile