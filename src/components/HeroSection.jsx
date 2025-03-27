import { Star, Clock, Leaf } from "lucide-react"

const HeroSection = () => {
  return (
    <div className="bg-[#27548A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Koneksi cepat, Hidup makin sat set...
            </h1>
            <p className="mt-4 text-white text-opacity-90 text-lg">
              Beli paket data dengan mudah dan cepat. Tanpa ribet, langsung aktif!
            </p>
            <button className="mt-8 px-6 py-3 bg-white text-[#27548A] font-medium rounded-full shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              Beli sekarang!
            </button>
          </div>

          <div className="flex justify-center md:justify-end relative">
            {/* 3D Character Illustration */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <svg className="w-full h-full" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="120" r="60" fill="#F5D0C5" /> {/* Head */}
                <rect x="110" y="180" width="80" height="120" rx="20" fill="#4B7CB8" /> {/* Body */}
                <rect x="90" y="180" width="20" height="80" rx="10" fill="#F5D0C5" /> {/* Left arm */}
                <rect x="190" y="180" width="20" height="60" rx="10" fill="#F5D0C5" transform="rotate(-30 190 180)" />{" "}
                {/* Right arm - thumbs up */}
                <rect x="205" y="150" width="20" height="40" rx="10" fill="#F5D0C5" transform="rotate(60 205 150)" />{" "}
                {/* Thumb */}
                <circle cx="135" cy="110" r="5" fill="#333333" /> {/* Left eye */}
                <circle cx="165" cy="110" r="5" fill="#333333" /> {/* Right eye */}
                <path d="M135 140 Q150 155 165 140" stroke="#333333" strokeWidth="3" /> {/* Smile */}
              </svg>

              {/* Decorative floating elements */}
              <div className="absolute top-0 right-0 animate-pulse">
                <Star className="h-8 w-8 text-yellow-300" />
              </div>
              <div className="absolute bottom-10 left-0 animate-bounce">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <div className="absolute top-20 left-0 animate-pulse">
                <Leaf className="h-8 w-8 text-green-300" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 opacity-10">
        <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" fill="white" />
        </svg>
      </div>
      <div className="absolute bottom-10 left-10 opacity-10">
        <svg width="150" height="150" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
          <rect x="25" y="25" width="100" height="100" rx="20" fill="white" />
        </svg>
      </div>
    </div>
  )
}

export default HeroSection

