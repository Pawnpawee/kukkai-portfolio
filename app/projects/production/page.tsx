"use client";

import DetailProjects from "@/components/DetailProjects";
import { productionProjectsData } from "@/data/constants";
import { motion } from "framer-motion";

export default function ProductionProjectsPage() {
  // Group projects by year
  const groupedProjects = productionProjectsData.reduce(
    (acc, project) => {
      const year = project.year || "Other";
      if (!acc[year]) acc[year] = [];
      acc[year].push(project);
      return acc;
    },
    {} as Record<string, typeof productionProjectsData>,
  );

  // Sort years descending
  const years = Object.keys(groupedProjects).sort((a, b) => b.localeCompare(a));

  return (
    <section className="relative flex w-full lg:w-9/10 flex-col items-center px-4 py-16 md:px-8 lg:px-16 gap-10">
      <div className="flex flex-col items-center w-full max-w-7xl mx-auto gap-20">
        <div className="flex flex-col w-full gap-20">
          <div className="flex flex-col gap-10 items-center">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center font-manjari text-4xl font-bold text-black lg:text-5xl"
            >
              Video <br />
              Production
            </motion.p>
          </div>

          <div className="flex flex-col w-full gap-20">
            {years.length > 0 ? (
              years.map((year) => (
                <div key={year} className="flex flex-col gap-10 items-center">
                  {/* Year Label */}
                  <div className="bg-[#AEDEFC] border-2 border-white px-8 py-3 rounded-[50px] shadow-[0px_2px_30px_0px_rgba(0,0,0,0.1)] self-start w-full">
                    <h2 className="font-manjari font-bold text-2xl text-black text-center">
                      {year}
                    </h2>
                  </div>

                  {/* Projects List */}
                  <div className="flex flex-col w-full gap-10 items-center">
                    {groupedProjects[year].map((project) => (
                      <div
                        key={project.id}
                        id={project.id}
                        className="w-full flex justify-center scroll-mt-32"
                      >
                        <DetailProjects
                          project={project}
                          layout="row"
                          mediaClass="lg:flex-[2_0_0]"
                          detailClass="lg:flex-[1_0_0]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="flex justify-center w-full py-20">
                <p className="font-manjari text-xl text-gray-500 italic">
                  Coming Soon...
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
