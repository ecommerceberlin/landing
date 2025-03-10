'use client';

import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'
import {t} from '@/scripts/translate'

interface MoreButtonProps {
    label: string;
    href: string;
    className?: string;
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "hero";
    size?: "default" | "sm" | "lg" | "hero" | "icon";
}

function isExternalLink(href: string): boolean {
    return href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
}

export function MoreButton({label, href, className, variant="default", size="default"}: MoreButtonProps){
    const router = useRouter();
    
    const handleClick = useCallback((e: React.MouseEvent) => {
        if (!isExternalLink(href)) {
            e.preventDefault();
            router.push(href);
        }
    }, [href, router]);
    
    return isExternalLink(href) ? (
        <Button 
            className={className} 
            variant={variant} 
            size={size}
        >
            <a 
                href={href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full h-full flex items-center justify-center"
            >
                {t(label)}
            </a>
        </Button>
    ) : (
        <Button 
            className={className} 
            variant={variant} 
            size={size}
            onClick={handleClick}
        >
            {t(label)}
        </Button>
    );
}