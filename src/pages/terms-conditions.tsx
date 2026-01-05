"use client";

import { motion } from "framer-motion";

export default function TermsConditionsPage() {
  return (
    <div className="relative overflow-hidden py-20 px-4 md:px-8 lg:px-20">
      {/* Background Blob */}
      <motion.div
        className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], rotate: [0, -25, 0] }}
        transition={{ duration: 22, repeat: Infinity }}
      />

      {/* Hero */}
      <section className="text-center mb-16 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold gradient-text"
        >
          Terms & Conditions
        </motion.h1>

        <p className="text-muted-foreground mt-6 max-w-3xl mx-auto">
          These Terms and Conditions govern your access to and use of
          <strong> Proeffico Solutions Pvt Ltd</strong> websites, products, and services.
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

/* ------------------ CONTENT ------------------ */

const sections = [
  {
    title: "Agreement to Terms",
    content: (
      <>
        <p>
          These Terms and Conditions constitute a legally binding agreement
          between you and <strong>Proeffico Solutions Pvt Ltd</strong> concerning
          your access to and use of the proeffico.com website and related
          products, applications, and services (“Site”).
        </p>
        <p>
          By accessing the Site, you acknowledge that you have read, understood,
          and agreed to be bound by these Terms.
        </p>
        <p className="font-semibold text-red-500">
          If you do not agree, you must discontinue use of the Site immediately.
        </p>
      </>
    ),
  },
  {
    title: "Supplemental Terms & Modifications",
    content: (
      <>
        <p>
          Supplemental terms or documents posted on the Site are expressly
          incorporated by reference.
        </p>
        <p>
          We reserve the right to modify these Terms at any time. Changes will
          be reflected by updating the “Last Updated” date.
        </p>
        <p>
          Continued use of the Site constitutes acceptance of the revised Terms.
        </p>
      </>
    ),
  },
  {
    title: "Access from Other Jurisdictions",
    content: (
      <>
        <p>
          The Site is not intended for distribution or use where prohibited by
          law. Users accessing from other jurisdictions do so at their own risk
          and are responsible for compliance with local laws.
        </p>
      </>
    ),
  },
  {
    title: "Terms of Service",
    content: (
      <>
        <p>
          The following terms apply to customers signing up for Proeffico
          products including <strong>ProlificApp</strong>, <strong>ProApp</strong>,
          <strong> OPS360.live</strong>, or <strong>eConnect</strong>.
        </p>
      </>
    ),
  },
  {
    title: "Customer Onboarding Requirements",
    content: (
      <ul className="list-disc pl-6 space-y-2">
        <li>Nature of business</li>
        <li>GST Certificate</li>
        <li>Business address</li>
        <li>Contact number and email</li>
        <li>Office/business visit for requirement understanding</li>
      </ul>
    ),
  },
  {
    title: "Implementation & Payments",
    content: (
      <ul className="list-disc pl-6 space-y-2">
        <li>Proeffico team reviews requirements and proposes implementation plan</li>
        <li>Advance payment is mandatory to begin work</li>
        <li>AMC charges apply and are shared during final costing</li>
        <li>Hardware support is the responsibility of the hardware vendor</li>
      </ul>
    ),
  },
  {
    title: "Intellectual Property",
    content: (
      <p>
        All intellectual property related to software, platforms, and solutions
        provided shall remain the exclusive property of Proeffico Solutions Pvt Ltd.
      </p>
    ),
  },
  {
    title: "Shipping & Provisioning Policy",
    content: (
      <ul className="list-disc pl-6 space-y-2">
        <li>
          Platform access is provisioned within <strong>2 days</strong> after
          advance confirmation for existing products.
        </li>
        <li>
          Custom software is deployed within <strong>7 days</strong> after test
          environment sign-off.
        </li>
      </ul>
    ),
  },
  {
    title: "Cancellation & Refund Policy",
    content: (
      <ul className="list-disc pl-6 space-y-2">
        <li>Product licenses once purchased are non-refundable</li>
        <li>Subscriptions can be cancelled at any time</li>
        <li>
          For abandoned custom projects, refunds are calculated based on work
          completed versus amount paid
        </li>
      </ul>
    ),
  },
];
