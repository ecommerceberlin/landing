
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
import { About } from '@/components/sections/about';
import { Speakers } from '@/components/sections/speakers';
import { RequestACall } from '@/components/forms/request-a-call';
import { FullPagePhoto } from '@/components/containers/fullpagephoto';
import { Exhibitors } from '@/components/sections/exhibitors';
import { MoreButton } from '@/components/nav/morebutton';
import { Footer } from '@/components/footer';
import { Recap } from '@/components/sections/recap';
import { Suspense } from 'react';
import { nowPlaying } from '@/settings/now-playing';
import { brands } from '@/settings/brands';
import { hero } from '@/settings/hero';
import { statItems } from '@/settings/stats';
import { recap } from '@/settings/recap';
import { footer } from '@/settings/footer';
import {cn} from '@/lib/utils'

export default function Home() {
  return (
    <div className="min-h-screen w-[100dvw]">
    <header className={cn("w-full grid grid-rows-[7rem_1fr]  justify-items-center min-h-screen max-w-[100dvw]", nowPlaying.enabled && "grid-rows-[10rem_1fr_10rem]")}>
      <div className="w-full">
        <NowPlaying {...nowPlaying} />
        <Header />
      </div>
      <Hero {...hero} />
    </header>
      
    <main className="w-full max-w-[100dvw]">      
      <Brands items={brands} />

      <BoxWithVerticalItems>
        <Stats items={statItems} />
        <About />
      </BoxWithVerticalItems>

      <BoxWithHorizontalItems>
        <RoleButton className="bg-ebe" baseLabel="visitor.role"  buttonHref="/visit" />
        <RoleButton className="bg-gray-100" baseLabel="exhibitor.role" buttonHref="/exhibit" />
      </BoxWithHorizontalItems>

      <GradientBox title={<SectionTitle label="exhibitor.list-archive.title" />}>
      <BoxWithVerticalItems>
        <Suspense fallback={<div>Loading...</div>}>
          <Exhibitors />
        </Suspense>
        {/* <MoreButton label="View all exhibitors" href="/exhibitors" /> */}
      </BoxWithVerticalItems>
      </GradientBox>

      <BoxWithHorizontalItems className="bg-ebe">
        <RoleButton baseLabel="exhibitor.book-a-call" />
        <RequestACall baseLabel="exhibitor.book-a-call" />
      </BoxWithHorizontalItems>

      <BoxWithVerticalItems className="items-start">
        <SectionTitle label="speaker.list-archive.title" className="pl-5"/>
        <Suspense fallback={<div className="h-[500px] text-center">Loading...</div>}>
          <Speakers />
        </Suspense>
      </BoxWithVerticalItems>

      <GrayBox>
        <Initiatives baseLabel="initiatives" />
      </GrayBox>

      <FullPagePhoto src="https://res.cloudinary.com/eventjuicer/image/upload/v1738234530/DSC01467-eventshooters--2048px.jpg" className="h-[70dvh]" />

      <Recap {...recap} />

      <Testimonials />

    </main>

    <Footer {...footer} />
    </div>
  );
}
