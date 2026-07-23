import { motion, AnimatePresence } from "motion/react";
import { 
  MapPin, 
  Clock, 
  TrainFront, 
  Waves, 
  Utensils, 
  Flame, 
  ChevronDown, 
  Share2,
  Download
} from "lucide-react";
import React, { useState, useEffect } from "react";

// Importing generated images
// @ts-expect-error - generated asset
import coverImg from "./assets/images/pingxi_train_magazine_cover_1784814494806.jpg";
// @ts-expect-error - generated asset
import waterfallImg from "./assets/images/shifen_waterfall_atmospheric_1784814505219.jpg";
// @ts-expect-error - generated asset
import lanternsImg from "./assets/images/sky_lanterns_pingxi_dusk_1784814517756.jpg";
// @ts-expect-error - generated asset
import shifenStreetImg from "./assets/images/shifen_old_street_railway_1784814977953.jpg";
// @ts-expect-error - generated asset
import yakinikuImg from "./assets/images/premium_yakiniku_dinner_1784814991016.jpg";

const IMAGES = {
  cover: coverImg,
  waterfall: waterfallImg,
  lanterns: lanternsImg,
  shifenStreet: shifenStreetImg,
  yakiniku: yakinikuImg,
};

interface ItineraryItem {
  time: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  location?: string;
  image?: string;
}

