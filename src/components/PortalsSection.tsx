import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { BookOpen, UtensilsCrossed, Car, ChevronRight } from "lucide-react";

const portals = [
  {
    title: "Stationary Portal",
    description:
      "Professional printing services designed specifically for NIT-AP students.",
    icon: BookOpen,
    color: "from-blue-500 to-blue-600",
    shadowColor: "shadow-blue-500/25",
    href: "/stationary",
  },
  {
    title: "Canteen Portal",
    description:
      "Streamlined food ordering for NIT-AP students. Browse the daily menu, pre-order, and avoid long queues.",
    icon: UtensilsCrossed,
    color: "from-orange-500 to-orange-600",
    shadowColor: "shadow-orange-500/25",
    href: "/canteen",
  },
  {
    title: "RideShare Portal",
    description:
      "The premier ride-sharing platform for students. Safe, affordable, and community-driven.",
    icon: Car,
    color: "from-teal-500 to-teal-600",
    shadowColor: "shadow-teal-500/25",
    href: "/rideshare",
  },
];

export function PortalsSection() {
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
            Campus Portals
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Access all campus services from one convenient location
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portals.map((portal, index) => (
            <motion.div
              key={portal.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04 }}
              className={`group`}
            >
              <Card
                className={`relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-white/30 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 ${portal.shadowColor}`}
              >
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div
                    className={`p-4 rounded-2xl bg-gradient-to-br ${portal.color} mb-4 shadow-lg`}
                  >
                    <portal.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {portal.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {portal.description}
                  </p>
                  <a
                    href={portal.href}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:underline transition-colors"
                  >
                    Go to Portal <ChevronRight className="ml-2 h-5 w-5" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
