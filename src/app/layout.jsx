import RootLayout from "@/components/RootLayout";
import "./globals.css";
import localFont from "next/font/local";

const monaSans = localFont({
  src: [
    {
      path: "../fonts/Mona-Sans.var.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-mona",
});

export const metadata = {
  title: {
    default: "PSD Studio",
    template: "%s | PSD Studio",
  },
  description:
    "PSD Studio is a creative studio building modern digital experiences, branding, and design systems.",
};

export default function Layout({ children }) {
  return (
    <html
      lang="en"
      className={`${monaSans.variable} h-full bg-gradient-to-b from-[#C85ACF] via-[#8E3CA8] to-[#6A2A82] text-neutral-100`}>
      <body className="flex min-h-full flex-col font-sans">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
