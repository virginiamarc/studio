import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn, { FadeInStagger } from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="text-neutral-900">
      <Container className="mt-32 sm:mt-40">
        <FadeInStagger>
          <FadeIn className="max-w-3xl">
            <h1 className="font-display text-5xl font-semibold tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
              Empowering brands with strategy, creativity, and digital innovation.
            </h1>
            <p className="mt-6 text-xl text-neutral-600">
              At PSD Studio, we help entrepreneurs and businesses elevate their identity through strategic design, thoughtful branding, and impactful digital experiences.
            </p>
          </FadeIn>
        </FadeInStagger>
      </Container>
      <Clients />

      <section className="py-32 bg-white">
        <div className="mx-auto max-w-7xl rounded-3xl bg-gradient-to-b from-[#C85ACF] via-[#8E3CA8] to-[#6A2A82] text-white p-20 shadow-inner shadow-black/20">
          <FadeIn>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-16">
              What clients are saying
            </h2>
          </FadeIn>

          <FadeInStagger faster>
            <div className="space-y-10">
              <FadeIn>
                <Testimonials client={{ name: "Jacqueline P." }}>
                  I appreciate you so much and I will not forget your professional
                  experience and the value that you have shared with me.
                </Testimonials>
              </FadeIn>

              <FadeIn>
                <Testimonials client={{ name: "Barbara P." }}>
                  Virginia delivered exactly what we needed and made the process
                  incredibly smooth.
                </Testimonials>
              </FadeIn>

              <FadeIn>
                <Testimonials client={{ name: "Giovanna L." }}>
                  Working with Virginia was a joy. She is professional, fast, and
                  truly cares about her clients.
                </Testimonials>
              </FadeIn>
            </div>
          </FadeInStagger>
        </div>
      </section>

      <Services />
      <ContactSection />
    </main>
  );
}
