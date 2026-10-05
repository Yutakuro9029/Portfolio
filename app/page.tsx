import Sidebar from "@/components/Sidebar";
import { Hero, About, Education, Contact } from "@/components/Intro";
import ProjectsBento from "@/components/ProjectsBento";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 lg:pl-64">
      <Sidebar />
      <main>
        <Hero />
        <About />
        <Education />
        <ProjectsBento />
      </main>
      <Contact />
    </div>
  );
}
