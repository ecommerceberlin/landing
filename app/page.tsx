
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
import { SectionTitle } from '@/components/text/section-title';
import { SectionSecondaryTitle } from '@/components/text/section-secondary-title';
import { About } from '@/components/sections/about';
import { Speakers } from '@/components/sections/speakers';
import { RequestACall } from '@/components/forms/request-a-call';
import { FullPagePhoto } from '@/components/containers/fullpagephoto';
export default function Home() {
  return (
    <div className="min-h-screen w-[100dvw]">
    
    <header className="w-full grid grid-rows-[10rem_1fr]  justify-items-center min-h-screen max-w-[100dvw]">
      <div className="w-full">
        <NowPlaying />
        <Header />
      </div>
      <Hero />
    </header>
      
    <main className="w-full max-w-[100dvw]">      
      <Brands />
     
      <TransparentVertical>
        <Stats />
        <About />
      </TransparentVertical>

      <TransparentHorizontal>
        <RoleButton className="bg-ebe" />
        <RoleButton className="bg-gray-100" />
      </TransparentHorizontal>

      <GradientBox title={  <SectionTitle label="Title" />}>costam</GradientBox>

    
      <TransparentHorizontal className="bg-ebe">
      <RoleButton className="" />
      <RequestACall className="" />
      </TransparentHorizontal>


      <TransparentVertical className="items-start">
        <SectionTitle label="MEET OUR SPEAKERS" />
        
        <Speakers />
      </TransparentVertical>


  
      <GrayBox title={<SectionSecondaryTitle label="Title" />} description="Description">
        <Initiatives />
      </GrayBox>


      <FullPagePhoto src="https://res.cloudinary.com/eventjuicer/image/upload/v1738234530/DSC01467-eventshooters--2048px.jpg" className="h-[70dvh]" />


      <Testimonials />
      
    </main>

    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
