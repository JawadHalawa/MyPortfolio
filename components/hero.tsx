"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github,MessageCircleMore, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const roles = ["Project Manager", "Web Developer", "Communications Engineer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id ="home" className="min-h-[calc(100vh-4rem)] flex items-center py-8 md:py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="block">Hi, I'm</span>
              <span className="text-primary">Jawad Halawa</span>
            </motion.h1>

            <div className="h-10 mb-6">
              <motion.div
                key={textIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary"
              >
                {roles[textIndex]}
              </motion.div>
            </div>

            <motion.p
              className="text-lg sm:text-xl text-muted-foreground mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Building bridges between hardware and software, creating
              innovative solutions for the connected world.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="rounded-full"
                onClick={() => {
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Learn More <ArrowDown className="ml-2 h-4 w-4" />
              </Button>

              <div className="flex gap-3">
                <Button size="icon" variant="outline" className="rounded-full">
                  <a href="https://github.com/JawadHalawa" target="_blank">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button size="icon" variant="outline" className="rounded-full">
                  <a href="https://linkedin.com/in/JawadHalawa" target="_blank">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
            
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative order-first lg:order-last"
          >
            <div className="relative aspect-square w-[280px] sm:w-[320px] md:max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/0 animate-pulse" />
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-secondary/20 to-secondary/0 animate-pulse"
                style={{ animationDelay: "1s" }}
              />
              <Image
                src="/profile.png"
                alt="Profile"
                fill
                className="object-cover rounded-full p-2 relative z-10"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
