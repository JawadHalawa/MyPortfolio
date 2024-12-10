"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center py-8 md:py-12">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-4 md:mb-6">
            Web Developer
              <span className="text-primary block mt-2">&</span>
              Telecommunications Engineer
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0">
              Building bridges between hardware and software, creating innovative solutions
              for the connected world.
            </p>
            <Button
              size="lg"
              className="rounded-full"
              onClick={() => {
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Learn More <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
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
              <Image
                src="/profile.png"
                alt="Profile"
                fill
                className="object-cover rounded-full p-2"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}