import Image from "next/image";
import OurServices from "@/components/OurServices/OurServices";
import WhyUS from '@/components/OurServices/WhyUs';
import Testimonial from '@/components/testimonial/Testimonial'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <div>
      <Hero />
      <OurServices />
      <WhyUS />
      <Testimonial />
    </div>
  );
}
