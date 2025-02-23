
import { NowPlaying } from '@/components/nav/now-playing';
import { Header } from '@/components/nav/header';
import { Hero } from '@/components/hero/main';
import { Testimonials } from '@/components/sections/testimonials';
import { GrayBox } from '@/components/containers/graybox';
import { Initiatives } from '@/components/sections/initiatives';
import { Brands } from '@/components/sections/brands';
import { Stats } from '@/components/sections/stats';
import { GradientBox } from '@/components/containers/gradientbox';
import { BoxWithHorizontalItems } from '@/components/containers/box-horizontal';
import { BoxWithVerticalItems } from '@/components/containers/box-vertical';
import { RoleButton } from '@/components/nav/rolebutton';
import { SectionTitle } from '@/components/text/section-title';
import { SectionSecondaryTitle } from '@/components/text/section-secondary-title';
import { About } from '@/components/sections/about';
import { Speakers } from '@/components/sections/speakers';
import { RequestACall } from '@/components/forms/request-a-call';
import { FullPagePhoto } from '@/components/containers/fullpagephoto';
import { Exhibitors } from '@/components/sections/exhibitors';
import { MoreButton } from '@/components/nav/morebutton';
import { Footer } from '@/components/footer';
import { Recap } from '@/components/sections/recap';


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

      <BoxWithVerticalItems>
        <Stats />
        <About />
      </BoxWithVerticalItems>

      <BoxWithHorizontalItems>
        <RoleButton className="bg-ebe" label="visit" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos." buttonLabel="Role" buttonHref="/role" />
        <RoleButton className="bg-gray-100" label="exhibit" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos." buttonLabel="Role" buttonHref="/role" />
      </BoxWithHorizontalItems>

      <GradientBox title={<SectionTitle label="Title" />}>
      <BoxWithVerticalItems>
        <Exhibitors />
        <MoreButton label="View all exhibitors" href="/exhibitors" />
      </BoxWithVerticalItems>
      </GradientBox>

      <BoxWithHorizontalItems className="bg-ebe">
        <RoleButton className="" label="visit" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos." buttonLabel="Role" buttonHref="/" />
        <RequestACall className="" />
      </BoxWithHorizontalItems>

      <BoxWithVerticalItems className="items-start">
        <SectionTitle label="MEET OUR SPEAKERS" className="pl-5"/>
        <Speakers />
      </BoxWithVerticalItems>

      <GrayBox>
        <Initiatives 
          title={<SectionSecondaryTitle label="Initiatives" />}
        />
      </GrayBox>

      <FullPagePhoto src="https://res.cloudinary.com/eventjuicer/image/upload/v1738234530/DSC01467-eventshooters--2048px.jpg" className="h-[70dvh]" />

      <Recap />

      <Testimonials />

    </main>

    <Footer />
    </div>
  );
}
