"use client"
import UserProfile from "../components/UserProfile" // Corrected the import path
import Navbar from "../components/Navbar"

function Akun() {
  const userData = {
    name: "Farah Aulia",
    email: "farahaulll268@gmail.com",
    phone: "+6282245822451",
    gender: "Perempuan",
    birthDate: "30/03/2004",
    province: "Jawa Barat",
    city: "Kota Bandung",
  }

  return (
    <div className="font-poppins min-h-screen">
      <Navbar />
      <UserProfile userData={userData} />
    </div>
  )
}

export default Akun