import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Bot,
  MessageSquare,
  Plus,
  Send,
  Phone,
  User,
  Clock,
  Zap,
  Settings,
  Play,
  Pause,
  MoreVertical,
  Edit,
  Trash2,
  Copy,
  ArrowRight,
  MessageCircle,
  Users,
  Ticket,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  RefreshCw,
  Smartphone,
  Globe,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const botFlows = [
  {
    id: 1,
    name: "Lead Capture Bot",
    description: "Collect lead information through interactive conversation",
    trigger: "Keyword: 'Hi', 'Hello', 'Start'",
    active: true,
    conversations: 3247,
    leadsCollected: 892,
    lastActive: "2 mins ago",
  },
  {
    id: 2,
    name: "Support Ticket Bot",
    description: "Create support tickets from WhatsApp messages",
    trigger: "Keyword: 'Support', 'Help', 'Issue'",
    active: true,
    conversations: 1567,
    leadsCollected: 0,
    ticketsCreated: 423,
    lastActive: "5 mins ago",
  },
  {
    id: 3,
    name: "FAQ Auto-Reply",
    description: "Answer common questions automatically",
    trigger: "AI Detection",
    active: true,
    conversations: 5621,
    leadsCollected: 0,
    lastActive: "1 min ago",
  },
  {
    id: 4,
    name: "Business Hours Bot",
    description: "Out of office auto-reply with callback option",
    trigger: "Outside Business Hours",
    active: false,
    conversations: 892,
    leadsCollected: 156,
    lastActive: "Yesterday",
  },
];

const chatPreview = [
  { type: "bot", message: "👋 Welcome to Zivux! How can I help you today?", time: "10:30 AM" },
  { type: "user", message: "I want to know about your CRM pricing", time: "10:31 AM" },
  { type: "bot", message: "Great question! We have 3 plans:\n\n📦 Starter - $29/month\n🚀 Growth - $79/month\n🏢 Enterprise - Custom\n\nWould you like me to connect you with our sales team?", time: "10:31 AM" },
  { type: "user", message: "Yes, please connect me", time: "10:32 AM" },
  { type: "bot", message: "Perfect! Let me collect some information:\n\nWhat's your name?", time: "10:32 AM" },
  { type: "user", message: "John Smith", time: "10:33 AM" },
  { type: "bot", message: "Thanks John! What's your company name?", time: "10:33 AM" },
];

const flowNodes = [
  { id: 1, type: "trigger", label: "Message Received", icon: MessageSquare },
  { id: 2, type: "condition", label: "Check Keyword", icon: Zap },
  { id: 3, type: "message", label: "Send Welcome", icon: Send },
  { id: 4, type: "input", label: "Collect Name", icon: User },
  { id: 5, type: "input", label: "Collect Email", icon: MessageCircle },
  { id: 6, type: "action", label: "Create Lead", icon: Users },
  { id: 7, type: "handoff", label: "Human Handoff", icon: Phone },
];

const stats = [
  { label: "Active Bots", value: "3", icon: Bot, trend: "+1 this week" },
  { label: "Total Conversations", value: "12.4K", icon: MessageSquare, trend: "+23% vs last month" },
  { label: "Leads Captured", value: "1,048", icon: Users, trend: "+156 this week" },
  { label: "Tickets Created", value: "423", icon: Ticket, trend: "+45 today" },
];

