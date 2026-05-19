import { motion } from "motion/react";
import { Link } from "react-router";
import { Sparkles, Camera, Zap, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const heroImg = "https://images.unsplash.com/photo-1599865240613-69a7655f94b3?auto=format&fit=crop&q=80&w=1800";
const angle1 = "https://images.unsplash.com/photo-1599865240725-df9ef05da53a?auto=format&fit=crop&q=80&w=1200";
const angle2 = "https://images.unsplash.com/photo-1599865241001-30a4e7fafb29?auto=format&fit=crop&q=80&w=1200";
const angle3 = "https://images.unsplash.com/photo-1737805173358-e88d2e05c49e?auto=format&fit=crop&q=80&w=1200";
const angle4 = "https://images.unsplash.com/photo-1599865242414-8cd28ebaeade?auto=format&fit=crop&q=80&w=1200";

const palette = ["#ffd1dc", "#bfe3ff", "#fff4b8", "#d3ffd9", "#1a1a1a"];
const paletteNames = ["Pink", "Blue", "Yellow", "Green", "Black"];

const features = [
  { icon: Sparkles, t: "Dynamic Island", d: "Alerts and Live Activities, magically." },
  { icon: Camera, t: "48MP Main camera", d: "Super-high-resolution photos." },
  { icon: Zap, t: "USB-C", d: "Charge your AirPods or Mac too." },
];

export default function IPhone15() {
  return (
    <div className="bg-black">
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <ImageWithFallback
          src={heroImg}
          alt="iPhone 15"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
        <div className="relative z-10 px-6 md:px-10 pb-20 md:pb-32 max-w-6xl mx-auto w-full">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-pink-200/80 tracking-[0.25em] uppercase mb-5"
          >
            iPhone 15
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="tracking-tight bg-gradient-to-br from-white via-pink-100 to-blue-200 bg-clip-text text-transparent max-w-3xl"
            style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)", lineHeight: 1.05 }}
          >
            Newphoria.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-neutral-300 max-w-xl mt-6"
          >
            A new design with contoured edges, color-infused glass, and the magic of Dynamic Island —
            now on every iPhone 15.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <Link
              to="/pricing"
              className="px-7 h-11 inline-flex items-center justify-center rounded-full bg-white text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            >
              View pricing
            </Link>
            <Link
              to="/compare"
              className="px-7 h-11 inline-flex items-center justify-center gap-2 rounded-full border border-white/30 text-white transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:border-white/60"
            >
              Compare <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-12 flex items-center gap-4"
          >
            {palette.map((c, i) => (
              <span
                key={c}
                aria-label={paletteNames[i]}
                className="w-7 h-7 rounded-full ring-1 ring-white/30 transition-transform hover:scale-110"
                style={{ background: c }}
              />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-24 md:py-32 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-white tracking-tight max-w-3xl mb-16"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.1 }}
        >
          Every angle, a fresh perspective.
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {[angle1, angle2, angle3, angle4].map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`rounded-3xl overflow-hidden bg-neutral-900 ${
                i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto md:min-h-[500px]" : "aspect-square"
              } relative group`}
            >
              <ImageWithFallback
                src={src}
                alt={`iPhone 15 angle ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 pb-28 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map(({ icon: Icon, t, d }, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-2xl border border-white/5 bg-neutral-900/40 backdrop-blur-xl p-8"
            >
              <Icon className="w-7 h-7 text-pink-200 mb-4" strokeWidth={1.25} />
              <p className="text-white tracking-tight">{t}</p>
              <p className="text-neutral-500 mt-1">{d}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
