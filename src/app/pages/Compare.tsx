import { motion } from "motion/react";
import { Cpu, Camera, BatteryCharging, Shield, Smartphone } from "lucide-react";

const rows = [
  { icon: Shield, label: "Material", pro: "Titanium", std: "Aerospace aluminum" },
  { icon: Cpu, label: "Chip", pro: "A17 Pro", std: "A16 Bionic" },
  { icon: Camera, label: "Camera", pro: "48MP · 3x Telephoto", std: "48MP Main" },
  { icon: BatteryCharging, label: "Battery", pro: "Up to 29 hrs video", std: "Up to 26 hrs video" },
  { icon: Smartphone, label: "Display", pro: '6.1" ProMotion 120Hz', std: '6.1" Super Retina XDR' },
];

export default function Compare() {
  return (
    <section className="min-h-screen px-6 md:px-10 pt-16 pb-32 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center text-white tracking-tight mb-4"
          style={{ fontSize: "clamp(2rem, 6vw, 4rem)", lineHeight: 1.1 }}
        >
          Compare models.
        </motion.h1>
        <p className="text-center text-neutral-500 mb-16">
          Find the iPhone that fits your life.
        </p>

        <div className="grid grid-cols-3 gap-4 md:gap-8">
          <div />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl bg-neutral-900/60 border border-white/5 p-4 md:p-6 text-center"
          >
            <p className="text-white tracking-tight">iPhone 15 Pro</p>
            <p className="text-neutral-500 mt-1">From $999</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl bg-neutral-900/60 border border-white/5 p-4 md:p-6 text-center"
          >
            <p className="text-white tracking-tight">iPhone 15</p>
            <p className="text-neutral-500 mt-1">From $799</p>
          </motion.div>
        </div>

        <div className="mt-10 divide-y divide-white/5 border-y border-white/5">
          {rows.map(({ icon: Icon, label, pro, std }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="grid grid-cols-3 gap-4 md:gap-8 py-6 items-center"
            >
              <div className="flex items-center gap-3 text-neutral-400">
                <Icon className="w-5 h-5" strokeWidth={1.25} />
                <span>{label}</span>
              </div>
              <div className="text-white text-center">{pro}</div>
              <div className="text-white text-center">{std}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
