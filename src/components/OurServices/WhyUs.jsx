import React from "react";
import Image from "next/image";
import photoOne from "@/assets/edu_photo.jpeg";
import {
  ArrowRight,
  DraftingCompass,
  Check,
  Headset,
  UserRoundCheck,
} from "lucide-react";

export default function WhyUs() {
  let whyChooseUs = [
    {
      image: <Check stroke="white" size={18} />,
      title: "Quality",
      desc: "Services",
    },
    {
      image: <UserRoundCheck stroke="white" size={18} />,
      title: "Quality",
      desc: "Services",
    },
    {
      image: <DraftingCompass stroke="white" size={18} />,
      title: "Quality",
      desc: "Services",
    },
    {
      image: <Headset stroke="white" size={18} />,
      title: "Quality",
      desc: "Services",
    },
  ];
  return (
    <div>
      <div className="flex flex-col md:flex-row mx-auto px-4">
        <div className="text-start lg:text-lg md:w-[50%] py-10 px-3 md:py-10 md:px-16 bg-slate-100">
          <p className="text-green-500 font-semibold">Why Choose Us</p>
          <p className="text-xl py-2 font-bold lg:text-3xl">
            Lorem ipsum dolor <br /> sit amet consectetur adipisicing elit.
          </p>
          <p className="pt-5 pb-3">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo erat amet
          </p>

          <div className="grid gap-5 grid-cols-2">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="flex items-center gap-2 md:gap-5">
                <div className="bg-green-500 border-2 h-8 min-w-8 rounded-full flex justify-center items-center">
                  {item.image}
                </div>
                <div>
                  <p>{item.title}</p>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:w-[50%]">
          <Image src={photoOne} alt="panels" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}
