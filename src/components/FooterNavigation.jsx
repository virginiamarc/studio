
import { navigation } from "@/constants";
import Link from "next/link";

const FooterNavigation = () => {
  return (
    <nav aria-label="Footer navigation">
      <ul
        role="list"
        className="grid grid-cols-2 gap-8 sm:grid-cols-3"
      >
        {navigation.map((item) => (
          <li key={item.title}>
            <div className="font-display text-sm font-semibold tracking-wider text-white">
              {item.title}
            </div>

            <ul
              role="list"
              className="mt-4 text-sm text-neutral-300"
            >
              {item.links.map((link) => (
                <li key={link.title} className="mt-4">
                  <Link
                    href={link.href}
                    target={link.target}
                    rel={link.rel}
                    className="transition-colors duration-300 hover:text-[#C85ACF] focus-visible:text-[#C85ACF]"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterNavigation;
