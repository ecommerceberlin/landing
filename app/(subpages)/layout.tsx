import { Header } from "@/components/nav/header";
import { NowPlaying } from "@/components/nav/now-playing";
import { SectionTitle } from "@/components/text/section-title";
import { GrayBox } from "@/components/containers/graybox";



export default function SubpageLayout({
  children,
  title,
  related,
}: {
  children: React.ReactNode;
  title: React.ReactNode
  related: React.ReactNode
}) {



  return (

    <div className="min-h-screen w-[100dvw] max-w-[100dvw]">
    
    <header className="w-full">
        <NowPlaying />
        <Header />
    </header>

    <main className="mx-auto my-10 w-full max-w-[100dvw]">
      <GrayBox>
        <div className="text-left text-[3rem] md:text-[4rem] xl:text-[5rem] font-extralight">{title}</div>

        {children}

      </GrayBox>
    
        {related}

    </main>
    
    
    </div>
  )


}