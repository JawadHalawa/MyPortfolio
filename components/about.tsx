"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code, Wifi, Users } from "lucide-react";

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
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Management Journey</h3>
              </div>
              <p className="text-muted-foreground">
                leading cross-functional teams and managing multiple projects
                from conception to completion. I excel at stakeholder relations,
                and adapting to rapidly changing environments to deliver
                exceptional results
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">
                  Web Development Journey
                </h3>
              </div>
              <p className="text-muted-foreground">
                Passionate about creating exceptional web experiences, I
                leverage modern technologies and best practices to build
                scalable, performant applications that solve real-world
                problems.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Wifi className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">
                  Telecommunications Background
                </h3>
              </div>
              <p className="text-muted-foreground">
                With extensive experience in network infrastructure, RF systems,
                and telecommunications protocols, I specialize in designing and
                implementing robust communication solutions that connect people
                and systems.
              </p>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
