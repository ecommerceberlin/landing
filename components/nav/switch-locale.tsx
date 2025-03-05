import {NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils';
import { resolveAltLocale } from '@/settings/locale';

export function LocaleSwitcher({className}: {className?: string}) {

  const altLocale = resolveAltLocale();

  return (
    <NavigationMenuItem className="h-full">
        <NavigationMenuLink asChild>
        <a 
        href={altLocale.href} 
        className={cn(navigationMenuTriggerStyle(), className)}
        >
        {altLocale.locale}
        </a>
        </NavigationMenuLink>
        </NavigationMenuItem>
  );
}