import { Droplets, Smartphone, Zap, Shield, Wifi, Weight } from "lucide-react";
import { motion } from "motion/react";

const specs = [
  { icon: Droplets, label: "Water Resistance", value: "IP68 · 6m" },
  { icon: Smartphone, label: "Display", value: '6.1" Super Retina XDR' },
  { icon: Zap, label: "Chip", value: "A17 Pro" },
  { icon: Shield, label: "Material", value: "Titanium" },
  { icon: Wifi, label: "Connectivity", value: "Wi-Fi 6E · 5G" },
  { icon: Weight, label: "Weight", value: "187 grams" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function TechSpecs() {
  return (
    <section className="px-6 md:px-10 py-24 md:py-32 bg-neutral-950 border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-white mb-16 tracking-tight"
          style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
        >
          The numbers behind it.
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12"
        >
          {specs.map(({ icon: Icon, label, value }) => (
            <motion.div
              key={label}
              variants={item}
              className="flex flex-col items-center text-center"
            >
              <Icon className="w-8 h-8 text-neutral-400 mb-4" strokeWidth={1.25} />
              <p className="text-neutral-500 mb-1">{label}</p>
              <p className="text-white">{value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
