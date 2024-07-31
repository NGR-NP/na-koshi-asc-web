import { Section } from '@/components/custom/Section';
import { getMettingLists } from '@/action/mettings.action';
import { cn } from '@/lib/utils';
import { MettingCard } from '@/components/card/mettingsCard';
interface MettingListProps {
  className?: string;
}
export default async function MeetingSection({ className }: MettingListProps) {
  const mettingListData: Array<MettingListType> = await getMettingLists();
  return (
    <Section className={className}>
      <div
        className={cn(
          'gap-2 grid grid-cols-1 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2',
        )}
      >
        {mettingListData.length ? (
          mettingListData.map((item, idx) => (
            <MettingCard key={idx} item={item} />
          ))
        ) : (
          <p>there aren&apos;t any metting</p>
        )}
      </div>
    </Section>
  );
}
