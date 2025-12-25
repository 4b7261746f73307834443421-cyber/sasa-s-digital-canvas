import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/SectionHeader';
import { ProjectCard } from '@/components/ProjectCard';
import siteData from '@/data/siteData.json';

const allTech = Array.from(new Set(siteData.projects.flatMap(p => p.tech)));

const Projects = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const filtered = filter ? siteData.projects.filter(p => p.tech.includes(filter)) : siteData.projects;

  return (
    <div className="container py-12">
      <SectionHeader title="Projects" subtitle="A collection of my work across web development, automation, and OCR" />
      
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        <button onClick={() => setFilter(null)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${!filter ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}>All</button>
        {allTech.slice(0, 8).map(tech => (
          <button key={tech} onClick={() => setFilter(tech)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filter === tech ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}>{tech}</button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => <ProjectCard key={project.slug} project={project} index={i} />)}
      </motion.div>
    </div>
  );
};

export default Projects;
