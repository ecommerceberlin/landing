import { ScrollArea } from "@/components/ui/scroll-area"
import { t } from "@/scripts/translate"

export function About() {
    return (
        <div className="w-full max-w-[50rem]">
            <div className="relative">
                <ScrollArea className="mx-auto h-[15rem] w-full text-2xl font-light text-center">
                    <p>{t("stats.about")}</p>
                  
                </ScrollArea>
                <div className="absolute bottom-0 h-[12rem] w-full bg-gradient-to-t from-white to-transparent pointer-events-none" />
            </div>
        </div>
    )
}