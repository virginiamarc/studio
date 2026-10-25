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
  metadataBase: new URL("https://studio.pranswendeou.com"),

  title: {
    default: "PSDO Studio | Web Development & Software Solutions",
    template: "%s | PSDO Studio",
  },

  description:
    "PSDO Studio specializes in custom website development, full-stack web applications, software solutions, and creative design for entrepreneurs and growing businesses.",

  applicationName: "PSDO Studio",

  openGraph: {
    title: "PSDO Studio | Web Development & Software Solutions",
    description:
      "Custom websites, web applications, software solutions, and creative design. Transforming ideas into powerful digital experiences.",
    url: "https://studio.pranswendeou.com",
    siteName: "PSDO Studio",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
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
