import { Card, Button, Typography, Divider, Tag } from "antd"

const { Title, Text } = Typography

const ProductCard = ({ product }) => {
  return (
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
      {/* Provider Ribbon */}
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

      {/* Nama Paket */}
      <Title level={5} style={{ marginTop: 40, color: "#111", fontWeight: 600 }}>
        {product.name}
      </Title>

      {/* Kuota + Durasi */}
      <div className="flex items-center justify-between my-2">
        <Title level={2} style={{ margin: 0, color: "#27548A", fontWeight: 700 }}>
          {product.quota}
        </Title>
        <Text strong style={{ fontSize: "1rem", color: "#555" }}>
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
        className="mt-4 font-semibold bg-[#27548A] hover:bg-[#1e4372] transition duration-300"
        style={{
          borderRadius: 10,
          height: 40,
        }}
      >
        Beli
      </Button>
    </Card>
  )
}

export default ProductCard