"use client"

import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import FilterBar from "../components/FilterBar"
import ProductList from "../components/ProductList"
import RecentTransactions from "../components/RecentTransactions"
import Footer from "../components/Footer"

const dummyProducts = [
  {
    id: 1,
    name: "Kuota Hemat 4 GB",
    price: 10000,
    duration: "30 hari",
    provider: "by.U",
  },
  {
    id: 2,
    name: "Kuota Sosmed 5 GB",
    price: 15000,
    duration: "30 hari",
    provider: "Telkomsel",
  },
  {
    id: 3,
    name: "Paket Streaming 10 GB",
    price: 25000,
    duration: "7 hari",
    provider: "XL",
  },
  {
    id: 4,
    name: "Internet Malam 15 GB",
    price: 20000,
    duration: "10 hari",
    provider: "Axis",
  },
  {
    id: 5,
    name: "Combo Internet + Telepon",
    price: 35000,
    duration: "30 hari",
    provider: "Indosat",
  },
  {
    id: 6,
    name: "Unlimited Chatting",
    price: 12000,
    duration: "7 hari",
    provider: "3 (Tri)",
  },
  {
    id: 7,
    name: "Kuota Belajar 8 GB",
    price: 18000,
    duration: "14 hari",
    provider: "Smartfren",
  },
  {
    id: 8,
    name: "Kuota Harian 1 GB/hari",
    price: 25000,
    duration: "7 hari",
    provider: "Telkomsel",
  },
  {
    id: 9,
    name: "Unlimited App Package",
    price: 30000,
    duration: "30 hari",
    provider: "by.U",
  },
  {
    id: 10,
    name: "Kuota Jumbo 40 GB",
    price: 75000,
    duration: "30 hari",
    provider: "XL",
  },
]

function Dashboard() {
    return (
      <div className="font-poppins min-h-screen">
        <Navbar />
  
        <section id="hero">
          <HeroSection />
        </section>
  
        <section id="filter">
          <FilterBar />
        </section>
  
        <section id="paket">
          <ProductList products={dummyProducts} />
        </section>
  
        <section id="transaksi">
          <RecentTransactions />
        </section>
  
        <section id="footer">
          <Footer />
        </section>
      </div>
    )
  }
  export default Dashboard
