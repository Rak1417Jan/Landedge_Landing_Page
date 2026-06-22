import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MapPin, Globe, Phone, Check } from "lucide-react";
import { Logo } from "./Logo";
import { JustdialIcon } from "./JustdialIcon";

export function Footer() {
  return (
    <footer className="bg-muted/60 border-t border-border mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Your trusted partner in land investment. At Landedge, we provide carefully selected plots and land opportunities where your dreams, plans, and investments can grow.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {[
                { Icon: Facebook, url: "https://www.facebook.com/share/193EJk2U26/", label: "Facebook" },
                { Icon: Instagram, url: "https://www.instagram.com/officiallandedgegroup?utm_source=qr&igsh=dGtvOGZnYTgzems0", label: "Instagram" },
                { Icon: JustdialIcon, url: "https://jsdl.in/DT-308VC3D6GIK", label: "Justdial" }
              ].map(({ Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center hover:bg-brand-dark transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-1 lg:col-span-3 flex flex-col gap-4">
            <form className="flex flex-col sm:flex-row gap-2 max-w-xl w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:flex-1 h-11 px-4 rounded-md border border-border bg-background outline-none focus:border-brand"
              />
              <button
                type="submit"
                className="h-11 px-5 rounded-md bg-brand text-white font-medium flex items-center justify-center gap-2 hover:bg-brand-dark transition-colors whitespace-nowrap shrink-0"
              >
                <Check className="w-4 h-4" /> Sign Up
              </button>
            </form>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-4 border-t border-border">
              <div>
                <h4 className="text-brand font-semibold text-sm mb-3 tracking-wider">OTHER PAGES</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/projects" className="hover:text-brand">Plots In Jaipur</Link></li>
                  <li><Link to="/blog" className="hover:text-brand">Blog</Link></li>
                  <li><Link to="/news" className="hover:text-brand">News</Link></li>
                  <li><Link to="/events" className="hover:text-brand">Events</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-brand font-semibold text-sm mb-3 tracking-wider">QUICK LINKS</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/about" className="hover:text-brand">About Us</Link></li>
                  <li><Link to="/contact" className="hover:text-brand">Contact Us</Link></li>
                  <li><Link to="/privacy-policy" className="hover:text-brand">Privacy Policy</Link></li>
                  <li><Link to="/faq" className="hover:text-brand">FAQ</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-brand font-semibold text-sm mb-3 tracking-wider">CONTACT DETAILS</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2">
                    <span className="w-6 h-6 rounded-full bg-brand text-white flex items-center justify-center shrink-0">
                      <MapPin className="w-3 h-3" />
                    </span>
                    <span><strong>Corporate Office :</strong><br/>1st Floor, 54 Mohan Nagar, 2nd Kesar ChorahaMuhana Mandi Road, Mansarovar, Jaipur - 302029, Rajasthan</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <span className="w-6 h-6 rounded-full bg-brand text-white flex items-center justify-center shrink-0">
                      <Globe className="w-3 h-3" />
                    </span>
                    landedgegroup.info@gmail.com
                  </li>
                  <li className="flex gap-2 items-center">
                    <span className="w-6 h-6 rounded-full bg-brand text-white flex items-center justify-center shrink-0">
                      <Phone className="w-3 h-3" />
                    </span>
                    +919785232232
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-brand text-white py-4 text-center text-xs md:text-sm font-semibold mt-12">
        © 2024 Landedge Group. All Rights Reserved.
      </div>
    </footer>
  );
}
