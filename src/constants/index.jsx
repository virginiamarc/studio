import { SocialMediaProfiles } from "@/components/SocialMedia";

export const navigation = [
  {
    title: "Work",
    links: [
      { title: "Wheel Foodie", href: "https://virginiamarc.com/wf/index.html", target: "_blank", rel: "noopener noreferrer",},
      { title: "Potts Dog Sanctuary", href: "https://virginiamarc.com/pdp/", target: "_blank", rel: "noopener noreferrer",},
      { title: "Foodie Finder App", href: "https://foodiefinder-app.netlify.app/", target: "_blank", rel: "noopener noreferrer",},
      {
        title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: "/work",
      },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About", href: "/about" },
      { title: "Process", href: "/process" },
      { title: "Blog", href: "/blog" },
      { title: "Contact us", href: "/contact" },
    ],
  },
  {
    title: "Connect",
    links: SocialMediaProfiles,
  },
];
