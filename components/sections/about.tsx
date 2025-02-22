import { ScrollArea } from "@/components/ui/scroll-area"


export function About() {
    return (
        <div className="w-full max-w-[50rem]">
            <div className="relative">
                <ScrollArea className="mx-auto h-[15rem] w-full text-2xl font-light text-center">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. 

                        adipisicing elit. Quisquam, quos. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. 

                        
                    </p>
                </ScrollArea>
                <div className="absolute bottom-0 h-32 w-full bg-gradient-to-t from-white to-transparent pointer-events-none" />
            </div>
        </div>
    )
}