const Hero = ({ onButtonClick, isVisible, notificationText }) => {
  return (
    <section className="relative bg-gradient-to-b from-blue-100 via-blue-50/40 to-white py-24 px-4 text-center overflow-hidden">
      {/* Efek Lingkaran Cahaya Biru Estetik di Latar Belakang */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-300/30 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-3xl mx-auto flex flex-col items-center relative z-10">
        {/* Lencana Kecil di Atas */}
        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full mb-6 border border-blue-200/50 shadow-sm">
          Satu Platform, Banyak Solusi
        </span>

        {/* Judul Utama dengan Gradasi Kata Bisnismu */}
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-gray-900 leading-tight">
          Solusi Terbaik untuk{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Bisnismu
          </span>
        </h1>
        
        {/* Sub-judul Deskripsi */}
        <p className="text-base md:text-lg text-gray-600 mb-10 max-w-xl mx-auto leading-relaxed">
          Platform all-in-one untuk manajemen, pemasaran, dan pertumbuhan bisnis kecil secara otomatis.
        </p>

        {/* Wadah tombol dan notifikasi agar posisi stabil */}
        <div className="h-28 flex flex-col justify-end items-center gap-4">
          {/* Pop Notif Kecil di Tengah */}
          {notificationText && (
            <div className="bg-gray-900 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-xl border border-gray-800 animate-bounce tracking-wide flex items-center gap-1.5">
              <span>🔔</span> {notificationText}
            </div>
          )}
          
          {/* Tombol Mulai Gratis Interaktif */}
          {isVisible && (
            <button
              onClick={onButtonClick}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-9 py-3.5 rounded-full shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Mulai Gratis
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
