import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Empowering brands with strategy, creativity, and digital innovation.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            At PSD Studio, we help entrepreneurs and businesses elevate their identity through strategic design, thoughtful branding, and impactful digital experiences.
          </p>
        </FadeIn>
      </Container>
      <Clients />
      <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: "Jacqueline P.", logo: null }}
      >
        I appreciate you so much and I will not forget your professional
        experience and the value that you have shared with me.
      </Testimonials>

      <Testimonials
        client={{ name: "Barbara P." }}
      >
        Virginia delivered exactly what we needed and made the process
        incredibly smooth.
      </Testimonials>

      <Testimonials
        client={{ name: "Giovanna L." }}
      >
        Working with Virginia was a joy. She is professional, fast, and
        truly cares about her clients.
      </Testimonials>
      <Services />
      <ContactSection />
    </main>
  );
}
