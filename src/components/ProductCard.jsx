import { Card, Button, Typography, Divider, Tag } from "antd"

const { Title, Text } = Typography

const ProductCard = ({ product }) => {
  return (
    <Card
      hoverable
      style={{
        borderRadius: 12,
        boxShadow: "0 4px 10px rgba(0,0,0,0.06)",
        backgroundColor: "#f9fbff",
        padding: "1rem",
      }}
      bodyStyle={{ padding: "1rem" }}
    >
      {/* Provider Ribbon */}
      <Tag color="#27548A" style={{ position: "absolute", top: 12, left: 12 }}>
        <span className="text-white font-medium">{product.provider}</span>
      </Tag>

      {/* Nama Paket */}
      <Title level={5} style={{ marginTop: 24, color: "#000" }}>
        {product.name}
      </Title>

      {/* Kuota + Durasi */}
      <div className="flex items-center justify-between my-2">
        <Title level={2} style={{ margin: 0, color: "#27548A" }}>
          {product.quota}
        </Title>
        <Text strong style={{ fontSize: "1rem", color: "#333" }}>
          {product.duration}
        </Text>
      </div>

      <Divider style={{ margin: "1rem 0" }} />

      {/* Harga */}
      <Text strong style={{ fontSize: "1.25rem", color: "#27548A" }}>
        Rp {product.price.toLocaleString()}
      </Text>

      {/* Button */}
      <Button
        type="primary"
        block
        className="mt-3 bg-[#27548A] hover:bg-[#1e4372]"
        style={{
          borderRadius: 8,
        }}
      >
        Beli
      </Button>
    </Card>
  )
}

export default ProductCard