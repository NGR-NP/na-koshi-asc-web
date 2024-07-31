'use client';

import * as React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import Image from 'next/image';
import {
  ABOUT,
  COMMITTEE,
  CONTACT,
  METTING,
  EVENT,
} from '@/lib/constant/Links';
import { UserGroup } from '@/components/Svg/Other';
import { NAKoshiLOGO, NAKoshiLOGODark } from '@/lib/constant/images';
import {
  ActivePathnameHomeNavHighliter,
  ActivePathnameNavItemHighliter,
} from '@/components/Footer/ActivePathnameHighliter';

export function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <ActivePathnameHomeNavHighliter href={ABOUT.default}>
            <NavigationMenuTrigger className="bg-transparent">
              About
            </NavigationMenuTrigger>
          </ActivePathnameHomeNavHighliter>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <ActivePathnameNavItemHighliter href={ABOUT.default}>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md "
                    href={ABOUT.default}
                  >
                    <Image
                      src={NAKoshiLOGO}
                      height="100"
                      width="100"
                      className="size-16 hidden dark:block rounded-full "
                      alt="NA koshi area service committee logo"
                    />
                    <Image
                      src={NAKoshiLOGODark}
                      height="100"
                      width="100"
                      className="size-16  dark:hidden rounded-full "
                      alt="NA koshi area service committee logo"
                    />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      About NA Koshi ASC
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </Link>
                </ActivePathnameNavItemHighliter>
              </li>
              <ListItem href={ABOUT.NA} title="About NA">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </ListItem>
              <ListItem href={CONTACT} title="Contact Us">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </ListItem>
              <ListItem href={COMMITTEE.default} title="Committee">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            Members
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {Members.map((member) => (
                <ListItem
                  key={member.title}
                  title={member.title}
                  href={member.href}
                >
                  {member.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            Metting
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <ActivePathnameNavItemHighliter href={METTING.default}>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href={METTING.default}
                  >
                    <UserGroup />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Find Mettings in Koshi Area
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Lorem ipsum dolor sit.
                    </p>
                  </Link>
                </ActivePathnameNavItemHighliter>
              </li>
              <ListItem href={METTING.ONLINE} title="Online Meetings">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </ListItem>
              <ListItem href={METTING.PHYSICAL} title="Physical Meetings">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </ListItem>
              <ListItem href={METTING.HYBRID} title="Hybrid Meetings">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            Event
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {Events.map((Event) => (
                <ListItem
                  key={Event.title}
                  title={Event.title}
                  href={Event.href}
                >
                  {Event.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <Link href={CONTACT} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <ActivePathnameNavItemHighliter href={href || '#'}>
        <Link
          href={href || '#'}
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium group-data-[active]:font-bold leading-none">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </ActivePathnameNavItemHighliter>
    </li>
  );
});
ListItem.displayName = 'ListItem';

const Events: { title: string; href: string; description: string }[] = [
  {
    title: 'upcomming events',
    href: EVENT.UPCOMMING,
    description: 'Find upcomming events in Koshi Area',
  },
  {
    title: 'past events',
    href: EVENT.PAST,
    description: 'View past events in Koshi Area',
  },
  {
    title: 'Workshop',
    href: EVENT.WORKSHOP,
    description: "Find all workshop's in Koshi Area",
  },
];

const Members: { title: string; href: string; description: string }[] = [
  {
    title: 'Committee Report',
    href: '#',
    description: 'Committee Report',
  },
  {
    title: 'History',
    href: '#',
    description: 'History',
  },
];
