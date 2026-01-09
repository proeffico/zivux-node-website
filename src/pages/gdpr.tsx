"use client";

import { motion } from "framer-motion";

export default function GDPRPage() {
  return (
    <div className="relative overflow-hidden py-20 px-4 md:px-8 lg:px-20">
      {/* Background Blob */}
      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-green-400/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.15, 1], rotate: [0, -20, 0] }}
        transition={{ duration: 24, repeat: Infinity }}
      />

      {/* Hero */}
      <section className="text-center mb-16 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold gradient-text"
        >
          GDPR Compliance
        </motion.h1>

        <p className="text-muted-foreground mt-6 max-w-3xl mx-auto">
          Proeffico complies with the General Data Protection Regulation (GDPR)
          and respects your data privacy rights.
        </p>
      </section>

      {/* Content */}
      <section className="relative z-10 space-y-12 max-w-5xl mx-auto text-sm text-muted-foreground">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-semibold text-foreground">
              {section.title}
            </h2>
            {section.content}
          </motion.div>
        ))}
      </section>
    </div>
  );
}

const sections = [
  {
    title: "What is GDPR?",
    content: (
      <p>
        The General Data Protection Regulation (GDPR) is a regulation that
        protects personal data and privacy of individuals within the European
        Union and European Economic Area.
      </p>
    ),
  },
  {
    title: "Lawful Basis for Processing",
    content: (
      <ul className="list-disc pl-6 space-y-2">
        <li>User consent</li>
        <li>Contractual necessity</li>
        <li>Legal obligations</li>
        <li>Legitimate business interests</li>
      </ul>
    ),
  },
  {
    title: "Your GDPR Rights",
    content: (
      <ul className="list-disc pl-6 space-y-2">
        <li>Right to access your personal data</li>
        <li>Right to rectification</li>
        <li>Right to erasure (“Right to be forgotten”)</li>
        <li>Right to restrict or object to processing</li>
        <li>Right to data portability</li>
      </ul>
    ),
  },
  {
    title: "Data Processing & Storage",
    content: (
      <p>
        Personal data is processed only for specified, explicit, and legitimate
        purposes and stored securely for no longer than necessary.
      </p>
    ),
  },
  {
    title: "Third-Party Processors",
    content: (
      <p>
        We work only with trusted third-party service providers who comply with
        GDPR and maintain appropriate data protection safeguards.
      </p>
    ),
  },
  {
    title: "How to Exercise Your Rights",
    content: (
      <p>
        You may request access, correction, or deletion of your personal data by
        contacting us at <strong>sales@zivux.ai</strong>.
      </p>
    ),
  },
];
