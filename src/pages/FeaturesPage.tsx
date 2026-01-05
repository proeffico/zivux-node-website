import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Users,
  MessageSquare,
  Workflow,
  Ticket,
  Bot,
  Shield,
  Building2,
  Package,
  ArrowRight,
  CheckCircle2,
  Zap,
  BarChart3,
  Tag,
  FileText,
  Settings,
  UserCheck,
} from "lucide-react";

/* =========================
   CORE PLATFORM FEATURES
========================= */
const mainFeatures = [
  {
    id: "leads",
    icon: Users,
    title: "Omnichannel Lead Management",
    description:
      "Capture, track, and convert leads from every channel with fully customizable pipelines.",
    features: [
      "Leads from Facebook, WhatsApp, Email & Website",
      "Manual & API-based lead creation",
      "Dynamic status & sub-status workflows",
      "Auto-assignment & round-robin logic",
      "Lead scoring & qualification",
      "Duplicate detection & merge",
    ],
    color: "from-primary to-purple-500",
  },
  {
    id: "tickets",
    icon: Ticket,
    title: "Ticket & Case Management",
    description:
      "Manage customer issues from WhatsApp and Email with SLA-driven workflows.",
    features: [
      "Tickets from WhatsApp & Email",
      "Custom ticket status flows",
      "SLA tracking & escalation rules",
      "Internal notes & team mentions",
      "Canned replies & templates",
      "Customer feedback tracking",
    ],
    color: "from-accent to-info",
  },
  {
    id: "workflows",
    icon: Workflow,
    title: "Workflow Automation Engine",
    description:
      "Automate tasks, follow-ups, and escalations using powerful rule-based workflows.",
    features: [
      "Visual workflow builder",
      "IF / ELSE conditions",
      "Time-based automation",
      "Auto task creation",
      "Webhook & API triggers",
      "Cross-module automation",
    ],
    color: "from-warning to-orange-500",

    /** 👇 ADD THIS */
    comingSoon: true,
  },
  {
    id: "whatsapp",
    icon: Bot,
    title: "WhatsApp Business Automation",
    description:
      "Engage customers instantly using WhatsApp bots and human handoff.",
    features: [
      "WhatsApp lead capture",
      "Automated replies & flows",
      "Ticket & lead creation via WhatsApp",
      "Agent handoff rules",
      "Template & broadcast management",
      "Conversation analytics",
    ],
    color: "from-success to-emerald-500",
  },
];

/* =========================
   SUPPORTING FEATURES
========================= */
const additionalFeatures = [
  {
    icon: Building2,
    title: "Account Management",
    description: "Convert leads into customers with full account history.",
  },
  {
    icon: Shield,
    title: "Role & Permission Control",
    description: "Granular access control for admins, managers, and agents.",
  },
  {
    icon: Package,
    title: "Products & Categories",
    description: "Manage product catalogs linked to leads and deals.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    description: "Track performance with real-time dashboards.",
  },
  {
    icon: Tag,
    title: "Tags & Segmentation",
    description: "Segment leads and customers using smart tags.",
  },
  {
    icon: FileText,
    title: "Notes & Attachments",
    description: "Maintain complete communication history.",
  },
  {
    icon: Settings,
    title: "Custom Fields",
    description: "Extend CRM modules with custom attributes.",
  },
  {
    icon: UserCheck,
    title: "Team Management",
    description: "Organize users by role, department, and workload.",
  },
];

export default function FeaturesPage() {
  return (
    <div className="overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

        <div className="container mx-auto px-4 relative text-center max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Badge variant="new" className="mb-6 px-4 py-1.5">
              <Zap className="w-3 h-3 mr-1" />
              WhatsApp-First CRM Platform
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6"
          >
            Everything You Need to{" "}
            <span className="gradient-text">Sell, Support & Scale</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Zivux.ai unifies Leads, WhatsApp, Tickets, Automation, and Teams
            into one powerful CRM platform.
          </motion.p>
        </div>
      </section>

      {/* ================= MAIN FEATURES ================= */}
      <section className="py-16">
        <div className="container mx-auto px-4 space-y-24">
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center`}
            >
              {/* Content */}
              <div className="flex-1">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}
                >
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-3xl font-bold">{feature.title}</h2>

                  {feature.comingSoon && (
                    <span className="rounded-full bg-warning/15 px-3 py-1 text-xs font-semibold text-warning">
                      Coming Soon
                    </span>
                  )}
                </div>

                <p className="text-lg text-muted-foreground mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.features.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-success mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual */}
              <div className="flex-1">
                <div
                  className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${feature.color} p-1`}
                >
                  <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                    <feature.icon className="w-24 h-24 text-muted-foreground/20" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= ADDITIONAL FEATURES ================= */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Built for Growing Teams</h2>
            <p className="text-muted-foreground">
              Everything you expect from an enterprise-grade CRM
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 rounded-xl bg-card border"
              >
                <feature.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            See Zivux.ai in Action
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Schedule a demo and discover how Zivux.ai can transform your
            sales and support operations.
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
