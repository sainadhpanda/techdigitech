import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Lightbulb, Rocket, Heart, Globe } from "lucide-react";

const TEAM = [
  { name: "Dr. Anand Krishnamurthy", role: "Founder & CEO", initials: "AK", bg: "bg-primary/10", text: "text-primary" },
  { name: "Meera Iyer", role: "Head of Curriculum", initials: "MI", bg: "bg-secondary/10", text: "text-secondary" },
  { name: "Rahul Das", role: "Director of Placements", initials: "RD", bg: "bg-violet-500/10", text: "text-violet-500" },
  { name: "Sunita Joshi", role: "Lead Mentor, Data Science", initials: "SJ", bg: "bg-amber-500/10", text: "text-amber-500" },
];

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <section className="pt-24 pb-16 bg-primary/5 border-b border-primary/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-6"
            >
              About TechDigiEdu
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6"
            >
              Built on a Simple Belief
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              TechDigiEdu was founded on the conviction that quality digital education should lead directly to meaningful employment — not just certificates.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-extrabold text-foreground">Our Story</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  TechDigiEdu was founded in Bengaluru with one clear purpose — to bridge the gap between the rapidly evolving digital industry and the talent that wants to enter it.
                </p>
                <p>
                  Our founders saw first-hand how countless motivated individuals were graduating with theoretical knowledge but lacking the practical, job-ready skills that companies actually need. They set out to fix that.
                </p>
                <p className="font-medium text-foreground">
                  Today, TechDigiEdu has trained over 10,000 professionals, partnered with 200+ companies, and maintained a 94% placement rate — numbers that speak for themselves.
                </p>
              </div>
            </div>
            {/* Visual stats block */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { num: "2018", label: "Founded", icon: <Rocket className="h-6 w-6" />, color: "text-primary", bg: "bg-primary/10" },
                { num: "10K+", label: "Students Trained", icon: <Globe className="h-6 w-6" />, color: "text-secondary", bg: "bg-secondary/10" },
                { num: "200+", label: "Hiring Partners", icon: <Heart className="h-6 w-6" />, color: "text-violet-500", bg: "bg-violet-500/10" },
                { num: "94%", label: "Placement Rate", icon: <Target className="h-6 w-6" />, color: "text-amber-500", bg: "bg-amber-500/10" },
              ].map((item) => (
                <div key={item.label} className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className={`h-12 w-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center`}>
                    {item.icon}
                  </div>
                  <div>
                    <div className={`text-3xl font-extrabold ${item.color}`}>{item.num}</div>
                    <div className="text-sm text-muted-foreground font-medium">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <div className="h-14 w-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                <Target className="h-7 w-7" />
              </div>
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-semibold text-primary">
                Our Mission
              </div>
              <h2 className="text-3xl font-extrabold text-foreground">Empowering individuals through digital mastery.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We deliver rigorously practical programs in the most in-demand digital skills. Our mission is to ensure that every graduate leaves TechDigiEdu not just educated, but employable — with a portfolio, the confidence to interview, and a placement team fighting for them.
              </p>
            </div>

            <div className="space-y-6">
              <div className="h-14 w-14 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center">
                <Eye className="h-7 w-7" />
              </div>
              <div className="inline-flex items-center rounded-full border border-secondary/20 bg-secondary/5 px-3 py-1 text-sm font-semibold text-secondary">
                Our Vision
              </div>
              <h2 className="text-3xl font-extrabold text-foreground">To be India's most trusted digital career launchpad.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We envision a future where geography and background are no barriers to a thriving career in technology. TechDigiEdu aims to make world-class digital education accessible to every driven individual, and to place them in roles where they can truly grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">What Sets Us Apart</h2>
            <p className="text-lg text-muted-foreground">
              Thousands of institutes teach tech. Very few actually get you hired.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                icon: <Lightbulb className="h-6 w-6" />,
                title: "100% Practical Curriculum",
                desc: "Zero fluff. Every hour of training is tied to real-world application. You build, you ship, you learn — just like on the job.",
              },
              {
                num: "02",
                icon: <Rocket className="h-6 w-6" />,
                title: "Live Industry Mentorship",
                desc: "Mentors who are active professionals at top companies — not academics. Get the inside track on what interviewers actually look for.",
              },
              {
                num: "03",
                icon: <Heart className="h-6 w-6" />,
                title: "We Don't Stop at Graduation",
                desc: "Our placement cell stays with you after program completion. Resume reviews, mock interviews, job referrals — until you have an offer.",
              },
            ].map((item) => (
              <div key={item.num} className="p-8 bg-card rounded-2xl border border-border space-y-4 hover:shadow-md hover:border-primary/30 transition-all">
                <div className="text-5xl font-black text-primary/15 mb-2">{item.num}</div>
                <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">Meet the Team</h2>
            <p className="text-lg text-muted-foreground">Experienced professionals dedicated to your success.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {TEAM.map((member) => (
              <div key={member.name} className="bg-background border border-border rounded-2xl p-6 text-center shadow-sm hover:shadow-md hover:border-primary/30 transition-all">
                <div className={`h-20 w-20 rounded-2xl ${member.bg} ${member.text} flex items-center justify-center text-2xl font-extrabold mx-auto mb-4`}>
                  {member.initials}
                </div>
                <h3 className="font-bold text-foreground text-base">{member.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
