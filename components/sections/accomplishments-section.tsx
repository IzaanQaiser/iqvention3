"use client";

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Globe, Gauge, LineChart } from 'lucide-react';
import { useEffect } from 'react';

function Counter({ value, duration = 0.5 }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, parseInt(value), { duration });
    return controls.stop;
  }, [count, value, duration]);

  return <motion.span>{rounded}</motion.span>;
}

export function AccomplishmentsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: Users, value: "10", label: "Satisfied Customers", suffix: "+" },
    { icon: Globe, value: "40", label: "Salvaged Websites", suffix: "+" },
    { icon: Gauge, value: "58", label: "Avg. Speed Increase", suffix: "%" },
    { icon: LineChart, value: "125", label: "Revenue Growth", suffix: "%" },
  ];

  return (
    <section ref={ref} id="accomplishments" className="py-20 bg-primary/5">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4">Our Accomplishments</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Delivering exceptional results through innovation and expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <stat.icon className="mx-auto h-8 w-8 mb-4 text-primary" />
              <div className="text-4xl font-bold mb-2">
                <Counter value={stat.value} />
                {stat.suffix}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}