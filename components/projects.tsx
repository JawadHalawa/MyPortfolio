"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import storeImage from '../public/jawad-store.jpg';
import hallBookingImage from '../public/hall booking.jpg';
import rfImage from "../public/rf manager.jpg";
const projects = [
  {
    title: "E-Commerce Platform Jawad store ",
    description: "Jawad E-commerce Site Explore our products and enjoy shopping!",
    image: storeImage,
    tags: ["React JavaScript 72.5%","CSS 25.9%" ,"HTML 1.6%"],
    demoUrl: "https://jawadstore.vercel.app/",
    githubUrl: "https://github.com/JawadHalawa/jawad_store.git",
    type: "webdev",
  },
  {
    title: "sop for RF Planning Tool",
    description: "Standard Operating Procedures for radio system to maintenance and check the stations",
    tags: ["TypeScript 95.3%", "JavaScript 3.3%", "HTML 1.2%", "CSS 0.2%"],
    image: rfImage,
    demoUrl: "https://sop4rf.netlify.app/",
    githubUrl: "https://github.com/JawadHalawa/sop4rf.git",
    type: "webdev for telecom",
  },
  {
    title: "hall booking Platform",
    description: "Our App Explores Great Halls & Services In Bahrain In Jordan",
    image: hallBookingImage,
    tags: ["wordpress", "php", "SQL", "javascript"],
    demoUrl: "https://hallbooking.aswadweb.net/",
    githubUrl: "https://hallbooking.aswadweb.net/",
    type: "webdev",
  },
  {
    title: "jawad academy Management System",
    description: "manage your school, university, institute with our system ",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop",
    tags: ["Node.js", "GraphQL", "MongoDB", "React"],
    demoUrl: "#",
    githubUrl: "#",
    type: "webdev",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}