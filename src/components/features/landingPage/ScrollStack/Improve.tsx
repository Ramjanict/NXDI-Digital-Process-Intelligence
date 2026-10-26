"use client";
import HomeButton from "@/components/reusable/HomeButton";
import Image from "next/image";
import React from "react";

const Improve: React.FC = () => {
  return (
    <div className="h-full w-full">
      <div className="bg-text-primary flex h-full w-full overflow-hidden rounded-t-4xl shadow-xl">
        <div className="mx-auto grid h-full min-h-0 w-full max-w-[1920px] grid-cols-1 items-stretch gap-6 px-4 py-6 md:grid-cols-2 md:gap-10 md:px-10 md:py-8">
          <div className="scrollbar-hidden h-full min-h-0 w-full overflow-y-auto text-white md:w-1/2">
            <h2 className="mb-6 text-2xl font-bold xl:text-[32px]">We Improve</h2>
            <p className="mb-8 text-sm leading-relaxed md:text-base xl:text-xl">
                Enhancing operational efficiency requires a structured and strategic approach to
                process improvement. At NXDI, we work in close partnership with your organisation to
                identify inefficiencies, address operational challenges, and optimise workflows to
                drive productivity and service excellence. We undertake comprehensive end-to-end
                process evaluations, engaging key stakeholders and applying data-driven insights to
                develop tailored, high-impact solutions. By ensuring that processes are fully
                aligned with business objectives, we support organisations in implementing targeted
                improvements and automation strategies that streamline operations, reduce
                complexity, and enhance overall performance. Our consultative approach fosters
                collaboration across all levels of the organisation, ensuring stakeholder engagement
                and cultivating a culture of continuous improvement. This holistic methodology not
                only delivers immediate operational benefits but also establishes a resilient
                framework for sustained efficiency, adaptability, and long-term business success in
                an evolving marketplace.
              </p>
              <HomeButton title="Read More" />
            </div>
            <div className="relative h-64 w-full overflow-hidden rounded-xl md:h-full md:min-h-[320px]">
              <Image
                src="/landingPage/img2.png"
                alt="We Improve"
                fill
                unoptimized
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
  );
};

export default Improve;
