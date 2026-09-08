import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import Services from "@/components/sections/Services";
import WorkingProcess from "@/components/sections/WorkingProcess";
import PaymentMethods from "@/components/sections/PaymentMethods";
import GrowthTimeline from "@/components/sections/GrowthTimeline";
import Advantages from "@/components/sections/Advantages";
import Faq from "@/components/sections/Faq";
import CtaBanner from "@/components/sections/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Services />
      <WorkingProcess />
      <PaymentMethods />
      <GrowthTimeline />
      <Advantages />
      <Faq />
      <CtaBanner />
    </>
  );
}
