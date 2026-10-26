"use client";
import HomeButton from "@/components/reusable/HomeButton";
import Image from "next/image";
import React from "react";

const Mine: React.FC = () => {
  return (
    <div className="h-full w-full">
      <div className="bg-text-tertiary flex h-full w-full overflow-hidden rounded-t-4xl shadow-xl">
        <div className="mx-auto grid h-full min-h-0 w-full max-w-[1920px] grid-cols-1 items-stretch gap-6 px-4 py-6 md:grid-cols-2 md:gap-10 md:px-10 md:py-8">
          <div className="relative h-64 w-full overflow-hidden rounded-xl md:h-full md:min-h-[320px]">
            <Image
              src="/landingPage/img1.png"
              alt="We Mine"
              fill
              unoptimized
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="scrollbar-hidden h-full min-h-0 w-full overflow-y-auto text-white md:w-1/2">
            <h2 className="mb-6 text-2xl font-bold xl:text-[32px]">We Mine</h2>
            <p className="mb-8 text-sm leading-relaxed md:text-base xl:text-xl">
                Process mining provides organisations with deep, data-driven insights into their
                operational workflows by systematically analysing system data. Through a structured
                and meticulous evaluation of system events, NXDI enables businesses to identify
                inefficiencies, address compliance risks, and uncover opportunities for
                optimisation. We leverage advanced analytics and industry-leading methodologies to
                map and assess processes within real-world conditions, delivering a transparent,
                evidence-based view of operational performance. This comprehensive approach empowers
                organisations to streamline workflows, enhance efficiency, and establish a strong
                foundation for seamless process automation. By proactively identifying
                inefficiencies, businesses can make informed, strategic decisions that drive
                operational excellence and foster a culture of continuous improvement. Furthermore,
                our detailed, insight-rich reporting provides organisations with clear, actionable
                recommendations, ensuring sustainable growth, enhanced performance, and long-term
                business resilience.
              </p>

              <HomeButton title="Read More" />
            </div>
          </div>
        </div>
      </div>
  );
};

export default Mine;
