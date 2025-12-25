import { SectionHeader } from '@/components/SectionHeader';

const Privacy = () => (
  <div className="container py-12 max-w-3xl">
    <SectionHeader title="Privacy Policy" />
    <div className="glass-card prose prose-invert max-w-none">
      <p className="text-muted-foreground">Last updated: December 2025</p>
      <h2 className="text-foreground mt-6">Information Collection</h2>
      <p className="text-muted-foreground">We collect information you provide directly, such as when you fill out a contact form.</p>
      <h2 className="text-foreground mt-6">Use of Information</h2>
      <p className="text-muted-foreground">Information is used solely to respond to inquiries and improve services.</p>
      <h2 className="text-foreground mt-6">Contact</h2>
      <p className="text-muted-foreground">For privacy concerns, contact mohmedmostafayoussef@gmail.com</p>
    </div>
  </div>
);

export default Privacy;