export default function WhatsAppBotPage() {
  const [flows, setFlows] = useState(botFlows);
  const [isBuilderOpen, setIsBuilderOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("bots");
  const [newMessage, setNewMessage] = useState("");

  const toggleBot = (id: number) => {
    setFlows((prev) =>
      prev.map((f) => (f.id === id ? { ...f, active: !f.active } : f))
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold flex items-center gap-3">
            <Bot className="w-8 h-8 text-primary" />
            WhatsApp Bot
          </h1>
          <p className="text-muted-foreground mt-1">
            Automate conversations, capture leads, and create tickets
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Settings className="w-4 h-4" />
            Settings
          </Button>
          <Dialog open={isBuilderOpen} onOpenChange={setIsBuilderOpen}>
            <DialogTrigger asChild>
              <Button variant="gradient" className="gap-2">
                <Plus className="w-4 h-4" />
                Create Bot Flow
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Bot className="w-5 h-5 text-primary" />
                  Create Bot Flow
                </DialogTitle>
                <DialogDescription>
                  Design your conversational flow with triggers, messages, and actions
                </DialogDescription>
              </DialogHeader>

              <Tabs defaultValue="flow" className="mt-4">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="flow">Flow Builder</TabsTrigger>
                  <TabsTrigger value="messages">Messages</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>

                <TabsContent value="flow" className="space-y-4 mt-4">
                  {/* Flow Name */}
                  <div className="space-y-2">
                    <Label>Flow Name</Label>
                    <Input placeholder="e.g., Lead Capture Bot" />
                  </div>

                  {/* Trigger Selection */}
                  <div className="space-y-2">
                    <Label>Trigger</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select trigger..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="keyword">Keyword Match</SelectItem>
                        <SelectItem value="first_message">First Message</SelectItem>
                        <SelectItem value="business_hours">Outside Business Hours</SelectItem>
                        <SelectItem value="ai_intent">AI Intent Detection</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Visual Flow Builder */}
                  <div className="p-6 bg-muted/30 rounded-xl border border-border min-h-[300px]">
                    <div className="flex flex-col items-center gap-4">
                      {flowNodes.map((node, index) => (
                        <motion.div
                          key={node.id}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.08 }}
                          className="flex flex-col items-center"
                        >
                          <div className={`flex items-center gap-3 px-4 py-3 rounded-xl border shadow-sm ${
                            node.type === "trigger" 
                              ? "bg-primary/10 border-primary" 
                              : node.type === "condition"
                              ? "bg-yellow-500/10 border-yellow-500/50"
                              : node.type === "handoff"
                              ? "bg-green-500/10 border-green-500/50"
                              : "bg-card border-border"
                          }`}>
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                              node.type === "trigger" 
                                ? "bg-primary text-primary-foreground" 
                                : node.type === "condition"
                                ? "bg-yellow-500 text-white"
                                : node.type === "handoff"
                                ? "bg-green-500 text-white"
                                : "bg-secondary text-secondary-foreground"
                            }`}>
                              <node.icon className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="text-xs text-muted-foreground uppercase">
                                {node.type}
                              </div>
                              <div className="font-medium">{node.label}</div>
                            </div>
                          </div>
                          {index < flowNodes.length - 1 && (
                            <div className="flex flex-col items-center">
                              <div className="w-0.5 h-4 bg-border" />
                              <ArrowRight className="w-4 h-4 text-muted-foreground rotate-90" />
                              <div className="w-0.5 h-4 bg-border" />
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Add Node Button */}
                  <div className="flex justify-center">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="gap-2">
                          <Plus className="w-4 h-4" />
                          Add Node
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem className="gap-2">
                          <Send className="w-4 h-4" /> Send Message
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-2">
                          <User className="w-4 h-4" /> Collect Input
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-2">
                          <Zap className="w-4 h-4" /> Condition
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-2">
                          <Users className="w-4 h-4" /> Create Lead
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-2">
                          <Ticket className="w-4 h-4" /> Create Ticket
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-2">
                          <Phone className="w-4 h-4" /> Human Handoff
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TabsContent>

                <TabsContent value="messages" className="space-y-4 mt-4">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Welcome Message</Label>
                      <Textarea
                        placeholder="👋 Welcome! How can I help you today?"
                        className="min-h-[100px]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Fallback Message</Label>
                      <Textarea
                        placeholder="I didn't quite understand that. Please choose from the options above."
                        className="min-h-[80px]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Handoff Message</Label>
                      <Textarea
                        placeholder="Let me connect you with a human agent. Please wait..."
                        className="min-h-[80px]"
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="settings" className="space-y-4 mt-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div>
                        <div className="font-medium">Enable AI Responses</div>
                        <div className="text-sm text-muted-foreground">
                          Use AI to understand and respond to messages
                        </div>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div>
                        <div className="font-medium">Auto Human Handoff</div>
                        <div className="text-sm text-muted-foreground">
                          Transfer to agent after 3 failed attempts
                        </div>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div>
                        <div className="font-medium">Business Hours Only</div>
                        <div className="text-sm text-muted-foreground">
                          Only respond during business hours
                        </div>
                      </div>
                      <Switch />
                    </div>
                    <div className="space-y-2">
                      <Label>Response Delay (seconds)</Label>
                      <Input type="number" defaultValue="2" className="w-32" />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="flex justify-end gap-3 pt-4 border-t border-border mt-4">
                <Button variant="outline" onClick={() => setIsBuilderOpen(false)}>
                  Cancel
                </Button>
                <Button variant="gradient">Create Bot Flow</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
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
                  <p className="text-xs text-green-500 mt-1">{stat.trend}</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList>
          <TabsTrigger value="bots" className="gap-2">
            <Bot className="w-4 h-4" />
            Bot Flows
          </TabsTrigger>
          <TabsTrigger value="preview" className="gap-2">
            <Smartphone className="w-4 h-4" />
            Live Preview
          </TabsTrigger>
          <TabsTrigger value="analytics" className="gap-2">
            <TrendingUp className="w-4 h-4" />
            Analytics
          </TabsTrigger>
        </TabsList>

        <TabsContent value="bots" className="mt-6 space-y-4">
          {flows.map((flow, index) => (
            <motion.div
              key={flow.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className={`bg-card border-border ${!flow.active ? "opacity-60" : ""}`}>
                <CardContent className="p-5">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                    {/* Bot Info */}
                    <div className="flex-1">
                      <div className="flex items-start gap-3">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          flow.active ? "bg-green-500/10 text-green-500" : "bg-muted text-muted-foreground"
                        }`}>
                          <Bot className="w-6 h-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{flow.name}</h3>
                            <Badge variant={flow.active ? "new" : "secondary"}>
                              {flow.active ? "Active" : "Paused"}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mt-0.5">
                            {flow.description}
                          </p>
                          <Badge variant="outline" className="mt-2 text-xs">
                            <Zap className="w-3 h-3 mr-1" />
                            {flow.trigger}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <div className="text-lg font-bold">{flow.conversations.toLocaleString()}</div>
                        <div className="text-xs text-muted-foreground">Conversations</div>
                      </div>
                      {flow.leadsCollected > 0 && (
                        <div className="text-center">
                          <div className="text-lg font-bold text-primary">{flow.leadsCollected}</div>
                          <div className="text-xs text-muted-foreground">Leads</div>
                        </div>
                      )}
                      {flow.ticketsCreated && (
                        <div className="text-center">
                          <div className="text-lg font-bold text-primary">{flow.ticketsCreated}</div>
                          <div className="text-xs text-muted-foreground">Tickets</div>
                        </div>
                      )}
                      <div className="text-sm text-muted-foreground">
                        Last active: {flow.lastActive}
                      </div>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center gap-2">
                      <Switch
                        checked={flow.active}
                        onCheckedChange={() => toggleBot(flow.id)}
                      />
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem className="gap-2">
                            <Edit className="w-4 h-4" /> Edit Flow
                          </DropdownMenuItem>
                          <DropdownMenuItem className="gap-2">
                            <Copy className="w-4 h-4" /> Duplicate
                          </DropdownMenuItem>
                          <DropdownMenuItem className="gap-2">
                            <RefreshCw className="w-4 h-4" /> Reset Stats
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="gap-2 text-destructive">
                            <Trash2 className="w-4 h-4" /> Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </TabsContent>

        <TabsContent value="preview" className="mt-6">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Phone Preview */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-primary" />
                  WhatsApp Preview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-[#0B141A] rounded-2xl overflow-hidden shadow-2xl max-w-sm mx-auto">
                  {/* WhatsApp Header */}
                  <div className="bg-[#1F2C34] px-4 py-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-medium">Zivux Bot</div>
                      <div className="text-xs text-green-400">online</div>
                    </div>
                    <Phone className="w-5 h-5 text-gray-400" />
                  </div>

                  {/* Chat Messages */}
                  <div className="h-96 overflow-y-auto p-4 space-y-3 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-cover">
                    {chatPreview.map((msg, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15 }}
                        className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[80%] px-3 py-2 rounded-lg text-sm ${
                            msg.type === "user"
                              ? "bg-[#005C4B] text-white rounded-tr-none"
                              : "bg-[#1F2C34] text-white rounded-tl-none"
                          }`}
                        >
                          <div className="whitespace-pre-line">{msg.message}</div>
                          <div className="text-[10px] text-gray-400 mt-1 text-right">
                            {msg.time}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Input Area */}
                  <div className="bg-[#1F2C34] px-4 py-3 flex items-center gap-3">
                    <Input
                      placeholder="Type a message"
                      className="bg-[#2A3942] border-none text-white placeholder:text-gray-400"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <Button size="icon" className="rounded-full bg-[#00A884] hover:bg-[#00A884]/90">
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Connection Status */}
            <div className="space-y-4">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Globe className="w-5 h-5 text-primary" />
                    Connection Status
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      </div>
                      <div>
                        <div className="font-medium text-green-500">Connected</div>
                        <div className="text-sm text-muted-foreground">WhatsApp Business API</div>
                      </div>
                    </div>
                    <Badge variant="new">Live</Badge>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Phone Number</span>
                      <span className="font-medium">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Provider</span>
                      <span className="font-medium">360dialog</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Messages Today</span>
                      <span className="font-medium">1,247</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Uptime</span>
                      <span className="font-medium text-green-500">99.9%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="gap-2 h-auto py-3 flex-col">
                    <MessageSquare className="w-5 h-5" />
                    <span className="text-xs">Send Broadcast</span>
                  </Button>
                  <Button variant="outline" className="gap-2 h-auto py-3 flex-col">
                    <Users className="w-5 h-5" />
                    <span className="text-xs">Manage Contacts</span>
                  </Button>
                  <Button variant="outline" className="gap-2 h-auto py-3 flex-col">
                    <Clock className="w-5 h-5" />
                    <span className="text-xs">Schedule Message</span>
                  </Button>
                  <Button variant="outline" className="gap-2 h-auto py-3 flex-col">
                    <Settings className="w-5 h-5" />
                    <span className="text-xs">API Settings</span>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="mt-6">
          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2 bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg">Conversation Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <TrendingUp className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>Analytics chart will be displayed here</p>
                    <p className="text-sm mt-1">Connect to backend to view real data</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg">Top Intents</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { intent: "Pricing Inquiry", count: 324, pct: 28 },
                  { intent: "Support Request", count: 287, pct: 25 },
                  { intent: "Product Info", count: 198, pct: 17 },
                  { intent: "Demo Request", count: 156, pct: 14 },
                  { intent: "Other", count: 182, pct: 16 },
                ].map((item) => (
                  <div key={item.intent} className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span>{item.intent}</span>
                      <span className="text-muted-foreground">{item.count}</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.pct}%` }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
