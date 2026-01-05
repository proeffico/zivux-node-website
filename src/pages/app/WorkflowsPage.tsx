import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Plus,
  Workflow,
  Zap,
  Mail,
  MessageSquare,
  Clock,
  Users,
  ArrowRight,
  Play,
  Pause,
  MoreVertical,
  Copy,
  Trash2,
  Edit,
  GitBranch,
  Timer,
  Bell,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const workflows = [
  {
    id: 1,
    name: "New Lead Welcome",
    description: "Send welcome email and assign to sales rep when new lead is created",
    trigger: "Lead Created",
    triggerIcon: Users,
    actions: ["Send Email", "Assign Agent", "Create Task"],
    active: true,
    runs: 1247,
    lastRun: "2 mins ago",
    status: "healthy",
  },
  {
    id: 2,
    name: "Lead Follow-up Reminder",
    description: "Send reminder if lead not contacted within 24 hours",
    trigger: "Time Based",
    triggerIcon: Clock,
    actions: ["Wait 24h", "Check Status", "Send Notification"],
    active: true,
    runs: 892,
    lastRun: "15 mins ago",
    status: "healthy",
  },
  {
    id: 3,
    name: "Ticket SLA Escalation",
    description: "Escalate ticket to manager if not resolved within SLA",
    trigger: "SLA Breach",
    triggerIcon: AlertTriangle,
    actions: ["Check SLA", "Escalate", "Notify Manager"],
    active: true,
    runs: 156,
    lastRun: "1 hour ago",
    status: "warning",
  },
  {
    id: 4,
    name: "WhatsApp Auto-Reply",
    description: "Auto reply to WhatsApp messages outside business hours",
    trigger: "Message Received",
    triggerIcon: MessageSquare,
    actions: ["Check Time", "Send Auto Reply"],
    active: false,
    runs: 2341,
    lastRun: "3 days ago",
    status: "paused",
  },
  {
    id: 5,
    name: "Lead Qualification",
    description: "Automatically qualify leads based on score and engagement",
    trigger: "Lead Score Updated",
    triggerIcon: TrendingUp,
    actions: ["Calculate Score", "Update Status", "Assign Team"],
    active: true,
    runs: 567,
    lastRun: "30 mins ago",
    status: "healthy",
  },
];

const triggers = [
  { value: "lead_created", label: "Lead Created", icon: Users },
  { value: "lead_updated", label: "Lead Updated", icon: Edit },
  { value: "ticket_created", label: "Ticket Created", icon: MessageSquare },
  { value: "time_based", label: "Time Based", icon: Clock },
  { value: "message_received", label: "Message Received", icon: MessageSquare },
  { value: "sla_breach", label: "SLA Breach", icon: AlertTriangle },
];

const actionTypes = [
  { value: "send_email", label: "Send Email", icon: Mail },
  { value: "send_whatsapp", label: "Send WhatsApp", icon: MessageSquare },
  { value: "assign_agent", label: "Assign Agent", icon: Users },
  { value: "create_task", label: "Create Task", icon: CheckCircle2 },
  { value: "wait", label: "Wait/Delay", icon: Timer },
  { value: "condition", label: "IF/ELSE Condition", icon: GitBranch },
  { value: "notification", label: "Send Notification", icon: Bell },
];

