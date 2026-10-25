import React from "react";
import FadeIn from "./FadeIn";
import Border from "./Border";
import Link from "next/link";
import SocialMedia from "./SocialMedia";

const ContactDetails = () => {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        Where we work
      </h2>
      
      <div className="mt-6 space-y-4 text-base text-neutral-600">
        <p>
          PSDO Studio is an online-based creative technology
          business serving clients remotely. We collaborate
          virtually to provide convenient, flexible services
          regardless of location.
        </p>

        <p>
          In-person consultations may be arranged by appointment
          at a mutually agreed-upon location.
        </p>
      </div>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Email us
        </h2>

        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ["General inquiries", "info@pranswendeou.com"],
            ["Collaboration", "contact@virginiamarc.com"],
          ].map(([label, email]) => (
            <div key={label}>
              <dt className="font-semibold text-neutral-950">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-neutral-600 hover:text-neutral-950"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Follow us
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  );
};

export default ContactDetails;
