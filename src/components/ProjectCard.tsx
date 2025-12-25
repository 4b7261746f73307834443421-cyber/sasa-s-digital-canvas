import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';

interface Project {
  slug: string;
  title: string;
  summary: string;
  tech: string[];
  role: string;
  timeline: string;
  repo?: string;
  demo?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link
        to={`/projects/${project.slug}`}
        className="block glass-card hover-lift h-full"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <span className="text-xs font-medium text-primary uppercase tracking-wider">
                {project.role}
              </span>
              <h3 className="font-display font-semibold text-xl text-foreground mt-1 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
            </div>
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </div>

          {/* Summary */}
          <p className="text-muted-foreground text-sm leading-relaxed flex-1">
            {project.summary}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
            {project.tech.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-md"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="px-2.5 py-1 text-xs font-medium text-muted-foreground">
                +{project.tech.length - 4} more
              </span>
            )}
          </div>

          {/* Timeline & Links */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
            <span className="text-xs text-muted-foreground">{project.timeline}</span>
            <div className="flex gap-2">
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-1.5 rounded-md hover:bg-secondary transition-colors"
                  aria-label="View source code"
                >
                  <Github className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-1.5 rounded-md hover:bg-secondary transition-colors"
                  aria-label="View live demo"
                >
                  <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                </a>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
