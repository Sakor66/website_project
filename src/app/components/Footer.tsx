import { Twitter, Instagram, Youtube, Github } from "lucide-react";
import { Link } from "react-router";

const cols = [
  {
    title: "Shop",
    items: [
      { label: "iPhone 15 Pro", to: "/iphone15pro" },
      { label: "iPhone 15", to: "/iphone15" },
      { label: "Accessories", to: "/accessories" },
      { label: "Pricing", to: "/pricing" },
    ],
  },
  {
    title: "Services",
    items: [
      { label: "Apple Care", to: "/" },
      { label: "iCloud+", to: "/" },
      { label: "Music", to: "/" },
      { label: "TV+", to: "/" },
    ],
  },
  {
    title: "Account",
    items: [
      { label: "Manage", to: "/" },
      { label: "Order Status", to: "/" },
      { label: "Sign In", to: "/" },
      { label: "Compare Models", to: "/compare" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", to: "/" },
      { label: "Careers", to: "/" },
      { label: "Newsroom", to: "/" },
      { label: "Contact", to: "/" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 px-6 md:px-10 py-16 text-neutral-500">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-neutral-300 mb-4">{c.title}</p>
              <ul className="space-y-3">
                {c.items.map((i) => (
                  <li key={i.label}>
                    <Link to={i.to} className="hover:text-white transition-colors">
                      {i.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-8">
          <p>Copyright © 2026 Showcase Inc. All rights reserved.</p>
          <div className="flex items-center gap-5">
            {[Twitter, Instagram, Youtube, Github].map((I, i) => (
              <Link key={i} to="/" className="hover:text-white transition-colors">
                <I className="w-5 h-5" strokeWidth={1.5} />
              </Link>
            ))}
          </div>
        </div>
        <p className="mt-6 text-neutral-600 max-w-3xl">
          Disclaimer: Specifications and imagery are for demonstration only. This is a design showcase
          not affiliated with Apple Inc.
        </p>
      </div>
    </footer>
  );
}
