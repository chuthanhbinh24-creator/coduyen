import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Gift, Heart, X } from 'lucide-react';

// --- Flower Component ---
const Flower = () => {
  return (
    <div className="flowers">
      <div className="flower flower--1">
        <div className="flower__leafs flower__leafs--1">
          <div className="flower__leaf flower__leaf--1"></div>
          <div className="flower__leaf flower__leaf--2"></div>
          <div className="flower__leaf flower__leaf--3"></div>
          <div className="flower__leaf flower__leaf--4"></div>
          <div className="flower__white-circle"></div>
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`flower__light flower__light--${i + 1}`}></div>
          ))}
        </div>
        <div className="flower__line">
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`flower__line__leaf flower__line__leaf--${i + 1}`}></div>
          ))}
        </div>
      </div>

      <div className="flower flower--2">
        <div className="flower__leafs flower__leafs--2">
          <div className="flower__leaf flower__leaf--1"></div>
          <div className="flower__leaf flower__leaf--2"></div>
          <div className="flower__leaf flower__leaf--3"></div>
          <div className="flower__leaf flower__leaf--4"></div>
          <div className="flower__white-circle"></div>
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`flower__light flower__light--${i + 1}`}></div>
          ))}
        </div>
        <div className="flower__line">
          {[...Array(4)].map((_, i) => (
            <div key={i} className={`flower__line__leaf flower__line__leaf--${i + 1}`}></div>
          ))}
        </div>
      </div>

      <div className="flower flower--3">
        <div className="flower__leafs flower__leafs--3">
          <div className="flower__leaf flower__leaf--1"></div>
          <div className="flower__leaf flower__leaf--2"></div>
          <div className="flower__leaf flower__leaf--3"></div>
          <div className="flower__leaf flower__leaf--4"></div>
          <div className="flower__white-circle"></div>
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`flower__light flower__light--${i + 1}`}></div>
          ))}
        </div>
        <div className="flower__line">
          {[...Array(4)].map((_, i) => (
            <div key={i} className={`flower__line__leaf flower__line__leaf--${i + 1}`}></div>
          ))}
        </div>
      </div>

      <div className="flower flower--4">
        <div className="flower__leafs flower__leafs--3">
          <div className="flower__leaf flower__leaf--1"></div>
          <div className="flower__leaf flower__leaf--2"></div>
          <div className="flower__leaf flower__leaf--3"></div>
          <div className="flower__leaf flower__leaf--4"></div>
          <div className="flower__white-circle"></div>
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`flower__light flower__light--${i + 1}`}></div>
          ))}
        </div>
        <div className="flower__line">
          {[...Array(4)].map((_, i) => (
            <div key={i} className={`flower__line__leaf flower__line__leaf--${i + 1}`}></div>
          ))}
        </div>
      </div>

      <div className="grow-ans" style={{ '--d': '1.2s' } as React.CSSProperties}>
        <div className="flower__g-long">
          <div className="flower__g-long__top"></div>
          <div className="flower__g-long__bottom"></div>
        </div>
      </div>

      <div className="growing-grass">
        <div className="flower__grass flower__grass--1">
          <div className="flower__grass--top"></div>
          <div className="flower__grass--bottom"></div>
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`flower__grass__leaf flower__grass__leaf--${i + 1}`}></div>
          ))}
          <div className="flower__grass__overlay"></div>
        </div>
      </div>

      <div className="growing-grass">
        <div className="flower__grass flower__grass--2">
          <div className="flower__grass--top"></div>
          <div className="flower__grass--bottom"></div>
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`flower__grass__leaf flower__grass__leaf--${i + 1}`}></div>
          ))}
          <div className="flower__grass__overlay"></div>
        </div>
      </div>

      <div className="grow-ans" style={{ '--d': '2.4s' } as React.CSSProperties}>
        <div className="flower__g-right flower__g-right--1">
          <div className="leaf"></div>
        </div>
      </div>

      <div className="grow-ans" style={{ '--d': '2.8s' } as React.CSSProperties}>
        <div className="flower__g-right flower__g-right--2">
          <div className="leaf"></div>
        </div>
      </div>

      <div className="grow-ans" style={{ '--d': '2.8s' } as React.CSSProperties}>
        <div className="flower__g-front">
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--${i + 1}`}>
              <div className="flower__g-front__leaf"></div>
            </div>
          ))}
          <div className="flower__g-front__line"></div>
        </div>
      </div>

      <div className="grow-ans" style={{ '--d': '3.2s' } as React.CSSProperties}>
        <div className="flower__g-fr">
          <div className="leaf"></div>
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`flower__g-fr__leaf flower__g-fr__leaf--${i + 1}`}></div>
          ))}
        </div>
      </div>

      {[...Array(8)].map((_, i) => (
        <div key={i} className={`long-g long-g--${i}`}>
          <div className="grow-ans" style={{ '--d': `${3 + i * 0.2}s` } as React.CSSProperties}>
            <div className="leaf leaf--0"></div>
          </div>
          <div className="grow-ans" style={{ '--d': `${2.2 + i * 0.2}s` } as React.CSSProperties}>
            <div className="leaf leaf--1"></div>
          </div>
          <div className="grow-ans" style={{ '--d': `${3.4 + i * 0.2}s` } as React.CSSProperties}>
            <div className="leaf leaf--2"></div>
          </div>
          <div className="grow-ans" style={{ '--d': `${3.6 + i * 0.2}s` } as React.CSSProperties}>
            <div className="leaf leaf--3"></div>
          </div>
        </div>
      ))}

      <div className="bubbles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="bubble">
            <svg className="heart" viewBox="0 0 32 32">
              <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Photo Frame Component ---
interface PhotoFrameProps {
  index: number;
  x: number;
  y: number;
  delay: number;
  zIndex: number;
  scale?: number;
  imageUrl: string;
}

const PhotoFrame: React.FC<PhotoFrameProps> = ({ index, x, y, delay, zIndex, scale = 1, imageUrl }) => {
  const isLeft = index === 0;
  return (
    <motion.div
      className="photo-frame sway-animation"
      style={{
        [isLeft ? 'left' : 'right']: `${x}%`,
        top: `${y}%`,
        animationDelay: `${delay}s`,
        zIndex: zIndex,
        scale: scale,
      }}
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, delay: delay, type: "spring" }}
    >
      <div className="photo-string"></div>
      <img
        src={imageUrl}
        alt={`Kỷ niệm ${index + 1}`}
        referrerPolicy="no-referrer"
      />
    </motion.div>
  );
};

// --- Fireworks Component ---
const Fireworks = () => {
  const [explosions, setExplosions] = useState<{ id: number; x: number; y: number; color: string }[]>([]);

  useEffect(() => {
    const colors = ['#ff1493', '#ff69b4', '#ffb6c1', '#da70d6', '#ba55d3', '#ff00ff', '#ffffff', '#ffd700'];
    const createExplosion = () => {
      const newExplosion = {
        id: Date.now() + Math.random(),
        x: Math.random() * 90 + 5,
        y: Math.random() * 50 + 5,
        color: colors[Math.floor(Math.random() * colors.length)]
      };
      setExplosions(prev => [...prev.slice(-15), newExplosion]);
    };

    createExplosion();
    const interval = setInterval(createExplosion, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <AnimatePresence>
        {explosions.map(exp => (
          <motion.div
            key={exp.id}
            className="absolute"
            style={{ left: `${exp.x}%`, top: `${exp.y}%` }}
            exit={{ opacity: 0 }}
          >
            {[...Array(48)].map((_, i) => {
              const angle = (i * 7.5 * Math.PI) / 180;
              const distance = 200 + Math.random() * 150;
              return (
                <motion.div
                  key={i}
                  className="absolute origin-left"
                  style={{ 
                    rotate: `${i * 7.5}deg`,
                    width: '3px',
                    height: '15px',
                    backgroundColor: exp.color,
                    borderRadius: '50%',
                    boxShadow: `0 0 12px ${exp.color}, 0 0 20px ${exp.color}`
                  }}
                  initial={{ x: 0, opacity: 1, scale: 1 }}
                  animate={{ 
                    x: Math.cos(angle) * distance,
                    y: Math.sin(angle) * distance,
                    opacity: 0,
                    scale: [1, 1.5, 0.5],
                  }}
                  transition={{ duration: 1.8, ease: "easeOut" }}
                />
              );
            })}
            {/* Center flash */}
            <motion.div
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{ backgroundColor: exp.color, width: 4, height: 4, boxShadow: `0 0 30px 10px ${exp.color}` }}
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 15, opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

// --- Intro Component ---
const Intro = ({ onOpen }: { onOpen: () => void }) => {
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [openButtonScale, setOpenButtonScale] = useState(1);
  const [isEscaping, setIsEscaping] = useState(false);

  const handleNoClick = () => {
    const random = Math.random();
    if (random > 0.5) {
      setOpenButtonScale(prev => prev + 0.5);
    } else {
      setIsEscaping(true);
      setNoButtonPos({
        x: (Math.random() - 0.5) * 400,
        y: (Math.random() - 0.5) * 400,
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-pink-50 flex flex-col items-center justify-center overflow-hidden z-[100]">
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Orbiting small gift boxes with complex paths */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-300"
            animate={{
              rotate: [0, 360],
              x: [
                Math.cos(i * 9 * Math.PI / 180) * (250 + Math.random() * 100),
                Math.sin((i * 9 + 90) * Math.PI / 180) * (350 + Math.random() * 100),
                Math.cos((i * 9 + 180) * Math.PI / 180) * (250 + Math.random() * 100),
                Math.sin((i * 9 + 270) * Math.PI / 180) * (350 + Math.random() * 100),
                Math.cos((i * 9 + 360) * Math.PI / 180) * (250 + Math.random() * 100)
              ],
              y: [
                Math.sin(i * 9 * Math.PI / 180) * (250 + Math.random() * 100),
                Math.cos((i * 9 + 90) * Math.PI / 180) * (200 + Math.random() * 100),
                Math.sin((i * 9 + 180) * Math.PI / 180) * (250 + Math.random() * 100),
                Math.cos((i * 9 + 270) * Math.PI / 180) * (200 + Math.random() * 100),
                Math.sin((i * 9 + 360) * Math.PI / 180) * (250 + Math.random() * 100)
              ],
              scale: [0.8, 1.2, 0.6, 1.1, 0.8],
              opacity: [0.4, 0.9, 0.4, 0.9, 0.4]
            }}
            transition={{
              duration: 8 + Math.random() * 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Gift size={14 + Math.random() * 20} />
          </motion.div>
        ))}

        {/* Main Gift Box */}
        <motion.div
          className="relative z-10 flex flex-col items-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", damping: 12 }}
        >
          <div className="mb-8 text-center">
            <h1 className="text-6xl font-display font-bold italic text-pink-600 mb-2 tracking-tight">Chúc Mừng Ngày 8-3</h1>
            <p className="text-pink-400 font-serif font-semibold italic text-2xl">Dành tặng người phụ nữ tuyệt vời nhất</p>
          </div>

          <motion.div
            className="bg-pink-500 w-48 h-48 rounded-2xl shadow-2xl flex items-center justify-center relative cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            onClick={onOpen}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-12 bg-pink-600 rounded-full shadow-lg"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-24 bg-yellow-400"></div>
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-48 h-4 bg-yellow-400"></div>
            <Gift size={80} className="text-white group-hover:animate-bounce" />
          </motion.div>

          <div className="mt-12 flex gap-6 items-center">
            <motion.button
              style={{ scale: openButtonScale }}
              className="px-8 py-3 bg-pink-600 text-white rounded-full font-bold shadow-lg hover:bg-pink-700 transition-colors uppercase"
              onClick={onOpen}
            >
              Mở hộp
            </motion.button>

            <motion.button
              animate={isEscaping ? { x: noButtonPos.x, y: noButtonPos.y } : {}}
              className="px-8 py-3 bg-gray-300 text-gray-700 rounded-full font-bold shadow-md hover:bg-gray-400 transition-colors uppercase"
              onClick={handleNoClick}
              onMouseEnter={handleNoClick}
            >
              Không mở
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// --- Title Component ---
const Title = () => {
  return (
    <h2 
      className="text-5xl sm:text-7xl font-display font-bold italic text-pink-600 tracking-tight"
      style={{ 
        filter: 'drop-shadow(0 0 15px rgba(255, 105, 180, 0.4))'
      }}
    >
      Chúc mừng ngày Quốc tế Phụ nữ 8-3
    </h2>
  );
};

// --- Main App ---
export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showFlower, setShowFlower] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => setShowFlower(true), 500);
  };

  // Artistic photo positions: 1 left, 2 right
  const photoPositions = [
    { x: 5, y: 35, zIndex: 5, scale: 1.1 }, // Left middle (enlarged)
    { x: 5, y: 15, zIndex: 5 }, // Right top
    { x: 15, y: 55, zIndex: 6 }, // Right bottom
  ];

  const images = [
    "https://files.catbox.moe/1uusr0.jfif",
    "https://files.catbox.moe/qf2zea.jfif",
    "https://files.catbox.moe/20xpps.jfif"
  ];

 return (
    <div className="min-h-screen w-full bg-[#fff0f5] overflow-hidden">
      <audio
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
        loop
      />
      
      {isOpen && (
        <motion.button
          className="fixed top-4 right-4 z-[10001] p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg text-pink-600 hover:bg-pink-100 transition-colors"
          onClick={toggleMute}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        >
          {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
        </motion.button>
      )}

      <AnimatePresence>
        {!isOpen && (
          <motion.div
            key="intro"
            exit={{ opacity: 0, scale: 2 }}
            transition={{ duration: 0.8 }}
          >
            <Intro onOpen={handleOpen} />
          </motion.div>
        )}
      </AnimatePresence>

      {showFlower && (
        <>
          <Fireworks />
          <div className="flower-container">
            <div className="night"></div>
            
            {photoPositions.map((pos, i) => (
            <PhotoFrame
              key={i}
              index={i}
              x={pos.x}
              y={pos.y}
              delay={3 + i * 0.5}
              zIndex={pos.zIndex}
              scale={pos.scale}
              imageUrl={images[i]}
            />
          ))}

          <Flower />

          <motion.div 
            className="absolute top-10 left-1/2 -translate-x-1/2 z-[100] text-center w-full px-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <Title />
          </motion.div>
          </div>
        </>
      )}
    </div>
  );
}
