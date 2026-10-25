"use client";

import { useRef } from "react";
import Link from "next/link";
import Container from "./Container";
import FadeIn from "./FadeIn";

const projects = [
  {
    number: "01",
    title: "Foodie Finder App",
    image: "/images/projects/foodie-finder.png",
    category: "Web Application",
    description:
      "An interactive food discovery application demonstrating frontend development, user interaction, and responsive design.",
    href: "https://foodiefinder-app.netlify.app/",
    shortLabel: "FF",
  },
  {
    number: "02",
    title: "Wheel Foodie",
    image: "/images/projects/wheel-foodie.png",
    category: "Website Design & Development",
    description:
      "A food-focused website combining engaging visuals, intuitive navigation, and a responsive user experience.",
    href: "https://virginiamarc.com/wf/",
    shortLabel: "WF",
  },
  {
    number: "03",
    title: "Expense & Income Tracker",
    image: "/images/projects/expense-tracker.png",
    category: "Web Application",
    description:
      "A financial tracking application focused on organizing income and expenses through a practical interface.",
    href: "https://virginiamarc.com/p8/",
    shortLabel: "ET",
  },
  {
    number: "04",
    title: "InDesign Newsletter",
    image: "/images/projects/indesign-newsletter.png",
    category: "Graphic Design & Editorial",
    description:
      "An editorial design project showcasing typography, page composition, and visual communication.",
    href: "https://drive.google.com/file/d/1qE_Sop1cAoH4pAR4asDTfUJsx2d7oy_p/view",
    shortLabel: "ID",
  },
];

const FeaturedProjects = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const container = carouselRef.current;
    if (!container) return;

    const card = container.querySelector("[data-project-card]");
    if (!card) return;

    const gap = parseFloat(getComputedStyle(container).columnGap) || 0;

    container.scrollBy({
      left: direction * (card.getBoundingClientRect().width + gap),
      behavior: "smooth",
    });
  };

  return (
    <section
      aria-labelledby="featured-projects-title"
      className="mt-20 pb-12 sm:mt-28 lg:mt-32"
    >
      <Container>
        <FadeIn>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#8E3CA8]">
                Selected Portfolio
              </p>
              <h2
                id="featured-projects-title"
                className="font-display text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl"
              >
                Featured Projects
              </h2>
              <p className="mt-4 max-w-xl text-base text-neutral-600">
                Explore selected projects across web development,
                applications, and creative design.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => scroll(-1)}
                aria-label="Previous project"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#8E3CA8]/30 text-[#8E3CA8] transition hover:bg-[#8E3CA8] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8E3CA8]"
              >
                ←
              </button>

              <button
                type="button"
                onClick={() => scroll(1)}
                aria-label="Next project"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#8E3CA8] text-white transition hover:bg-[#6A2A82] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8E3CA8]"
              >
                →
              </button>
            </div>
          </div>
        </FadeIn>

        <div
          ref={carouselRef}
          role="region"
          aria-label="Featured project carousel"
          tabIndex={0}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 focus-visible:outline-2 focus-visible:outline-[#8E3CA8] motion-reduce:scroll-auto [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none" }}

        >
          {projects.map((project) => (
            <article
              key={project.number}
              data-project-card
              className="flex min-w-0 flex-[0_0_100%] flex-col snap-start overflow-hidden rounded-3xl border border-[#8E3CA8]/15 bg-white shadow-sm transition-shadow hover:shadow-lg sm:flex-[0_0_calc(50%-0.75rem)]"
            >
              <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-[#0B0B0F]">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#C85ACF] via-[#8E3CA8] to-[#6A2A82]" />
                
                <img
                src={project.image}
                alt={`${project.title} project preview`}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

                <div className="flex flex-1 flex-col p-6 sm:p-8">
                
                <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#8E3CA8]">
                    {project.category}
                </p>

                <span className="text-xs font-medium tracking-widest text-neutral-400">
                    {project.number} / 04
                </span>
                </div>

                <h3 className="mt-3 font-display text-2xl font-semibold text-neutral-950">
                  {project.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-neutral-600">
                  {project.description}
                </p>

                <Link
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#8E3CA8] transition hover:text-[#6A2A82] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8E3CA8]"
                >
                  View Project <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProjects;
