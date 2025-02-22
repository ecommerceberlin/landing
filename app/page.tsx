import Image from 'next/image';
import { NowPlaying } from '@/components/nav/now-playing';
import { Header } from '@/components/nav/header';
import { Hero } from '@/components/hero/main';
import { Testimonials } from '@/components/sections/testimonials';
import { GrayBox } from '@/components/containers/graybox';
import { Initiatives } from '@/components/sections/initiatives';
import { Brands } from '@/components/sections/brands';
import { Stats } from '@/components/sections/stats';
import { GradientBox } from '@/components/containers/gradientbox';
export default function Home() {
  return (
    <div className="w-full grid grid-rows-[10rem_1fr]  justify-items-center min-h-screen">
      <header className="w-full">
        <NowPlaying />
        <Header />
      </header>
      <main className="w-full">
        <Hero />
        <Brands />
        <Stats />
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
