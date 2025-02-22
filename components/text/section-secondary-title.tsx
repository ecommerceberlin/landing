
interface SectionSecondaryTitleProps {
    label: string;

}

export function SectionSecondaryTitle({ label }: SectionSecondaryTitleProps) {
    return (
        <h3 className="text-[2rem] uppercase font-extralight">{label}</h3>)
}