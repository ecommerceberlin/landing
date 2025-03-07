import { t } from "@/scripts/translate";
import Link from "next/link";
import { NowPlaying as NowPlayingType } from "@/types";
import { isExternalLink } from "@/lib/utils";
export function NowPlaying({baseLabel, link, enabled }: NowPlayingType) {

  if(!enabled || !link) return null;

  return (
    <div className="w-full h-[3rem] bg-[#FCE61D] flex flex-row items-center justify-center uppercase text-lg">
      {t(`now-playing.${baseLabel}.title`)}
      {isExternalLink(link)?<a href={link} className="underline ml-2">{t(`now-playing.${baseLabel}.link`)}</a>:<Link href={link} className="underline ml-2">{t(`now-playing.${baseLabel}.link`)}</Link>}
    </div>
  );
}

