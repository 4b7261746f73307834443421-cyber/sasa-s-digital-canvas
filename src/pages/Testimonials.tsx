import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import siteData from '@/data/siteData.json';

const Testimonials = () => (
  <div className="container py-12">
    <SectionHeader title="Testimonials" subtitle="What clients say about working with me" />
    <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
      {siteData.testimonials.map((t, i) => (
        <motion.div key={i} className="glass-card relative" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
          <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
          <p className="text-foreground text-lg mb-6 italic">"{t.quote}"</p>
          <div><p className="font-semibold text-foreground">{t.name}</p><p className="text-sm text-muted-foreground">{t.company}</p></div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Testimonials;
