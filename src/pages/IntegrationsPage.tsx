import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Facebook,
  Mail,
  Globe,
  Bot,
  Workflow,
  Webhook,
  Database,
  Zap,
  ArrowRight,
  CheckCircle2,
  Instagram,
} from "lucide-react";

const integrations = [
  {
    category: "Messaging Channels",
    description: "Engage customers where they already are",
    items: [
      {
        name: "WhatsApp Business API",
        icon: MessageSquare,
        description: "Send & receive WhatsApp messages, automate replies, and create tickets.",
        status: "Available",
        color: "text-success",
      },
      {
        name: "Email",
        icon: Mail,
        description: "Convert incoming emails into leads or support tickets.",
        status: "Available",
        color: "text-warning",
      },
      {
        name: "Website Forms",
        icon: Globe,
        description: "Capture website inquiries in real time.",
        status: "Available",
        color: "text-primary",
      },
    ],
  },
  {
    category: "Lead Sources",
    description: "Automatically capture leads from marketing channels",
    items: [
      {
        name: "Facebook Lead Ads",
        icon: Facebook,
        description: "Sync Facebook leads directly into your CRM.",
        status: "Available",
        color: "text-info",
      },
      {
        name: "Instagram Lead Ads",
        icon: Instagram,
        description: "Sync Instagram leads directly into your CRM.",
        status: "Available",
        color: "text-accent",
      },
      {
        name: "Manual Import",
        icon: Database,
        description: "Upload leads via Excel or CSV.",
        status: "Available",
        color: "text-muted-foreground",
      },
    ],
  },
  {
    category: "Automation & APIs",
    description: "Extend Zivux.ai with custom workflows",
    items: [
      {
        name: "Workflow Engine",
        icon: Workflow,
        description: "Trigger actions automatically based on lead or ticket events.",
        status: "Available",
        color: "text-accent",
      },
      {
        name: "Webhooks",
        icon: Webhook,
        description: "Send real-time events to your systems.",
        status: "Available",
        color: "text-primary",
      },
      {
        name: "REST API",
        icon: Zap,
        description: "Full API access for custom integrations.",
        status: "Available",
        color: "text-warning",
      },
    ],
  },
  {
    category: "Coming Soon",
    description: "More integrations on the way",
    items: [
      {
        name: "Zapier",
        icon: Zap,
        description: "Connect Zivux.ai with 5,000+ apps.",
        status: "Coming Soon",
        color: "text-muted-foreground",
      },
      {
        name: "Slack",
        icon: MessageSquare,
        description: "Get ticket & lead alerts in Slack.",
        status: "Coming Soon",
        color: "text-muted-foreground",
      },
      {
        name: "Google Sheets",
        icon: Database,
        description: "Sync leads and reports automatically.",
        status: "Coming Soon",
        color: "text-muted-foreground",
      },
    ],
  },
];

export default function IntegrationsPage() {
  return (
    <div className="overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

        <div className="container mx-auto px-4 text-center max-w-4xl relative">
          <Badge variant="new" className="mb-6 px-4 py-1.5">
            <Zap className="w-3 h-3 mr-1" />
            Powerful Integrations
          </Badge>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6"
          >
            Connect{" "}
            <span className="gradient-text">Zivux.ai</span>{" "}
            With Your Tools
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Seamlessly integrate your communication channels, marketing tools,
            and internal systems — all in one CRM.
          </motion.p>
        </div>
      </section>

      {/* ================= INTEGRATIONS ================= */}
      <section className="py-16">
        <div className="container mx-auto px-4 space-y-20">
          {integrations.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold mb-2">
                  {group.category}
                </h2>
                <p className="text-muted-foreground">
                  {group.description}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="p-6 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-card-hover transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <item.icon className={`w-8 h-8 ${item.color}`} />
                      <Badge
                        variant={
                          item.status === "Available"
                            ? "success"
                            : "secondary"
                        }
                      >
                        {item.status}
                      </Badge>
                    </div>

                    <h3 className="text-lg font-semibold mb-2">
                      {item.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {item.description}
                    </p>

                    {item.status === "Available" && (
                      <div className="flex items-center gap-2 text-sm text-success">
                        <CheckCircle2 className="w-4 h-4" />
                        Ready to use
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need a Custom Integration?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Our team can help you build custom integrations using APIs and webhooks.
          </p>

          <Button size="lg" variant="gradient" asChild>
            <Link to="/contact">
              Talk to Our Team
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
