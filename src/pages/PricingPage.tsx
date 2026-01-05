import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Check, X, ArrowRight, HelpCircle, Zap } from "lucide-react";

/* =========================
   PRICING PLANS (WEBSITE)
========================= */
const plans = [
  {
    name: "Starter",
    description: "Best for small teams starting with CRM",
    price: "$29",
    period: "/per month",
    popular: false,
    features: [
      { name: "Up to 5 users", included: true },
      { name: "Email & Website leads", included: true },
      { name: "Basic lead pipeline", included: true },
      { name: "Ticket management", included: true },
      { name: "Standard support", included: true },
      { name: "WhatsApp integration", included: false },
      { name: "Workflow automation", included: false },
      { name: "Role-based permissions", included: false },
      { name: "API access", included: false },
    ],
    cta: "Request Demo",
  },
  {
    name: "Growth",
    description: "For fast-growing sales & support teams",
    price: "$60",
    period: "/per month",
    popular: true,
    features: [
      { name: "Up to 12 users", included: true },
      { name: "All lead sources", included: true },
      { name: "Advanced lead workflows", included: true },
      { name: "Ticketing with SLA", included: true },
      { name: "WhatsApp Business integration", included: true },
      { name: "Workflow automation", included: true },
      { name: "Priority support", included: true },
      { name: "Custom roles & permissions", included: false },
      { name: "API access", included: false },
    ],
    cta: "Request Demo",
  },
  {
    name: "Enterprise",
    description: "Custom CRM for large organizations",
    price: "Custom",
    period: "",
    popular: false,
    features: [
      { name: "Unlimited users", included: true },
      { name: "Unlimited leads & tickets", included: true },
      { name: "WhatsApp automation & bots", included: true },
      { name: "Advanced workflow engine", included: true },
      { name: "Custom roles & RBAC", included: true },
      { name: "Full API access", included: true },
      { name: "Dedicated account manager", included: true },
      { name: "Custom integrations", included: true },
      { name: "Enterprise-grade security", included: true },
    ],
    cta: "Contact Sales",
  },
];

/* =========================
   FAQS
========================= */
const faqs = [
  {
    question: "Is Zivux.ai suitable for WhatsApp-first businesses?",
    answer:
      "Yes. Zivux.ai is built with WhatsApp at its core, supporting lead capture, ticketing, automation, and bots.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "We provide a guided demo and optional trial based on your business requirements.",
  },
  {
    question: "Can I upgrade or downgrade later?",
    answer:
      "Yes, plans are flexible and can be adjusted as your team grows.",
  },
  {
    question: "Do you support custom integrations?",
    answer:
      "Absolutely. Our Enterprise plan includes full API access and custom integrations.",
  },
  {
    question: "Is data secure?",
    answer:
      "Yes. We follow enterprise-grade security practices and role-based access controls.",
  },
];

export default function PricingPage() {
  return (
    <div className="overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

        <div className="container mx-auto px-4 text-center max-w-4xl relative">
          <Badge variant="new" className="mb-6 px-4 py-1.5">
            <Zap className="w-3 h-3 mr-1" />
            Flexible Pricing for Every Team
          </Badge>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6"
          >
            Simple & Transparent{" "}
            <span className="gradient-text">Pricing</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Choose a plan that fits your business today — scale anytime.
          </motion.p>
        </div>
      </section>

      {/* ================= PRICING CARDS ================= */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 ${
                  plan.popular
                    ? "bg-gradient-to-br from-primary to-purple-600 text-primary-foreground shadow-xl scale-105"
                    : "bg-card border shadow-card"
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-warning text-warning-foreground">
                    Most Popular
                  </Badge>
                )}

                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className={`mb-6 text-sm ${plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className={`text-sm ${plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature.name} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-success" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground/40" />
                      )}
                      <span className={!feature.included ? "text-muted-foreground" : ""}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  className="w-full"
                  variant={plan.popular ? "secondary" : "outline"}
                  asChild
                >
                  <Link to="/contact">
                    {plan.cta}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 rounded-xl bg-card border"
              >
                <h3 className="font-semibold mb-2 flex gap-2 items-center">
                  <HelpCircle className="w-5 h-5 text-primary" />
                  {faq.question}
                </h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Let’s Build Your CRM Together
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Talk to our experts and see how Zivux.ai fits your business.
          </p>

          <Button size="lg" variant="gradient" asChild>
            <Link to="/contact">
              Schedule a Demo
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
