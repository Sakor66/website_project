import { Outlet, useLocation } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout() {
  const location = useLocation();
  return (
    <div className="min-h-screen bg-black text-white antialiased flex flex-col">
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
