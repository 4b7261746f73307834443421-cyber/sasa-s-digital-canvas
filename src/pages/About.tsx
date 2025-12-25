import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/SectionHeader';
import { SkillsList } from '@/components/SkillsList';
import siteData from '@/data/siteData.json';

const About = () => {
  const { about } = siteData;

  return (
    <div className="container py-12">
      <SectionHeader title="About Me" subtitle={about.short} />
      
      <div className="max-w-3xl mx-auto mb-16">
        <motion.p className="text-lg text-muted-foreground leading-relaxed text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{about.long}</motion.p>
      </div>

      <section className="mb-16">
        <h2 className="font-display text-2xl font-bold text-center mb-8">Skills & Technologies</h2>
        <SkillsList />
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl font-bold text-center mb-8">Timeline</h2>
        <div className="max-w-2xl mx-auto space-y-6">
          {about.timeline.map((item, i) => (
            <motion.div key={i} className="glass-card flex gap-6" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="font-display font-bold text-primary text-xl">{item.year}</div>
              <div><h3 className="font-semibold text-foreground">{item.title}</h3><p className="text-muted-foreground text-sm">{item.detail}</p></div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="glass-card max-w-2xl mx-auto text-center">
        <h2 className="font-display text-xl font-bold mb-4">Education</h2>
        <p className="text-foreground font-medium">{about.education.degree}</p>
        <p className="text-muted-foreground">{about.education.institution}</p>
        <p className="text-sm text-muted-foreground mt-2">Expected graduation: {about.education.expectedGraduation}</p>
      </section>
    </div>
  );
};

export default About;
