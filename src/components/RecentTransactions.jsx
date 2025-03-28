"use client"

import { Card, Button, Typography } from "antd"
import person3 from "@assets/person3.png" // Import the image using the alias

const { Title, Paragraph } = Typography

const lastTransactions = [
  {
    id: 1,
    name: "Kuota Hemat",
    quota: "4 GB",
    duration: "30 hari",
  },
  {
    id: 2,
    name: "Kuota Hemat",
    quota: "4 GB",
    duration: "30 hari",
  },
  {
    id: 3,
    name: "Kuota Hemat",
    quota: "4 GB",
    duration: "30 hari",
  },
]

const RecentTransactions = () => {
  return (
    <div className="bg-[#27548A] py-16 px-4 md:px-20 text-white font-poppins">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Character */}
        <div className="w-full md:w-[600px] relative">
          <img
            src={person3} // Use the imported image here
            alt="Character"
            className="hidden md:block absolute top-[-180px] left-0 w-[400px] sm:w-[550px] md:w-[700px] h-auto object-contain"
          />
        </div>

        {/* Text & Cards */}
        {/* Text & Cards */}
<div className="w-full md:w-2/3 text-center md:text-left">
  <Title level={2} style={{ color: "white" }} className="font-poppins mb-2">
    Transaksi terakhirmu, sat set tanpa ribet!
  </Title>
  <Paragraph className="text-white text-opacity-90 font-poppins mb-6">
    Lihat kembali paket yang baru aja kamu beli...
  </Paragraph>

  <div className="flex flex-wrap gap-4 justify-center md:justify-between">
    {lastTransactions.map((item) => (
      <Card
        key={item.id}
        style={{ width: 220, borderRadius: 12, fontFamily: "Poppins" }}
        bodyStyle={{ padding: "16px" }}
      >
        <p className="font-semibold text-gray-800 mb-2">{item.name}</p>
        <div className="flex items-center justify-start gap-2 text-[#27548A] mb-4">
          <p className="text-xl font-bold">{item.quota}</p>
          <span className="text-sm text-gray-600">| {item.duration}</span>
        </div>
        <Button
          type="primary"
          block
          className="bg-[#27548A] rounded-md font-poppins"
        >
          Beli lagi
        </Button>
      </Card>
    ))}
  </div>
</div>
      </div>
    </div>
  )
}

export default RecentTransactions