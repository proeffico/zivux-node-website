"use client";

import { motion } from "framer-motion";

export default function SecurityPage() {
  return (
    <div className="relative overflow-hidden py-20 px-4 md:px-8 lg:px-20">
      {/* Background Blob */}
      <motion.div
        className="absolute -top-32 -right-32 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 25, 0] }}
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
          Security
        </motion.h1>

        <p className="text-muted-foreground mt-6 max-w-3xl mx-auto">
          At Proeffico, security is at the core of everything we build.
          We protect your data with industry-grade security practices and controls.
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
    title: "Our Security Commitment",
    content: (
      <p>
        Proeffico is committed to maintaining the confidentiality, integrity,
        and availability of customer data across all our platforms including
        Zivux.ai CRM and enterprise solutions.
      </p>
    ),
  },
  {
    title: "Infrastructure Security",
    content: (
      <ul className="list-disc pl-6 space-y-2">
        <li>Cloud-hosted infrastructure with secure network isolation</li>
        <li>Firewalls, DDoS protection, and intrusion detection systems</li>
        <li>Regular security patching and vulnerability updates</li>
      </ul>
    ),
  },
  {
    title: "Data Encryption",
    content: (
      <ul className="list-disc pl-6 space-y-2">
        <li>Encryption in transit using HTTPS / TLS</li>
        <li>Encryption at rest for sensitive data</li>
        <li>Secure key management practices</li>
      </ul>
    ),
  },
  {
    title: "Access Control",
    content: (
      <ul className="list-disc pl-6 space-y-2">
        <li>Role-based access control (RBAC)</li>
        <li>Least-privilege access enforcement</li>
        <li>Secure authentication and authorization mechanisms</li>
      </ul>
    ),
  },
  {
    title: "Monitoring & Incident Response",
    content: (
      <ul className="list-disc pl-6 space-y-2">
        <li>Continuous monitoring of systems and logs</li>
        <li>Automated alerts for suspicious activities</li>
        <li>Defined incident response and escalation procedures</li>
      </ul>
    ),
  },
  {
    title: "Customer Responsibility",
    content: (
      <p>
        Customers are responsible for safeguarding their login credentials and
        ensuring appropriate access controls within their organization.
      </p>
    ),
  },
];
