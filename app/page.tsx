"use client";

import { HeroSection } from '@/components/sections/hero-section';
import { AccomplishmentsSection } from '@/components/sections/accomplishments-section';
import { ServicesSection } from '@/components/sections/services-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { PackagesSection } from '@/components/sections/packages-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <AccomplishmentsSection />
      <ServicesSection />
      <TestimonialsSection />
      <PackagesSection />
      <ContactSection />
    </div>
  );
}