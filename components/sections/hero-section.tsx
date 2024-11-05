"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 -z-10" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-primary/5 rounded-full w-[200px] h-[200px]"
            initial={{
              x: Math.floor((i % 3) * 33.33) + "%",
              y: Math.floor(i / 3) * 200,
            }}
            animate={{
              x: [
                Math.floor((i % 3) * 33.33) + "%",
                Math.floor((i % 3) * 33.33 + 10) + "%",
              ],
              y: [
                Math.floor(i / 3) * 200,
                Math.floor(i / 3) * 200 + 50,
              ],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
              Transform Your Digital Presence
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Elevate your business with cutting-edge web development, strategic digital
              marketing, and expert SEO services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                View Our Work
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] hidden lg:block"
          >
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=800&fit=crop"
              alt="Digital Marketing"
              fill
              className="object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}