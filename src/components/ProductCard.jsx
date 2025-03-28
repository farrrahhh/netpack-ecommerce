import { useState } from "react"
import { Card, Button, Typography, Divider, Tag, Modal } from "antd"

const { Title, Text } = Typography

const ProductCard = ({ product }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleBuy = async () => {
    try {
        const userId = localStorage.getItem("user")
        const res = await fetch("http://localhost:3001/transactions", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId,
            packageId: product.id,
            email: localStorage.getItem("userEmail"),
            price: product.price,
            date: new Date().toISOString().split("T")[0], // format YYYY-MM-DD
          }),
        })

      if (res.ok) {
        Modal.success({
          title: "Berhasil!",
          content: "Paket berhasil dibeli.",
        })
      } else {
        throw new Error()
      }
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      Modal.error({
        title: "Gagal",
        content: "Terjadi kesalahan saat membeli paket.",
      })
    } finally {
      setIsModalVisible(false)
    }
  }

  return (
    <>
      <Card
        hoverable
        className="transition duration-300 transform hover:scale-[1.03] hover:shadow-xl"
        style={{
          borderRadius: 16,
          backgroundColor: "#f9fbff",
          position: "relative",
        }}
        bodyStyle={{ padding: "1.5rem" }}
      >
        {/* Provider */}
        <Tag
          color="#27548A"
          style={{
            position: "absolute",
            top: 16,
            left: 16,
            borderRadius: 6,
            padding: "2px 10px",
          }}
        >
          <span className="text-white font-medium">{product.provider}</span>
        </Tag>

        <Title level={5} style={{ marginTop: 40, color: "#111", fontWeight: 600 }}>
          {product.name}
        </Title>

        <div className="flex items-center justify-between my-2">
          <Title level={2} style={{ margin: 0, color: "#27548A", fontWeight: 700 }}>
            {product.quota}
          </Title>
          <Text strong style={{ fontSize: "1rem", color: "#555" }}>
            {product.duration}
          </Text>
        </div>

        <Divider style={{ margin: "1rem 0" }} />

        <Text strong style={{ fontSize: "1.25rem", color: "#27548A" }}>
          Rp {product.price.toLocaleString()}
        </Text>

        <Button
          type="primary"
          block
          onClick={() => setIsModalVisible(true)}
          className="mt-4 font-semibold bg-[#27548A] hover:bg-[#1e4372] transition duration-300"
          style={{ borderRadius: 10, height: 40 }}
        >
          Beli
        </Button>
      </Card>

      {/* Modal Konfirmasi */}
      <Modal
        title="Konfirmasi Pembelian"
        open={isModalVisible}
        onOk={handleBuy}
        onCancel={() => setIsModalVisible(false)}
        okText="Ya, Beli"
        cancelText="Batal"
      >
        <p>Apakah kamu yakin ingin membeli paket <strong>{product.name}</strong> seharga <strong>Rp {product.price.toLocaleString()}</strong>?</p>
      </Modal>
    </>
  )
}

export default ProductCard