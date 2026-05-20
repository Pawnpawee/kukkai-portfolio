import ProjectsSection from "@/sections/ProjectsSection";
import DetailProjects from "@/components/DetailProjects";
import { motion } from "framer-motion";

const PROJECTS_DATA = [
  {
    id: "ikigai",
    title: "Ikigai: The Journey Of Life",
    description:
      "AI-driven interactive storytelling for personalized student career discovery",
    skills: [
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "Framer Motion",
      "ASP.NET C#",
      "n8n",
      "AI",
    ],
    link: "https://example.com",
    repository: "https://github.com/example/ikigai",
    year: "2026",
  },
];

export default function CodingProjectsPage() {
  return (
    <section className="flex flex-col items-center p-4 md:p-8 lg:p-[100px] w-full min-h-screen relative z-10 pt-[150px] lg:pt-[100px]">
      <div className="flex flex-col items-center w-full max-w-7xl mx-auto gap-20">
        <div className="flex flex-col w-full gap-20 mt-10">
          <div className="flex flex-col gap-10">
            {/* Year Label */}
            <div className="bg-[#AEDEFC] border-2 border-white px-8 py-3 rounded-[50px] shadow-[0px_2px_30px_0px_rgba(0,0,0,0.1)] self-start">
              <h2 className="font-manjari font-bold text-3xl text-black">
                2026
              </h2>
            </div>

            {/* Projects List */}
            <div className="flex flex-col w-full gap-10 pl-0 lg:pl-12">
              {PROJECTS_DATA.map((project) => (
                <div
                  key={project.id}
                  className="initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5 }}"
                >
                  <DetailProjects project={project} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
