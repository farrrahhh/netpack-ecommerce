import { Layout } from "antd"

const { Footer } = Layout

const AppFooter = () => {
  return (
    <Footer className="bg-[#000] text-white font-poppins px-6 md:px-20 pb-10">
      <div className="border-t border-white border-opacity-20text-center text-sm text-white text-opacity-70 pt-6">
        © 2025 Netpack. All rights reserved.
      </div>
    </Footer>
  )
}

export default AppFooter