const Card = ({ data }) => {
  // Warna latar belakang ikon pastel
  const getIconBgColor = (icon) => {
    if (icon === "⚡" || icon?.includes("Mudah")) return "bg-amber-50 text-amber-500";
    if (icon === "🔒" || icon?.includes("Aman")) return "bg-blue-50 text-blue-500";
    if (icon === "🚀" || icon?.includes("Cepat")) return "bg-rose-50 text-rose-500";
    return "bg-blue-50 text-blue-600";
  };

  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col items-start gap-5 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.1)] hover:border-blue-200 hover:-translate-y-1.5 active:translate-y-0 transition-all duration-300 group cursor-pointer">
      {/* Wadah Ikon */}
      <div className={`text-2xl p-3.5 rounded-xl transition-transform duration-300 group-hover:scale-110 ${getIconBgColor(data.icon || data.emoji)}`}>
        {data.icon || data.emoji || "✨"}
      </div>
      
      <div className="w-full">
        {/* Judul Kartu */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
          {data.title || data.name}
        </h3>
        
        {/* Deskripsi Kartu */}
        <p className="text-sm text-gray-500 leading-relaxed font-medium">
          {data.description || data.desc || "Deskripsi fitur belum ditambahkan."}
        </p>
      </div>
    </div>
  );
};

export default Card;
