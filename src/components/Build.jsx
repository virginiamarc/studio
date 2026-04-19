import React from "react";
import Section from "./Section";
import imageLaptop from "@/images/laptop.png";
import Blockquote from "./Blockquote";

const Build = () => {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          With clarity from the discovery phase, we translate insights into a
          structured, actionable roadmap. Every milestone is intentional—built to
          move the project forward with precision, transparency, and momentum.
        </p>
        <p>
          Each client partners with a dedicated project lead who keeps
          communication open, expectations aligned, and progress visible. Their
          role is to ensure you always know what’s happening, why it matters,
          and what’s coming next.
        </p>
        <p>
          Our team works in focused, collaborative sprints—design, development,
          and content moving together to create a cohesive product. We share
          updates early and often, inviting feedback at the moments where it
          creates the most impact.
        </p>
      </div>

      <Blockquote
        author={{ name: "Jacqueline Price", role: "CEO JP Fresh Start" }}
        className="mt-12"
      >
        Working with PSD Studio felt effortless. Their updates were clear,
        consistent, and always arrived before we even had to ask.
      </Blockquote>
    </Section>
  );
};

export default Build;
