import { t } from "@/scripts/translate";
import Link from "next/link";
import { NowPlaying as NowPlayingType } from "@/types";

export function NowPlaying({baseLabel, link }: NowPlayingType) {
  return (
    <div className="w-full h-[3rem] bg-[#FCE61D] flex flex-row items-center justify-center uppercase text-lg">
      {t(`now-playing.${baseLabel}.title`)}
      {link && <Link href={link} className="underline ml-2">{t(`now-playing.${baseLabel}.link`)}</Link>}
    </div>
  );
}
