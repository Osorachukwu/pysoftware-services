"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Card from "@/components/testimonial/Card";
import {
   ChevronRight,
   ChevronLeft
  } from "lucide-react";

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  let testimonialCardDetails = [
    {
      testifierPhoto: "https://readymadeui.com/profile_2.webp",
      testifierNname: "John Doe",
      testifierOccupation: "Web Designer | Software hub PVT. LTD.",
      testimonyTitle: "Amazing Design Inspiration",
      testimonyDesc:
        "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.",
    },
    {
      testifierPhoto: "https://readymadeui.com/profile_2.webp",
      testifierNname: "Shaw Micheal",
      testifierOccupation: "Web Designer | Software hub PVT. LTD.",
      testimonyTitle: "Amazing Design Inspiration",
      testimonyDesc:
        "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.",
    },
    {
      testifierPhoto: "https://readymadeui.com/profile_2.webp",
      testifierNname: "John Doe",
      testifierOccupation: "Web Designer | Software hub PVT. LTD.",
      testimonyTitle: "Amazing Design Inspiration",
      testimonyDesc:
        "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.",
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-2xl mx-auto text-center mb-8">
        <h2 className="text-gray-800 text-3xl font-extrabold">
          What our happy client say
        </h2>
        <p className="text-gray-800 text-sm mt-4 leading-relaxed">
          Veniam proident aute magna anim excepteur et ex consectetur velit
          ullamco veniam minim aute sit. Elit occaecat officia et laboris Lorem
          minim. Officia do aliqua adipisicing ullamco in.
        </p>
      </div>
      <div className="embla">
        <div className="embla__viewport py-5" ref={emblaRef}>
          <div className="embla__container">
            {testimonialCardDetails.map((item, i) => (
              <div className="embla__slide" key={i}>
                <Card
                  
                  testifierPhoto={item.testifierPhoto}
                  testifierNname={item.testifierNname}
                  testifierOccupation={item.testifierOccupation}
                  testimonyTitle={item.testimonyTitle}
                  testimonyDesc={item.testimonyDesc}
                />
              </div>
            ))}

            {/* <div className="embla__slide">Slide 1</div>
        <div className="embla__slide">Slide 2</div>
        <div className="embla__slide">Slide 3</div> */}
          </div>
          <div className="py-5 flex justify-center gap-32">
            <button className="embla__prev border rounded-full" onClick={scrollPrev}>
              <ChevronLeft />
            </button>
            <button className="embla__next border rounded-full" onClick={scrollNext}>
             <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
