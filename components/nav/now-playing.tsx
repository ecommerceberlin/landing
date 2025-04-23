import { t } from "@/scripts/translate";
import Link from "next/link";
import { NowPlaying as NowPlayingType } from "@/types";
import { isExternalLink } from "@/lib/utils";
import Marquee from "@/components/containers/marquee";

export function NowPlaying({baseLabel, link, enabled }: NowPlayingType) {

  if(!enabled || !link) return null;

  const title = t(`now-playing.${baseLabel}.title`);
  const linkTitle = t(`now-playing.${baseLabel}.link`);   

  return (
    <div className="w-full h-[3rem] bg-[#FCE61D] flex flex-row items-center">

      <Marquee>
      <div className="uppercase text-lg">
      
      {isExternalLink(link)?<a href={link} className="underline ml-2">{`${title} ${linkTitle}`}</a>:<Link href={link} className="underline ml-2">{`${title} ${linkTitle}`}</Link>}
      </div>
      </Marquee>
    </div>
  );
}

