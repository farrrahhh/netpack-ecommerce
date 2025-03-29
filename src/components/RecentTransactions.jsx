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
    <div className="bg-[#27548A] py-16 px-4 md:px-20 text-white font-poppins relative min-h-[400px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Gambar kiri */}
        <div className="w-full md:w-2/5 relative hidden md:flex justify-center items-center">
          <img
            src={person3}
            alt="Character"
            className="w-[600px] h-auto object-contain"
          />
        </div>

        {/* Konten kanan */}
        <div className="w-full md:w-4/6 flex flex-col items-center md:items-start text-center md:text-left">
          <Title level={2} style={{ color: "white" }} className="font-poppins mb-2">
            Transaksi terakhirmu, sat set tanpa ribet!
          </Title>
          <Paragraph className="text-white text-opacity-90 font-poppins mb-6">
            Lihat kembali paket yang baru aja kamu beli...
          </Paragraph>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
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
            Apakah kamu yakin ingin membeli ulang paket{" "}
            <strong>{selectedTransaction.name}</strong> seharga{" "}
            <strong>Rp {selectedTransaction.price?.toLocaleString()}</strong>?
          </p>
        )}
      </Modal>
    </div>
  )
}

export default RecentTransactions