"use client"

import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import FilterBar from "../components/FilterBar"
import ProductList from "../components/ProductList"
import RecentTransactions from "../components/RecentTransactions"
import Footer from "../components/Footer"

function Dashboard() {
  const [products, setProducts] = useState([])
  const [transactions, setTransactions] = useState([])

  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:3001/packages")
      const data = await res.json()
      setProducts(data)
    } catch (error) {
      console.error("Gagal memuat produk:", error)
    }
  }

  const fetchTransactions = async () => {
    try {
      const email = localStorage.getItem("userEmail")
      if (!email) return

      const res = await fetch("http://localhost:3001/transactions")
      const allTransactions = await res.json()
      const userTransactions = allTransactions.filter((tx) => tx.email === email)

      const pkgRes = await fetch("http://localhost:3001/packages")
      const packages = await pkgRes.json()

      const enriched = userTransactions
        .slice(-3)
        .map((tx) => {
          const pkg = packages.find((p) => p.id == tx.packageId)
          return {
            id: tx.id,
            name: pkg?.name || "Unknown",
            quota: pkg?.quota || "-",
            duration: pkg?.duration || "-",
          }
        })

      setTransactions(enriched)
    } catch (error) {
      console.error("Gagal memuat transaksi:", error)
    }
  }

  // Fetch sekali saat load + ulangi setiap 5 detik
  useEffect(() => {
    fetchProducts()
    fetchTransactions()

    const interval = setInterval(() => {
      fetchTransactions()
    }, 5000)

    return () => clearInterval(interval) // bersihkan interval kalau komponen di-unmount
  }, [])

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
        <ProductList products={products} onSuccessBuy={fetchTransactions} />
      </section>

      <section id="transaksi">
        <RecentTransactions transactions={transactions} />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </div>
  )
}

export default Dashboard