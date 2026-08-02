import React from "react";
import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4 lg:col-span-1">
            <Link href="/">
              <Logo />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering the next generation of digital professionals through cutting-edge training and guaranteed placement support.
            </p>
            <div className="space-y-2 pt-2">
              <a href="mailto:info@techdigiedu.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4 text-primary/60" />
                info@techdigiedu.com
              </a>
              <a href="tel:+911234567890" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4 text-primary/60" />
                +91 12345 67890
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary/60 shrink-0" />
                Bengaluru, Karnataka, India
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Programs", href: "/programs" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Success */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Success</h3>
            <ul className="space-y-3">
              {[
                { name: "Placements", href: "/placements" },
                { name: "Testimonials", href: "/testimonials" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Programs</h3>
            <ul className="space-y-3">
              {[
                "Web Development",
                "Data Science & AI",
                "Cloud Computing",
                "Cybersecurity",
                "Digital Marketing",
              ].map((prog) => (
                <li key={prog}>
                  <Link href="/programs" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {prog}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} TechDigiEdu. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground font-medium">
            Learn Digital. Lead Tomorrow.
          </p>
        </div>
      </div>
    </footer>
  );
}
