"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function PackagesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const packages = [
    {
      name: "Starter",
      price: "$999",
      gradient: "from-blue-500 via-blue-400 to-blue-500",
      features: [
        "Custom Website Design",
        "Mobile Responsive",
        "Basic SEO Setup",
        "Contact Form",
        "5 Pages",
      ],
    },
    {
      name: "Professional",
      price: "$2,499",
      gradient: "from-violet-500 via-purple-500 to-violet-500",
      features: [
        "Everything in Starter",
        "Advanced SEO",
        "E-commerce Integration",
        "Content Management System",
        "Social Media Integration",
        "15 Pages",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      gradient: "from-rose-500 via-pink-500 to-rose-500",
      features: [
        "Everything in Professional",
        "Custom Functionality",
        "Priority Support",
        "Marketing Strategy",
        "Analytics Dashboard",
        "Unlimited Pages",
      ],
    },
  ];

  return (
    <section ref={ref} id="pricing" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4">Pricing Packages</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect package for your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className={`p-8 relative overflow-hidden ${pkg.popular ? 'border-primary shadow-lg' : ''}`}>
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${pkg.gradient} opacity-5 animate-gradient`}
                  style={{
                    backgroundSize: '200% 200%',
                    animation: 'gradient 8s linear infinite',
                  }}
                />
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm rounded-bl-lg">
                    Popular
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${pkg.gradient} bg-clip-text text-transparent animate-gradient`}>
                  {pkg.name}
                </h3>
                <div className={`text-3xl font-bold mb-6 bg-gradient-to-r ${pkg.gradient} bg-clip-text text-transparent animate-gradient`}>
                  {pkg.price}
                </div>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={pkg.popular ? "default" : "outline"}>
                  Get Started
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}