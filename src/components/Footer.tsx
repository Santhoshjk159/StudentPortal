import { motion } from "framer-motion";
import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import nitapLogo from "../asset/logo/nitap.png";

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white py-20 px-4 sm:px-8 lg:px-16 border-t border-white/10 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-teal-400/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-purple-500/20 via-blue-400/10 to-teal-400/20 rounded-full blur-2xl animate-pulse-glow delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-1/2 h-1/2 bg-gradient-radial from-blue-400/10 via-transparent to-transparent rounded-full blur-2xl opacity-60 animate-pulse-glow delay-2000" />
      </div>
      <div className="relative max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col justify-between"
          >
            <div className="flex items-center mb-4 gap-3">
              <img
                src={nitapLogo}
                alt="NIT AP Logo"
                className="h-14 w-14 rounded-2xl shadow-xl bg-white p-1 object-contain border-2 border-blue-400/40 animate-pulse-glow"
              />
              <div>
                <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400 drop-shadow-lg">
                  NIT Andhra Pradesh
                </h3>
                <p className="text-blue-200 text-sm font-semibold tracking-wider uppercase mt-0.5">
                  Student Portal
                </p>
              </div>
            </div>
            <p className="text-blue-100 leading-relaxed mb-6 max-w-md text-base font-medium">
              Empowering students with seamless access to campus services, academic
              resources, and essential tools for academic excellence.
            </p>
            <div className="flex space-x-4 mt-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gradient-to-br from-blue-700 via-teal-600 to-purple-600 hover:from-blue-600 hover:to-purple-700 p-2 rounded-full transition-colors duration-300 shadow-lg border border-blue-400/30"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-4 text-blue-300 tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="hover:underline text-blue-100 font-medium"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#portals"
                  className="hover:underline text-blue-100 font-medium"
                >
                  Portals
                </a>
              </li>
              <li>
                <a
                  href="#downloads"
                  className="hover:underline text-blue-100 font-medium"
                >
                  Downloads
                </a>
              </li>
              <li>
                <a
                  href="#links"
                  className="hover:underline text-blue-100 font-medium"
                >
                  Links
                </a>
              </li>
              <li>
                <a
                  href="/developers"
                  className="hover:underline text-blue-100 font-medium"
                >
                  Developers
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-4 text-blue-300 tracking-wider uppercase">
              Contact
            </h4>
            <ul className="space-y-3 text-blue-100 font-medium">
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-300" /> info@nitandhra.ac.in
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-blue-300" /> +91 12345 67890
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-300" /> NIT Andhra Pradesh,
                Tadepalligudem
              </li>
            </ul>
          </motion.div>

                 </div>
        <div className="mt-12 border-t border-blue-400/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-blue-200 text-sm font-medium">
          <span>
            &copy; {new Date().getFullYear()} NIT Andhra Pradesh. All rights
            reserved.
          </span>
          <span className="flex items-center gap-2">
            Made with{" "}
            <span className="animate-pulse text-pink-400">♥</span> by NIT AP
            Students
          </span>
        </div>
      </div>
      <style>{`
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 24px 0 #60a5fa44, 0 0 80px 0 #a78bfa22;
          }
          50% {
            box-shadow: 0 0 48px 8px #38bdf844, 0 0 120px 16px #a78bfa33;
          }
        }
      `}</style>
    </footer>
  );
}
