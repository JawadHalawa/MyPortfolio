"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Wifi, Database, Globe, Shield, Smartphone, Brain, Users, RefreshCw, MessageSquare, GraduationCap } from "lucide-react";

const telecomSkills = [
  { name: "Network Design & Implementation", icon: Wifi },
  { name: "RF Systems", icon: Wifi },
  { name: "Wireless Communications", icon: Smartphone },
  { name: "Fiber Optics", icon: Globe },
  { name: "Network Security", icon: Shield },
  { name: "Protocol Analysis", icon: Database },
];

const webDevSkills = [
  { name: "React & Next.js", icon: Code },
  { name: "TypeScript", icon: Code },
  { name: "Node.js", icon: Database },
  { name: "RESTful APIs", icon: Globe },
  { name: "Database Design", icon: Database },
  { name: "UI/UX Design", icon: Smartphone },
];

const managementSkills = [
  { 
    name: "Decision Making & Crisis Management", 
    icon: Brain,
    description: "Ability to make decisive actions under pressure and manage crises effectively."
  },
  { 
    name: "Leadership & Stakeholder Relations", 
    icon: Users,
    description: "Proven ability to lead, motivate large teams, and build strong stakeholder relationships."
  },
  { 
    name: "Adaptability", 
    icon: RefreshCw,
    description: "Flexibility and rapid response in changing and complex environments."
  },
  { 
    name: "Public Relations", 
    icon: MessageSquare,
    description: "Strong communication skills and proficiency in public relations."
  },
  { 
    name: "Fast Learner", 
    icon: GraduationCap,
    description: "Quick and adaptive learner, always eager to master new technologies and methodologies."
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-secondary/10 rounded-full filter blur-3xl" />
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        <Tabs defaultValue="management" className="max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8 h-auto p-1">
            <TabsTrigger value="management" className="flex-col gap-1 py-3 px-2 data-[state=active]:bg-background">
              <Users className="h-5 w-5" />
              <span className="text-xs sm:text-sm">Management</span>
            </TabsTrigger>
            <TabsTrigger value="webdev" className="flex-col gap-1 py-3 px-2 data-[state=active]:bg-background">
              <Code className="h-5 w-5" />
              <span className="text-xs sm:text-sm">Web Dev</span>
            </TabsTrigger>
            <TabsTrigger value="telecom" className="flex-col gap-1 py-3 px-2 data-[state=active]:bg-background">
              <Wifi className="h-5 w-5" />
              <span className="text-xs sm:text-sm">Communications</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="management">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {managementSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-secondary p-6 rounded-lg cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                      <skill.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="telecom">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
              {telecomSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-secondary p-4 rounded-lg text-center flex flex-col items-center gap-2 cursor-pointer"
                >
                  <skill.icon className="h-8 w-8 text-primary" />
                  <span className="text-sm font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="webdev">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
              {webDevSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-secondary p-4 rounded-lg text-center flex flex-col items-center gap-2 cursor-pointer"
                >
                  <skill.icon className="h-8 w-8 text-primary" />
                  <span className="text-sm font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </section>
  );
}