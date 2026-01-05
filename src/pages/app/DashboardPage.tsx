import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Users,
  Ticket,
  TrendingUp,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  Mail,
  Phone,
  MoreHorizontal,
} from "lucide-react";

const stats = [
  {
    title: "Total Leads",
    value: "2,847",
    change: "+12.5%",
    trend: "up",
    icon: Users,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Open Tickets",
    value: "156",
    change: "-8.3%",
    trend: "down",
    icon: Ticket,
    color: "text-warning",
    bgColor: "bg-warning/10",
  },
  {
    title: "Conversion Rate",
    value: "24.8%",
    change: "+3.2%",
    trend: "up",
    icon: TrendingUp,
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    title: "Revenue",
    value: "$128,420",
    change: "+18.7%",
    trend: "up",
    icon: DollarSign,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
];

const recentLeads = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah@techcorp.com",
    company: "TechCorp Inc",
    source: "WhatsApp",
    status: "new",
    time: "5 min ago",
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "m.chen@growthco.io",
    company: "GrowthCo",
    source: "Facebook",
    status: "contacted",
    time: "12 min ago",
  },
  {
    id: 3,
    name: "Emily Davis",
    email: "emily@startup.xyz",
    company: "StartupXYZ",
    source: "Email",
    status: "qualified",
    time: "1 hour ago",
  },
  {
    id: 4,
    name: "James Wilson",
    email: "j.wilson@enterprise.com",
    company: "Enterprise Ltd",
    source: "Website",
    status: "new",
    time: "2 hours ago",
  },
];

const recentTickets = [
  {
    id: "TKT-1234",
    subject: "Integration issue with WhatsApp API",
    customer: "TechCorp Inc",
    priority: "high",
    status: "open",
    time: "10 min ago",
  },
  {
    id: "TKT-1235",
    subject: "Billing inquiry for March invoice",
    customer: "GrowthCo",
    priority: "medium",
    status: "in_progress",
    time: "45 min ago",
  },
  {
    id: "TKT-1236",
    subject: "Feature request: Custom fields",
    customer: "StartupXYZ",
    priority: "low",
    status: "pending",
    time: "2 hours ago",
  },
];

const sourceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  WhatsApp: MessageSquare,
  Facebook: Users,
  Email: Mail,
  Website: TrendingUp,
  Phone: Phone,
};

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, John. Here's what's happening today.</p>
        </div>
        <Button variant="gradient">
          <Users className="w-4 h-4 mr-2" />
          Add New Lead
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="border-border/50 hover:shadow-card-hover transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className={`flex items-center gap-1 text-sm font-medium ${
                    stat.trend === "up" ? "text-success" : "text-destructive"
                  }`}>
                    {stat.change}
                    {stat.trend === "up" ? (
                      <ArrowUpRight className="w-4 h-4" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4" />
                    )}
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.title}</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Leads */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-semibold">Recent Leads</CardTitle>
              <Button variant="ghost" size="sm">View All</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentLeads.map((lead) => {
                  const SourceIcon = sourceIcons[lead.source] || Users;
                  return (
                    <div
                      key={lead.id}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-sm font-semibold text-primary">
                          {lead.name.split(" ").map((n) => n[0]).join("")}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-medium truncate">{lead.name}</span>
                          <Badge variant={lead.status as any} className="text-xs">
                            {lead.status}
                          </Badge>
                        </div>
                        <div className="text-sm text-muted-foreground truncate">
                          {lead.company}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <SourceIcon className="w-4 h-4" />
                        <span className="text-xs hidden sm:inline">{lead.time}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Tickets */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-semibold">Recent Tickets</CardTitle>
              <Button variant="ghost" size="sm">View All</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTickets.map((ticket) => (
                  <div
                    key={ticket.id}
                    className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      ticket.priority === "high"
                        ? "bg-destructive/10"
                        : ticket.priority === "medium"
                        ? "bg-warning/10"
                        : "bg-muted"
                    }`}>
                      {ticket.status === "open" ? (
                        <AlertCircle className={`w-5 h-5 ${
                          ticket.priority === "high" ? "text-destructive" : "text-warning"
                        }`} />
                      ) : ticket.status === "in_progress" ? (
                        <Clock className="w-5 h-5 text-info" />
                      ) : (
                        <CheckCircle2 className="w-5 h-5 text-success" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono text-muted-foreground">
                          {ticket.id}
                        </span>
                        <Badge
                          variant={
                            ticket.priority === "high"
                              ? "error"
                              : ticket.priority === "medium"
                              ? "warning"
                              : "secondary"
                          }
                          className="text-xs"
                        >
                          {ticket.priority}
                        </Badge>
                      </div>
                      <div className="font-medium truncate">{ticket.subject}</div>
                      <div className="text-sm text-muted-foreground">
                        {ticket.customer} • {ticket.time}
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="shrink-0">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
