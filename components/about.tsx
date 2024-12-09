"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Telecommunications Background</h3>
            <p className="text-muted-foreground">
              With extensive experience in network infrastructure, RF systems, and
              telecommunications protocols, I specialize in designing and implementing
              robust communication solutions that connect people and systems.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Web Development Journey</h3>
            <p className="text-muted-foreground">
              Passionate about creating exceptional web experiences, I leverage modern
              technologies and best practices to build scalable, performant applications
              that solve real-world problems.
            </p>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}