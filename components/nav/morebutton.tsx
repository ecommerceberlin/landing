import { Button } from "@/components/ui/button"
import Link from 'next/link'

interface MoreButtonProps {
    label: string;
    href: string;
    external?: boolean;
}

export function MoreButton({label, href, external}: MoreButtonProps){
    return external ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
            <Button className="bg-ebe text-black">
                {label}
            </Button>
        </a>
    ) : (
        <Link href={href}>
            <Button className="bg-ebe text-black">
                {label}
            </Button>
        </Link>
    )
}