const Header = () => (
<header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between p-4">
        <h1 className="text-blue-600 font-bold text-xl">
          BrandKu
        </h1>
        <nav className="space-x-6">
          <a href="#" className="text-gray-700 font-semibold hover:text-blue-500">
            Beranda
          </a>
          <a href="#" className="text-gray-700 font-semibold hover:text-blue-500">
            Fitur
          </a>
          <a href="#" className="text-gray-700 font-semibold hover:text-blue-500">
            Harga
          </a>
        </nav>
      </div>
    </header>

)

export default Header;