import Button from "@/components/ui/Button";
import Image from "next/image";

export default function CtaBanner() {
  return (
    <section className="relative bg-white py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="relative  rounded-3xl bg-[#fdf3e8] px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
          {/* background world map */}
          <div className="pointer-events-none absolute inset-0">
            <Image
              src="/images/cta-map.svg"
              alt=""
              aria-hidden="true"
              fill
              className="select-none object-contain object-center"
            />
          </div>

          {/* copy */}
          <div className="relative z-10 max-w-xl">
            <h2 className=" text-[28px] font-bold leading-tight text-ink sm:text-[34px]">
              Ready to Grow Your Social Media{" "}
              <span className="text-primary">in Bangladesh?</span>
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-[1.7] text-ink/70">
              Join over 68,000 users who are already using SMM to grow faster on
              Facebook, Instagram, YouTube, TikTok, and more. Getting started is
              free and takes less than 60 seconds.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="outline" href="/services">
                See All Services
              </Button>
              <Button href="/sign-up">Create Free Account</Button>
            </div>
          </div>

          {/* person */}
          <Image
            src="/images/cta-person.png"
            alt=""
            aria-hidden="true"
            width={600}
            height={900}
            className="pointer-events-none absolute bottom-0 right-2 z-20 hidden h-[128%] w-auto select-none object-contain object-bottom lg:right-10 lg:block"
          />
        </div>
      </div>
    </section>
  );
}