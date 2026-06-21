import { useState } from "react";
import Header from "./componen/header";
import Hero from "./componen/Hero.jsx";
import CardGrid from "./componen/CardGrid.jsx";
import featuresData from "./data/feature.js";

const App = () => {
  const [feature] = useState(featuresData);
  const [clickCount, setClickCount] = useState(0);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [notification, setNotification] = useState("");

  const handleHeroClick = () => {
    const nextClickCount = clickCount + 1;
    setClickCount(nextClickCount);

    if (nextClickCount === 1) {
      setNotification("CLICKED");
      setTimeout(() => setNotification(""), 2500); // Hilang dalam 2.5 detik
    } else if (nextClickCount === 2) {
      setNotification("BERHASIL DI KLIK");
      setIsButtonVisible(false);
      setTimeout(() => setNotification(""), 2500);
    }
  };

  return (
    <>
      <Header />
      
      {/* Kirim teks notifikasi ke komponen Hero lewat props */}
      <Hero 
        onButtonClick={handleHeroClick} 
        isVisible={isButtonVisible} 
        notificationText={notification}
      />
      
      <CardGrid features={feature} />
      
      <footer className="bg-gray-100 text-center p-4 mt-8">
        <p className="text-gray-600">&copy; 2026 BrandKu. All rights reserved.</p>
      </footer>
    </>
  );
};

export default App;
