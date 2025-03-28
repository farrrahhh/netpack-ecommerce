import { Layout } from "antd"

const { Footer } = Layout

const AppFooter = () => {
  return (
    <Footer className="bg-[#f3f6f8] text-[#333] font-poppins px-6 md:px-20 pb-10">
      <div className="border-t border-black border-opacity-20text-center text-sm text-[#333] text-opacity-70 pt-6 justify-center flex ">  
        © 2025 Netpack. All rights reserved.
      </div>
    </Footer>
  )
}

export default AppFooter