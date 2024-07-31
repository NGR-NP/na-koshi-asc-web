import { EMAIL, NUMBER, PHONE_NUMBER } from '@/lib/constant/contact';
import { Mail, Phone } from 'lucide-react';

export default function TopHelplineSection() {
  return (
    <div className="bg-muted px-8 hidden sm:flex  gap-4 justify-end items-center">
      <div className="flex items-center gap-1">
        <Phone className="mx-1 size-4" /> helpline number:{' '}
        <a href={`tel:${NUMBER}`} className="font-bold">
          {NUMBER}
        </a>
      </div>
      <div className="items-center flex  gap-1">
        <Mail className="mx-1 size-4" />
        <a href="mail:nakoshiasc@gmail.com" className="font-bold">
          {EMAIL}
        </a>
      </div>
    </div>
  );
}
