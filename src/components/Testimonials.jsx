import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Testimonials({ client, children, className }) {
  return (
    <div className={`w-full text-left ${className}`}>
      <p className="text-xl leading-relaxed">
        <span className="before:content-['“'] after:content-['”']">
          {children}
        </span>

        <span
          className={`${dancing.className} ml-3 text-2xl font-bold whitespace-nowrap align-middle`}
        >
          — {client.name}
        </span>
      </p>
    </div>
  );
}
