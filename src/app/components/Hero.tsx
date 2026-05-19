import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";

const phoneColors = [
  { id: "natural", name: "Natural Titanium", hex: "#8F8E8A", imageUrl: "https://images.unsplash.com/photo-1695048065040-a0e3ec926785?auto=format&fit=crop&w=1200&q=80" },
  { id: "blue", name: "Blue Titanium", hex: "#3E4551", imageUrl: "https://images.unsplash.com/photo-1738344858158-66f743afcf3d?auto=format&fit=crop&w=1200&q=80" },
  { id: "white", name: "White Titanium", hex: "#EAE9E5", imageUrl: "https://images.unsplash.com/photo-1759588071895-6b5efd5502af?auto=format&fit=crop&w=1200&q=80" },
  { id: "black", name: "Black Titanium", hex: "#353534", imageUrl: "https://images.unsplash.com/photo-1599518532481-301fb4d411c1?auto=format&fit=crop&w=1200&q=80" },
];

export function Hero() {
  const [activeColor, setActiveColor] = useState(phoneColors[0]);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-10 pb-20 bg-gradient-to-b from-black via-neutral-950 to-black">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center w-full"
      >
        <motion.p variants={item} className="text-neutral-400 tracking-[0.2em] uppercase mb-6">
          iPhone 15 Pro
        </motion.p>
        <motion.h1
          variants={item}
          className="max-w-5xl tracking-tight bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-transparent"
          style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)", lineHeight: 1.05 }}
        >
          Titanium. So strong.
          <br />
          So light. So Pro.
        </motion.h1>

        <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 sm:gap-5 mt-10">
          <Link
            to="/iphone15pro"
            className="px-7 h-11 inline-flex items-center justify-center rounded-full bg-blue-500 text-white transition-all duration-300 hover:bg-blue-400 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.55)]"
          >
            Learn more
          </Link>
          <Link
            to="/pricing"
            className="px-7 h-11 inline-flex items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:border-white/60"
          >
            View pricing
          </Link>
        </motion.div>

        <motion.div variants={item} className="mt-16 w-full max-w-3xl flex flex-col items-center">
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-neutral-900">
            {phoneColors.map((c) => (
              <img
                key={c.id}
                src={c.imageUrl}
                alt={c.name}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${
                  c.id === activeColor.id ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          <p className="text-neutral-300 mt-6 tracking-tight">{activeColor.name}</p>

          <div className="flex items-center justify-center gap-4 mt-4">
            {phoneColors.map((c) => {
              const isActive = c.id === activeColor.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setActiveColor(c)}
                  aria-label={c.name}
                  aria-pressed={isActive}
                  className={`w-9 h-9 rounded-full transition-all duration-300 ${
                    isActive
                      ? "ring-2 ring-white ring-offset-4 ring-offset-black scale-110"
                      : "ring-1 ring-white/20 hover:scale-105"
                  }`}
                  style={{ backgroundColor: c.hex }}
                />
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
