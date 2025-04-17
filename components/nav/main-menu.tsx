'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { t } from "@/scripts/translate";
// import { Logo } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { menuExhibitors } from '@/settings/menu';
import { LocaleSwitcher } from '@/components/nav/switch-locale';
export interface MainMenuProps {
  className?: string;
}

export interface MenuOption {
  title: string;
  href: string;
  description: string;
}


export function MainMenu() {
  return (
    <NavigationMenu className="hidden lg:block z-101 relative">
      <NavigationMenuList>
        <NavigationMenuItem className="h-full">
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle()," h-[7rem]")}>
            {t("navigation.menu.about")}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger>
            Visit
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-none bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    
                    <div className="mb-2 mt-4 text-lg font-medium">
                      lorem ipsum dolor sit amet
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      lorem ipsum dolor sit amet
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                lorem ipsum dolor sit amet
              </ListItem>
              <ListItem href="/docs/installation" title="Introduction">
              lorem ipsum dolor sit amet
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Introduction">
              lorem ipsum dolor sit amet
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>{t("navigation.menu.exhibitors.title")}</NavigationMenuTrigger>
          <NavigationMenuContent>
          <ul className="flex flex-col gap-3 p-4 md:flex-row md:flex-wrap md:gap-4">
              {menuExhibitors.map((component) => (
                <ListItem
                  key={component.href}
                  title={component.title}
                  href={component.href}
                >
                  {/* {component.description} */}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className="h-full">
          <Link href="/visit" legacyBehavior passHref>
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(),"bg-ebe h-[7rem]")}>
            {t("navigation.menu.visit")}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>


        <NavigationMenuItem className="h-full">
          <Link href="/exhibit" legacyBehavior passHref>
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(),"bg-ebe h-[7rem]")}>
            {t("navigation.menu.exhibit")}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <LocaleSwitcher className="h-[7rem]" />


      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
React.ElementRef<'a'>,
React.ComponentPropsWithoutRef<'a'>
>(({ className, title, href, children, ...props }, ref) => {
return (
<li>
<Link ref={ref} href={String(href)} legacyBehavior passHref>
<NavigationMenuLink className={cn(
  
  "block select-none space-y-1 no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground p-3 leading-none rounded-none",
  className)}>

<div className="text-sm font-medium leading-none whitespace-nowrap">{title}</div>
{children && (
  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
    {children}
  </p>
)}

</NavigationMenuLink>
</Link>
</li>
);
});

ListItem.displayName = 'ListItem';
