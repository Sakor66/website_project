import { useState } from "react";
import { Apple, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { NavLink, Link } from "react-router";

const links = [
  { to: "/iphone15pro", label: "iPhone 15 Pro" },
  { to: "/iphone15", label: "iPhone 15" },
  { to: "/compare", label: "Compare" },
  { to: "/accessories", label: "Accessories" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/60 border-b border-white/5">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-10 h-14">
        <Link to="/" className="flex items-center gap-2 text-white">
          <Apple className="w-5 h-5" strokeWidth={1.5} />
          <span className="tracking-tight">Showcase</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `transition-colors ${isActive ? "text-white" : "text-neutral-400 hover:text-white"}`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link to="/pricing" className="hidden sm:inline-flex items-center px-5 h-9 rounded-full bg-white text-black text-sm hover:bg-neutral-200 transition-colors">
            Buy
          </Link>
          <button
            className="md:hidden p-2 text-white relative w-9 h-9 flex items-center justify-center"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute"
                >
                  <X className="w-5 h-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute"
                >
                  <Menu className="w-5 h-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden fixed inset-x-0 top-14 bottom-0 bg-black/95 backdrop-blur-2xl z-40"
          >
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
              }}
              className="flex flex-col px-8 py-10 gap-6"
            >
              {links.map((l) => (
                <motion.li
                  key={l.to}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <NavLink
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="text-white tracking-tight"
                    style={{ fontSize: "1.75rem" }}
                  >
                    {l.label}
                  </NavLink>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <Link
                  to="/pricing"
                  onClick={() => setOpen(false)}
                  className="mt-6 w-full h-12 rounded-full bg-white text-black inline-flex items-center justify-center"
                >
                  Buy
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
