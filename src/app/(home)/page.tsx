import MerchandiseSection from '@/sections/MerchandiseSection';
import MeetingSection from '@/sections/MeetingSection';

export default function Home() {
  return (
    <main className="flex min-h-[55dvh] space-y-10 flex-col items-center justify-between bg-background">
      <MeetingSection className="mt-14" />
      <MerchandiseSection />
    </main>
  );
}
