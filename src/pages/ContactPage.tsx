"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    const formData = new FormData(e.currentTarget);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Something went wrong");

      setSuccess("✅ Message sent successfully! Our team will contact you shortly.");
      e.currentTarget.reset();
    } catch (err: any) {
      setError(err.message || "Failed to send message");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative overflow-hidden">

      {/* Hero Section */}
      <section className="relative py-28 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <Badge variant="new" className="mb-6 px-4 py-1.5">
            Contact Us
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 gradient-text">
            Let’s build something amazing together
          </h1>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have questions about Zivux.ai CRM or Proeffico solutions?  
            Our team is here to help you grow faster.
          </p>
        </motion.div>

        {/* Animated Blobs */}
        <motion.div
          className="absolute -top-24 -left-24 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 20, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-24 -right-24 w-96 h-96 bg-green-400/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], rotate: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
        />
      </section>

      {/* Contact Content */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold gradient-text">Get in Touch</h2>

            <p className="text-muted-foreground">
              Reach out to us for CRM demos, integrations, partnerships, or support.
              We usually respond within 24 hours.
            </p>

            {[
              { label: "Email", value: "sales@zivux.ai" },
              { label: "Phone", value: "+91 9667796006" },
              { label: "Location", value: "Office B-23, Sector 67,Noida , 201301" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-5 bg-card rounded-2xl border border-border shadow-card"
              >
                <p className="text-sm text-muted-foreground">{item.label}</p>
                <p className="font-semibold">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-card border border-border rounded-3xl p-8 shadow-card space-y-6"
          >
            <h3 className="text-2xl font-bold gradient-text">
              Send us a message
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              <Input name="name" placeholder="Your Name" required />
              <Input name="email" type="email" placeholder="Your Email" required />
            </div>

            <Input name="company" placeholder="Company Name" />

            <Textarea
              name="message"
              placeholder="Tell us about your requirements..."
              rows={5}
              required
            />

            {success && <p className="text-green-600">{success}</p>}
            {error && <p className="text-red-600">{error}</p>}

            <Button className="w-full text-lg py-6" disabled={loading}>
              {loading ? "Sending..." : "Submit Message"}
            </Button>
          </motion.form>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Ready to experience Zivux.ai CRM?
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Book a demo today and see how Proeffico helps you manage leads,
            customers, workflows, and WhatsApp automation seamlessly.
          </p>

          <Button size="lg" className="px-10 py-6 text-lg">
            Book a Free Demo
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
