"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <div className="relative overflow-hidden py-20 px-4 md:px-8 lg:px-20">
      {/* Background Blob */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      {/* Hero */}
      <section className="text-center mb-16 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold gradient-text"
        >
          Privacy Policy
        </motion.h1>

        <p className="text-muted-foreground mt-6 max-w-3xl mx-auto">
          This Privacy Policy explains how <strong>Proeffico Solutions Pvt Ltd</strong> collects,
          uses, discloses, and protects your personal information when you use our
          website and applications.
        </p>
      </section>

      {/* Content */}
      <section className="relative z-10 space-y-12 text-sm text-muted-foreground max-w-5xl mx-auto">
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

/* ------------------ CONTENT ------------------ */

const sections = [
  {
    title: "Introduction",
    content: (
      <>
        <p>
          This privacy policy (“Privacy Policy”) sets forth our commitment to
          respecting your online privacy and recognizing your need for
          appropriate protection and management of any Personal Information you
          share with us.
        </p>
        <p>
          The Privacy Policy applies to services available under
          <strong> proeffico.com </strong>. By accessing our Website/App, you
          agree to this policy.
        </p>
        <p className="font-semibold text-red-500">
          IF YOU DO NOT AGREE, PLEASE DO NOT USE OR ACCESS THE WEBSITE OR APP.
        </p>
      </>
    ),
  },
  {
    title: "Interpretation and Definitions",
    content: (
      <>
        <p>
          Words with capitalized initial letters have meanings defined under
          this policy and apply whether singular or plural.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Account:</strong> Unique account created to access services</li>
          <li><strong>Company:</strong> Proeffico Solutions Pvt Ltd</li>
          <li><strong>Device:</strong> Any device accessing the Service</li>
          <li><strong>Personal Data:</strong> Information identifying an individual</li>
          <li><strong>Service:</strong> Website, app, and related offerings</li>
        </ul>
      </>
    ),
  },
  {
    title: "Types of Data Collected",
    content: (
      <>
        <p><strong>Personal Data may include:</strong></p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Email address</li>
          <li>First & Last name</li>
          <li>Contact number</li>
          <li>Device IDs</li>
        </ul>

        <p><strong>Usage Data includes:</strong></p>
        <p>
          IP address, browser type, pages visited, time spent, mobile device
          identifiers, and diagnostic data.
        </p>
      </>
    ),
  },
  {
    title: "Cookies & Tracking Technologies",
    content: (
      <>
        <p>
          We use cookies and similar technologies to analyze traffic, enhance
          user experience, and improve service quality.
        </p>
        <p>
          You may disable cookies via browser settings, but some features may
          not function properly.
        </p>
      </>
    ),
  },
  {
    title: "Use of Personal Data",
    content: (
      <ul className="list-disc pl-6 space-y-2">
        <li>Provide and maintain our Service</li>
        <li>Manage user accounts and access</li>
        <li>Send updates, alerts, and notifications</li>
        <li>Provide offers, news, and promotions</li>
        <li>Improve products, marketing, and experience</li>
        <li>Business transfers or legal obligations</li>
      </ul>
    ),
  },
  {
    title: "Disclosure of Personal Data",
    content: (
      <ul className="list-disc pl-6 space-y-2">
        <li>Service providers and partners</li>
        <li>Affiliates and business partners</li>
        <li>Legal authorities if required by law</li>
        <li>With your explicit consent</li>
      </ul>
    ),
  },
  {
    title: "Retention & Transfer of Data",
    content: (
      <>
        <p>
          We retain personal data only as long as necessary for business and
          legal purposes.
        </p>
        <p>
          Data may be processed outside your jurisdiction with appropriate
          security safeguards in place.
        </p>
      </>
    ),
  },
  {
    title: "Security of Data",
    content: (
      <p>
        While we use commercially acceptable security practices, no method of
        internet transmission is 100% secure.
      </p>
    ),
  },
  {
    title: "Links to Third-Party Sites",
    content: (
      <p>
        We are not responsible for privacy practices or content of external
        websites linked from our Service.
      </p>
    ),
  },
  {
    title: "Intellectual Property",
    content: (
      <p>
        All website/app content, design, text, graphics, and software are owned
        or licensed by Proeffico Solutions Pvt Ltd and protected by law.
      </p>
    ),
  },
  {
    title: "Governing Law & Arbitration",
    content: (
      <>
        <p>
          This policy is governed by the laws of India. Courts of New Delhi have
          exclusive jurisdiction.
        </p>
        <p>
          Disputes shall be resolved via arbitration in Gautam Budh Nagar, UP.
        </p>
      </>
    ),
  },
  {
    title: "Contact Us",
    content: (
      <p>
        For questions or requests related to privacy, contact us at{" "}
        <strong>contact@proeffico.com</strong>
      </p>
    ),
  },
];
