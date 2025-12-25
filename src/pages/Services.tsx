import { motion } from 'framer-motion';
import { Code, Bot, FileText } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import siteData from '@/data/siteData.json';

const icons = { 'web-apps': Code, 'scraping': Bot, 'ocr': FileText };

const Services = () => (
  <div className="container py-12">
    <SectionHeader title="Services" subtitle="Professional services tailored to your needs" />
    <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
      {siteData.services.map((s, i) => {
        const Icon = icons[s.id as keyof typeof icons] || Code;
        return (
          <motion.div key={s.id} className="glass-card text-center hover-lift" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center"><Icon className="w-8 h-8 text-primary" /></div>
            <h3 className="font-display font-semibold text-xl text-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground">{s.desc}</p>
          </motion.div>
        );
      })}
    </div>
  </div>
);

export default Services;
