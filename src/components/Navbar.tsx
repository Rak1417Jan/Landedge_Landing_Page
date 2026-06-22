import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";
import { JustdialIcon } from "./JustdialIcon";

const nav = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Projects", to: "/projects" },
  {
    label: "Resources",
    to: "/news",
    children: [
      { label: "News", to: "/news" },
      { label: "Events", to: "/events" },
      { label: "Blog", to: "/blog" },
      { label: "FAQ", to: "/faq" },
    ],
  },
  { label: "Contact Us", to: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<Record<string, boolean>>({});

  const toggleMobileSubmenu = (label: string) => {
    setMobileSubmenuOpen((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        <Logo />

        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {nav.map((item) => (
            <div key={item.label} className="relative group">
              <Link
                to={item.to}
                className="text-sm font-medium text-foreground/80 hover:text-brand transition-colors flex items-center gap-1"
                activeProps={{ className: "text-brand" }}
              >
                {item.label}
                {item.children && <ChevronDown className="w-3 h-3" />}
              </Link>
              {item.children && (
                <div className="absolute left-0 top-full pt-2 hidden group-hover:block min-w-[160px]">
                  <div className="bg-background border border-border rounded-md shadow-lg py-2">
                    {item.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        className="block px-4 py-2 text-sm text-foreground/80 hover:text-brand hover:bg-muted"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href="https://www.facebook.com/share/193EJk2U26/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-foreground hover:text-brand"><Facebook className="w-5 h-5" /></a>
          <a href="https://www.instagram.com/officiallandedgegroup?utm_source=qr&igsh=dGtvOGZnYTgzems0" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-foreground hover:text-brand"><Instagram className="w-5 h-5" /></a>
          <a href="https://jsdl.in/DT-308VC3D6GIK" target="_blank" rel="noopener noreferrer" aria-label="Justdial" className="text-foreground hover:text-brand"><JustdialIcon className="w-5 h-5" /></a>
        </div>

        <button
          className="lg:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-4 py-4 flex flex-col gap-1">
            {nav.map((item) => (
              <div key={item.label} className="flex flex-col">
                {item.children ? (
                  <>
                    <button
                      onClick={() => toggleMobileSubmenu(item.label)}
                      className="py-2 text-sm font-medium text-foreground/80 hover:text-brand flex items-center justify-between w-full text-left cursor-pointer"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          mobileSubmenuOpen[item.label] ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileSubmenuOpen[item.label] && (
                      <div className="pl-4 flex flex-col gap-1 border-l border-border ml-2 mb-2">
                        {item.children.map((c) => (
                          <Link
                            key={c.to}
                            to={c.to}
                            className="py-2 text-sm font-medium text-foreground/70 hover:text-brand"
                            onClick={() => setOpen(false)}
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.to}
                    className="py-2 text-sm font-medium text-foreground/80 hover:text-brand"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="flex items-center gap-4 pt-4 border-t border-border/50 mt-2">
              <a href="https://www.facebook.com/share/193EJk2U26/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-brand" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
              <a href="https://www.instagram.com/officiallandedgegroup?utm_source=qr&igsh=dGtvOGZnYTgzems0" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-brand" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
              <a href="https://jsdl.in/DT-308VC3D6GIK" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-brand" aria-label="Justdial"><JustdialIcon className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
