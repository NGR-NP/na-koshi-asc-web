import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { CircleUser } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import ToggleTheme from '@/components/ThemeSwitcher';
import { NavMenu } from '@/components/nav/home/NavMenu';

import SideNavbar from './SideNavbar';
import { NAKoshiLOGO, NAKoshiLOGODark } from '@/lib/constant/images';

export default function NavbarSection() {
  return (
    <header className="sticky  px-section-sm md:px-section-md z-50 top-0 flex h-16 backdrop-blur-md items-center gap-4 border-b bg-background/50  mx-auto">
      <nav className="hidden flex-col max-w-screen-2xl gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link href="/" className="flex items-center py-2 space-x-3 ">
          <Image
            width={50}
            height={50}
            src={NAKoshiLOGO}
            className="h-10 w-10 hidden dark:block lg:h-12 lg:w-12 xl:h-14 xl:w-14 rounded-full"
            alt="NA koshi area service committee logo"
          />
          <Image
            width={50}
            height={50}
            src={NAKoshiLOGODark}
            className="h-10 w-10 dark:hidden lg:h-12 lg:w-12 xl:h-14 xl:w-14 rounded-full"
            alt="NA koshi area service committee logo"
          />
          <div>
            <p className="self-center font-serif max-[370px]:text-sm text-base hidden lg:block font-bold whitespace-nowrap">
              Narcotics Anonymous
            </p>
            <p className="self-center font-serif max-[370px]:text-sm text-base lg:hidden   font-bold whitespace-nowrap">
              NA
            </p>
            <p className="self-center font-sans text-sm md:text-[1.5dvw] lg:text-sm font-semibold text-foreground/70 whitespace-nowrap">
              Koshi Area
            </p>
          </div>
        </Link>
        <NavMenu />
      </nav>
      <SideNavbar />
      <div className="flex w-full md:flex-[0.5] items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <div className="ml-auto  sm:flex-initial">
          <ToggleTheme />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
