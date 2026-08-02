import React from "react";
import { motion } from "framer-motion";
import Ticker from "@/components/Ticker";
import { TESTIMONIALS } from "@/lib/data";
import { Briefcase, Building2, TrendingUp, Landmark, LineChart, Users, CheckCircle, Star } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const PLACEMENT_SECTORS = [
  {
    icon: <Landmark className="h-8 w-8" />,
    color: "text-primary",
    bg: "bg-primary/10",
    title: "Finance & Banking",
    desc: "Business Analysts, FinTech Ops, Risk & Data roles at banks, NBFCs, and payment companies.",
  },
  {
    icon: <Building2 className="h-8 w-8" />,
    color: "text-secondary",
    bg: "bg-secondary/10",
    title: "IT & Consulting",
    desc: "Software Developers, Cloud Engineers, and Data Scientists at global IT firms and consulting giants.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    color: "text-violet-500",
    bg: "bg-violet-500/10",
    title: "E-commerce & Retail",
    desc: "Digital Marketers, Product Managers, and Analytics leads at leading e-commerce platforms.",
  },
  {
    icon: <LineChart className="h-8 w-8" />,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    title: "Sales & Marketing",
    desc: "Growth Hackers, SEO Specialists, and Performance Marketing roles at top brands.",
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    title: "Startups & Scaleups",
    desc: "Full-stack and cross-functional roles at funded startups with high growth trajectories.",
  },
  {
    icon: <Briefcase className="h-8 w-8" />,
    color: "text-rose-500",
    bg: "bg-rose-500/10",
    title: "Government & PSUs",
    desc: "IT and data-related roles at public sector units and digital government projects.",
  },
];

const PLACEMENT_STATS = [
  { value: "10,000+", label: "Students Placed" },
  { value: "200+", label: "Hiring Partners" },
  { value: "94%", label: "Placement Rate" },
  { value: "₹8L+", label: "Average Package" },
];

export default function Placements() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <section className="pt-24 pb-16 bg-primary/5 border-b border-primary/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-6"
            >
              Placements
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6"
            >
              Our Placements Speak for Themselves
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Digital skills open doors across every industry. Our graduates are placed in finance, IT, e-commerce, and more — at companies that pay well and grow fast.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Placement Stats */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {PLACEMENT_STATS.map((stat) => (
              <div key={stat.label} className="space-y-2">
                <h3 className="text-4xl md:text-5xl font-extrabold">{stat.value}</h3>
                <p className="font-medium text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">Where Our Graduates Land</h2>
            <p className="text-lg text-muted-foreground">
              Our alumni are placed across six major sectors. Digital skills travel further than you think.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PLACEMENT_SECTORS.map((sector) => (
              <div key={sector.title} className="p-6 bg-card border border-border rounded-2xl shadow-sm hover:shadow-md hover:border-primary/30 transition-all group">
                <div className={`h-14 w-14 ${sector.bg} ${sector.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  {sector.icon}
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2">{sector.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{sector.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What our Placement cell does */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-foreground mb-6">Our Dedicated Placement Cell</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                At TechDigiEdu, placement isn't an afterthought — it's baked into every program from day one. Our placement team has built relationships with 200+ hiring partners and works actively on your behalf.
              </p>
              <ul className="space-y-4">
                {[
                  "Resume and LinkedIn profile review & coaching",
                  "1-on-1 mock interview sessions with industry mentors",
                  "Direct referrals to hiring managers at partner companies",
                  "Weekly job alerts tailored to your skills and preferences",
                  "Salary negotiation guidance",
                  "Support continues until you have a signed offer",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-background border border-border rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-extrabold text-foreground mb-6">Placement Process</h3>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Profile Building", desc: "We polish your resume, LinkedIn, and GitHub before you even start applying." },
                  { step: "02", title: "Mock Interviews", desc: "Multiple rounds with industry professionals — technical and HR rounds covered." },
                  { step: "03", title: "Job Matching", desc: "Our team matches you to relevant openings and makes direct introductions." },
                  { step: "04", title: "Offer & Beyond", desc: "We coach you on salary negotiation and ensure a smooth onboarding transition." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="text-3xl font-black text-primary/20 shrink-0 leading-none">{item.step}</div>
                    <div>
                      <h4 className="font-bold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ticker Banner */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 md:px-6 mb-8 text-center">
          <h2 className="text-2xl font-bold text-foreground">Companies That Hire Our Graduates</h2>
        </div>
        <Ticker />
      </section>

      {/* Mini Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-extrabold text-foreground mb-2">Success Stories</h2>
              <p className="text-muted-foreground">Real professionals, real placements.</p>
            </div>
            <Button variant="outline" asChild className="border-primary/30 hover:bg-primary/5">
              <Link href="/testimonials">Read All Stories</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((t, i) => (
              <div key={i} className="p-6 bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} className={`h-4 w-4 ${s <= t.rating ? "text-yellow-400 fill-yellow-400" : "text-muted"}`} />
                  ))}
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-sm">{t.name}</h4>
                    <p className="text-xs text-muted-foreground">Placed at <span className="font-semibold text-primary">{t.company}</span></p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic leading-relaxed">"{t.text.slice(0, 150)}…"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
