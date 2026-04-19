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
          <h2 className="text-center font-display text-lg sm:text-xl font-semibold tracking-wider text-white sm:text-left">
            Supporting small businesses and growing brands
          </h2>
          <div className="h-px flex-auto bg-gradient-to-r from-[#C85ACF] via-[#8E3CA8] to-[#6A2A82]" />
        </FadeIn>

        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 text-neutral-200 text-sm lg:grid-cols-4"
          >
            <li className="flex items-center gap-2">
              <FadeIn><HiBuildingStorefront className="h-5 w-5 text-white transition-colors duration-300 group-hover:text-[#C85ACF]" /></FadeIn>
              Local restaurants
            </li>

            <li className="flex items-center gap-2">
              <FadeIn><HiHeart className="h-5 w-5 text-white transition-colors duration-300 group-hover:text-[#C85ACF]" /></FadeIn>
              Nonprofit organizations
            </li>

            <li className="flex items-center gap-2">
              <FadeIn><HiPencilSquare className="h-5 w-5 text-white transition-colors duration-300 group-hover:text-[#C85ACF]" /></FadeIn>
              Independent creators
            </li>

            <li className="flex items-center gap-2">
              <FadeIn><HiShoppingBag className="h-5 w-5 text-white transition-colors duration-300 group-hover:text-[#C85ACF]" /></FadeIn>
              Small retail shops
            </li>

            <li className="flex items-center gap-2">
              <FadeIn><HiChatBubbleLeftRight className="h-5 w-5 text-white transition-colors duration-300 group-hover:text-[#C85ACF]" /></FadeIn>
              Coaches & consultants
            </li>

            <li className="flex items-center gap-2">
              <FadeIn><HiUsers className="h-5 w-5 text-white transition-colors duration-300 group-hover:text-[#C85ACF]" /></FadeIn>
              Community projects
            </li>

            <li className="flex items-center gap-2">
              <FadeIn><HiRocketLaunch className="h-5 w-5 text-white transition-colors duration-300 group-hover:text-[#C85ACF]" /></FadeIn>
              Early‑stage startups
            </li>

            <li className="flex items-center gap-2">
              <FadeIn><HiAcademicCap className="h-5 w-5 text-white transition-colors duration-300 group-hover:text-[#C85ACF]" /></FadeIn>
              Student‑led initiatives
            </li>
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  );
};

export default Clients;
