import { motion } from "motion/react";
import { Link } from "react-router";
import { Cpu, Camera, Aperture, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const heroImg = "https://images.unsplash.com/photo-1758348844306-5a0ba556db03?auto=format&fit=crop&q=80&w=1800";
const closeup1 = "https://images.unsplash.com/photo-1758348844356-69c761cc1295?auto=format&fit=crop&q=80&w=1200";
const closeup2 = "https://images.unsplash.com/photo-1775839700200-804627f67c66?auto=format&fit=crop&q=80&w=1200";
const closeup3 = "https://images.unsplash.com/photo-1560181375-f64ca484cb1d?auto=format&fit=crop&q=80&w=1200";

const highlights = [
  { icon: Cpu, label: "A17 Pro", sub: "3-nanometer process" },
  { icon: Camera, label: "48MP Main", sub: "Tetraprism telephoto" },
  { icon: Aperture, label: "ProRAW", sub: "ProRes video capture" },
];

export default function IPhone15Pro() {
  return (
    <div className="bg-black">
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <ImageWithFallback
          src={heroImg}
          alt="iPhone 15 Pro camera close-up"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
        <div className="relative z-10 px-6 md:px-10 pb-20 md:pb-32 max-w-6xl mx-auto w-full">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-neutral-400 tracking-[0.25em] uppercase mb-5"
          >
            iPhone 15 Pro
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="tracking-tight bg-gradient-to-b from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent max-w-3xl"
            style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)", lineHeight: 1.05 }}
          >
            Titanium. Forged for the Pros.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-neutral-400 max-w-xl mt-6"
          >
            Aerospace-grade titanium gives Pro models an extraordinary strength-to-weight ratio,
            making them the lightest Pro models ever.
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
        </div>
      </section>

      <section className="px-6 md:px-10 py-24 md:py-32 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-white tracking-tight max-w-3xl mb-16"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.1 }}
        >
          The pro camera system. A multi-lens marvel.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="md:row-span-2 rounded-3xl overflow-hidden bg-neutral-900 aspect-[3/4] md:aspect-auto md:min-h-[600px] relative group"
          >
            <ImageWithFallback
              src={closeup2}
              alt="Camera lens macro"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <p className="text-neutral-400 mb-2 uppercase tracking-widest">Optics</p>
              <h3 className="text-white tracking-tight" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
                Seven pro lenses, all in your pocket.
              </h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-3xl overflow-hidden bg-neutral-900 aspect-[4/3] relative group"
          >
            <ImageWithFallback
              src={closeup1}
              alt="Sensor detail"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <p className="text-neutral-400 mb-2 uppercase tracking-widest">Sensor</p>
              <h3 className="text-white tracking-tight">Larger pixels. Lower noise.</h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-3xl overflow-hidden bg-neutral-900 aspect-[4/3] relative group"
          >
            <ImageWithFallback
              src={closeup3}
              alt="Camera module"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <p className="text-neutral-400 mb-2 uppercase tracking-widest">Telephoto</p>
              <h3 className="text-white tracking-tight">3x optical zoom. Tetraprism design.</h3>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-20 md:py-28 border-t border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {highlights.map(({ icon: Icon, label, sub }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-2xl border border-white/5 bg-neutral-900/40 backdrop-blur-xl p-8"
            >
              <Icon className="w-7 h-7 text-neutral-300 mb-4" strokeWidth={1.25} />
              <p className="text-white tracking-tight">{label}</p>
              <p className="text-neutral-500 mt-1">{sub}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
