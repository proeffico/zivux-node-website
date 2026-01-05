import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Users,
  MessageSquare,
  Mail,
  Facebook,
  Smartphone,
  Globe,
  Workflow,
  Ticket,
  Bot,
  ArrowRight,
  CheckCircle2,
  Zap,
  Shield,
  TrendingUp,
  Clock,
  Star,
} from "lucide-react";

/* =======================
   DATA
======================= */

const channels = [
  { icon: MessageSquare, name: "WhatsApp", color: "text-success" },
  { icon: Facebook, name: "Facebook", color: "text-info" },
  { icon: Mail, name: "Email", color: "text-warning" },
  { icon: Globe, name: "Website", color: "text-primary" },
  { icon: Bot, name: "Chatbot", color: "text-accent" },
  { icon: Smartphone, name: "Manual", color: "text-muted-foreground" },
];

const features = [
  {
    icon: Users,
    title: "Omnichannel Lead Management",
    description:
      "Automatically capture, assign, and track leads from WhatsApp, Facebook, Email, and Website — all in one place.",
  },
  {
    icon: Ticket,
    title: "Smart Ticketing with SLA",
    description:
      "Convert conversations into tickets with SLA timers, escalations, and seamless team collaboration.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Automate follow-ups, assignments, escalations, and notifications using powerful IF / ELSE rules.",
  },
  {
    icon: Bot,
    title: "WhatsApp Automation",
    description:
      "Use bots to qualify leads, answer FAQs instantly, and smoothly hand over to human agents.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description:
      "Role-based access control, audit logs, and secure data handling built for growing teams.",
  },
  {
    icon: TrendingUp,
    title: "Real-Time Analytics",
    description:
      "Track lead conversion, SLA compliance, and team performance with live dashboards.",
  },
];

const stats = [
  { value: "1K+", label: "Active Users" },
  { value: "50M+", label: "Conversations Managed" },
  { value: "99.9%", label: "Platform Uptime" },
  { value: "4.9/5", label: "Customer Satisfaction" },
];

const testimonials = [
  {
    quote:
      "We reduced first response time by 62% in the first month after moving to Zivux.ai.",
    author: "Sarah Chen",
    role: "Head of Sales, SaaS Company",
    rating: 5,
  },
  {
    quote:
      "Workflow automation alone saved our operations team nearly 20 hours every week.",
    author: "Michael Park",
    role: "Operations Manager",
    rating: 5,
  },
  {
    quote:
      "Zivux.ai finally gave us one place to manage WhatsApp, email, and support tickets.",
    author: "Emily Rodriguez",
    role: "Customer Success Lead",
    rating: 5,
  },
];

/* =======================
   COMPONENT
======================= */

export default function HomePage() {
  return (
    <div className="overflow-hidden">

      {/* =======================
          HERO SECTION
      ======================= */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">

            <Badge variant="new" className="mb-6 px-4 py-1.5">
              <Zap className="w-3 h-3 mr-1" />
              New: WhatsApp Bot Automation
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
              Close More Leads.
              <br />
              <span className="gradient-text">
                All Conversations. One CRM.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Zivux.ai centralizes WhatsApp, Facebook, Email, Website, and Bots
              into one intelligent CRM — with automation, SLA tracking, and
              real-time insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button size="xl" variant="hero" asChild>
                <Link to="/signup">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="xl" variant="hero-outline" asChild>
                <Link to="/demo">Request Demo</Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mb-10">
              Trusted by fast-growing sales & support teams to manage millions of conversations every month.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              {channels.map((channel) => (
                <div
                  key={channel.name}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-card border border-border/50"
                >
                  <channel.icon className={`w-4 h-4 ${channel.color}`} />
                  <span className="text-sm font-medium">{channel.name}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =======================
          WHO IS IT FOR
      ======================= */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              {
                title: "Sales Teams",
                desc: "Capture, qualify, and close leads faster with smart assignments and follow-ups.",
              },
              {
                title: "Support Teams",
                desc: "Resolve tickets on time with SLA tracking and WhatsApp-first support.",
              },
              {
                title: "Operations",
                desc: "Automate workflows, reduce manual work, and gain complete visibility.",
              },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-card border">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =======================
          STATS
      ======================= */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* =======================
          FEATURES
      ======================= */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to{" "}
              <span className="gradient-text">Scale Your Business</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A modern CRM built for teams that live on conversations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-card-hover hover:border-primary/20 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/features">
                View All Features
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* =======================
          TESTIMONIALS
      ======================= */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.author} className="p-6 rounded-2xl bg-card border shadow-card">
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                ))}
              </div>
              <p className="mb-6">"{t.quote}"</p>
              <div>
                <div className="font-semibold">{t.author}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =======================
          FINAL CTA
      ======================= */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl bg-gradient-to-br from-primary via-purple-600 to-primary p-12 md:p-16 text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Unify Your Sales & Support Conversations Today
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Zivux.ai isn’t just a CRM — it’s your conversation command center.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" className="bg-background text-foreground hover:text-white" asChild>
                <Link to="/signup">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" className="border-black text-black hover:text-white" asChild>
                <Link to="/demo">Schedule Demo</Link>
              </Button>
            </div>

            <div className="flex justify-center gap-6 mt-8 text-sm opacity-80">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> 14-day free trial
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> Setup in 5 minutes
              </span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
