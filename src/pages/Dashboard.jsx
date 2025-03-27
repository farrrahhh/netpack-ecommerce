"use client"

import { useState } from "react"
import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import FilterBar from "../components/FilterBar"
import ProductList from "../components/ProductList"
import RecentTransactions from "../components/RecentTransactions"

function Dashboard() {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [selectedProvider, setSelectedProvider] = useState("")
  const [selectedType, setSelectedType] = useState("")

  // Sample product data
  const products = [
    { id: 1, name: "Kuota Hemat", quota: "4 GB", duration: "30 hari", price: "Rp 10.000", provider: "Telkomsel" },
    { id: 2, name: "Kuota Bulanan", quota: "8 GB", duration: "30 hari", price: "Rp 25.000", provider: "XL" },
    {
      id: 3,
      name: "Kuota Unlimited",
      quota: "Unlimited",
      duration: "30 hari",
      price: "Rp 100.000",
      provider: "Indosat",
    },
    { id: 4, name: "Kuota Malam", quota: "20 GB", duration: "30 hari", price: "Rp 30.000", provider: "Telkomsel" },
    { id: 5, name: "Kuota Sosmed", quota: "10 GB", duration: "30 hari", price: "Rp 35.000", provider: "XL" },
  ]

  // Sample recent transactions
  const recentTransactions = [
    {
      id: 101,
      name: "Kuota Hemat",
      quota: "4 GB",
      duration: "30 hari",
      price: "Rp 10.000",
      provider: "Telkomsel",
      date: "2 hari lalu",
    },
    {
      id: 102,
      name: "Kuota Bulanan",
      quota: "8 GB",
      duration: "30 hari",
      price: "Rp 25.000",
      provider: "XL",
      date: "5 hari lalu",
    },
    {
      id: 103,
      name: "Kuota Sosmed",
      quota: "10 GB",
      duration: "30 hari",
      price: "Rp 35.000",
      provider: "Indosat",
      date: "1 minggu lalu",
    },
  ]

  return (
    <div className="font-poppins min-h-screen">
      <Navbar />
      <HeroSection />
      <FilterBar
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        selectedProvider={selectedProvider}
        setSelectedProvider={setSelectedProvider}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      <ProductList products={products} />
      <RecentTransactions transactions={recentTransactions} />
    </div>
  )
}

export default Dashboard

