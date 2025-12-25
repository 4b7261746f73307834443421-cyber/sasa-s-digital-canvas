import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Terminal, Code2, Database, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import siteData from '@/data/siteData.json';

const floatingIcons = [
  { Icon: Terminal, delay: 0 },
  { Icon: Code2, delay: 0.2 },
  { Icon: Database, delay: 0.4 },
  { Icon: Bot, delay: 0.6 },
];

export function Hero() {
  const { hero } = siteData;

  return (
    <section className="relative min-h-[calc(100vh-6rem)] flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {floatingIcons.map(({ Icon, delay }, index) => (
          <motion.div
            key={index}
            className="absolute glass p-4 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: [0.5, 1, 0.5],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              top: `${20 + index * 15}%`,
              left: index % 2 === 0 ? '8%' : undefined,
              right: index % 2 === 1 ? '8%' : undefined,
            }}
          >
            <Icon className="w-6 h-6 text-primary" />
          </motion.div>
        ))}
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for freelance work
            </span>
          </motion.div>

          <motion.h1
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hi, I'm{' '}
            <span className="gradient-text">{hero.name}</span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl text-muted-foreground font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {hero.headline}
          </motion.p>

          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {hero.subline}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button asChild size="lg" className="group">
              <Link to={hero.ctaPrimary.href}>
                {hero.ctaPrimary.label}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="group">
              <Link to={hero.ctaSecondary.href}>
                {hero.ctaSecondary.label}
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link to="/resume">
                <Download className="mr-2 w-4 h-4" />
                Resume
              </Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-8 mt-16 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {[
              { value: '6+', label: 'Projects' },
              { value: '3+', label: 'Years Exp.' },
              { value: '10+', label: 'Clients' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
