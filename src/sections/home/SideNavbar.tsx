import { Boxes, Home, ScrollText, ShoppingBag, TicketPlus } from 'lucide-react';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import ActivePathnameHighliter from '@/components/Footer/ActivePathnameHighliter';
import Image from 'next/image';
import NaKoshiAscLogo from '@/assets/logo/na_koshi_asc_logo.jpg';
import {
  IconAboutUsOutline,
  IconHandburgermenu,
  IconIdentificationCardOutline,
  IconUserGroupOutline,
} from '@/components/Svg/svgicons';
import {
  ABOUT,
  COMMITTEE,
  CONTACT,
  EVENT,
  LITERATURE,
  MERCHANDISE,
  METTING,
} from '@/lib/constant/Links';

export default function SideNavbar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <IconHandburgermenu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav className="grid gap-6 py-6 text-lg font-medium">
          <Link
            href="/"
            className="flex items-center gap-x-2.5 text-lg w-fit font-semibold"
          >
            <Image
              width={50}
              height={50}
              src={NaKoshiAscLogo}
              className="size-14 max-[380px]:size-10 rounded-full"
              alt="NA koshi area service committee logo"
            />
            <div>
              <p className="self-center font-serif max-[380px]:text-[4.5dvw] text-lg sm:tesxt-xl pr-2 font-bold whitespace-nowrap">
                Narcotics Anonymous
              </p>
              <p className="self-center font-sans  max-[380px]:text-sm text-base font-semibold text-foreground/70 whitespace-nowrap">
                Koshi Area
              </p>
            </div>
            <span className="sr-only">
              Narcotics Anonymous Koshi Area Service Committee
            </span>
          </Link>
          {Links.map((link) => {
            return (
              <ActivePathnameHighliter
                key={link.link}
                href={link.link}
                activeStyle="bg-muted"
                className="mx-[-0.65rem] flex items-center gap-4 focus-visible:bg-muted/80  rounded-xl hover:bg-muted/80"
              >
                <Link
                  href={link.link}
                  className={`flex items-center w-full px-3 py-2 gap-4 group-[.isActive]:text-foreground focus-visible:bg-muted rounded-xl focus-visible:text-foreground hover:text-foreground text-foreground/80`}
                >
                  <link.icon className="h-5 w-5" />
                  {link.name}
                </Link>
              </ActivePathnameHighliter>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
const Links = [
  { name: 'Home', icon: Home, link: '/' },
  { name: 'Committee', icon: Boxes, link: COMMITTEE.default },
  { name: 'Meetings', icon: IconUserGroupOutline, link: METTING.default },
  { name: 'Events', icon: TicketPlus, link: EVENT.default },
  { name: 'Literature', icon: ScrollText, link: LITERATURE.default },
  { name: 'Merchandise', icon: ShoppingBag, link: MERCHANDISE.default },
  { name: 'About', icon: IconAboutUsOutline, link: ABOUT.default },
  { name: 'Contact', icon: IconIdentificationCardOutline, link: CONTACT },
];
