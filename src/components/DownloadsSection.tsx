import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Calendar, Download, FileText } from "lucide-react";

const downloads = [
  {
    title: "List of Holidays",
    description: "Complete academic and national holidays calendar",
    icon: Calendar,
    color: "from-purple-500 to-purple-600",
    href: "https://nitandhra.ac.in/main/pdf/List%20of%20holidays%20during%20the%20Year%202025.pdf",
  },
  {
    title: "Academic Calendar",
    description: "Semester dates, exam schedules, and important deadlines",
    icon: FileText,
    color: "from-green-500 to-green-600",
    href: "https://nitandhra.ac.in/main/Announcements/2025/UG/Academic%20Calender%202025-26%20for%20B.Tech%20IInd%20to%20IVth%20Year%20Students.pdf",
  },
];

export function DownloadsSection() {
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
            Downloads
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Important documents and calendars at your fingertips
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {downloads.map((download, index) => (
            <motion.div
              key={download.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04 }}
              className="group"
            >
              <Card className="relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-white/30 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <div
                    className={`p-4 rounded-2xl bg-gradient-to-br ${download.color} shadow-lg mb-4 w-fit mx-auto`}
                  >
                    <download.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {download.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {download.description}
                  </p>
                  <a
                    href={download.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full max-w-xs mx-auto"
                  >
                    <Button
                      variant="glass"
                      className="w-full bg-blue-600/90 hover:bg-blue-700/90 text-white"
                    >
                      View PDF
                    </Button>
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
