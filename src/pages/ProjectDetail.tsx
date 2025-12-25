import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Clock, User, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import siteData from '@/data/siteData.json';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = siteData.projects.find(p => p.slug === slug);

  if (!project) {
    return <div className="container py-24 text-center"><h1 className="text-2xl">Project not found</h1><Link to="/projects" className="text-primary">Back to projects</Link></div>;
  }

  return (
    <div className="container py-12">
      <Link to="/projects" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8"><ArrowLeft className="w-4 h-4 mr-2" />Back to projects</Link>
      
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <span className="text-primary font-medium">{project.role}</span>
        <h1 className="font-display text-4xl font-bold text-foreground mt-2 mb-4">{project.title}</h1>
        
        <div className="flex flex-wrap gap-4 mb-8 text-muted-foreground text-sm">
          <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{project.timeline}</span>
          <span className="flex items-center gap-2"><User className="w-4 h-4" />{project.role}</span>
          <span className="flex items-center gap-2"><Layers className="w-4 h-4" />{project.tech.length} technologies</span>
        </div>

        <div className="flex gap-3 mb-12">
          {project.repo && <Button asChild variant="outline"><a href={project.repo} target="_blank" rel="noopener noreferrer"><Github className="w-4 h-4 mr-2" />Source Code</a></Button>}
          {project.demo && <Button asChild><a href={project.demo} target="_blank" rel="noopener noreferrer"><ExternalLink className="w-4 h-4 mr-2" />Live Demo</a></Button>}
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <section className="glass-card"><h2 className="font-display font-semibold text-xl mb-4">Overview</h2><p className="text-muted-foreground leading-relaxed">{project.description}</p></section>
            <section className="glass-card"><h2 className="font-display font-semibold text-xl mb-4">Challenges</h2><ul className="space-y-2">{project.challenges.map(c => <li key={c} className="flex items-start gap-2 text-muted-foreground"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />{c}</li>)}</ul></section>
            <section className="glass-card"><h2 className="font-display font-semibold text-xl mb-4">Impact</h2><div className="grid gap-4 sm:grid-cols-2">{Object.entries(project.impact).map(([k, v]) => <div key={k} className="bg-secondary/50 rounded-lg p-4"><div className="text-2xl font-bold text-primary">{String(v)}</div><div className="text-sm text-muted-foreground capitalize">{k.replace(/([A-Z])/g, ' $1')}</div></div>)}</div></section>
          </div>
          <div className="space-y-6">
            <section className="glass-card"><h3 className="font-display font-semibold mb-4">Tech Stack</h3><div className="flex flex-wrap gap-2">{project.tech.map(t => <span key={t} className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-md text-sm">{t}</span>)}</div></section>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetail;
