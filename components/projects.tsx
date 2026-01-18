"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import storeImage from '../public/jawad-store.jpg';
import hallBookingImage from '../public/hall-booking.jpg';
import rfImage from "../public/rf-manager.jpg";

const projects = [
     {
    title: "E-Commerce Platform Jawad store",
    description: "Jawad E-commerce Site Explore our products and enjoy shopping!",
    image: storeImage,
    tags: ["React JavaScript 72.5%", "CSS 25.9%", "HTML 1.6%"],
    demoUrl: "https://jawadstore.vercel.app/",
    githubUrl: "https://github.com/JawadHalawa/jawad_store.git",
    type: "webdev",
  },
  {
    title: "Hall Booking Platform",
    description: "Our App Explores Great Halls & Services In Bahrain In Jordan",
    image: hallBookingImage,
    tags: ["wordpress", "php", "SQL", "javascript"],
    demoUrl: "https://hallbooking.aswadweb.net/",
    githubUrl: "https://hallbooking.aswadweb.net/",
    type: "webdev",
  },
  {
    title: "SOP for RF Planning Tool",
    description: "Standard Operating Procedures for radio system to maintenance and check the stations",
    tags: ["TypeScript 95.3%", "JavaScript 3.3%", "HTML 1.2%", "CSS 0.2%"],
    image: rfImage,
    demoUrl: "https://sop4rf.netlify.app/",
    githubUrl: "https://github.com/JawadHalawa/sop4rf.git",
    type: "webdev for telecom",
  }
];

export function Projects() {
  const [filter, setFilter] = useState("all");
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.type === filter);

  return (
    <section id="projects" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl" />
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        
        {/* Mobile-friendly filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 px-4">
          <button
            className={`px-4 py-2 rounded-md transition-all text-sm ${filter === "all" ? "bg-background shadow-sm" : "bg-muted hover:bg-muted/80"}`}
            onClick={() => setFilter("all")}
          >
            All Projects
          </button>
          
          <button
            className={`px-4 py-2 rounded-md transition-all text-sm ${filter === "webdev for management" ? "bg-background shadow-sm" : "bg-muted hover:bg-muted/80"}`}
            onClick={() => setFilter("webdev for management")}
          >
            Management
          </button>
          <button
            className={`px-4 py-2 rounded-md transition-all text-sm ${filter === "webdev" ? "bg-background shadow-sm" : "bg-muted hover:bg-muted/80"}`}
            onClick={() => setFilter("webdev")}
          >
            Web Development
          </button>
          <button
            className={`px-4 py-2 rounded-md transition-all text-sm ${filter === "webdev for telecom" ? "bg-background shadow-sm" : "bg-muted hover:bg-muted/80"}`}
            onClick={() => setFilter("webdev for telecom")}
          >
            Telecom Solutions
          </button>
        </div>
        
        {/* Three projects per row on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              layout
            >
              <Card className="overflow-hidden h-full group">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Code className="h-12 w-12 text-white" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription className="text-sm">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.type === "webdev for management" ? (
                      // Management projects show Google Drive link instead of Demo/Code
                      <Button variant="outline" size="sm" asChild className="group flex-1">
                        <a href={project.driveUrl} target="_blank" rel="noopener noreferrer">
                          <Folder className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" /> 
                          Project Demo
                        </a>
                      </Button>
                    ) : (
                      // Regular projects show Demo and Code links
                      <>
                        <Button variant="outline" size="sm" asChild className="group flex-1">
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" /> 
                            <span className="hidden sm:inline">Live Demo</span>
                            <span className="sm:hidden">Demo</span>
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" asChild className="group flex-1">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" /> 
                            <span className="hidden sm:inline">Code</span>
                            <span className="sm:hidden">Code</span>
                          </a>
                        </Button>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Show message if no projects match the filter */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground">No projects found for this category.</p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
