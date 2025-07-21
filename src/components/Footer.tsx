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
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-teal-900/20 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center mb-4">
              <img
                src={nitapLogo}
                alt="NIT AP Logo"
                className="h-10 w-10 rounded-lg shadow-md bg-white p-1 object-contain mr-3"
              />
              <div>
                <h3 className="text-xl font-bold">NIT Andhra Pradesh</h3>
                <p className="text-gray-400 text-sm">Student Portal</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Empowering students with seamless access to campus services,
              academic resources, and essential tools for academic excellence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gray-800 hover:bg-blue-700 p-2 rounded-full transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
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
            <h4 className="text-lg font-semibold mb-4 text-blue-400">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:underline text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#portals" className="hover:underline text-gray-300">
                  Portals
                </a>
              </li>
              <li>
                <a href="#downloads" className="hover:underline text-gray-300">
                  Downloads
                </a>
              </li>
              <li>
                <a href="#links" className="hover:underline text-gray-300">
                  Links
                </a>
              </li>
              <li>
                <a href="#developers" className="hover:underline text-gray-300">
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
            <h4 className="text-lg font-semibold mb-4 text-blue-400">
              Contact
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> info@nitandhra.ac.in
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> +91 12345 67890
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> NIT Andhra Pradesh,
                Tadepalligudem
              </li>
            </ul>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-end"
          >
            <div className="text-gray-500 text-sm mt-8 md:mt-0">
              &copy; {new Date().getFullYear()} NIT Andhra Pradesh. All rights
              reserved.
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
