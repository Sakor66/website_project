import { Cpu, Camera, BatteryCharging } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const features = [
  {
    icon: Cpu,
    title: "A17 Pro chip",
    desc: "A monster win for gaming. Built on the industry-first 3-nanometer process.",
    span: "lg:col-span-2 lg:row-span-2",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
  },
  {
    icon: Camera,
    title: "Pro camera system",
    desc: "The equivalent of seven pro lenses, all in your pocket.",
    span: "",
    img: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?auto=format&fit=crop&q=80&w=900",
  },
  {
    icon: BatteryCharging,
    title: "All-day battery",
    desc: "Up to 29 hours of video playback. Charge faster with USB-C.",
    span: "",
    img: "https://images.unsplash.com/photo-1601524909162-ae8725290836?auto=format&fit=crop&q=80&w=900",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function Features() {
  return (
    <section className="px-6 md:px-10 py-24 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-white max-w-2xl mb-16 tracking-tight"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.1 }}
        >
          Designed beyond the cutting edge.
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-5 auto-rows-[260px]"
        >
          {features.map(({ icon: Icon, title, desc, span, img }) => (
            <motion.div
              key={title}
              variants={card}
              className={`relative overflow-hidden rounded-3xl bg-neutral-900 border border-white/5 group ${span}`}
            >
              <ImageWithFallback
                src={img}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              <div className="relative z-10 h-full p-8 flex flex-col justify-end">
                <Icon className="w-7 h-7 text-white mb-4" strokeWidth={1.5} />
                <h3 className="text-white tracking-tight mb-2">{title}</h3>
                <p className="text-neutral-400 max-w-md">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
