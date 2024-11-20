import React from "react";
import Card from "./Card";
import Image from "next/image";
import photoOne from "@/assets/edu_photo.jpeg";

export default function OurServices() {
  let serviceCardDetails = [
    {
      cardImage: photoOne,
      cardTitle: "Lorem, ipsum dolor.",
      cardDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos.",
      linkUrl: "#",
    },
    {
      cardImage: photoOne,
      cardTitle: "Lorem, ipsum dolor.",
      cardDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos.",
      linkUrl: "#",
    },
    {
      cardImage: photoOne,
      cardTitle: "Lorem, ipsum dolor.",
      cardDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos.",
      linkUrl: "#",
    },
    {
      cardImage: photoOne,
      cardTitle: "Lorem, ipsum dolor.",
      cardDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos.",
      linkUrl: "#",
    },
    {
      cardImage: photoOne,
      cardTitle: "Lorem, ipsum dolor.",
      cardDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos.",
      linkUrl: "#",
    },
    {
      cardImage: photoOne,
      cardTitle: "Lorem, ipsum dolor.",
      cardDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos.",
      linkUrl: "#",
    },
  ];

  return (
    <div className="container px-4 xl:px-20 mx-auto py-10">
      <div className="text-center text-lg font-semibold pb-16">
        <p className="text-green-500 font-semibold">Our Services</p>
        <p className="text-xl py-2 font-bold lg:text-3xl">
          We Are Pioneers In The World Of <br /> Education
        </p>
      </div>
      {/* grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-10 md:gap-20 lg:gap-10 xl:gap-20 w-full */}
      <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10">
        {serviceCardDetails.map((item, i) => (
          <Card
            key={i}
            cardImage={item.cardImage}
            cardTitle={item.cardTitle}
            cardDescription={item.cardDescription}
            linkUrl=""
          />
        ))}
      </div>
    </div>
  );
}

// dark:bg-gray-800 dark:border-gray-700
