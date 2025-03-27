const HeroSection = () => {
    return (
      <div className="bg-[#27548A] relative overflow-hidden py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Side */}
            <div className="relative z-10">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
                Koneksi cepat, Hidup makin sat set...
              </h1>
              <p className="mt-4 text-white text-opacity-90 text-base max-w-md">
                Kami hadir untuk memastikan kamu selalu terkoneksi dengan cepat, tanpa ribet.
                Karena hidup <strong>butuh sat set</strong>, bukan <strong>sinyal lemot...</strong>
              </p>
              <button className="mt-8 px-6 py-3 bg-white text-[#27548A] font-semibold rounded-full shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                Beli sekarang!
              </button>
            </div>
  
            {/* Illustration Side */}
            <div className="relative flex justify-center md:justify-end h-full">
            <div className="relative w-[340px] h-[340px] sm:w-[400px] sm:h-[400px]">
                {/* Character image moved to bottom */}
                <img
                src="src/assets/person2.png"
                alt="3D Character"
                className="absolute top-20 right-0 w-full h-full object-contain z-10 scale-110"
                />

               {/* Floating Elements (dibesarkan & ditata ulang) */}
                <img
                src="src/assets/clock.png"
                alt="Clock"
                className="absolute top-[-40px] right-[-60px] w-30 sm:w-42 z-0"
                />
                <img
                src="src/assets/working-bag.png"
                alt="Bag"
                className="absolute top-[5%] left-[-50px] w-30 sm:w-36 z-0"
                />
                <img
                src="src/assets/pot.png"
                alt="Pot"
                className="absolute bottom-[-30px] left-[-80px] w-36 sm:w-44 z-0"
                />
            </div>
            </div>
          </div>
        </div>
  
        {/* Background Patterns */}
        <div className="absolute top-10 right-10 opacity-10">
          <img src="src/assets/pattern-1.png" alt="Pattern 1" />
        </div>
        <div className="absolute bottom-10 left-10 opacity-10">
          <img src="src/assets/pattern-2.png" alt="Pattern 2" />
        </div>
      </div>
    )
  }
  
  export default HeroSection