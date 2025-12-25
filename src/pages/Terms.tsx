import { SectionHeader } from '@/components/SectionHeader';

const Terms = () => (
  <div className="container py-12 max-w-3xl">
    <SectionHeader title="Terms of Service" />
    <div className="glass-card prose prose-invert max-w-none">
      <p className="text-muted-foreground">Last updated: December 2025</p>
      <h2 className="text-foreground mt-6">Acceptance</h2>
      <p className="text-muted-foreground">By accessing this website, you accept these terms and conditions.</p>
      <h2 className="text-foreground mt-6">Intellectual Property</h2>
      <p className="text-muted-foreground">All content on this site is owned by SASA unless otherwise stated.</p>
      <h2 className="text-foreground mt-6">Limitation of Liability</h2>
      <p className="text-muted-foreground">SASA shall not be liable for any damages arising from the use of this website.</p>
    </div>
  </div>
);

export default Terms;
