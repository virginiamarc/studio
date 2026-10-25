import {
  HiBuildingStorefront,
  HiHeart,
  HiPencilSquare,
  HiShoppingBag,
  HiChatBubbleLeftRight,
  HiUsers,
  HiRocketLaunch,
  HiAcademicCap,
} from "react-icons/hi2";

import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";

const Clients = () => {
  return (
    <section className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="font-display text-lg sm:text-xl font-semibold tracking-wider text-white">
            Digital solutions for businesses, organizations,
            and creators
          </h2>

          <div className="h-px flex-auto bg-gradient-to-r from-[#C85ACF] via-[#8E3CA8] to-[#6A2A82]" />
        </FadeIn>

        <FadeIn>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-300">
            From entrepreneurs and startups to nonprofit
            organizations and growing businesses, PSDO Studio
            creates digital solutions tailored to different
            goals and challenges.
          </p>
        </FadeIn>

        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 text-sm text-neutral-200 lg:grid-cols-4"
          >
            <li className="flex items-center gap-2">
              <FadeIn>
                <HiBuildingStorefront className="h-5 w-5 text-white" />
              </FadeIn>
              Local restaurants
            </li>

            <li className="flex items-center gap-2">
              <FadeIn>
                <HiHeart className="h-5 w-5 text-white" />
              </FadeIn>
              Nonprofit organizations
            </li>

            <li className="flex items-center gap-2">
              <FadeIn>
                <HiPencilSquare className="h-5 w-5 text-white" />
              </FadeIn>
              Independent creators
            </li>

            <li className="flex items-center gap-2">
              <FadeIn>
                <HiShoppingBag className="h-5 w-5 text-white" />
              </FadeIn>
              Small retail shops
            </li>

            <li className="flex items-center gap-2">
              <FadeIn>
                <HiChatBubbleLeftRight className="h-5 w-5 text-white" />
              </FadeIn>
              Coaches & consultants
            </li>

            <li className="flex items-center gap-2">
              <FadeIn>
                <HiUsers className="h-5 w-5 text-white" />
              </FadeIn>
              Community projects
            </li>

            <li className="flex items-center gap-2">
              <FadeIn>
                <HiRocketLaunch className="h-5 w-5 text-white" />
              </FadeIn>
              Early-stage startups
            </li>

            <li className="flex items-center gap-2">
              <FadeIn>
                <HiAcademicCap className="h-5 w-5 text-white" />
              </FadeIn>
              Student-led initiatives
            </li>
          </ul>
        </FadeInStagger>
      </Container>
    </section>
  );
};

export default Clients;
