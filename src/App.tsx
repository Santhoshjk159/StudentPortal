import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Background } from "./components/Background";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { PortalsSection } from "./components/PortalsSection";
import { DownloadsSection } from "./components/DownloadsSection";
import { ExternalLinksSection } from "./components/ExternalLinksSection";
import { Footer } from "./components/Footer";
import DevelopersPage from "./pages/Developers";

function App() {
  return (
    <Router>
      <div className="min-h-screen relative">
        <Background />
        <Header />
        <main className="pt-20 md:pt-24">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <section id="home">
                    <Hero />
                  </section>
                  <section id="portals">
                    <PortalsSection />
                  </section>
                  <section id="downloads">
                    <DownloadsSection />
                  </section>
                  <section id="links">
                    <ExternalLinksSection />
                  </section>
                </>
              }
            />
            <Route path="/developers" element={<DevelopersPage />} />
          </Routes>
        </main>
        <section id="contact">
          <Footer />
        </section>
      </div>
    </Router>
  );
}

export default App;
