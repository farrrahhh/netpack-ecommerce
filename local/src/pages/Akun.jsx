"use client"
import { useEffect, useState } from "react"
import UserProfile from "../components/UserProfile"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Akun() {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const fetchUserData = async () => {
      const email = localStorage.getItem("userEmail")
      if (!email) return

      try {
        const res = await fetch("http://localhost:3001/users")
        const users = await res.json()
        const matchedUser = users.find((user) => user.email === email)

        if (matchedUser) {
          setUserData(matchedUser)
        } else {
          console.warn("User tidak ditemukan")
        }
      } catch (error) {
        console.error("Gagal mengambil data user:", error)
      }
    }

    fetchUserData()
  }, [])

  return (
    <div className="min-h-screen font-poppins bg-gray-100">
      <Navbar />
      <div className="container mx-auto py-8">
        {userData ? (
          <UserProfile userData={userData} />
        ) : (
          <p className="text-center text-gray-600">Memuat data akun...</p>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Akun