"use client"

import { useState } from "react"
import { Card, Button, Typography, Modal } from "antd"
import person3 from "@assets/person3.png"

const { Title, Paragraph } = Typography

const RecentTransactions = ({ transactions, onSuccessBuy }) => {
  const [selectedTransaction, setSelectedTransaction] = useState(null)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showConfirmModal = (transaction) => {
    setSelectedTransaction(transaction)
    setIsModalVisible(true)
  }

  const handleBuyAgain = async () => {
    if (!selectedTransaction) return

    try {
      const userId = localStorage.getItem("user")
      const email = localStorage.getItem("userEmail")
      console.log(selectedTransaction)
      const response = await fetch("http://localhost:3001/transactions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          packageId: selectedTransaction.packageId,
          email,
          price: selectedTransaction.price,
          date: new Date().toISOString().split("T")[0],
        }),
      })

      if (response.ok) {
        Modal.success({
          title: "Berhasil!",
          content: "Transaksi berhasil diulang.",
        })
        onSuccessBuy && onSuccessBuy()
      } else {
        throw new Error()
      }
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      Modal.error({
        title: "Gagal",
        content: "Terjadi kesalahan saat memproses transaksi.",
      })
    } finally {
      setIsModalVisible(false)
    }
  }

  return (
    <div className="bg-[#27548A] py-16 px-4 md:px-20 text-white font-poppins relative min-h-[420px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Character */}
        <div className="w-full md:w-[600px] relative">
          <img
            src={person3}
            alt="Character"
            className="hidden md:block absolute top-[-190px] left-0 w-[400px] sm:w-[550px] md:w-[700px] h-auto object-contain"
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
                    onClick={() => showConfirmModal(item)}
                  >
                    Beli lagi
                  </Button>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Modal Konfirmasi */}
      <Modal
        open={isModalVisible}
        title="Konfirmasi Pembelian Ulang"
        onOk={handleBuyAgain}
        onCancel={() => setIsModalVisible(false)}
        okText="Ya, Beli"
        cancelText="Batal"
      >
        {selectedTransaction && (
          <p>
            Apakah kamu yakin ingin membeli ulang paket <strong>{selectedTransaction.name}</strong>?
          </p>
        )}
      </Modal>
    </div>
  )
}

export default RecentTransactions