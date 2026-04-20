"use client";

import Image from "next/image";
import Container from "./Container";
import FadeIn from "./FadeIn";

const Founder = () => {
  return (
    <Container className="mt-24 lg:mt-32">
      <FadeIn>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center max-w-5xl mx-auto">
          
          {/* Photo */}
          <div className="relative aspect-[3/4] w-3/4 lg:w-2/3 mx-auto lg:ml-auto overflow-hidden rounded-3xl">
            <Image
              src="/images/virginia-marc.png"
              alt="Virginia Marc — Founder of PSD Studio"
              fill
              quality={100}
              className="object-cover"
            />
          </div>

          {/* Bio */}
          <div className="text-center lg:text-left">
            <h2 className="font-display text-3xl font-semibold text-neutral-950">
              Meet the Founder
            </h2>

            {/* FIXED: proper wrapper */}
            <div className="mt-6 text-neutral-700 leading-relaxed space-y-4 max-w-md mx-auto lg:max-w-none lg:mx-0 lg:pl-0">
              <p>
                I’m Virginia Marc, founder and creative lead of PSD Studio. My work sits at
                the intersection of design, development, and thoughtful strategy—helping small
                businesses and creators build digital experiences that feel clear, intentional,
                and deeply human.
              </p>

              <p>
                Before stepping into tech, I earned a B.S. in Biology with a minor in Chemistry
                and spent more than 15 years in healthcare, where I learned how to listen,
                problem‑solve, and support people with care. I later completed my A.S. in Web
                Developer–Internet Services Technology, bringing my love for structure and
                creativity together. I’m originally from Fort Lauderdale, and outside of work
                I enjoy reading, roller skating, writing, taking quiet strolls in the park,
                and playing tennis.
              </p>
            </div>
          </div>

        </div>
      </FadeIn>
    </Container>
  );
};

export default Founder;
