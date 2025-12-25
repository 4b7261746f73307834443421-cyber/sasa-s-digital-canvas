import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Hero } from '@/components/Hero';
import { ProjectCard } from '@/components/ProjectCard';
import { SectionHeader } from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import siteData from '@/data/siteData.json';

const Index = () => {
  const featuredProjects = siteData.projects.slice(0, 3);

  return (
    <>
      <Hero />
      
      {/* Featured Projects */}
      <section className="py-24">
        <div className="container">
          <SectionHeader 
            title="Featured Projects" 
            subtitle="Some of my recent work building production-ready applications"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Button asChild variant="outline" size="lg">
              <Link to="/projects">
                View all projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <SectionHeader title="What I Do" subtitle="Specialized services to help bring your ideas to life" />
          <div className="grid gap-6 md:grid-cols-3">
            {siteData.services.map((service, index) => (
              <motion.div
                key={service.id}
                className="glass-card text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="font-display font-semibold text-xl text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container">
          <motion.div 
            className="glass-card text-center max-w-2xl mx-auto glow"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Ready to work together?</h2>
            <p className="text-muted-foreground mb-8">Let's discuss your project and see how I can help.</p>
            <Button asChild size="lg">
              <Link to="/contact">Get in touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;
