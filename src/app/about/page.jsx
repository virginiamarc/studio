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
          At PSDO Studio, collaboration is at the heart of everything
          we create. We work closely with entrepreneurs, startups,
          and growing businesses to understand their goals and
          transform ideas into powerful digital solutions.
        </p>

        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            What began as a passion for web development, technology,
            and creative design has evolved into a studio focused
            on building meaningful digital experiences. From
            responsive websites and custom web applications to
            database-driven software and branding, our work
            combines thoughtful design with practical functionality.
          </p>

          <p>
            We approach every project with care, blending technical
            expertise, creativity, and collaboration to deliver
            accessible, intuitive, and scalable solutions. Our
            mission is to help businesses strengthen their digital
            presence, streamline processes, and turn their ideas
            into lasting results.
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