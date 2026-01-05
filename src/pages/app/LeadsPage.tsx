import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  Users,
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  MessageSquare,
  Mail,
  Phone,
  Globe,
  ChevronLeft,
  ChevronRight,
  Eye,
  Edit,
  Trash2,
  UserPlus,
  Download,
} from "lucide-react";

const leads = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah@techcorp.com",
    phone: "+1 234 567 8901",
    company: "TechCorp Inc",
    source: "WhatsApp",
    status: "new",
    subStatus: "Initial Contact",
    assignedTo: "John Doe",
    createdAt: "2024-01-15",
    value: "$12,000",
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "m.chen@growthco.io",
    phone: "+1 234 567 8902",
    company: "GrowthCo",
    source: "Facebook",
    status: "contacted",
    subStatus: "Demo Scheduled",
    assignedTo: "Jane Smith",
    createdAt: "2024-01-14",
    value: "$25,000",
  },
  {
    id: 3,
    name: "Emily Davis",
    email: "emily@startup.xyz",
    phone: "+1 234 567 8903",
    company: "StartupXYZ",
    source: "Email",
    status: "qualified",
    subStatus: "Proposal Sent",
    assignedTo: "John Doe",
    createdAt: "2024-01-13",
    value: "$8,500",
  },
  {
    id: 4,
    name: "James Wilson",
    email: "j.wilson@enterprise.com",
    phone: "+1 234 567 8904",
    company: "Enterprise Ltd",
    source: "Website",
    status: "new",
    subStatus: "Awaiting Response",
    assignedTo: "Mike Johnson",
    createdAt: "2024-01-12",
    value: "$45,000",
  },
  {
    id: 5,
    name: "Amanda Brown",
    email: "a.brown@bigcorp.com",
    phone: "+1 234 567 8905",
    company: "BigCorp",
    source: "Phone",
    status: "converted",
    subStatus: "Deal Won",
    assignedTo: "Jane Smith",
    createdAt: "2024-01-11",
    value: "$32,000",
  },
  {
    id: 6,
    name: "Robert Taylor",
    email: "r.taylor@smallbiz.io",
    phone: "+1 234 567 8906",
    company: "SmallBiz",
    source: "WhatsApp",
    status: "lost",
    subStatus: "Budget Issues",
    assignedTo: "John Doe",
    createdAt: "2024-01-10",
    value: "$5,000",
  },
];

const sourceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  WhatsApp: MessageSquare,
  Facebook: Users,
  Email: Mail,
  Website: Globe,
  Phone: Phone,
};

const statusColors: Record<string, "new" | "contacted" | "qualified" | "converted" | "lost"> = {
  new: "new",
  contacted: "contacted",
  qualified: "qualified",
  converted: "converted",
  lost: "lost",
};

export default function LeadsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sourceFilter, setSourceFilter] = useState("all");

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || lead.status === statusFilter;
    const matchesSource = sourceFilter === "all" || lead.source === sourceFilter;
    return matchesSearch && matchesStatus && matchesSource;
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Leads</h1>
          <p className="text-muted-foreground">Manage and track all your leads</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button variant="gradient">
            <Plus className="w-4 h-4 mr-2" />
            Add Lead
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {[
          { label: "Total Leads", value: leads.length, color: "text-primary" },
          { label: "New", value: leads.filter((l) => l.status === "new").length, color: "text-primary" },
          { label: "Contacted", value: leads.filter((l) => l.status === "contacted").length, color: "text-info" },
          { label: "Qualified", value: leads.filter((l) => l.status === "qualified").length, color: "text-accent" },
          { label: "Converted", value: leads.filter((l) => l.status === "converted").length, color: "text-success" },
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
                placeholder="Search leads..."
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
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="contacted">Contacted</SelectItem>
                <SelectItem value="qualified">Qualified</SelectItem>
                <SelectItem value="converted">Converted</SelectItem>
                <SelectItem value="lost">Lost</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sourceFilter} onValueChange={setSourceFilter}>
              <SelectTrigger className="w-full sm:w-40">
                <SelectValue placeholder="Source" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sources</SelectItem>
                <SelectItem value="WhatsApp">WhatsApp</SelectItem>
                <SelectItem value="Facebook">Facebook</SelectItem>
                <SelectItem value="Email">Email</SelectItem>
                <SelectItem value="Website">Website</SelectItem>
                <SelectItem value="Phone">Phone</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Leads Table */}
      <Card className="border-border/50">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead>Lead</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Source</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Value</TableHead>
                  <TableHead>Assigned To</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredLeads.map((lead, index) => {
                  const SourceIcon = sourceIcons[lead.source] || Globe;
                  return (
                    <motion.tr
                      key={lead.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="group hover:bg-muted/50"
                    >
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-sm font-semibold text-primary">
                              {lead.name.split(" ").map((n) => n[0]).join("")}
                            </span>
                          </div>
                          <div>
                            <div className="font-medium">{lead.name}</div>
                            <div className="text-sm text-muted-foreground">{lead.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{lead.company}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <SourceIcon className="w-4 h-4 text-muted-foreground" />
                          <span>{lead.source}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <Badge variant={statusColors[lead.status]}>
                            {lead.status}
                          </Badge>
                          <div className="text-xs text-muted-foreground">
                            {lead.subStatus}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">{lead.value}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                            <span className="text-xs font-medium text-accent">
                              {lead.assignedTo.split(" ").map((n) => n[0]).join("")}
                            </span>
                          </div>
                          <span className="text-sm">{lead.assignedTo}</span>
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
                              Edit Lead
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <UserPlus className="w-4 h-4 mr-2" />
                              Reassign
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
              Showing {filteredLeads.length} of {leads.length} leads
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
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
