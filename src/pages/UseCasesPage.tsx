import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Users,
  Headphones,
  Megaphone,
  Workflow,
  Building2,
  CheckCircle2,
  ArrowRight,
  Zap,
} from "lucide-react";

const useCases = [
  {
    icon: Users,
    title: "Sales Teams",
    subtitle: "Convert more leads, faster",
    description:
      "Capture and manage leads from WhatsApp, Facebook, Email, and Website in one unified CRM.",
    points: [
      "Omnichannel lead capture",
      "Dynamic lead status & pipelines",
      "Auto lead assignment",
      "Sales follow-up reminders",
      "Deal & conversion tracking",
    ],
    color: "from-primary to-purple-500",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    subtitle: "Deliver faster resolutions",
    description:
      "Turn WhatsApp and Email conversations into structured support tickets with SLA tracking.",
    points: [
      "WhatsApp & Email ticket creation",
      "Custom ticket workflows",
      "SLA & escalation rules",
      "Internal notes & mentions",
      "Customer satisfaction tracking",
    ],
    color: "from-accent to-info",
  },
  {
    icon: Megaphone,
    title: "Marketing Teams",
    subtitle: "Track campaigns that convert",
    description:
      "Measure lead performance across campaigns and channels with complete visibility.",
    points: [
      "Campaign-based lead tracking",
      "Source & UTM attribution",
      "Lead segmentation & tags",
      "WhatsApp campaign responses",
      "Conversion analytics",
    ],
    color: "from-warning to-orange-500",
  },
  {
    icon: Workflow,
    title: "Operations & Admin",
    subtitle: "Automate and stay in control",
    description:
      "Automate routine tasks and ensure nothing slips through the cracks.",
    points: [
      "Workflow automation engine",
      "Auto task & ticket creation",
      "Time-based rules",
      "Approval workflows",
      "Operational dashboards",
    ],
    color: "from-success to-emerald-500",
  },
  {
    icon: Building2,
    title: "Enterprise Teams",
    subtitle: "Built to scale securely",
    description:
      "Enterprise-grade CRM with full control, security, and custom integrations.",
    points: [
      "Role-based access control (RBAC)",
      "Department & team hierarchy",
      "Custom workflows",
      "API & webhook integrations",
      "Dedicated support & onboarding",
    ],
    color: "from-slate-600 to-slate-800",
  },
];

export default function UseCasesPage() {
  return (
    <div className="overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

        <div className="container mx-auto px-4 text-center max-w-4xl relative">
          <Badge variant="new" className="mb-6 px-4 py-1.5">
            <Zap className="w-3 h-3 mr-1" />
            Built for Real Business Use Cases
          </Badge>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6"
          >
            CRM That Fits{" "}
            <span className="gradient-text">How You Work</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            From sales to support, Zivux.ai adapts to your workflows —
            not the other way around.
          </motion.p>
        </div>
      </section>

      {/* ================= USE CASES ================= */}
      <section className="py-16">
        <div className="container mx-auto px-4 space-y-24">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 items-center`}
            >
              {/* Content */}
              <div className="flex-1">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${useCase.color} flex items-center justify-center mb-6`}
                >
                  <useCase.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                <h2 className="text-3xl font-bold mb-2">
                  {useCase.title}
                </h2>
                <p className="text-sm text-primary font-medium mb-4">
                  {useCase.subtitle}
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  {useCase.description}
                </p>

                <ul className="space-y-3">
                  {useCase.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-success mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual */}
              <div className="flex-1">
                <div
                  className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${useCase.color} p-1`}
                >
                  <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                    <useCase.icon className="w-24 h-24 text-muted-foreground/20" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            See Your Use Case in Action
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let us show you how Zivux.ai fits your business workflows.
          </p>

          <Button size="lg" variant="gradient" asChild>
            <Link to="/contact">
              Request a Demo
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
