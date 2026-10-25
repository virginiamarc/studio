import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";

const ContactPage = () => {
  return (
    <>
      <PageIntro eyebrow="Contact us" title="Let’s work together">
        <p>
          Have a website, software project, or creative idea in mind?
          Let's connect and explore how PSDO Studio can bring your
          vision to life.
        </p>
      </PageIntro>
      
      <Container className="mt-12 sm:mt-16 lg:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactDetails />
          <ContactForm />
        </div>
      </Container>
    </>
  );
};

export default ContactPage;
