"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Globe, Search, Share2, Smartphone, Zap, Rocket } from 'lucide-react';
import { Card } from '@/components/ui/card';

export function ServicesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites that convert visitors into customers",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Boost your search rankings and organic traffic",
    },
    {
      icon: Share2,
      title: "Digital Marketing",
      description: "Strategic campaigns that drive real results",
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      description: "Responsive designs for all devices",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Lightning-fast loading speeds",
    },
    {
      icon: Rocket,
      title: "Growth Strategy",
      description: "Data-driven approaches to scale your business",
    },
  ];

  return (
    <section ref={ref} id="services" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions to help your business thrive in the modern age
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="transition-all duration-300"
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}