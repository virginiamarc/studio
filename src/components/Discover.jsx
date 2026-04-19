import React from "react";
import Section from "./Section";
import imageDiscover from "@/images/discover.jpg";
import { TagList, TagListItem } from "./TagList";

const Discover = () => {
  return (
    <Section title="Discover" image={{ src: imageDiscover, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We begin by getting to know your <strong className="font-semibold text-neutral-950">business</strong> on a deeper
          level — how you work, what you value, and what success truly looks like for you. This phase is about listening, 
          learning, and building a shared understanding that guides every decision that follows.
        </p>

        <p>
          Through thoughtful conversations, guided discovery, and focused research, we uncover the challenges you’re facing 
          and the opportunities waiting to be unlocked. We look at your audience, your internal processes, and the 
          experience you want to create — all with clarity and intention.
        </p>

        <p>
          From there, we translate everything into a clear, strategic <strong className="font-semibold text-neutral-950">plan</strong> that 
          gives you direction, confidence, and a roadmap you can trust as we move into design and development.
        </p>

      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Collaborative workshops</TagListItem>
        <TagListItem>Stakeholder conversations</TagListItem>
        <TagListItem>Process + experience mapping</TagListItem>
        <TagListItem>User + audience insights</TagListItem>
        <TagListItem>Concept exploration</TagListItem>
        <TagListItem>Strategic roadmap</TagListItem>
      </TagList>
    </Section>
  );
};

export default Discover;
