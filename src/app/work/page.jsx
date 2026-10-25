import PageIntro from "@/components/PageIntro";
import FeaturedProjects from "@/components/FeaturedProjects";
import React from "react";

const WorkPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="Our work"
        title="Digital experiences crafted with intention."
      >
        <p>
          At PSDO Studio, we transform ideas into functional,
          engaging digital solutions. Our work spans responsive
          websites, full-stack web applications, database-driven
          software, and creative design. Each project reflects
          our commitment to usability, accessibility, thoughtful
          design, and real-world impact.
        </p>
      </PageIntro>

      <FeaturedProjects />
    </>
  );
};

export default WorkPage;
