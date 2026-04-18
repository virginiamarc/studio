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
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-base sm:text-lg font-semibold tracking-wider text-white sm:text-left">
            Supporting small businesses and growing brands
          </h2>
          <div className="h-px flex-auto bg-neutral-600" />
        </FadeIn>

        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 text-neutral-200 text-sm lg:grid-cols-4"
          >
            <li className="flex items-center gap-2">
              <FadeIn><HiBuildingStorefront className="h-5 w-5 text-white" /></FadeIn>
              Local restaurants
            </li>

            <li className="flex items-center gap-2">
              <FadeIn><HiHeart className="h-5 w-5 text-white" /></FadeIn>
              Nonprofit organizations
            </li>

            <li className="flex items-center gap-2">
              <FadeIn><HiPencilSquare className="h-5 w-5 text-white" /></FadeIn>
              Independent creators
            </li>

            <li className="flex items-center gap-2">
              <FadeIn><HiShoppingBag className="h-5 w-5 text-white" /></FadeIn>
              Small retail shops
            </li>

            <li className="flex items-center gap-2">
              <FadeIn><HiChatBubbleLeftRight className="h-5 w-5 text-white" /></FadeIn>
              Coaches & consultants
            </li>

            <li className="flex items-center gap-2">
              <FadeIn><HiUsers className="h-5 w-5 text-white" /></FadeIn>
              Community projects
            </li>

            <li className="flex items-center gap-2">
              <FadeIn><HiRocketLaunch className="h-5 w-5 text-white" /></FadeIn>
              Early‑stage startups
            </li>

            <li className="flex items-center gap-2">
              <FadeIn><HiAcademicCap className="h-5 w-5 text-white" /></FadeIn>
              Student‑led initiatives
            </li>
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  );
};

export default Clients;
