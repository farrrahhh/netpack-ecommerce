"use client"

import { useState, useEffect } from "react"
import { Row, Col, Typography, Pagination, Empty } from "antd"
import ProductCard from "./ProductCard"

const { Title } = Typography

const ProductList = ({
  products,
  onSuccessBuy,
  selectedProvider = "Semua Provider",
  selectedType = "Semua Jenis",
  phoneNumber = "",
}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 8

  // Deteksi jenis kuota berdasarkan nama produk
  const detectQuotaType = (name = "") => {
    const lower = name.toLowerCase()
    if (lower.includes("internet")) return "Internet"
    if (lower.includes("telepon") || lower.includes("nelpon")) return "Telepon"
    if (lower.includes("sms")) return "SMS"
    if (lower.includes("combo")) return "Combo"
    if (lower.includes("streaming") || lower.includes("tiktok")) return "Entertainment"
    return "Lainnya"
  }

  // Deteksi provider berdasarkan prefix nomor
  const detectProviderFromPhone = (phone = "") => {
    const cleaned = phone.replace(/\D/g, "") // hanya angka
    if (cleaned.startsWith("0811") || cleaned.startsWith("0812") || cleaned.startsWith("0813") || cleaned.startsWith("0821") || cleaned.startsWith("0822") || cleaned.startsWith("0823")) return "Telkomsel"
    if (cleaned.startsWith("0817") || cleaned.startsWith("0818") || cleaned.startsWith("0819") || cleaned.startsWith("0859") || cleaned.startsWith("0877") || cleaned.startsWith("0878")) return "XL"
    if (cleaned.startsWith("0856") || cleaned.startsWith("0857") || cleaned.startsWith("0858")) return "Indosat"
    if (cleaned.startsWith("0895") || cleaned.startsWith("0896") || cleaned.startsWith("0897") || cleaned.startsWith("0898") || cleaned.startsWith("0899")) return "Tri"
    if (cleaned.startsWith("0881") || cleaned.startsWith("0882") || cleaned.startsWith("0883") || cleaned.startsWith("0884") || cleaned.startsWith("0885") || cleaned.startsWith("0886") || cleaned.startsWith("0887") || cleaned.startsWith("0888") || cleaned.startsWith("0889")) return "Smartfren"
    return ""
  }

  const phoneProvider = phoneNumber ? detectProviderFromPhone(phoneNumber) : ""

  // Filter produk
  const filteredProducts = products.filter((product) => {
    const matchProvider =
      selectedProvider === "Semua Provider"
        ? !phoneProvider || product.provider === phoneProvider
        : product.provider === selectedProvider

    const matchType =
      selectedType === "Semua Jenis" ||
      detectQuotaType(product.name) === selectedType

    return matchProvider && matchType
  })

  // Pagination
  const startIndex = (currentPage - 1) * pageSize
  const endIndex = startIndex + pageSize
  const currentProducts = filteredProducts.slice(startIndex, endIndex)

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedProvider, selectedType, phoneNumber])

  return (
    <div className="py-16 bg-gray-50 px-4 md:px-20 font-poppins">
      <div className="max-w-7xl mx-auto">
        {filteredProducts.length === 0 ? (
          <Empty description="Tidak ada paket yang sesuai" className="py-20" />
        ) : (
          <>
            <Row gutter={[24, 24]}>
              {currentProducts.map((product) => (
                <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
                  <ProductCard product={product} onSuccessBuy={onSuccessBuy} />
                </Col>
              ))}
            </Row>

            {filteredProducts.length > pageSize && (
              <div className="mt-10 flex justify-center">
                <Pagination
                  current={currentPage}
                  pageSize={pageSize}
                  total={filteredProducts.length}
                  onChange={(page) => setCurrentPage(page)}
                  showSizeChanger={false}
                  showQuickJumper
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default ProductList