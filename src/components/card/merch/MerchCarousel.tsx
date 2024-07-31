'use client';
import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import MerchandiseCard from './merchandiseCard';
interface MerchCarouselProps {
  merchs: merchType[];
}
export default function MerchCarousel({ merchs }: MerchCarouselProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <section className="overflow-hidden w-full mx-auto py-8">
      <Carousel
        plugins={[plugin.current]}
        className="w-full  mx-auto"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          align: 'center',
          loop: true,
        }}
      >
        <CarouselPrevious className="left-5 min-[1600px]:hidden max-sm:hidden z-10" />
        <CarouselNext className="right-5 min-[1600px]:hidden max-sm:hidden z-10" />

        <CarouselContent className="py-4">
          {merchs.map((merch) => {
            return (
              <CarouselItem
                key={merch.id}
                className="basis-auto min-[374px]:min-w-80 min-[400px]:min-w-96"
              >
                <MerchandiseCard merch={merch} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
