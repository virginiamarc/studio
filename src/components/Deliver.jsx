import React from "react";
import Section from "./Section";
import imageDeliver from "@/images/deliver.png";
import List, { ListItem } from "./List";

const Deliver = () => {
  return (
    <Section title="Deliver" image={{ src: imageDeliver, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          As the Build phase progresses, we transition into refinement—tightening
          functionality, validating decisions, and preparing the product for a
          confident launch. Any adjustments to{" "}
          <strong className="font-semibold text-neutral-950">requirements</strong>{" "}
          are handled with clarity and intention, ensuring the final experience
          aligns with your goals.
        </p>

        <p>
          Our team brings every component together with precision. While much of
          the groundwork is established early, the final stretch is where the
          product takes shape—polished interactions, cohesive design, and
          purposeful{" "}
          <strong className="font-semibold text-neutral-950">progress</strong>{" "}
          that reflects the strategy we set from the start.
        </p>
         <p>
          At launch, the core experience is{" "}
          <strong className="font-semibold text-neutral-950">
            fully functional
          </strong>{" "}
          and ready for real users. Additional pages and enhancements are rolled
          out through our structured{" "}
          <strong className="font-semibold text-neutral-950">maintenance</strong>{" "}
          and support cycles, ensuring the product continues to evolve with your
          business.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List>
        <ListItem title="Testing"> Every feature is reviewed, validated, and tested to ensure stability
          and confidence at launch.
        </ListItem>

        <ListItem title="Infrastructure"> We deploy on reliable, scalable infrastructure tailored to your
          project’s needs, ensuring performance from day one.
        </ListItem>

        <ListItem title="Support"> We provide ongoing support and guidance, helping your product grow,
          adapt, and stay aligned with your long-term vision.
        </ListItem>
      </List>
    </Section>
  );
};

export default Deliver;
