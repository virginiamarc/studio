"use client";
import React, { useState } from "react";
import FadeIn from "./FadeIn";
import TextInput from "./TextInput";
import RadioInput from "./RadioInput";
import Button from "./Button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    budget: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.company) newErrors.company = "Company is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.message) newErrors.message = "Message is required";
    if (!formData.budget) newErrors.budget = "Budget is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          message: "",
          budget: "",
        });
      } else {
        alert("Something went wrong.");
      }
    } catch (error) {
      alert("Network error.");
    }

    setIsSubmitting(false);

  };

  return (
    <FadeIn>
      <form onSubmit={handleSubmit}>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Tell us about your project
        </h2>

        {submitted && (
          <p className="text-green-600 text-sm mt-4">
            Thank you — your message has been sent.
          </p>
        )}

        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">

          <TextInput 
            label="Name" 
            name="name" 
            autoComplete="name" 
            value={formData.name} 
            onChange={handleChange}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            value={formData.email} 
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
            value={formData.company} 
            onChange={handleChange}
          />
          {errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}
          
          <TextInput 
            label="Phone" 
            type="tel" name="phone" 
            autoComplete="tel" 
            value={formData.phone} 
            onChange={handleChange}
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

          <TextInput 
            label="Message" 
            name="message" 
            value={formData.message} 
            onChange={handleChange}
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">Budget</legend>
            </fieldset>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <RadioInput label="$300 – $600" name="budget" value="300-600" checked={formData.budget === "300-600"} onChange={handleChange} />
              <RadioInput label="$600 – $1,200" name="budget" value="600-1200" checked={formData.budget === "600-1200"} onChange={handleChange} />
              <RadioInput label="$1,200 – $2,000" name="budget" value="1200-2000" checked={formData.budget === "1200-2000"} onChange={handleChange} />
              <RadioInput label="$2000+" name="budget" value="2000+" checked={formData.budget === "2000+"} onChange={handleChange} />
            </div>
            {errors.budget && (
              <p className="text-red-500 text-sm mt-2">{errors.budget}</p>
            )}
          </div>
        </div>

        <Button 
          type="submit" 
          variant="gradient" 
          className="mt-10" 
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Start Your Project"}
        </Button>
      </form>
    </FadeIn>
  );
};

export default ContactForm;
