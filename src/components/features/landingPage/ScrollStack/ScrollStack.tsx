"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Automate from "./Automate";
import Improve from "./Improve";
import Mine from "./Mine";

const sections = [
  { key: "mine", card: <Mine /> },
  { key: "improve", card: <Improve /> },
  { key: "automate", card: <Automate /> },
];

const ScrollStack = () => {
  const container = useRef<HTMLElement>(null);

  return (
    <main ref={container} className="relative bg-[#F6F6F6]">
      {sections.map((section, i) => {
        return (
          <div
            key={section.key}
            className="sticky top-20 flex h-[calc(100vh-5rem)] w-full items-center justify-center"
            style={{ zIndex: i + 1 }}
          >
            <motion.div className="relative flex h-full w-full origin-top flex-col">
              {section.card}
            </motion.div>
          </div>
        );
      })}
    </main>
  );
};

export default ScrollStack;
