import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import siteData from '@/data/siteData.json';

const BlogPost = () => {
  const { slug } = useParams();
  const post = siteData.blog.find(p => p.slug === slug);
  if (!post) return <div className="container py-24 text-center"><h1>Post not found</h1><Link to="/blog" className="text-primary">Back to blog</Link></div>;

  return (
    <div className="container py-12 max-w-3xl">
      <Link to="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8"><ArrowLeft className="w-4 h-4 mr-2" />Back to blog</Link>
      <article>
        <div className="flex gap-2 mb-4">{post.tags.map(t => <span key={t} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">{t}</span>)}</div>
        <h1 className="font-display text-4xl font-bold text-foreground mb-4">{post.title}</h1>
        <p className="text-muted-foreground mb-8">{post.date} · {post.readTime}</p>
        <div className="prose prose-lg text-muted-foreground"><p>{post.excerpt}</p><p className="mt-6 text-foreground italic">Full article coming soon...</p></div>
      </article>
    </div>
  );
};

export default BlogPost;
