import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/AboutUs";
import { Activities } from "@/components/Activities";
import { JoinUs } from "@/components/JoinUs";
import { Motto } from "@/components/Motto";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 via-amber-50 to-white">
      <Navigation />
      <Hero />
      <AboutUs />
      <Activities />
      <JoinUs />
      <Motto />
      <Footer />
    </div>
  );
}