const ITINERARY: ItineraryItem[] = [
  {
    time: "10:05 - 10:44",
    title: "台北車站 → 瑞芳車站",
    description: "搭乘 4026 次區間快，快速直達瑞芳，開啟期待已久的鐵道之旅。",
    icon: <TrainFront className="w-5 h-5" />,
    location: "台北車站",
  },
  {
    time: "10:55 - 11:22",
    title: "瑞芳車站 → 十分車站",
    description: "在瑞芳站內直接轉乘 4818 次平溪線列車（可直接刷悠遊卡），於 11:22 準時抵達十分。",
    icon: <MapPin className="w-5 h-5" />,
    location: "瑞芳車站",
  },
  {
    time: "11:22 - 13:00",
    title: "十分車站 → 看瀑布",
    description: "下車後直接出發，沿著綠意盎然的步道前往十分瀑布公園，欣賞壯麗瀑布與吊橋美景。",
    icon: <Waves className="w-5 h-5" />,
    location: "十分瀑布",
    image: IMAGES.waterfall,
  },
  {
    time: "13:00 - 14:45",
    title: "十分老街逛逛 & 午餐",
    description: "散步回到十分老街，逛逛鐵道兩旁的特色店家，品嚐在地小吃，感受火車穿梭街頭的奇觀。",
    icon: <Utensils className="w-5 h-5" />,
    location: "十分老街",
    image: IMAGES.shifenStreet,
  },
  {
    time: "14:55 - 15:10",
    title: "十分站 → 平溪站",
    description: "搭乘下午的平溪線火車前往平溪站，在車窗邊享受移動的風景畫。",
    icon: <TrainFront className="w-5 h-5" />,
    location: "平溪站",
  },
  {
    time: "15:10 - 17:00",
    title: "平溪老街 & 體驗天燈",
    description: "在懷舊山城漫步、享用下午茶，尋找古早味郵筒與火車過屋頂奇景。若想祈求心願，這裡是放天燈的最佳時刻。",
    icon: <Flame className="w-5 h-5" />,
    location: "平溪老街",
    image: IMAGES.lanterns,
  },
  {
    time: "17:07 左右",
    title: "平溪站 → 台北車站",
    description: "搭乘平溪線返回瑞芳站，隨後轉乘北上火車，帶著滿滿的回憶踏上歸途。",
    icon: <TrainFront className="w-5 h-5" />,
    location: "平溪站",
  },
  {
    time: "19:00",
    title: "平安回到台北車站",
    description: "結束充實的一天，前往「双円•板前 HYOTAN 葫蘆燒肉」享用精緻的板前燒肉。地址：台北市大安區敦化南路一段160巷56號。",
    icon: <Utensils className="w-5 h-5" />,
    location: "双円•板前 HYOTAN",
    image: IMAGES.yakiniku,
  },
];

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: '平溪線鐵道旅行雜誌',
        text: '這是我這週末想去的平溪行程，分享給你！',
        url: window.location.href,
      });
    }
  };

  return (
    <div className="magazine-container font-sans bg-morandi-light selection:bg-morandi-green/20">
      {/* Fixed Navigation/Header */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="bg-white/90 backdrop-blur-md px-4 py-1 border border-morandi-green/20 rounded-full pointer-events-auto shadow-sm">
          <span className="text-xs uppercase tracking-widest text-morandi-deep font-bold italic">Summer Issue / 2026</span>
        </div>
        <div className="flex gap-2 pointer-events-auto">
          <button onClick={handleShare} className="p-2 bg-white/90 backdrop-blur-sm rounded-full text-morandi-dark hover:text-morandi-green transition-colors border border-morandi-green/10">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          style={{ y: scrollY * 0.5 }}
        >
          <img 
            src={IMAGES.cover} 
            alt="Pingxi Train" 
            className="w-full h-full object-cover grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-morandi-light" />
        </motion.div>

        <div className="absolute inset-0 flex flex-col justify-end p-8 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="bg-white/60 backdrop-blur-xl p-8 rounded-tr-[40px] border-t border-r border-white/40 max-w-[90%] shadow-2xl shadow-morandi-deep/5"
          >
            <h2 className="text-morandi-deep text-lg tracking-[0.2em] font-serif mb-2 uppercase opacity-80">Taiwan Railway</h2>
            <h1 className="text-6xl font-serif text-morandi-deep leading-[1.1] mb-6 drop-shadow-sm">
              平溪線<br />
              <span className="italic text-morandi-green drop-shadow-none">鐵道旅行</span>
            </h1>
            <p className="text-morandi-dark max-w-xs leading-relaxed opacity-90 font-serif italic text-lg border-l-2 border-morandi-green pl-4">
              漫步在霧氣繚繞的山城，聽著遠處傳來的火車鳴笛聲，感受時光慢下來的溫柔。
            </p>
          </motion.div>
          
          <motion.div 
            className="mt-12 flex items-center gap-4 text-morandi-green"
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <span className="text-xs uppercase tracking-widest font-bold">Scroll to Explore</span>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="p-10 bg-white relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-morandi-green/5 -mr-16 -mt-16 rounded-full" />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <div className="w-12 h-[1px] bg-morandi-green mb-8" />
          <p className="text-2xl font-serif text-morandi-deep leading-relaxed mb-6">
            平溪線不僅是一條鐵道，更是一條穿梭在歷史與自然間的感官之路。從瀑布的壯麗到老街的煙火氣，每一站都值得細細品味。
          </p>
          <div className="flex items-center gap-4 text-sm text-morandi-dark italic font-serif">
            <span>By Wanderer Journal</span>
            <span className="w-8 h-[1px] bg-morandi-green/20" />
            <span>Jul 25, 2026</span>
          </div>
        </motion.div>
      </section>

      {/* Itinerary Timeline */}
      <section className="bg-morandi-light/30 pb-24">
        {ITINERARY.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative px-8 pt-12"
          >
            {/* Image Breakout */}
            {item.image && (
              <div className="mb-8 -mx-8">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-80 object-cover shadow-lg"
                />
              </div>
            )}

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-morandi-green shadow-sm border border-morandi-green/10">
                  {item.icon}
                </div>
                {index !== ITINERARY.length - 1 && (
                  <div className="w-[1px] h-full bg-gradient-to-b from-morandi-green/30 to-transparent my-2" />
                )}
              </div>

              <div className="flex-1 pb-12">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-3 h-3 text-morandi-green" />
                  <span className="text-xs font-bold text-morandi-dark tracking-widest uppercase">{item.time}</span>
                </div>
                <h3 className="text-2xl font-serif text-morandi-deep mb-3">{item.title}</h3>
                <p className="text-morandi-dark/80 leading-relaxed text-sm mb-4">
                  {item.description}
                </p>
                {item.location && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-morandi-green/10 rounded-full text-[10px] font-bold text-morandi-green uppercase tracking-wider">
                    <MapPin className="w-2.5 h-2.5" />
                    {item.location}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Footer */}
      <footer className="p-12 bg-morandi-deep text-white text-center">
        <h2 className="font-serif text-3xl mb-4 italic opacity-90 underline decoration-morandi-green decoration-1 underline-offset-8">Pingxi Express</h2>
        <p className="text-morandi-light/60 text-xs tracking-[0.3em] uppercase mb-8">Elevated Travel Itinerary</p>
        
        <div className="flex justify-center gap-6 mb-12">
          <button className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
            <div className="p-4 border border-white/20 rounded-full">
              <Download className="w-5 h-5" />
            </div>
            <span className="text-[10px] uppercase tracking-widest">Offline Save</span>
          </button>
          <button onClick={handleShare} className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
            <div className="p-4 border border-white/20 rounded-full">
              <Share2 className="w-5 h-5" />
            </div>
            <span className="text-[10px] uppercase tracking-widest">Share Guide</span>
          </button>
        </div>

        <p className="text-[10px] opacity-40 leading-relaxed max-w-[200px] mx-auto uppercase tracking-tighter">
          Designed for the curious wanderer. Optimized for PWA experience. All rights reserved 2026.
        </p>
      </footer>

      {/* Mobile PWA Install Hint (Simulated) */}
      <AnimatePresence>
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-sm"
        >
          <div className="glass-card p-4 rounded-2xl flex items-center justify-between shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-morandi-green rounded-xl flex items-center justify-center text-white shadow-inner">
                <TrainFront className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] text-morandi-green font-bold uppercase tracking-wider">Add to Home Screen</p>
                <p className="text-sm font-serif text-morandi-deep">開啟離線閱讀模式</p>
              </div>
            </div>
            <button className="bg-morandi-deep text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-morandi-green transition-colors">
              Install
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
