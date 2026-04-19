import React from "react";
import GridPattern from "./GridPattern";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Values = () => {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 
          [mask-image:linear-gradient(to_bottom,white_20%,transparent_70%)]"
          yOffset={-270}
        />
      </div>
      <SectionIntro
        eyebrow="Our values"
        title="Balancing reliability and innovation"
      >
        <p>
          Our work is grounded in clarity, intention, and a commitment to
          building solutions that last. We stay curious, adapt quickly, and
          approach every project with a balance of proven practices and
          forward‑thinking creativity.
        </p>
      </SectionIntro>
      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulous">
            Every detail matters. From the first discovery call to the final
            handoff, we approach each decision with care, ensuring the work feels
            cohesive, thoughtful, and aligned with your vision.
          </GridListItem>

          <GridListItem title="Efficient">
            We design streamlined processes that keep momentum high and
            communication clear. Our systems allow us to move quickly without
            compromising quality.
          </GridListItem>

          <GridListItem title="Adaptable">
            No two businesses are the same. We tailor our approach to meet your
            needs, adjusting with intention as your project evolves.
          </GridListItem>

          <GridListItem title="Honest">
            Transparency is at the core of how we work. You’ll always know where
            things stand, what we’re focusing on, and why each decision supports
            your goals.
          </GridListItem>

          <GridListItem title="Loyal">
            We build long‑term partnerships rooted in trust. Our support doesn’t
            end at launch — we stay invested in your success as your business
            grows.
          </GridListItem>

          <GridListItem title="Innovative">
            We stay engaged with emerging tools and ideas, bringing fresh
            thinking to every project while maintaining a strong foundation of
            reliable, scalable practices.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Values;
