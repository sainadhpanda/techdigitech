import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Shield, Cloud, Megaphone, Brain, MessageSquare, Award, FileText, Target, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const TECH_PROGRAMS = [
  {
    title: "Full-Stack Web Development",
    icon: <Code className="h-6 w-6" />,
    duration: "16 Weeks",
    badge: "Most Popular",
    outcomes: ["React & Node.js proficiency", "REST & GraphQL APIs", "Database design (SQL + NoSQL)", "Deployment on AWS/Vercel"],
    color: "text-primary",
    bg: "bg-primary/10",
    badgeColor: "bg-primary text-primary-foreground",
  },
  {
    title: "Data Science & AI",
    icon: <Brain className="h-6 w-6" />,
    duration: "14 Weeks",
    badge: "High Demand",
    outcomes: ["Python for Data Science", "Machine Learning models", "Data visualization (Power BI)", "Statistical analysis"],
    color: "text-violet-500",
    bg: "bg-violet-500/10",
    badgeColor: "bg-violet-500 text-white",
  },
  {
    title: "Data Analytics",
    icon: <Database className="h-6 w-6" />,
    duration: "10 Weeks",
    badge: null,
    outcomes: ["Advanced SQL & Excel", "Power BI / Tableau", "Business intelligence reporting", "KPI tracking & dashboards"],
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    badgeColor: "",
  },
  {
    title: "Cloud Computing (AWS/Azure)",
    icon: <Cloud className="h-6 w-6" />,
    duration: "12 Weeks",
    badge: null,
    outcomes: ["AWS & Azure core services", "Cloud architecture design", "DevOps fundamentals", "Certification prep (AWS/AZ-900)"],
    color: "text-sky-500",
    bg: "bg-sky-500/10",
    badgeColor: "",
  },
  {
    title: "Cybersecurity",
    icon: <Shield className="h-6 w-6" />,
    duration: "14 Weeks",
    badge: null,
    outcomes: ["Ethical hacking & pen testing", "Network & application security", "Incident response", "CEH exam preparation"],
    color: "text-rose-500",
    bg: "bg-rose-500/10",
    badgeColor: "",
  },
  {
    title: "Digital Marketing",
    icon: <Megaphone className="h-6 w-6" />,
    duration: "8 Weeks",
    badge: null,
    outcomes: ["SEO / SEM mastery", "Social media marketing", "Google & Meta Ads", "Analytics & growth hacking"],
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    badgeColor: "",
  },
];

const SOFT_SKILLS = [
  {
    title: "Professional Communication",
    icon: <MessageSquare className="h-6 w-6" />,
    duration: "4 Weeks",
    outcomes: ["Clear articulation", "Business email writing", "Presentation skills"],
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
  {
    title: "Leadership & Management",
    icon: <Award className="h-6 w-6" />,
    duration: "6 Weeks",
    outcomes: ["Team leadership techniques", "Conflict resolution", "Strategic thinking"],
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    title: "Resume & Portfolio Building",
    icon: <FileText className="h-6 w-6" />,
    duration: "2 Weeks",
    outcomes: ["ATS-optimized resumes", "LinkedIn optimization", "GitHub portfolio"],
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    title: "Interview Preparation",
    icon: <Target className="h-6 w-6" />,
    duration: "4 Weeks",
    outcomes: ["Mock interviews (live)", "STAR methodology", "Salary negotiation"],
    color: "text-teal-500",
    bg: "bg-teal-500/10",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Programs() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <section className="pt-24 pb-16 bg-primary/5 border-b border-primary/10">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-6"
          >
            Our Programs
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6"
          >
            Training Programs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            Industry-designed programs that combine technical depth with the interpersonal skills needed to thrive in any digital workplace.
          </motion.p>
        </div>
      </section>

      {/* Tech Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold text-foreground">Technical Programs</h2>
            <p className="text-muted-foreground mt-2 text-lg">Master the skills that every company is hiring for right now.</p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {TECH_PROGRAMS.map((program) => (
              <motion.div
                key={program.title}
                variants={cardVariants}
                className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-primary/30 transition-all group relative overflow-hidden"
              >
                {program.badge && (
                  <span className={`absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full ${program.badgeColor}`}>
                    {program.badge}
                  </span>
                )}
                <div className={`h-12 w-12 rounded-xl flex items-center justify-center mb-6 ${program.bg} ${program.color}`}>
                  {program.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{program.title}</h3>

                <div className="flex items-center text-sm text-muted-foreground mb-6 bg-muted/50 w-fit px-3 py-1.5 rounded-full">
                  <Clock className="w-4 h-4 mr-2" />
                  {program.duration}
                </div>

                <div className="space-y-3">
                  <p className="text-sm font-semibold text-foreground">Key Outcomes:</p>
                  <ul className="space-y-2">
                    {program.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-primary/70 shrink-0" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Soft Skills */}
      <section className="py-20 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold text-foreground">Soft Skills Mastery</h2>
            <p className="text-muted-foreground mt-2 text-lg">The human edge that transforms a qualified candidate into a hired professional.</p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {SOFT_SKILLS.map((program) => (
              <motion.div key={program.title} variants={cardVariants} className="bg-background border border-border p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-primary/30 transition-all">
                <div className={`h-12 w-12 rounded-xl flex items-center justify-center mb-6 ${program.bg} ${program.color}`}>
                  {program.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-4">{program.title}</h3>

                <div className="flex items-center text-sm text-muted-foreground mb-6 bg-muted/50 w-fit px-3 py-1.5 rounded-full">
                  <Clock className="w-4 h-4 mr-2" />
                  {program.duration}
                </div>

                <ul className="space-y-2">
                  {program.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-start text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-secondary/70 shrink-0" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enroll CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-6">Not Sure Which Program Is Right for You?</h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Book a free 30-minute career counseling session with our team. We'll help you pick the best path based on your goals and background.
          </p>
          <Button size="lg" variant="secondary" className="rounded-full px-10 h-14 text-base font-semibold bg-white text-primary hover:bg-white/90" asChild>
            <Link href="/placements">
              Get Free Counseling <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
