"use client";

import { LayoutGroup } from "framer-motion";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { SideHustles } from "@/components/sidehustles";
import { Preloader } from "@/components/preloader";
import WorkingExperience from "@/components/working";
import { Footer } from "@/components/footer";
import { SectionNavigation } from "@/components/section-nav";

export default function Home() {
  return (
    <LayoutGroup>
      <Preloader />
      <SectionNavigation />
      <main className="min-h-screen py-20 sm:pt-20 pt-8 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-18 mx-auto sm:overflow-hidden">
          <Header />
          <Hero />
          <WorkingExperience />
          <SideHustles />
          <Projects />
          <Footer />
        </div>
      </main>
    </LayoutGroup>
  );
}
