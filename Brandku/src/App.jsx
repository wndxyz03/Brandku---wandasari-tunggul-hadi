import { useState } from 'react';
import './App.css';

function App() {
  // State untuk menghitung jumlah klik
  const [jumlahKlik, setJumlahKlik] = useState(0);
  
  // State untuk menampilkan/menyembunyikan tombol utama
  const [tampilTombol, setTampilTombol] = useState(true);
  
  // State untuk teks notifikasi yang muncul sekilas
  const [popText, setPopText] = useState("");

  const handleKlikTombol = () => {
    const totalKlikBaru = jumlahKlik + 1;
    setJumlahKlik(totalKlikBaru);

    if (totalKlikBaru === 1) {
      // Klik pertama: Munculkan teks "clicked"
      setPopText("clicked");
      
      // Sembunyikan teks setelah 1.2 detik
      setTimeout(() => {
        setPopText("");
      }, 1200);
      
    } else if (totalKlikBaru === 2) {
      // Klik kedua: Ganti teks menjadi "sudah berhasil diklik"
      setPopText("sudah berhasil diklik");
      
      // Sembunyikan teks DAN hilangkan tombol bersamaan setelah 1.5 detik
      setTimeout(() => {
        setPopText("");
        setTampilTombol(false);
      }, 1500);
    }
  };

  return (
    <>
      {/* Navbar */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              B
            </div>
            <span className="text-2xl font-bold text-blue-600">
              BrandKu
            </span>
          </div>

          {/* Menu */}
          <nav className="flex gap-8 text-gray-700">
            <a href="#" className="hover:text-blue-600 transition">Beranda</a>
            <a href="#" className="hover:text-blue-600 transition">Fitur</a>
            <a href="#" className="hover:text-blue-600 transition">Harga</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-slate-100 py-28">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Solusi Terbaik untuk Bisnismu
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Platform all-in-one untuk manajemen, pemasaran, dan pertumbuhan bisnis kecil.
          </p>
          
          {/* AREA TOMBOL INTERAKTIF */}
          <div className="flex flex-col items-center justify-center gap-4 min-h-[120px]">
            
            {/* Tombol Utama */}
            {tampilTombol && (
              <button 
                onClick={handleKlikTombol}
                // Mencegah klik berlebih saat teks kedua sedang muncul sekilas
                disabled={jumlahKlik === 2}
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-medium transition duration-300 active:scale-95 disabled:opacity-50"
              >
                Mulai Sekarang
              </button>
            )}

            {/* Pop Text Dinamis yang muncul sekilas */}
            {popText && (
              <span className="bg-gray-800 text-white text-sm px-4 py-2 rounded-lg font-medium shadow-md animate-fade-in-out">
                {popText}
              </span>
            )}
            
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">
            Mengapa BrandKu?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="font-bold text-xl mb-3">Mudah Digunakan</h3>
              <p className="text-gray-600">Tidak perlu keahlian teknis. Setup dalam 5 menit.</p>
            </div>

            {/* Card 2 */}
            <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="font-bold text-xl mb-3">Serba Otomatis</h3>
              <p className="text-gray-600">Otomatiskan tugas berulang dan fokus pada hal yang penting.</p>
            </div>

            {/* Card 3 */}
            <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="font-bold text-xl mb-3">Laporan Real-time</h3>
              <p className="text-gray-600">Pantau performa bisnis kapan saja dan di mana saja.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8">
        <p className="text-center text-gray-500 text-sm">
          © 2026 BrandKu. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}

export default App;
