import React, { useState, useEffect } from "react";
import {
  GraduationCap,
  Users,
  ChevronRight,
  Sparkles,
} from "lucide-react";

// Mock Button component
const Button: React.FC<{
  size?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}> = ({ size, className, children, onClick }) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-500 transform hover:scale-105 active:scale-95 relative overflow-hidden group";
  const sizeClasses =
    size === "lg" ? "px-8 py-4 text-lg" : "px-6 py-3 text-base";

  return (
    <button
      className={`${baseClasses} ${sizeClasses} ${className}`}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      {children}
    </button>
  );
};

// Mock AuthModal component
const AuthModal: React.FC<{
  mode: "login" | "register" | null;
  onClose: () => void;
}> = ({ mode, onClose }) => {
  if (!mode) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-lg z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-8 max-w-md w-full shadow-2xl animate-slide-up">
        <div className="text-center mb-6">
          <div className="bg-gradient-to-br from-blue-500 to-teal-500 p-3 rounded-full w-16 h-16 mx-auto mb-4 shadow-lg">
            {mode === "login" ? (
              <Users className="h-10 w-10 text-white" />
            ) : (
              <GraduationCap className="h-10 w-10 text-white" />
            )}
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">
            {mode === "login" ? "Student Login" : "Student Registration"}
          </h2>
          <p className="text-gray-300">
            {mode === "login"
              ? "Access your NIT AP portal"
              : "Join NIT Andhra Pradesh"}
          </p>
        </div>

        <div className="space-y-4 mb-6">
          <input
            type="text"
            placeholder={mode === "login" ? "Student ID" : "Full Name"}
            className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm transition-all"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm transition-all"
          />
        </div>

        <div className="flex gap-3">
          <Button
            size="lg"
            className="flex-1 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white shadow-lg"
            onClick={onClose}
          >
            {mode === "login" ? "Login" : "Register"}
          </Button>
          <Button
            size="lg"
            className="px-6 bg-white/10 hover:bg-white/20 text-white border border-white/30"
            onClick={onClose}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

// Enhanced Typewriter effect
const Typewriter: React.FC = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = [
    "One Portal. Every Possibility.",
    "Simplifying Campus Life.",
    "Empowering Every Student Journey.",
    "From Classrooms to Careers.",
    "Designed for Students, by Students.",
    "Smart Access to All Campus Services.",
  ];
  

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <span className="text-gradient-animated">
      {text}
      <span className="border-r-2 border-blue-400 animate-pulse ml-1">|</span>
    </span>
  );
};

// Floating particles
const FloatingParticles: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${10 + Math.random() * 20}s`,
          }}
        >
          <Sparkles className="h-2 w-2 text-blue-300" />
        </div>
      ))}
    </div>
  );
};

export const Hero: React.FC = () => {
  const [authMode, setAuthMode] = useState<"login" | "register" | null>(null);

  return (
    <>
      <style>{`
        .hero-bg {
          background-image: url("https://nitandhra.ac.in/main/assets/images/about/pic1.webp");
          background-position: center top;
          background-size: cover;
          background-repeat: no-repeat;
          width: 100%;
          height: 100%;
        }
        @media (max-width: 640px) {
          .hero-bg {
            background-position: center 30%;
            background-size: cover;
            min-height: 100vh;
          }
        }
        .text-gradient-animated {
          background: linear-gradient(
            90deg,
            #e0e7ff 0%,
            #a5f3fc 20%,
            #fef9c3 40%,
            #fbcfe8 60%,
            #f0abfc 80%,
            #e0e7ff 100%
          );
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: text-gradient 4s ease infinite;
        }
        .text-gradient-portal {
          background: linear-gradient(90deg, #f0fdfa 0%, #bae6fd 50%, #f0fdfa 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: text-gradient 4s ease infinite;
        }
        .text-gradient-typewriter {
          background: linear-gradient(90deg, #fef9c3 0%, #a7f3d0 50%, #fef9c3 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: text-gradient 4s ease infinite;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(100px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(5deg);
          }
          66% {
            transform: translateY(-10px) rotate(-3deg);
          }
        }

        @keyframes gradient-x {
          0%,
          100% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
        }

        @keyframes text-gradient {
          0%,100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.4),
              0 0 60px rgba(59, 130, 246, 0.1);
          }
          50% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.6),
              0 0 100px rgba(59, 130, 246, 0.2);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.5s ease-out;
        }
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
      `}</style>

      <section className="relative flex items-center justify-center overflow-hidden z-0 py-4 md:py-8 min-h-[40vh] md:min-h-[35vh]">
        {/* Responsive Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="hero-bg absolute inset-0">
            {/* Enhanced overlay with better mobile contrast */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80 md:from-black/70 md:via-black/50 md:to-black/70"></div>
            {/* Animated overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-purple-900/20"></div>
          </div>
        </div>

        {/* Enhanced floating elements - always below main content */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <FloatingParticles />
          <div className="absolute top-1/4 left-4 md:left-10 w-48 md:w-72 h-48 md:h-72 bg-blue-500/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-4 md:right-10 w-56 md:w-80 h-56 md:h-80 bg-teal-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 md:w-64 h-32 md:h-64 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
        </div>

        {/* Main Content - always above overlays */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Logo and Institution Name */}
            <div className="mb-2 md:mb-4 animate-fade-in">
              <div className="flex flex-col items-center gap-2 md:gap-3 mb-2 md:mb-4">
                <div className="bg-gradient-to-br from-blue-600 via-teal-600 to-purple-600 p-3 md:p-4 rounded-full shadow-2xl animate-pulse-glow transform hover:scale-110 transition-all duration-500">
                  <GraduationCap className="h-10 w-10 md:h-16 md:w-16 text-white drop-shadow-lg" />
                </div>

                <div className="text-center space-y-0.5 md:space-y-1">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black leading-tight">
                    <span className="block text-gradient-animated drop-shadow-lg">
                      NIT ANDHRA PRADESH
                    </span>
                  </h1>
                  <div className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gradient-portal drop-shadow-lg">
                    STUDENT PORTAL
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Tagline */}
            <div className="mb-3 md:mb-4 space-y-1 md:space-y-2">
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold min-h-[1.5rem] flex items-center justify-center">
                <span className="text-gradient-typewriter">
                  <Typewriter />
                </span>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-xl mx-auto leading-relaxed px-1">
                Your comprehensive gateway to academic excellence, campus resources, and student services.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center items-center mb-4 md:mb-6 px-1">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600/90 to-blue-700/90 hover:from-blue-500/90 hover:to-blue-600/90 text-white shadow-xl shadow-blue-500/25 backdrop-blur-sm border border-blue-400/30 min-w-[200px]"
                onClick={() => setAuthMode("login")}
              >
                <Users className="mr-3 h-5 w-5" />
                Student Login
                <ChevronRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-teal-600/90 to-teal-700/90 hover:from-teal-500/90 hover:to-teal-600/90 text-white shadow-xl shadow-teal-500/25 backdrop-blur-sm border border-teal-400/30 min-w-[200px]"
                onClick={() => setAuthMode("register")}
              >
                <GraduationCap className="mr-3 h-5 w-5" />
                New Registration
                <ChevronRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

          </div>
        </div>

        <AuthModal mode={authMode} onClose={() => setAuthMode(null)} />
      </section>
    </>
  );
};
