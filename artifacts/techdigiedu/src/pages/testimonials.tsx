import React from "react";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/data";
import { Star, Quote } from "lucide-react";

const FULL_TESTIMONIALS = TESTIMONIALS.map((t) => ({
  ...t,
  journey: {
    before:
      t.company === "Infosys" ? "No coding background, unsure of direction" :
      t.company === "Deloitte" ? "Theoretical degree, zero practical skills" :
      t.company === "Capgemini" ? "Basic academic cloud knowledge only" :
      t.company === "HCL" ? "Non-tech background, intimidated by industry" :
      t.company === "Wipro" ? "Self-studying with no structure or mentorship" :
      "Commerce graduate, no tech exposure",
    after:
      t.company === "Infosys" ? "Full-stack developer with a strong portfolio" :
      t.company === "Deloitte" ? "Data Science consultant blending code & strategy" :
      t.company === "Capgemini" ? "Certified Cloud Engineer with multiple certifications" :
      t.company === "HCL" ? "Digital Marketing Manager leading campaigns" :
      t.company === "Wipro" ? "Cybersecurity analyst with 3 job offers" :
      "Business Analyst at HDFC Bank FinTech division",
  },
}));

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Testimonials() {
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
            Student Stories
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6"
          >
            Real Careers. Real Results.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            Don't take our word for it. Read the journeys of TechDigiEdu alumni who turned their ambitions into thriving careers.
          </motion.p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-8"
          >
            {FULL_TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className="bg-card border border-border p-8 rounded-2xl shadow-sm flex flex-col h-full relative overflow-hidden hover:shadow-md hover:border-primary/30 transition-all"
              >
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-primary/5 rounded-bl-full -z-0 pointer-events-none"></div>
                <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/10" />

                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-2xl bg-primary flex items-center justify-center font-extrabold text-primary-foreground text-xl shadow-md shadow-primary/20">
                      {t.initials}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{t.name}</h3>
                      <p className="text-sm font-semibold text-primary">Placed at {t.company}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        className={`h-4 w-4 ${idx < t.rating ? "text-yellow-400 fill-yellow-400" : "text-muted"}`}
                      />
                    ))}
                  </div>
                </div>

                <blockquote className="text-base text-muted-foreground italic leading-relaxed mb-8 flex-1 relative z-10">
                  "{t.text}"
                </blockquote>

                <div className="bg-muted/30 rounded-xl p-5 border border-border/50 relative z-10">
                  <h4 className="text-xs font-bold text-foreground mb-3 uppercase tracking-widest">Career Journey</h4>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <span className="text-xs font-bold text-muted-foreground w-14 pt-0.5 shrink-0">BEFORE</span>
                      <span className="text-sm text-foreground">{t.journey.before}</span>
                    </div>
                    <div className="w-full h-px bg-border"></div>
                    <div className="flex gap-3">
                      <span className="text-xs font-bold text-primary w-14 pt-0.5 shrink-0">AFTER</span>
                      <span className="text-sm font-semibold text-foreground">{t.journey.after}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary/5 border-t border-primary/10">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <h2 className="text-3xl font-extrabold text-foreground mb-4">Write Your Own Success Story</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Join TechDigiEdu today and start the journey that leads to the career you've always wanted.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/programs">
              <button className="rounded-full px-8 h-12 bg-primary text-primary-foreground font-semibold text-base hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                Explore Programs
              </button>
            </a>
            <a href="/placements">
              <button className="rounded-full px-8 h-12 border border-primary/30 text-foreground font-semibold text-base hover:bg-primary/5 transition-colors">
                View Placements
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
