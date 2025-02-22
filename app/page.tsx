
import { NowPlaying } from '@/components/nav/now-playing';
import { Header } from '@/components/nav/header';
import { Hero } from '@/components/hero/main';
import { Testimonials } from '@/components/sections/testimonials';
import { GrayBox } from '@/components/containers/graybox';
import { Initiatives } from '@/components/sections/initiatives';
import { Brands } from '@/components/sections/brands';
import { Stats } from '@/components/sections/stats';
import { GradientBox } from '@/components/containers/gradientbox';
import { TransparentHorizontal } from '@/components/containers/transparent-horizontal';
import { TransparentVertical } from '@/components/containers/transparent-vertical';
import { RoleButton } from '@/components/nav/rolebutton';

import { About } from '@/components/sections/about';
export default function Home() {
  return (
    <div>
    
    <header className="w-full grid grid-rows-[10rem_1fr]  justify-items-center min-h-screen">
      <div className="w-full h-full">
        <NowPlaying />
        <Header />
      </div>
      <Hero />
    </header>
      
    <main className="w-full h-full">      
      <Brands />
     
      <TransparentVertical>
        <Stats />
        <About />
      </TransparentVertical>

      <TransparentHorizontal>
        <RoleButton className="bg-ebe" />
        <RoleButton className="bg-gray-100" />
      </TransparentHorizontal>

      <GradientBox title="Title">costam</GradientBox>

      <Testimonials />
      <GrayBox title="Title" description="Description">
        <Initiatives />
      </GrayBox>
    </main>

    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
