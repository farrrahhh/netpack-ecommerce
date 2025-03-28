"use client"
import UserProfile from "../components/UserProfile" // Corrected the import path
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

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
    <div className="min-h-screen font-poppins bg-gray-100">
        <Navbar />
        <div className="container mx-auto py-8">
            <UserProfile userData={userData} />
        </div>
        <Footer />
    </div>
)
}

export default Akun