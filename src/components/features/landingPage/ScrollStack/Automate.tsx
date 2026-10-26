"use client";
import ScrollButton from "@/components/reusable/ScrollButton";
import Image from "next/image";
import React from "react";

const Automate: React.FC = () => {
  return (
    <div className="h-full w-full">
      <div className="bg-text-secondary flex h-full w-full overflow-hidden rounded-t-4xl shadow-xl">
        <div className="mx-auto grid h-full min-h-0 w-full max-w-[1920px] grid-cols-1 items-stretch gap-6 px-4 py-6 md:grid-cols-2 md:gap-10 md:px-10 md:py-8">
          <div className="relative h-64 w-full overflow-hidden rounded-xl md:h-full md:min-h-[320px]">
            <Image
              src="/landingPage/img3.png"
              alt="We Automate"
              fill
              unoptimized
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="scrollbar-hidden h-full min-h-0 w-full overflow-y-auto text-white md:w-1/2">
            <h2 className="mb-6 text-2xl font-bold xl:text-[32px]">We Automate</h2>
            <p className="mb-8 text-sm leading-relaxed md:text-base xl:text-xl">
                Strategic automation is essential for organisations seeking to enhance operational
                efficiency, optimise resources, and scale effectively. At NXDI, we focus on
                assessing automation readiness, identifying high-impact opportunities, and
                developing tailored solutions that deliver measurable business value.A key area of
                our expertise is Software Robotics (SR), which enables organisations to automate
                repetitive tasks, enhance accuracy, and improve workforce productivity. By
                implementing intelligent automation strategies, we empower businesses to reallocate
                valuable resources towards innovation, customer experience, and long-term strategic
                growth.Beyond implementation, we provide ongoing support and performance monitoring
                to ensure the sustainability and continuous optimisation of automation initiatives.
                We prioritise seamless integration with existing workflows, minimising disruption
                while maximising efficiency gains. With our expertise, organisations can enhance
                agility, reduce operational costs, and maintain a competitive advantage in an
                increasingly dynamic business environment.
              </p>
              <ScrollButton title="Read More" />
            </div>
          </div>
        </div>
      </div>
  );
};

export default Automate;
