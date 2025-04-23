import { BoxWithHorizontalItems } from "@/components/containers/box-horizontal"
import { RoleButton } from "@/components/nav/rolebutton"
import { RequestACall } from "@/components/forms/request-a-call"

export const dynamic = 'force-static'

const slides = [
  "https://res.cloudinary.com/ecommerceberlin/image/upload/v1744034210/Website/about/postshow2025-slide1.svg",
  "https://res.cloudinary.com/ecommerceberlin/image/upload/v1744034210/Website/about/postshow2025-slide2.svg",
  "https://res.cloudinary.com/ecommerceberlin/image/upload/v1744034210/Website/about/postshow2025-slide3.svg",
  "https://res.cloudinary.com/ecommerceberlin/image/upload/v1744034210/Website/about/postshow2025-slide4.svg"
]

export default function AboutPage() {
  return (
    <>
      <div className="mt-8 flex flex-col items-center gap-8">

        {slides.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-full max-w-[1200px] h-auto"
          />
        ))}
      </div>

      <div className="w-full max-w-[100dvw] flex mt-12">
        <BoxWithHorizontalItems className="bg-ebe w-full">
          <RoleButton baseLabel="about.book-a-call" />
          <RequestACall baseLabel="about.book-a-call" />
        </BoxWithHorizontalItems>
      </div>
    </>
  )
}
