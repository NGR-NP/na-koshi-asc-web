import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import MerchCardFooter from './MerchCardFooter';

interface MerchandiseCardProps {
  merch: merchType;
}
export default function MerchandiseCard({ merch }: MerchandiseCardProps) {
  return (
    <Card className="group shadow-md rounded-xl max-w-96 select-none duration-500 hover:scale-105 hover:shadow-xl">
      <CardHeader>
        <Image
          src={merch.image}
          alt={merch.name}
          width={200}
          height={200}
          className="rounded-t-lg active:pointer-events-none focus:pointer-events-none  object-cover h-56 w-full active:object-contain"
        />
      </CardHeader>
      <CardContent>
        <CardTitle className="select-text">{merch.name}</CardTitle>
        {merch?.desc && (
          <CardDescription className="line-clamp-2 mt-2 ">
            {merch.desc}
          </CardDescription>
        )}
      </CardContent>
      <MerchCardFooter merch={merch} />
    </Card>
  );
}
