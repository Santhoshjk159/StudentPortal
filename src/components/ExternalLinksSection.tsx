import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { PenTool, Home, ChevronRight } from "lucide-react";

const externalLinks = [
  {
    title: "Academics Portal",
    description: "Access exam results, schedules, and registration",
    icon: PenTool,
    color: "from-red-500 to-red-600",
    shadowColor: "shadow-red-500/25",
    href: "http://academics.nitandhra.ac.in/",
    external: true,
  },
  {
    title: "Hostel Management System",
    description: "Hostel allocation, mess menu, and accommodation info",
    icon: Home,
    color: "from-indigo-500 to-indigo-600",
    shadowColor: "shadow-indigo-500/25",
    href: "https://hmsnitap.in/",
    external: true,
  },
];

export function ExternalLinksSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50 to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-blue-600 via-teal-600 to-orange-600 bg-clip-text text-transparent">
            External Links
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Quick access to essential external services and portals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {externalLinks.map((link, index) => (
            <motion.div
              key={link.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04 }}
              className={`group cursor-pointer`}
              onClick={() => window.open(link.href, "_blank")}
            >
              <Card
                className={`relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-white/30 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 ${link.shadowColor}`}
              >
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div
                    className={`p-4 rounded-2xl bg-gradient-to-br ${link.color} mb-4 shadow-lg`}
                  >
                    <link.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {link.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {link.description}
                  </p>
                  <span className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:underline transition-colors">
                    Visit <ChevronRight className="ml-2 h-5 w-5" />
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
