import { motion } from 'framer-motion';
import siteData from '@/data/siteData.json';

const skillCategories = [
  { key: 'languages', label: 'Languages', icon: '💻' },
  { key: 'frameworks', label: 'Frameworks & Tools', icon: '🛠️' },
  { key: 'databases', label: 'Databases', icon: '🗄️' },
  { key: 'tools', label: 'DevOps & Cloud', icon: '☁️' },
  { key: 'special', label: 'Specializations', icon: '⚡' },
] as const;

export function SkillsList() {
  const { skills } = siteData.about;

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {skillCategories.map((category, categoryIndex) => (
        <motion.div
          key={category.key}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
          className="glass-card"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl" role="img" aria-hidden="true">
              {category.icon}
            </span>
            <h3 className="font-display font-semibold text-foreground">
              {category.label}
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills[category.key].map((skill, skillIndex) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.3, 
                  delay: categoryIndex * 0.1 + skillIndex * 0.05 
                }}
                className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-lg hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
