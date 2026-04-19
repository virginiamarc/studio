import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Principles from "@/components/Principles";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";
import Founder from "@/components/Founder";


const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="About us" title="Our strength is collaboration">
        <p>
          At PSD Studio, collaboration is at the heart of everything we build. We
          believe the best digital experiences come from working closely with our
          clients, understanding their goals, and crafting solutions with intention
          and clarity.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            What began as a personal passion for thoughtful design and clean,
            maintainable development has grown into a studio dedicated to creating
            meaningful digital products. From nonprofit platforms to full‑stack
            applications, our work is grounded in accessibility, precision, and
            real‑world impact.
          </p>
          <p>
            We approach every project with care — blending design, engineering, and
            strategy to deliver experiences that feel intuitive, modern, and
            purpose‑driven. Our goal is simple: build work that serves people,
            supports communities, and stands the test of time.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="6+" label="Years of experience" />
          <StatListItem value="40+" label="Projects delivered" />
          <StatListItem value="98%" label="Client satisfaction" />
        </StatList>
      </Container>
      <Principles />
      <Founder />
      <ContactSection />
    </>
  );
};

export default AboutPage;
11