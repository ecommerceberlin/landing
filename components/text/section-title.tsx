
interface SectionTitleProps {
    label: string;

}

export function SectionTitle({ label }: SectionTitleProps) {
    return (
        <h3 className="text-[3rem] uppercase font-extralight">{label}</h3>)
}