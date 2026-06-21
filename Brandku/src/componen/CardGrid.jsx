import Card from "./Card";

const CardGrid = ({ features }) => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* 🌟 UTAMA: Sinar Cahaya Biru Besar (Glowing Orb) di Tengah Belakang Kartu */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-blue-400/20 to-indigo-400/20 blur-[130px] rounded-full pointer-events-none z-0"></div>
      
      {/* Sinar Cahaya Biru Tambahan di Pojok Kiri Atas */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-300/10 blur-[100px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Judul Utama */}
        <h2 className="text-3xl font-black text-center mb-16 text-gray-900 tracking-tight">
          Mengapa <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">BrandKu?</span>
        </h2>
        
        {/* Grid System pembungkus kartu */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features && features.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardGrid;
