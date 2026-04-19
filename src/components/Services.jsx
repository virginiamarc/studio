import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageLaptop from "../images/laptop.png";
import List, { ListItem } from "./List";

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="Strategic design and development that moves your business forward."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We partner with entrepreneurs and growing brands to create digital experiences that are thoughtful, functional, and built for long‑term success.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end" />
            </FadeIn>
          </div>
          {/* List item */}
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Web development">
              We design and build clean, modern websites that reflect your brand and support your business goals. Every page is crafted with clarity, usability, and long‑term scalability in mind.
            </ListItem>
            <ListItem title="Application development">
              From custom dashboards to full-featured applications, we develop solutions that streamline workflows and create seamless user experiences across devices.
            </ListItem>
            <ListItem title="E-commerce">
              We create intuitive, conversion‑focused online stores that make it easy for customers to browse, shop, and trust your brand from the very first click.
            </ListItem>
            <ListItem title="Custom content management">
              We build flexible, easy‑to‑manage content systems that give you full control over your website—without the complexity or technical overwhelm.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
}

export default Services;