export default function WorkflowsPage() {
  const [workflowList, setWorkflowList] = useState(workflows);
  const [isBuilderOpen, setIsBuilderOpen] = useState(false);
  const [workflowName, setWorkflowName] = useState("");
  const [selectedTrigger, setSelectedTrigger] = useState("");
  const [selectedActions, setSelectedActions] = useState<string[]>([]);

  const toggleWorkflow = (id: number) => {
    setWorkflowList((prev) =>
      prev.map((w) =>
        w.id === id
          ? { ...w, active: !w.active, status: w.active ? "paused" : "healthy" }
          : w
      )
    );
  };

  const addAction = (action: string) => {
    if (!selectedActions.includes(action)) {
      setSelectedActions([...selectedActions, action]);
    }
  };

  const removeAction = (index: number) => {
    setSelectedActions(selectedActions.filter((_, i) => i !== index));
  };

  const stats = [
    { label: "Active Workflows", value: workflowList.filter((w) => w.active).length, icon: Play },
    { label: "Total Runs Today", value: "2,847", icon: Zap },
    { label: "Success Rate", value: "98.5%", icon: CheckCircle2 },
    { label: "Avg. Response Time", value: "1.2s", icon: Timer },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">Workflow Automation</h1>
          <p className="text-muted-foreground mt-1">
            Build powerful automations with triggers, conditions, and actions
          </p>
        </div>
        <Dialog open={isBuilderOpen} onOpenChange={setIsBuilderOpen}>
          <DialogTrigger asChild>
            <Button variant="gradient" className="gap-2">
              <Plus className="w-4 h-4" />
              Create Workflow
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Workflow className="w-5 h-5 text-primary" />
                Create New Workflow
              </DialogTitle>
              <DialogDescription>
                Design your automation by selecting a trigger and adding actions
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6 py-4">
              {/* Workflow Name */}
              <div className="space-y-2">
                <Label htmlFor="name">Workflow Name</Label>
                <Input
                  id="name"
                  placeholder="e.g., New Lead Follow-up"
                  value={workflowName}
                  onChange={(e) => setWorkflowName(e.target.value)}
                />
              </div>

              {/* Trigger Selection */}
              <div className="space-y-3">
                <Label>When this happens (Trigger)</Label>
                <Select value={selectedTrigger} onValueChange={setSelectedTrigger}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a trigger..." />
                  </SelectTrigger>
                  <SelectContent>
                    {triggers.map((trigger) => (
                      <SelectItem key={trigger.value} value={trigger.value}>
                        <div className="flex items-center gap-2">
                          <trigger.icon className="w-4 h-4 text-primary" />
                          {trigger.label}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Visual Flow Builder */}
              {selectedTrigger && (
                <div className="space-y-4">
                  <Label>Then do this (Actions)</Label>
                  
                  {/* Flow Visualization */}
                  <div className="relative p-6 bg-muted/30 rounded-xl border border-border">
                    {/* Trigger Node */}
                    <div className="flex flex-col items-center">
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="flex items-center gap-3 px-4 py-3 bg-primary/10 border-2 border-primary rounded-xl"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                          <Zap className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">TRIGGER</div>
                          <div className="font-medium">
                            {triggers.find((t) => t.value === selectedTrigger)?.label}
                          </div>
                        </div>
                      </motion.div>

                      {/* Connector Line */}
                      {selectedActions.length > 0 && (
                        <div className="w-0.5 h-8 bg-border" />
                      )}

                      {/* Action Nodes */}
                      {selectedActions.map((action, index) => {
                        const actionType = actionTypes.find((a) => a.value === action);
                        return (
                          <motion.div
                            key={index}
                            initial={{ scale: 0.9, opacity: 0, y: -10 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center"
                          >
                            <div className="relative flex items-center gap-3 px-4 py-3 bg-card border border-border rounded-xl shadow-sm group">
                              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                                {actionType && <actionType.icon className="w-5 h-5 text-secondary-foreground" />}
                              </div>
                              <div>
                                <div className="text-xs text-muted-foreground">
                                  ACTION {index + 1}
                                </div>
                                <div className="font-medium">{actionType?.label}</div>
                              </div>
                              <button
                                onClick={() => removeAction(index)}
                                className="absolute -right-2 -top-2 w-6 h-6 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <Trash2 className="w-3 h-3" />
                              </button>
                            </div>
                            {index < selectedActions.length - 1 && (
                              <div className="w-0.5 h-8 bg-border" />
                            )}
                          </motion.div>
                        );
                      })}

                      {/* Add Action Connector */}
                      {selectedActions.length > 0 && (
                        <div className="w-0.5 h-8 bg-border" />
                      )}

                      {/* Add Action Button */}
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm" className="gap-2 mt-2">
                            <Plus className="w-4 h-4" />
                            Add Action
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="center" className="w-48">
                          {actionTypes.map((action) => (
                            <DropdownMenuItem
                              key={action.value}
                              onClick={() => addAction(action.value)}
                              className="gap-2"
                            >
                              <action.icon className="w-4 h-4 text-primary" />
                              {action.label}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
              )}

              {/* Footer Actions */}
              <div className="flex justify-end gap-3 pt-4 border-t border-border">
                <Button variant="outline" onClick={() => setIsBuilderOpen(false)}>
                  Cancel
                </Button>
                <Button
                  variant="gradient"
                  disabled={!workflowName || !selectedTrigger || selectedActions.length === 0}
                  onClick={() => {
                    // Save workflow logic here
                    setIsBuilderOpen(false);
                    setWorkflowName("");
                    setSelectedTrigger("");
                    setSelectedActions([]);
                  }}
                >
                  Create Workflow
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="bg-card border-border">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Workflows List */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Your Workflows</h2>
        <div className="grid gap-4">
          {workflowList.map((workflow, index) => (
            <motion.div
              key={workflow.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className={`bg-card border-border transition-all ${!workflow.active ? "opacity-60" : ""}`}>
                <CardContent className="p-5">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                    {/* Workflow Info */}
                    <div className="flex-1">
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          workflow.status === "healthy" 
                            ? "bg-green-500/10 text-green-500" 
                            : workflow.status === "warning"
                            ? "bg-yellow-500/10 text-yellow-500"
                            : "bg-muted text-muted-foreground"
                        }`}>
                          <workflow.triggerIcon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold truncate">{workflow.name}</h3>
                            <Badge variant={workflow.active ? "new" : "secondary"} className="text-xs">
                              {workflow.active ? "Active" : "Paused"}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mt-0.5 line-clamp-1">
                            {workflow.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Actions Flow Preview */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="outline" className="gap-1.5">
                        <workflow.triggerIcon className="w-3 h-3" />
                        {workflow.trigger}
                      </Badge>
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                      {workflow.actions.map((action, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {action}
                        </Badge>
                      ))}
                    </div>

                    {/* Stats & Controls */}
                    <div className="flex items-center gap-4 lg:gap-6">
                      <div className="text-sm">
                        <div className="font-medium">{workflow.runs.toLocaleString()}</div>
                        <div className="text-muted-foreground text-xs">Total runs</div>
                      </div>
                      <div className="text-sm">
                        <div className="font-medium">{workflow.lastRun}</div>
                        <div className="text-muted-foreground text-xs">Last run</div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Switch
                          checked={workflow.active}
                          onCheckedChange={() => toggleWorkflow(workflow.id)}
                        />
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreVertical className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem className="gap-2">
                              <Edit className="w-4 h-4" />
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem className="gap-2">
                              <Copy className="w-4 h-4" />
                              Duplicate
                            </DropdownMenuItem>
                            <DropdownMenuItem className="gap-2">
                              {workflow.active ? (
                                <>
                                  <Pause className="w-4 h-4" />
                                  Pause
                                </>
                              ) : (
                                <>
                                  <Play className="w-4 h-4" />
                                  Activate
                                </>
                              )}
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="gap-2 text-destructive">
                              <Trash2 className="w-4 h-4" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
