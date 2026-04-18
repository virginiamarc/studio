import clsx from "clsx";
import {
  BsFacebook,
  BsTwitter,
  BsGithub,
  BsYoutube,
  BsLinkedin,
} from "react-icons/bs";

export const SocialMediaProfiles = [
  {
    title: "Youtube",
    href: "https://www.youtube.com/@OfficialPranswendeou",
    icon: BsYoutube,
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    title: "GitHub",
    href: "https://github.com/virginiamarc/",
    icon: BsGithub,
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    title: "Facebook",
    href: "",
    icon: BsFacebook,
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    title: "LinkedIn",
    href: "",
    icon: BsLinkedin,
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    title: "Twitter",
    href: "",
    icon: BsTwitter,
    target: "_blank",
    rel: "noopener noreferrer",
  },
];

const SocialMedia = ({ className, invert = false }) => {
  return (
    <ul
      role="list"
      className={clsx(
        "flex gap-x-10",
        invert ? "text-white" : "text-neutral-950",
        className
      )}
    >
      {SocialMediaProfiles.map((item) => (
        <li key={item.title}>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.title}
            className={clsx(
              "transition",
              invert ? "hover:text-neutral-200" : "hover:text-neutral-700"
            )}
          >
            <item.icon className="h-6 w-6 fill-current" />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;