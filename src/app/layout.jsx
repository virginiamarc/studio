import RootLayout from "@/components/RootLayout";
import "./globals.css";

export const metadata = {
  title: {
    template: "blog_app",
    default: "Personal Blog - A feature to make you famous",
  },
};

export default function Layout({ children }) {
  return (
    <html
      lang="en"
      className="h-full bg-gradient-to-b from-[#C85ACF] via-[#8E3CA8] to-[#6A2A82] text-neutral-100">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
