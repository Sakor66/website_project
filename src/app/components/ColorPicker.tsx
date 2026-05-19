import { useState } from "react";

type Color = {
  name: string;
  swatch: string;
  image: string;
};

const colors: Color[] = [
  {
    name: "Natural Titanium",
    swatch: "#a8a39a",
    image: "https://placehold.co/1200x800/8a857c/f5f5f7.png?text=Natural+Titanium",
  },
  {
    name: "Blue Titanium",
    swatch: "#3e4d63",
    image: "https://placehold.co/1200x800/3e4d63/f5f5f7.png?text=Blue+Titanium",
  },
  {
    name: "White Titanium",
    swatch: "#e8e7e2",
    image: "https://placehold.co/1200x800/e8e7e2/3a3a3a.png?text=White+Titanium",
  },
  {
    name: "Black Titanium",
    swatch: "#1a1a1a",
    image: "https://placehold.co/1200x800/1a1a1a/f5f5f7.png?text=Black+Titanium",
  },
];

export function ColorPicker() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = colors[selectedIndex];

  return (
    <section className="px-6 md:px-10 py-24 md:py-32 bg-black">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-neutral-500 tracking-[0.2em] uppercase mb-4">Finish</p>
        <h2
          className="text-white tracking-tight mb-12"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.1 }}
        >
          Forged in titanium.
        </h2>

        <div className="relative w-full aspect-[3/2] md:aspect-[16/10] max-w-3xl mx-auto rounded-3xl overflow-hidden bg-neutral-900">
          {colors.map((c, i) => (
            <img
              key={c.name}
              src={c.image}
              alt={c.name}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${
                i === selectedIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        <p
          key={selected.name}
          className="text-white mt-8 tracking-tight transition-opacity duration-300"
        >
          {selected.name}
        </p>

        <div className="flex items-center justify-center gap-5 mt-6">
          {colors.map((c, i) => (
            <button
              key={c.name}
              onClick={() => setSelectedIndex(i)}
              aria-label={c.name}
              aria-pressed={i === selectedIndex}
              className={`w-9 h-9 rounded-full transition-all duration-300 ${
                i === selectedIndex
                  ? "ring-2 ring-white ring-offset-4 ring-offset-black scale-110"
                  : "ring-1 ring-white/20 hover:scale-105"
              }`}
              style={{ backgroundColor: c.swatch }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
