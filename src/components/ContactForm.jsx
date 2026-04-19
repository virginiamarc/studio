import React from "react";
import FadeIn from "./FadeIn";
import TextInput from "./TextInput";
import RadioInput from "./RadioInput";
import Button from "./Button";

const ContactForm = () => {
  return (
    <FadeIn>
      <form>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Tell us about your project
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name" />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
          />
          <TextInput label="Phone" type="tel" name="phone" autoComplete="tel" />
          <TextInput label="Message" name="message" />
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">Budget</legend>
            </fieldset>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <RadioInput label="$300 – $600" name="budget" value="300-600" />
              <RadioInput label="$600 – $1,200" name="budget" value="600-1200" />
              <RadioInput label="$1,200 – $2,000" name="budget" value="1200-2000" />
              <RadioInput label="$2000+" name="budget" value="2000+" />
            </div>
          </div>
        </div>
        <Button type="submit" variant="gradient" className="mt-10">
          Start Your Project
        </Button>
      </form>
    </FadeIn>
  );
};

export default ContactForm;
