import { motion } from "framer-motion";
import { GraduationCap, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { useState } from "react";
import nitapLogo from "../asset/logo/nitap.png";
import { useLocation, useNavigate } from "react-router-dom";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", href: "/#home", hash: "#home" },
    { label: "Portals", href: "/#portals", hash: "#portals" },
    { label: "Downloads", href: "/#downloads", hash: "#downloads" },
    { label: "Links", href: "/#links", hash: "#links" },
    { label: "Developers", href: "/developers" },
    { label: "Contact", href: "/#contact", hash: "#contact" },
  ];

  // Smooth scroll for hash links
  const handleNavClick = (item: typeof navItems[0]) => (e: React.MouseEvent) => {
    if (item.href.startsWith("/#") || item.href.startsWith("#")) {
      e.preventDefault();
      if (location.pathname !== "/") {
        navigate("/" + (item.hash || item.href));
        setTimeout(() => {
          const el = document.querySelector(item.hash || item.href);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const el = document.querySelector(item.hash || item.href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
      setIsMenuOpen(false);
    } else if (item.href.startsWith("/developers")) {
      navigate("/developers");
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-white/80 via-blue-50/80 to-purple-100/80 dark:from-gray-900/90 dark:via-blue-950/90 dark:to-purple-950/90 backdrop-blur-2xl border-b border-white/30 dark:border-gray-700/50 shadow-2xl shadow-blue-200/30 dark:shadow-blue-900/40"
      style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20 relative">
          {/* Logo + Brand */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <img
              src={nitapLogo}
              alt="NIT AP Logo"
              className="h-12 w-12 rounded-full shadow-md bg-white p-1 object-contain"
            />
            <div>
              <h1 className="text-xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                NIT AP
              </h1>
              <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                Student Portal
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={handleNavClick(item)}
                whileHover={{ scale: 1.13, y: -2 }}
                className="relative text-lg font-bold px-3 py-1 rounded-xl transition-all duration-200 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 group"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute left-0 right-0 -bottom-1 h-1 bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400 opacity-0 group-hover:opacity-80 rounded-full transition-all duration-300 scale-x-0 group-hover:scale-x-100 origin-left" />
              </motion.a>
            ))}
          </nav>

          {/* Theme toggle and mobile menu */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden border border-blue-400/30 shadow-md bg-white/70 dark:bg-gray-900/80 hover:bg-blue-50 dark:hover:bg-blue-950"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-blue-600 dark:text-blue-300" />
              ) : (
                <Menu className="h-6 w-6 text-blue-600 dark:text-blue-300" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          initial={false}
          animate={{
            height: isMenuOpen ? "auto" : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-gradient-to-br from-white/95 via-blue-50/95 to-purple-100/95 dark:from-gray-900/95 dark:via-blue-950/95 dark:to-purple-950/95 backdrop-blur-2xl rounded-2xl mt-2 border border-blue-400/20 dark:border-blue-900/40 shadow-2xl"
        >
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={handleNavClick(item)}
                whileTap={{ scale: 0.97 }}
                className="block px-4 py-2 text-lg font-bold text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 rounded-xl transition-all duration-200"
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </motion.nav>
      </div>
    </motion.header>
  );
}
