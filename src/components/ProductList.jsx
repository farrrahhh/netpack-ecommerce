"use client"

import { useState } from "react"
import { Row, Col, Typography, Pagination } from "antd"
import ProductCard from "./ProductCard"

const { Title, Paragraph } = Typography

const ProductList = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 8 // 2 rows of 4 columns

  const startIndex = (currentPage - 1) * pageSize
  const endIndex = startIndex + pageSize
  const currentProducts = products.slice(startIndex, endIndex)

  return (
    <div className="py-16 bg-gray-50 px-4 md:px-20 font-poppins">
      <div className="max-w-7xl mx-auto">

        <Row gutter={[24, 24]}>
          {currentProducts.map((product) => (
            <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>

        <div className="mt-10 flex justify-center">
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={products.length}
            onChange={(page) => setCurrentPage(page)}
            showSizeChanger={false}
          />
        </div>
      </div>
    </div>
  )
}

export default ProductList