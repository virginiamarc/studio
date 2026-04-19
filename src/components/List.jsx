import FadeIn, { FadeInStagger } from "./FadeIn";
import Border from "./Border";
import clsx from "clsx";

const List = ({ className, children }) => {
  return (
    <FadeInStagger>
      <ul role="list" className={clsx("text-base text-neutral-600", className)}>
        {children}
      </ul>
    </FadeInStagger>
  );
};

export const ListItem = ({ title, children }) => {
  return (
    <li className="group mt-10 first:mt-0">
      <FadeIn>
        <Border className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
          <div className="flex items-start gap-4">
            {/* Purple Checkmark Icon */}
            <svg
              className="h-6 w-6 flex-none text-[#C85ACF] mt-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3.25-3.25a1 1 0 111.414-1.414l2.543 2.543 6.543-6.543a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>

            {/* Text Content */}
            <div>
              {title && (
                <strong className="font-semibold text-neutral-950">
                  {title}.{" "}
                </strong>
              )}
              {children}
            </div>
          </div>
        </Border>
      </FadeIn>
    </li>
  );
};

