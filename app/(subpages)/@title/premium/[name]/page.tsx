import {t} from '@/scripts/translate'


export default async function PremiumTitle({params}: {params: {name: string}}) {
    const name = (await params).name
    return <h1 className="text-2xl md:text-[2rem] lg:text-[4rem] font-extralight tracking-tighter uppercase">{t(`premium.${name}.title`)}</h1>
}