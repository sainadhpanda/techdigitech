import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Ticker from "@/components/Ticker";
import { ArrowRight, BookOpen, Users, Zap, CheckCircle, Star } from "lucide-react";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/data";

const STATS = [
  { value: "10,000+", label: "Students Trained" },
  { value: "200+", label: "Hiring Partners" },
  { value: "94%", label: "Placement Rate" },
];

const FEATURES = [
  {
    icon: <Zap className="h-7 w-7" />,
    title: "Industry-Led Curriculum",
    desc: "Programs designed with top tech companies. Learn exactly what the market demands today.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: <BookOpen className="h-7 w-7" />,
    title: "Live Project Training",
    desc: "Build a portfolio of real projects. Every skill you learn gets applied to actual industry scenarios.",
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
  {
    icon: <Users className="h-7 w-7" />,
    title: "Dedicated Placement Cell",
    desc: "Our team works tirelessly to connect you with the right opportunities at the right companies.",
    color: "text-violet-500",
    bg: "bg-violet-500/10",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-24 pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/15 via-background to-background -z-10"></div>
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-secondary/8 blur-3xl -z-10 pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                Your Digital Career Starts Here
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-tight"
            >
              Learn Digital.{" "}
              <span className="relative inline-block">
                <span style={{ background: "linear-gradient(135deg, #6d4aff, #0bc5ea)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Lead Tomorrow.
                </span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              Master Web Development, Data Science, Cloud, AI, and Cybersecurity with TechDigiEdu. Industry-certified programs with guaranteed placement support.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button size="lg" className="rounded-full px-8 text-base h-14 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20" asChild>
                <Link href="/programs">
                  Explore Programs <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 text-base h-14 border-primary/30 hover:bg-primary/5" asChild>
                <Link href="/placements">View Placements</Link>
              </Button>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-3 pt-2"
            >
              <div className="flex -space-x-2">
                {["AM", "PN", "RS", "SK"].map((initials, i) => (
                  <div
                    key={i}
                    className="h-9 w-9 rounded-full border-2 border-background flex items-center justify-center text-xs font-bold text-white"
                    style={{
                      background: `hsl(${240 + i * 30} 80% 55%)`,
                    }}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground font-medium">
                Trusted by <span className="text-foreground font-semibold">10,000+</span> learners
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-border">
            {STATS.map((stat) => (
              <div key={stat.label} className="space-y-2 py-4">
                <h3
                  className="text-5xl font-extrabold"
                  style={{ background: "linear-gradient(135deg, #6d4aff, #0bc5ea)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                >
                  {stat.value}
                </h3>
                <p className="text-muted-foreground font-medium text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why TechDigiEdu */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Why Choose TechDigiEdu?</h2>
              <p className="text-lg text-muted-foreground">
                We don't just teach technology — we engineer careers. Every program is built around one goal: getting you hired.
              </p>
            </div>
            <Button variant="ghost" className="text-primary hover:text-primary/80 hover:bg-primary/10 shrink-0" asChild>
              <Link href="/programs">All Programs <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {FEATURES.map((f) => (
              <div key={f.title} className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all group">
                <div className={`h-14 w-14 ${f.bg} ${f.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you'll learn */}
      <section className="py-20 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Everything You Need to Succeed</h2>
            <p className="text-lg text-muted-foreground">Every program at TechDigiEdu includes these core pillars.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              "Live instructor-led sessions",
              "Hands-on projects & capstone",
              "Industry mentorship",
              "Soft skills & interview prep",
              "Resume & LinkedIn coaching",
              "Lifetime placement support",
              "Certification upon completion",
              "Access to alumni network",
              "EMI & scholarship options",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-background rounded-xl px-5 py-4 border border-border shadow-sm">
                <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ticker Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 md:px-6 mb-8 text-center">
          <h2 className="text-2xl font-bold text-foreground">Our Alumni Work At</h2>
        </div>
        <Ticker />
      </section>

      {/* Mini testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-extrabold text-foreground mb-2">Real Stories. Real Results.</h2>
              <p className="text-muted-foreground">Hear what our graduates have to say.</p>
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
                <p className="text-sm text-muted-foreground italic leading-relaxed mb-6">"{t.text.slice(0, 140)}…"</p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-sm">{t.name}</h4>
                    <p className="text-xs text-muted-foreground">Placed at <span className="font-semibold text-primary">{t.company}</span></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ready to Build Your Digital Future?</h2>
          <p className="text-xl text-primary-foreground/80 mb-10">
            Join thousands of professionals who transformed their careers with TechDigiEdu. Your first step is just a click away.
          </p>
          <Button size="lg" variant="secondary" className="rounded-full px-10 h-14 text-base font-semibold bg-white text-primary hover:bg-white/90" asChild>
            <Link href="/programs">
              Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
