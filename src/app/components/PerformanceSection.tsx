import { ChevronRight, Cpu, Gamepad2 } from "lucide-react";
import { Link } from "react-router";

export function PerformanceSection() {
  return (
    <section className="relative bg-black overflow-hidden py-32 px-6">
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center">
        <p className="relative z-10 text-blue-400 tracking-[0.25em] uppercase mb-5">
          A17 Pro Chip
        </p>

        <h2
          className="relative z-10 text-white tracking-tight max-w-3xl"
          style={{ fontSize: "clamp(2rem, 6vw, 4rem)", lineHeight: 1.1 }}
        >
          A monster win for gaming.
        </h2>

        <p className="relative z-10 text-gray-400 max-w-2xl mt-6">
          A redesigned GPU with up to 20% faster graphics performance and
          hardware-accelerated ray tracing — for richer environments, more
          realistic lighting, and console-class titles right in your pocket.
        </p>

        <div className="relative w-full max-w-4xl mt-16 flex justify-center">
          <div className="absolute inset-0 bg-blue-600/30 blur-[100px] rounded-full" />
          <img
            src="https://images.unsplash.com/photo-1620283085439-3f656ff7a03a?auto=format&fit=crop&w=1200&q=80"
            alt="A17 Pro chip glowing macro"
            className="w-full max-w-4xl h-auto object-cover rounded-3xl shadow-2xl relative z-10"
          />
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mt-16">
          <div className="bg-gray-900/50 backdrop-blur-md border border-gray-800 p-10 rounded-3xl hover:scale-105 transition-transform duration-300 text-left">
            <Cpu className="w-8 h-8 text-blue-400 mb-5" strokeWidth={1.25} />
            <p className="text-white tracking-tight" style={{ fontSize: "1.75rem" }}>
              Up to 20% faster GPU
            </p>
            <p className="text-gray-400 mt-3">
              A redesigned 6-core GPU brings dramatic gains in shading, lighting,
              and detail for the most demanding games.
            </p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-md border border-gray-800 p-10 rounded-3xl hover:scale-105 transition-transform duration-300 text-left">
            <Gamepad2 className="w-8 h-8 text-blue-400 mb-5" strokeWidth={1.25} />
            <p className="text-white tracking-tight" style={{ fontSize: "1.75rem" }}>
              Hardware ray tracing
            </p>
            <p className="text-gray-400 mt-3">
              4x faster than software-based ray tracing — for cinematic reflections
              and console-class titles in your pocket.
            </p>
          </div>
        </div>

        <Link
          to="/iphone15pro"
          className="group relative z-10 inline-flex items-center gap-1 mt-14 text-blue-400 hover:text-blue-300 transition-colors"
        >
          Take a closer look
          <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
