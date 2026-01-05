import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Plus,
  Search,
  MoreHorizontal,
  MessageSquare,
  Mail,
  Phone,
  ChevronLeft,
  ChevronRight,
  Eye,
  Edit,
  Trash2,
  Clock,
  AlertCircle,
  CheckCircle2,
  Download,
  Users,
} from "lucide-react";

const tickets = [
  {
    id: "TKT-1234",
    subject: "Integration issue with WhatsApp API",
    description: "Unable to send messages through the WhatsApp Cloud API. Getting 401 errors.",
    customer: "Sarah Johnson",
    company: "TechCorp Inc",
    source: "WhatsApp",
    priority: "high",
    status: "open",
    assignedTo: "John Doe",
    createdAt: "2024-01-15 10:30",
    sla: "2h remaining",
    slaStatus: "warning",
  },
  {
    id: "TKT-1235",
    subject: "Billing inquiry for March invoice",
    description: "Customer is asking about the additional charges on their March invoice.",
    customer: "Michael Chen",
    company: "GrowthCo",
    source: "Email",
    priority: "medium",
    status: "in_progress",
    assignedTo: "Jane Smith",
    createdAt: "2024-01-15 09:15",
    sla: "4h remaining",
    slaStatus: "ok",
  },
  {
    id: "TKT-1236",
    subject: "Feature request: Custom fields for leads",
    description: "Requesting ability to add custom fields to lead forms.",
    customer: "Emily Davis",
    company: "StartupXYZ",
    source: "Website",
    priority: "low",
    status: "pending",
    assignedTo: "Mike Johnson",
    createdAt: "2024-01-14 16:45",
    sla: "On hold",
    slaStatus: "paused",
  },
  {
    id: "TKT-1237",
    subject: "Login issues after password reset",
    description: "Customer cannot log in after resetting their password.",
    customer: "James Wilson",
    company: "Enterprise Ltd",
    source: "Phone",
    priority: "high",
    status: "open",
    assignedTo: "John Doe",
    createdAt: "2024-01-15 11:00",
    sla: "30m remaining",
    slaStatus: "critical",
  },
  {
    id: "TKT-1238",
    subject: "Export functionality not working",
    description: "CSV export for leads is timing out on large datasets.",
    customer: "Amanda Brown",
    company: "BigCorp",
    source: "Email",
    priority: "medium",
    status: "resolved",
    assignedTo: "Jane Smith",
    createdAt: "2024-01-13 14:20",
    sla: "Completed",
    slaStatus: "completed",
  },
];

const sourceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  WhatsApp: MessageSquare,
  Email: Mail,
  Phone: Phone,
  Website: Users,
};

export default function TicketsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");

  const filteredTickets = tickets.filter((ticket) => {
    const matchesSearch =
      ticket.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || ticket.status === statusFilter;
    const matchesPriority = priorityFilter === "all" || ticket.priority === priorityFilter;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "open":
        return <AlertCircle className="w-4 h-4" />;
      case "in_progress":
        return <Clock className="w-4 h-4" />;
      case "pending":
        return <Clock className="w-4 h-4" />;
      case "resolved":
        return <CheckCircle2 className="w-4 h-4" />;
      default:
        return <AlertCircle className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "error";
      case "in_progress":
        return "info";
      case "pending":
        return "warning";
      case "resolved":
        return "success";
      default:
        return "secondary";
    }
  };

  const getSlaColor = (slaStatus: string) => {
    switch (slaStatus) {
      case "critical":
        return "text-destructive bg-destructive/10";
      case "warning":
        return "text-warning bg-warning/10";
      case "ok":
        return "text-success bg-success/10";
      case "completed":
        return "text-muted-foreground bg-muted";
      default:
        return "text-muted-foreground bg-muted";
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Tickets</h1>
          <p className="text-muted-foreground">Manage support tickets and customer inquiries</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button variant="gradient">
            <Plus className="w-4 h-4 mr-2" />
            Create Ticket
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {[
          { label: "Total", value: tickets.length, color: "text-foreground" },
          { label: "Open", value: tickets.filter((t) => t.status === "open").length, color: "text-destructive" },
          { label: "In Progress", value: tickets.filter((t) => t.status === "in_progress").length, color: "text-info" },
          { label: "Pending", value: tickets.filter((t) => t.status === "pending").length, color: "text-warning" },
          { label: "Resolved", value: tickets.filter((t) => t.status === "resolved").length, color: "text-success" },
        ].map((stat) => (
          <Card key={stat.label} className="border-border/50">
            <CardContent className="p-4">
              <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filters */}
      <Card className="border-border/50">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search tickets..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="open">Open</SelectItem>
                <SelectItem value="in_progress">In Progress</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
              </SelectContent>
            </Select>
            <Select value={priorityFilter} onValueChange={setPriorityFilter}>
              <SelectTrigger className="w-full sm:w-40">
                <SelectValue placeholder="Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priority</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Tickets Table */}
      <Card className="border-border/50">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead>Ticket</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>SLA</TableHead>
                  <TableHead>Assigned To</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTickets.map((ticket, index) => {
                  const SourceIcon = sourceIcons[ticket.source] || Mail;
                  return (
                    <motion.tr
                      key={ticket.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="group hover:bg-muted/50"
                    >
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs text-muted-foreground">
                              {ticket.id}
                            </span>
                            <SourceIcon className="w-3 h-3 text-muted-foreground" />
                          </div>
                          <div className="font-medium max-w-xs truncate">
                            {ticket.subject}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{ticket.customer}</div>
                          <div className="text-sm text-muted-foreground">
                            {ticket.company}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            ticket.priority === "high"
                              ? "error"
                              : ticket.priority === "medium"
                              ? "warning"
                              : "secondary"
                          }
                        >
                          {ticket.priority}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={getStatusColor(ticket.status) as any} className="gap-1">
                          {getStatusIcon(ticket.status)}
                          {ticket.status.replace("_", " ")}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${getSlaColor(ticket.slaStatus)}`}>
                          {ticket.sla}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                            <span className="text-xs font-medium text-accent">
                              {ticket.assignedTo.split(" ").map((n) => n[0]).join("")}
                            </span>
                          </div>
                          <span className="text-sm">{ticket.assignedTo}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <Eye className="w-4 h-4 mr-2" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="w-4 h-4 mr-2" />
                              Edit Ticket
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <CheckCircle2 className="w-4 h-4 mr-2" />
                              Mark Resolved
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">
                              <Trash2 className="w-4 h-4 mr-2" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </motion.tr>
                  );
                })}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between px-4 py-4 border-t border-border">
            <div className="text-sm text-muted-foreground">
              Showing {filteredTickets.length} of {tickets.length} tickets
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                1
              </Button>
              <Button variant="outline" size="sm">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
