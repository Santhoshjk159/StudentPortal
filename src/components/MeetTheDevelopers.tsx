import { Github, Linkedin } from "lucide-react";
import { useState } from "react";
import santhoshimg from "../asset/team/santhosh.png";
import balajiimg from "../asset/team/balaji.jpg";
import sanjayimg from "../asset/team/sanjay.jpg";

const developers = [
  {
    name: "Santhosh J K",
    role: "Full Stack Developer",
    github: "https://github.com/Santhoshjk159",
    linkedin: "https://www.linkedin.com/in/jksanthosh159/",
    image: santhoshimg,
  },
  {
    name: "Hari Venkata Balaji Sunkara",
    role: "Full Stack Developer",
    github: "https://github.com/BalajiSunkara-123",
    linkedin:
      "https://www.linkedin.com/in/hari-venkata-balaji-sunkara-21a773294/",
    image: balajiimg,
  },
  {
    name: "Sanjay B",
    role: "UI/UX Designer",
    github: "https://github.com/Sanjay-3011",
    linkedin: "https://www.linkedin.com/in/sanjaybalasubramanian/",
    image: sanjayimg,
  },
  {
    name: "User",
    role: "Backend Developer",
    github: "https://github.com/priya",
    linkedin: "https://www.linkedin.com/in/sanjaybalasubramanian/",
    image: "",
  },
];

export function MeetTheDevelopers() {
  const [flipped, setFlipped] = useState<{ [key: number]: boolean }>({});

  return (
    <section className="relative py-16 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-blue-950 z-10">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Team
            </span>
          </h2>
        </div>

        {/* ID Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {developers.map((dev, idx) => (
            <div
              key={dev.name}
              className={`flip-card${flipped[idx] ? " flipped" : ""}`}
              onClick={() =>
                setFlipped((prev) => ({
                  ...prev,
                  [idx]: !prev[idx],
                }))
              }
              onMouseEnter={() =>
                setFlipped((prev) => ({ ...prev, [idx]: true }))
              }
              onMouseLeave={() =>
                setFlipped((prev) => ({ ...prev, [idx]: false }))
              }
            >
              <div
                className={`flip-card-inner${flipped[idx] ? " flipped" : ""}`}
              >
                {/* Front Side - ID Card Style */}
                <div className="flip-card-front">
                  <div className="relative h-full bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/50 overflow-hidden">
                    {/* Company Header */}
                    <div className="bg-blue-600 h-16 flex items-center justify-center">
                      <h4 className="text-white font-bold text-sm tracking-wider">
                        {dev.role}
                      </h4>
                    </div>

                    {/* Profile Section */}
                    <div className="p-6 text-center">
                      {/* Profile Image */}
                      <div className="relative w-24 h-24 mx-auto mb-4">
                        <img
                          src={dev.image}
                          alt={dev.name}
                          className="w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-lg min-w-[96px] min-h-[96px]"
                        />
                      </div>

                      {/* Name */}
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                        {dev.name}
                      </h3>
                    </div>

                    {/* Bottom Stripe */}
                    <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                  </div>
                </div>

                {/* Back Side - Professional Details */}
                <div className="flip-card-back">
                  <div className="relative h-full bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl shadow-xl overflow-hidden">
                    {/* Decorative Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-4 right-4 w-20 h-20 border border-white/20 rounded-full"></div>
                      <div className="absolute bottom-4 left-4 w-16 h-16 border border-white/20 rounded-full"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/10 rounded-full"></div>
                    </div>

                    <div className="relative h-full flex flex-col justify-center items-center p-6 text-white text-center">
                      {/* Role */}
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold mb-2">{dev.name}</h3>
                        <div className="w-16 h-1 bg-white/30 mx-auto rounded-full"></div>
                      </div>

                      {/* Social Links */}
                      <div className="space-y-3">
                        <a
                          href={dev.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-full py-3 px-4 bg-white/20 hover:bg-white/30 rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/10"
                        >
                          <Github className="w-5 h-5 mr-3" />
                          <span className="font-medium">GitHub Profile</span>
                        </a>

                        <a
                          href={dev.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-full py-3 px-4 bg-white/20 hover:bg-white/30 rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/10"
                        >
                          <Linkedin className="w-5 h-5 mr-3" />
                          <span className="font-medium">LinkedIn Profile</span>
                        </a>
                      </div>

                      {/* Bottom Text */}
                      <div className="mt-6 text-xs opacity-70">
                        Let's connect and collaborate!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS for 3D Flip Effect */}
      <style>{`
        .flip-card {
          background-color: transparent;
          width: 100%;
          height: 320px;
          perspective: 1000px;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.8s cubic-bezier(0.4, 0.2, 0.2, 1);
          transform-style: preserve-3d;
          cursor: pointer;
        }

        .flip-card.flipped .flip-card-inner,
        .flip-card-inner.flipped {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }

        @media (max-width: 640px) {
          .flip-card {
            height: 380px;
          }
        }
      `}</style>
    </section>
  );
}
