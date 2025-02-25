
import { Header } from "@/components/nav/header";
import { NowPlaying } from "@/components/nav/now-playing";
import { SectionTitle } from "@/components/text/section-title";
export default function SubpageLayout({
  children,
  title,
}: {
  children: React.ReactNode;
  title: React.ReactNode
}) {



  return (

    <div className="min-h-screen w-[100dvw] max-w-[100dvw]">
    
    <header className="w-full">
      <div className="w-full">
        <NowPlaying />
        <Header />
      </div>

    </header>
    <main className="w-full max-w-[100dvw]">
      {title}
      {children}
    </main>
    </div>
  )


}