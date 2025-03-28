"use client"

import { Card, Button, Typography } from "antd"
import person3 from "@assets/person3.png"

const { Title, Paragraph } = Typography

const RecentTransactions = ({ transactions }) => {
  return (
    <div className="bg-[#27548A] py-16 px-4 md:px-20 text-white font-poppins relative min-h-[420px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Character */}
        <div className="w-full md:w-[600px] relative">
          <img
            src={person3}
            alt="Character"
            className="hidden md:block absolute top-[-120px] left-0 w-[400px] sm:w-[550px] md:w-[700px] h-auto object-contain"
          />
        </div>

        {/* Text & Cards */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <Title level={2} style={{ color: "white" }} className="font-poppins mb-2">
            Transaksi terakhirmu, sat set tanpa ribet!
          </Title>
          <Paragraph className="text-white text-opacity-90 font-poppins mb-6">
            Lihat kembali paket yang baru aja kamu beli...
          </Paragraph>

          <div className="flex flex-wrap gap-4 justify-center md:justify-between">
            {transactions.length === 0 ? (
              <p className="text-white/80">Belum ada transaksi.</p>
            ) : (
              transactions.map((item) => (
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
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentTransactions