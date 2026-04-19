import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import Button from "./Button";
import Office from "./Office";

const ContactSection = () => {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="max-w-4xl mx-auto">
          
          <h2 className="font-display text-4xl sm:text-5xl tracking-tight font-medium text-white [text-wrap:balance]">
            Let’s build something meaningful together.
          </h2>
          <div className="mt-6 flex">
            <Button href={"/contact"} variant="gradient">
              Start Your Project
            </Button>
          </div>
          <div className="mt-10">
            <div className="h-px w-full bg-gradient-to-r from-[#C85ACF] via-[#8E3CA8] to-[#6A2A82]"></div>

            <div className="pt-10">
              <h3 className="font-display text-base font-semibold text-white">
                Our office
              </h3>
              <Office
                invert
                className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
              />
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  );
};

export default ContactSection;
