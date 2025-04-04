import person2 from "@assets/person2.png"
import clock from "@assets/clock.png"
import workingBag from "@assets/working-bag.png"
import pot from "@assets/pot.png"
import pattern1 from "@assets/pattern-1.png"
import pattern2 from "@assets/pattern-2.png"
import star from "@assets/star.png"

const HeroSection = () => {
  return (
    <section className="relative bg-[#27548A] overflow-hidden py-16 sm:py-24">
  <div className="max-w-full md:max-w-7xl mx-auto px-4 sm:px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    {/* Left Side: Text */}
    <div className="text-white z-10 relative">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight animate-fade-in">
        Koneksi cepat, <br className="hidden md:block" />
        Hidup makin <span className="text-white/90">sat set...</span>
      </h1>
      <p className="mt-4 text-white text-opacity-90 text-base sm:text-lg max-w-md leading-relaxed">
        Kami hadir untuk memastikan kamu selalu terkoneksi dengan cepat, tanpa ribet. Karena hidup <strong>butuh sat set</strong>, bukan <strong>sinyal lemot...</strong>
      </p>
      <button className="mt-6 px-6 py-3 rounded-full bg-white text-[#27548A] font-semibold shadow hover:shadow-lg transition duration-300 hover:-translate-y-1">
        Beli sekarang!
      </button>
      <img
        src={star}
        alt="Star"
        className="absolute top-[-40px] left-[-160px] w-26 sm:w-34 md:w-38 z-0 animate-bounce-slow"
      />
    </div>

    {/* Right Side: Illustration */}
    <div className="relative w-full flex justify-center md:justify-end">
    <div className="relative w-[320px] sm:w-[420px] md:w-[500px] h-[320px] sm:h-[420px] md:h-[500px]">
        <img
          src={person2}
          alt="3D Character"
          className="absolute top-24 right-[-20px] w-full h-full object-contain z-10 scale-105 animate-fade-in"
        />
        <img
          src={clock}
          alt="Clock"
          className="absolute top-[-40px] right-[-50px] w-22 sm:w-29 md:w-30 z-0 animate-float"
        />
        <img
          src={workingBag}
          alt="Bag"
          className="absolute top-[5%] left-[-40px] w-22 sm:w-29 md:w-30 z-0 animate-float-delay"
        />
        <img
          src={pot}
          alt="Pot"
          className="absolute bottom-[-30px] left-[-60px] w-22 sm:w-29 md:w-30 z-0 animate-bounce-slow"
        />
      </div>
    </div>
  </div>

  {/* Background Patterns */}
  <img src={pattern1} alt="Pattern 1" className="absolute top-10 right-10 w-24 opacity-10" />
  <img src={pattern2} alt="Pattern 2" className="absolute bottom-10 left-10 w-28 opacity-10" />
</section>
  )
}

export default HeroSection