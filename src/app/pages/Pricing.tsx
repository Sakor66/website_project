import { motion } from "motion/react";
import { Check } from "lucide-react";
import { Link } from "react-router";

const tiers = [
  {
    name: "iPhone 15",
    price: 799,
    tagline: "A magical new way to interact with iPhone.",
    features: ["6.1\" Super Retina XDR", "A16 Bionic", "48MP Main camera", "Up to 26 hrs video"],
    cta: "Buy",
    highlight: false,
  },
  {
    name: "iPhone 15 Pro",
    price: 999,
    tagline: "Titanium. So strong. So light. So Pro.",
    features: [
      "6.1\" ProMotion 120Hz",
      "A17 Pro chip",
      "48MP · 3x Telephoto",
      "Up to 29 hrs video",
      "Action Button",
    ],
    cta: "Buy Pro",
    highlight: true,
  },
  {
    name: "iPhone 15 Pro Max",
    price: 1199,
    tagline: "The ultimate iPhone.",
    features: [
      "6.7\" ProMotion 120Hz",
      "A17 Pro chip",
      "5x Telephoto · Tetraprism",
      "Up to 29 hrs video",
      "Largest battery yet",
    ],
    cta: "Buy Max",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section className="min-h-screen px-6 md:px-10 pt-16 pb-32 bg-gradient-to-b from-black via-neutral-950 to-black">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center text-white tracking-tight mb-4"
          style={{ fontSize: "clamp(2rem, 6vw, 4rem)", lineHeight: 1.1 }}
        >
          Pick your iPhone.
        </motion.h1>
        <p className="text-center text-neutral-500 mb-16 max-w-xl mx-auto">
          Transparent pricing. No hidden fees. Trade-in offers available at checkout.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className={`relative rounded-3xl p-8 backdrop-blur-xl flex flex-col ${
                t.highlight
                  ? "bg-white/10 border border-white/20 shadow-[0_0_60px_rgba(59,130,246,0.15)]"
                  : "bg-neutral-900/40 border border-white/5"
              }`}
            >
              {t.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-blue-500 text-white tracking-wide uppercase" style={{ fontSize: "0.7rem" }}>
                  Most Popular
                </span>
              )}
              <h3 className="text-white tracking-tight">{t.name}</h3>
              <p className="text-neutral-500 mt-2 mb-6">{t.tagline}</p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-white tracking-tight" style={{ fontSize: "2.5rem" }}>
                  ${t.price}
                </span>
                <span className="text-neutral-500">/ one-time</span>
              </div>

              <ul className="space-y-3 mb-10 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-neutral-300">
                    <Check className="w-4 h-4 mt-1 text-blue-400 flex-shrink-0" strokeWidth={2} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/compare"
                className={`h-11 inline-flex items-center justify-center rounded-full transition-all duration-300 hover:scale-105 ${
                  t.highlight
                    ? "bg-white text-black hover:bg-neutral-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                    : "border border-white/30 text-white hover:bg-white/10 hover:border-white/60"
                }`}
              >
                {t.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
