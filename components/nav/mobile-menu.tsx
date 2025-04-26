'use client';

import {NavigationMenu, NavigationMenuList} from "@/components/ui/navigation-menu";
import {LocaleSwitcher} from "@/components/nav/switch-locale";
import {Sheet, SheetContent, SheetFooter, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {VisuallyHidden} from "@radix-ui/react-visually-hidden";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {AccordionState} from "@/components/sections/initiatives";
import {t} from "@/scripts/translate";
import {menuExhibitors} from "@/settings/menu";
import Link from "next/link";
import * as React from "react";
import {cn} from "@/lib/utils";
import {Menu, X, ChevronDown, ChevronUp} from 'lucide-react'
import {useEffect, useState} from "react";


export function MobileMenu() {
    const [sheetOpen, setSheetOpen] = useState(false)

    // it can't be done using onOpenChange as we have to reset the overflow when the user clicks the Link
    useEffect(() => {
        document.body.style.overflow = sheetOpen ? "hidden" : ""

        return () => {
            document.body.style.overflow = ""
        }
    }, [sheetOpen])

    return (
        <NavigationMenu className="block lg:hidden">
            <NavigationMenuList className="flex flex-row h-28">
                <LocaleSwitcher className="h-full"/>

                {/* Modal set to false so the user can still click items on the header */}
                <Sheet modal={false} onOpenChange={setSheetOpen}>
                    <SheetTrigger asChild>
                        <Button size='icon' className="cursor-pointer group h-full bg-background text-inherit hover:bg-accent hover:text-accent-foreground px-8 shadow-none">
                            <Menu className="group-data-[state=open]:hidden size-6"/>
                            <X className="group-data-[state=closed]:hidden size-6"/>
                        </Button>
                    </SheetTrigger>
                    {/* Sheet size should be 100% screen size (respecting mobile address bar) minus the height of the header */}
                    <SheetContent side="bottom" hideCloseButton className="h-[calc(100dvh-10rem)] border-none">
                        <VisuallyHidden>
                            <SheetTitle>Navigation</SheetTitle>
                        </VisuallyHidden>
                        <div className="flex flex-col mt-auto ml-2.5 gap-5">
                            <Accordion type="single">
                                <AccordionItem value="exhibitors">
                                    <AccordionTrigger
                                        className="text-[2rem] leading[1.1] font-medium uppercase justify-start cursor-pointer"
                                        openContent={<AccordionState><ChevronUp size={36}/></AccordionState>}
                                        closedContent={<AccordionState><ChevronDown size={36}/></AccordionState>}
                                    >
                                        {t("navigation.menu.exhibitors.title")}
                                    </AccordionTrigger>
                                    <AccordionContent className="flex flex-col gap-5 pl-[1.875rem] py-[1.875rem]">
                                        {menuExhibitors.map((exhibitor) => (
                                            <Link
                                                key={exhibitor.href}
                                                href={exhibitor.href}
                                                className="text-xl leading[1.1] font-medium uppercase"
                                            >
                                                {exhibitor.title}
                                            </Link>
                                        ))}
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                            <Link href="/about" className="text-[2rem] leading[1.1] font-medium uppercase">{t("navigation.menu.about")}</Link>
                        </div>
                        <SheetFooter className="flex-row gap-px px-px pb-px h-20 mt-10">
                            <AccentLink href="/exhibit" className="flex-1 h-full">{t("navigation.menu.visit")}</AccentLink>
                            <AccentLink href="/exhibit" className="flex-1 h-full">{t("navigation.menu.exhibit")}</AccentLink>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>

            </NavigationMenuList>
        </NavigationMenu>
    )
}

interface AccentLinkProps {
    href: string,
    className?: string,
    children?: React.ReactNode
}

function AccentLink({href, className, children}: AccentLinkProps) {
    return (
        <Link
            href={href}
            className={cn(
                'bg-ebe text-primary flex items-center justify-center font-medium text-sm uppercase leading-[1.1] hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                className
            )}
        >
            {children}
        </Link>
    )
}