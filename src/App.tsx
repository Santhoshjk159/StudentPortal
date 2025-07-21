import React from "react";
import { Background } from "./components/Background";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { PortalsSection } from "./components/PortalsSection";
import { DownloadsSection } from "./components/DownloadsSection";
import { ExternalLinksSection } from "./components/ExternalLinksSection";
import { Footer } from "./components/Footer";
import { MeetTheDevelopers } from "./components/MeetTheDevelopers";

function App() {
  return (
    <div className="min-h-screen relative">
      <Background />
      <Header />
      <main className="pt-20 md:pt-24">
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
        <section id="developers">
          <MeetTheDevelopers />
        </section>
      </main>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}

export default App;
