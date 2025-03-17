"use client"

import {NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils';
import { resolveAltLocale } from '@/settings/locale';
import { usePathname } from 'next/navigation';

export function LocaleSwitcher({className}: {className?: string}) {

  const altLocale = resolveAltLocale();
  const pathname = usePathname();

  return (
    <NavigationMenuItem className="h-full">
    <NavigationMenuLink asChild>
    <a 
    href={`${altLocale.href}${pathname}`} 
    className={cn(navigationMenuTriggerStyle(), className)}
    >
    {altLocale.locale}
    </a>
    </NavigationMenuLink>
    </NavigationMenuItem>
  );
}