import { Download, Briefcase, GraduationCap, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/SectionHeader';
import { SkillsList } from '@/components/SkillsList';
import siteData from '@/data/siteData.json';

const Resume = () => (
  <div className="container py-12">
    <SectionHeader title="Resume" subtitle="My professional experience and qualifications" />
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12"><Button size="lg"><Download className="w-4 h-4 mr-2" />Download PDF Resume</Button></div>

      <section className="glass-card mb-8">
        <h2 className="font-display font-semibold text-xl flex items-center gap-2 mb-4"><CheckCircle className="w-5 h-5 text-primary" />Summary</h2>
        <ul className="space-y-2">{siteData.resume.summaryPoints.map(p => <li key={p} className="flex items-center gap-2 text-muted-foreground"><span className="w-1.5 h-1.5 rounded-full bg-primary" />{p}</li>)}</ul>
      </section>

      <section className="glass-card mb-8">
        <h2 className="font-display font-semibold text-xl flex items-center gap-2 mb-4"><Briefcase className="w-5 h-5 text-primary" />Experience</h2>
        {siteData.resume.workExperience.map((w, i) => (
          <div key={i} className="mb-6 last:mb-0">
            <h3 className="font-semibold text-foreground">{w.title}</h3>
            <p className="text-primary text-sm">{w.company}</p>
            <p className="text-xs text-muted-foreground mb-2">{w.dates}</p>
            <ul className="space-y-1">{w.highlights.map(h => <li key={h} className="text-sm text-muted-foreground">• {h}</li>)}</ul>
          </div>
        ))}
      </section>

      <section className="glass-card mb-8">
        <h2 className="font-display font-semibold text-xl flex items-center gap-2 mb-4"><GraduationCap className="w-5 h-5 text-primary" />Education</h2>
        <h3 className="font-semibold text-foreground">{siteData.resume.education.degree}</h3>
        <p className="text-muted-foreground">{siteData.resume.education.institution}</p>
        <p className="text-sm text-muted-foreground">Expected: {siteData.resume.education.expectedGraduation}</p>
      </section>

      <section><h2 className="font-display font-semibold text-xl mb-6">Skills</h2><SkillsList /></section>
    </div>
  </div>
);

export default Resume;
