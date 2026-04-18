import React from "react";
import GridPattern from "./GridPattern";
import clsx from "clsx";
import Container from "./Container";
import FadeIn from "./FadeIn";
import Image from "next/image";
import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});


const Testimonials = ({ children, client, className }) => {
  return (
    <div
      className={clsx(
        "relative isolate bg-neutral-50 py-8 sm:py-12 md:py-16",
        className
      )}
    >
      <GridPattern
        className="absolute inset-0 -z-10 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]"
        yOffset={-256}
      />
      <Container>
        <FadeIn>
          <figure className="mx-auto max-w-4xl">
            <blockquote className="relative font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              <p>
                <span className="before:content-['“'] after:content-['”']">
                  {children}
                </span>

                <span
                  className={`${dancing.className} ml-3 text-3xl font-bold text-neutral-900`}
                >
                  — {client.name}
                </span>
              </p>
            </blockquote>
          </figure>
        </FadeIn>
      </Container>
    </div>
  );
};

export default Testimonials;
