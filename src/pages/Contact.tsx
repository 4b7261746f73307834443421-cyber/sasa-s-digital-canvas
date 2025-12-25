import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import { ContactForm } from '@/components/ContactForm';
import siteData from '@/data/siteData.json';

const Contact = () => (
  <div className="container py-12">
    <SectionHeader title="Get in Touch" subtitle="Have a project in mind? Let's talk about it." />
    <div className="grid gap-12 lg:grid-cols-2 max-w-5xl mx-auto">
      <div className="space-y-6">
        <div className="glass-card"><h3 className="font-display font-semibold text-lg mb-4">Contact Info</h3>
          <div className="space-y-4">
            <a href={`mailto:${siteData.contact.email}`} className="flex items-center gap-3 text-muted-foreground hover:text-primary"><Mail className="w-5 h-5" />{siteData.contact.email}</a>
            <a href={`tel:${siteData.contact.phone}`} className="flex items-center gap-3 text-muted-foreground hover:text-primary"><Phone className="w-5 h-5" />{siteData.contact.phone}</a>
            <a href={`https://t.me/${siteData.contact.telegram.replace('@','')}`} className="flex items-center gap-3 text-muted-foreground hover:text-primary"><Send className="w-5 h-5" />{siteData.contact.telegram}</a>
            <p className="flex items-center gap-3 text-muted-foreground"><MapPin className="w-5 h-5" />{siteData.contact.locations[0]}</p>
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  </div>
);

export default Contact;
