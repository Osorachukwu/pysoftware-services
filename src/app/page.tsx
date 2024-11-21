import OurServices from "@/components/OurServices/OurServices";
import WhyUS from '@/components/OurServices/WhyUs';
import Testimonial from '@/components/testimonial/Testimonial'
import Hero from '@/components/Hero'
import OurTeam from '@/components/OurTeam'

export default function Home() {
  return (
    <div>
      <Hero />
      <OurServices />
      <WhyUS />
      <OurTeam />
      <Testimonial />
    </div>
  );
}
