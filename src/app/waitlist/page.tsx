"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Header1Plus, Paragraph1, Paragraph3 } from "@/common/ui/Text";
import { Star, Menu, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function WaitlistPage() {
  const [email, setEmail] = useState("");

  const features = [
    {
      icon: <Menu className="w-5 h-5" />,
      title: "Curated Access",
      description: "A considered selection of standout fashion pieces.",
    },
    {
      icon: <Star className="w-5 h-5" />,
      title: "For Key Moments",
      description: "Designed for events, travel, and special occasions.",
    },
    {
      icon: <CheckCircle2 className="w-5 h-5" />,
      title: "Thoughtfully Managed",
      description: "Handled with care, quality and detailed attention",
    },
  ];

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-start overflow-x-hidden bg-black text-white">
      {/* --- Background Image Wrapper --- */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/authbg.jpg" // Replace with your image path
          alt="Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        {/* Gradient Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
      </div>

      {/* --- Content --- */}
      <div className="relative z-10 w-full max-w-[1200px] px-6 py-12 flex flex-col items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          {/* Using a placeholder for the 'R' logo */}
          <div className="text-4xl font-serif font-bold tracking-tighter">
            <Link href="/" className="absolute left-1/2 -translate-x-1/2">
              <Image src="/images/logo.svg" alt="Logo" width={45} height={45} />
            </Link>
          </div>
        </motion.div>

        {/* Join Waitlist Status Pill */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <Paragraph1 className="text-xs uppercase tracking-[0.2em] font-medium">
            Join the waitlist
          </Paragraph1>
        </motion.div>

        {/* Hero Text */}
        <div className="text-center max-w-2xl mb-10">
          <Header1Plus className="text-4xl md:text-6xl mb-6 leading-[1.1]">
            Get Early Access to <br /> the Future of Fashion
          </Header1Plus>
          <Paragraph1 className="text-gray-300 md:text-lg max-w-md mx-auto">
            Access exceptional fashion for moments that matter thoughtfully and
            effortlessly
          </Paragraph1>
        </div>

        {/* Waitlist Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full max-w-md space-y-4 mb-8"
        >
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-4 focus:outline-none focus:border-white transition-colors text-center md:text-left"
          />
          <button className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-gray-200 transition-all active:scale-[0.98]">
            <Paragraph1 className="font-bold">Join Waitlist</Paragraph1>
          </button>
        </motion.div>

        {/* Social Proof */}
        <div className="flex flex-col items-center gap-3 mb-20">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <img
                key={i}
                src={`https://i.pravatar.cc/100?img=${i + 10}`}
                alt="user"
                className="w-8 h-8 rounded-full border-2 border-black"
              />
            ))}
          </div>
          <Paragraph1 className="text-xs text-gray-400">
            Join the first wave
          </Paragraph1>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-5xl mt-10">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-8 pt-12 text-center"
            >
              {/* Icon Circle */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#E5E5E5] flex items-center justify-center text-black">
                {feature.icon}
              </div>
              <Paragraph3 className="text-lg font-bold mb-3">
                {feature.title}
              </Paragraph3>
              <Paragraph1 className="text-sm text-gray-400 leading-relaxed">
                {feature.description}
              </Paragraph1>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
