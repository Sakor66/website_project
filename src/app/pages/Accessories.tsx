import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const items = [
  {
    name: "MagSafe Leather Case",
    price: "$59",
    img: "https://images.unsplash.com/photo-1588525015382-a7f284d6ae4c?auto=format&fit=crop&q=80&w=900",
  },
  {
    name: "AirPods Pro (2nd Gen)",
    price: "$249",
    img: "https://images.unsplash.com/photo-1630168839851-d4540948a9ed?auto=format&fit=crop&q=80&w=900",
  },
  {
    name: "MagSafe Charger",
    price: "$39",
    img: "https://images.unsplash.com/photo-1633053699034-459674171bbb?auto=format&fit=crop&q=80&w=900",
  },
  {
    name: "FineWoven Wallet",
    price: "$59",
    img: "https://images.unsplash.com/photo-1606293459339-aa5d34a7b0e1?auto=format&fit=crop&q=80&w=900",
  },
  {
    name: "USB-C Cable",
    price: "$29",
    img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&q=80&w=900",
  },
  {
    name: "AirTag",
    price: "$29",
    img: "https://images.unsplash.com/photo-1620678955395-a8527e0fbe9c?auto=format&fit=crop&q=80&w=900",
  },
];

export default function Accessories() {
  return (
    <section className="min-h-screen px-6 md:px-10 pt-16 pb-32 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-white tracking-tight mb-4"
          style={{ fontSize: "clamp(2rem, 6vw, 4rem)", lineHeight: 1.1 }}
        >
          Accessories.
        </motion.h1>
        <p className="text-neutral-500 mb-16 max-w-xl">
          Personalize your iPhone with cases, chargers, and more — designed to fit perfectly.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.a
              key={item.name}
              href="#"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className="group rounded-3xl overflow-hidden bg-neutral-900/60 border border-white/5"
            >
              <div className="aspect-square overflow-hidden bg-neutral-900">
                <ImageWithFallback
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-white tracking-tight">{item.name}</h3>
                <p className="text-neutral-500 mt-1">{item.price}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
