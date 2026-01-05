"use client";

import { Badge } from "@/components/ui/badge";

export default function Status() {
  return (
    <div className="container py-20 text-center">
      <Badge className="mb-4 bg-success text-success-foreground">
        All Systems Operational
      </Badge>

      <h1 className="text-4xl font-bold mb-6 gradient-text">
        Zivux.ai System Status
      </h1>

      <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
        Real-time status and uptime information for Zivux.ai services.
      </p>

      <div className="max-w-3xl mx-auto space-y-4">
        {[
          "CRM Dashboard",
          "WhatsApp API",
          "Automation Engine",
          "Reporting Services",
          "Authentication",
        ].map((service) => (
          <div
            key={service}
            className="flex justify-between items-center bg-card border border-border rounded-xl p-4"
          >
            <span>{service}</span>
            <span className="text-success font-medium">Operational</span>
          </div>
        ))}
      </div>
    </div>
  );
}
