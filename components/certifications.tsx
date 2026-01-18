"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Award, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

const certifications = [
     {
    title: "front end web development",
    issuer: "udacity.com",
    date: "2020",
    credentialId: "AFKTGSAA",
    image: "/front end udacity.jpg",
    tags: ["programming", "Web development"],
    credentialUrl: "https://drive.google.com/file/d/1mXt0uHym9Ym4zT3z7ptRtbrcBYP7sZol/view?usp=sharing",
    type: "webdev",
  },
  {
    title: "installation & maintenance of routed & switched-CCNA",
    issuer: "UNHCR",
    date: "2014",
    credentialId: "DAM 1191",
    image: "/ccna.jpg",
    tags: ["network", "CCNA"],
    credentialUrl: "https://drive.google.com/file/d/1vU4ZzkpSnB-5lYsvWY5xUCPXYPiZN8aK/view?usp=drive_link",
    type: "telecom",
  },
];

export function Certifications() {
  const [filter, setFilter] = useState("all");
  
  const filteredCertifications = filter === "all" 
    ? certifications 
    : certifications.filter(cert => cert.type === filter);

  const getCertificationTypeLabel = (type: string) => {
    switch(type) {
      case "webdev":
        return "Web Development";
      case "telecom":
        return "Telecommunications";
      case "management":
        return "Management";
      default:
        return "Other";
    }
  };

  return (
    <section id="certifications" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-12 text-center">Certifications</h2>
        
        {/* Mobile-friendly filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 px-4">
          <button
            className={`px-4 py-2 rounded-md transition-all text-sm ${filter === "all" ? "bg-background shadow-sm" : "bg-muted hover:bg-muted/80"}`}
            onClick={() => setFilter("all")}
          >
            All Certifications
          </button>
          <button
            className={`px-4 py-2 rounded-md transition-all text-sm ${filter === "management" ? "bg-background shadow-sm" : "bg-muted hover:bg-muted/80"}`}
            onClick={() => setFilter("management")}
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
            className={`px-4 py-2 rounded-md transition-all text-sm ${filter === "telecom" ? "bg-background shadow-sm" : "bg-muted hover:bg-muted/80"}`}
            onClick={() => setFilter("telecom")}
          >
            Telecommunications
          </button>
        </div>
        
        {/* Three certifications per row on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="overflow-hidden h-full">
                <div className="relative h-48 w-full">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <Badge variant="secondary" className="mb-2 text-xs">
                      {getCertificationTypeLabel(cert.type)}
                    </Badge>
                    <h3 className="text-lg sm:text-xl font-bold">{cert.title}</h3>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                    <Award className="h-5 w-5 text-primary" />
                    {cert.issuer}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4" />
                    {cert.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {cert.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                    <span className="text-xs sm:text-sm text-muted-foreground">ID: {cert.credentialId}</span>
                    <Button variant="outline" size="sm" asChild className="w-full sm:w-auto">
                      <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> 
                        <span className="hidden sm:inline">Verify</span>
                        <span className="sm:hidden">View</span>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Show message if no certifications match the filter */}
        {filteredCertifications.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground">No certifications found for this category.</p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );

}

