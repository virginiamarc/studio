import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Cultures = () => {
  return (
    <div className="mt-24 rounded-4xl bg-gradient-to-br from-[#C85ACF] via-[#8E3CA8] to-[#6A2A82] py-24 sm:mt-32 lg:mt-40 lg:py-32">
      
      <SectionIntro
        eyebrow="Our Principles"
        title="Creating with intention, clarity, and care."
        invert
      >
        <p>
        We’re a small, growing studio built on focus, intention, and a genuine
        respect for the people we collaborate with. Every project receives our full
        attention, thoughtful craft, and a shared commitment to meaningful work.
      </p>
      </SectionIntro>

      <Container className="mt-16">
        <GridList>
          <GridListItem title="Loyalty" invert>
            We build long‑term relationships grounded in consistency, reliability,
            and a dedication to creating work that truly supports our clients’
            goals.
          </GridListItem>

          <GridListItem title="Trust" invert>
            Clear communication and transparent processes guide everything we do.
            You’ll always know what’s happening, why it matters, and where the
            project is headed.
          </GridListItem>

          <GridListItem title="Compassion" invert>
            We believe great work starts with understanding people — their goals,
            their challenges, and the realities that shape their world beyond the
            screen. We design with that in mind.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Cultures;
