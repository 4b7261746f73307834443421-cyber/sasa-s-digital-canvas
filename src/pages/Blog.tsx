import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/SectionHeader';
import siteData from '@/data/siteData.json';

const Blog = () => (
  <div className="container py-12">
    <SectionHeader title="Blog" subtitle="Thoughts on development, automation, and OCR" />
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
      {siteData.blog.map((post, i) => (
        <motion.article key={post.slug} className="glass-card hover-lift" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
          <Link to={`/blog/${post.slug}`}>
            <div className="flex gap-2 mb-3">{post.tags.map(t => <span key={t} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">{t}</span>)}</div>
            <h2 className="font-display font-semibold text-lg text-foreground mb-2 hover:text-primary transition-colors">{post.title}</h2>
            <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
            <div className="text-xs text-muted-foreground">{post.date} · {post.readTime}</div>
          </Link>
        </motion.article>
      ))}
    </div>
  </div>
);

export default Blog;
