import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Phone, Send } from 'lucide-react';
import siteData from '@/data/siteData.json';

const socialLinks = [
  { icon: Github, href: siteData.contact.github, label: 'GitHub' },
  { icon: Linkedin, href: siteData.contact.linkedIn, label: 'LinkedIn' },
  { icon: Send, href: `https://t.me/${siteData.contact.telegram.replace('@', '')}`, label: 'Telegram' },
  { icon: Mail, href: `mailto:${siteData.contact.email}`, label: 'Email' },
];

const quickLinks = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
  { href: '/resume', label: 'Resume' },
];

const legalLinks = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-auto">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-display font-bold text-2xl text-foreground">
              {siteData.hero.name}
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">
              {siteData.about.short}
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl glass hover:bg-primary/10 hover:text-primary transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${siteData.contact.email}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">{siteData.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteData.contact.phone}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">{siteData.contact.phone}</span>
                </a>
              </li>
              <li className="text-sm text-muted-foreground">
                {siteData.contact.locations[0]}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {siteData.hero.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
