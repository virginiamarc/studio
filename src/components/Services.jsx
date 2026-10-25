import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageLaptop from "../images/laptop.png";
import List, { ListItem } from "./List";

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="Digital solutions designed to move your business forward."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          At PSDO Studio, we combine technology, creativity, and
          thoughtful design to build digital solutions that help
          businesses grow, improve workflows, and create meaningful
          experiences for their customers.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>

          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Website Design & Development">
              We design and develop responsive, modern websites
              tailored to your brand and business goals. From
              professional business websites to database-driven
              platforms and content management systems, we focus
              on usability, accessibility, and performance.
            </ListItem>

            <ListItem title="Custom Software & Web Applications">
              We build custom web applications and software
              solutions that simplify processes and solve
              real-world business challenges. From dashboards
              and workflow management systems to interactive
              applications, our solutions are designed with
              functionality, efficiency, and scalability in mind.
            </ListItem>

            <ListItem title="E-Commerce Solutions">
              We create user-friendly online shopping experiences
              that help businesses showcase products, manage
              content, and connect with customers. Our approach
              prioritizes intuitive navigation, responsive design,
              and a smooth customer experience.
            </ListItem>

            <ListItem title="Creative Design & Branding">
              We help businesses communicate their identity
              through thoughtful visual design. From brand
              identity and digital graphics to website interfaces
              and multimedia content, we create cohesive visual
              experiences that strengthen brand recognition.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
}

export default Services;