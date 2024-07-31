import { ReactNode } from 'react';
import NavbarSection from '@/sections/home/NavbarSection';
import FooterSection from '@/sections/home/FooterSection';
import TopHelplineSection from '@/sections/TopHelplineSection';

export default function HomeLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <TopHelplineSection />
      <NavbarSection />
      {children}
      <FooterSection />
    </>
  );
}
