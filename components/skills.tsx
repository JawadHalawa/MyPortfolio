"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const telecomSkills = [
  "Network Design & Implementation",
  "RF Systems",
  "Wireless Communications",
  "Fiber Optics",
  "Network Security",
  "Protocol Analysis",
];

const webDevSkills = [
  "React & Next.js",
  "TypeScript",
  "Node.js",
  "RESTful APIs",
  "Database Design",
  "UI/UX Design",
];

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        <Tabs defaultValue="telecom" className="max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="telecom">Telecommunications</TabsTrigger>
            <TabsTrigger value="webdev">Web Development</TabsTrigger>
          </TabsList>
          <TabsContent value="telecom">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
              {telecomSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-secondary p-4 rounded-lg text-center"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="webdev">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
              {webDevSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-secondary p-4 rounded-lg text-center"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </section>
  );
}