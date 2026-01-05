"use client";

import { Badge } from "@/components/ui/badge";

export default function Documentation() {
  return (
    <div className="container py-20">
      <Badge className="mb-4">Documentation</Badge>

      <h1 className="text-4xl font-bold mb-4 gradient-text">
        Zivux.ai Documentation
      </h1>

      <p className="text-muted-foreground max-w-3xl mb-10">
        Learn how to configure, customize, and scale Zivux.ai for your business.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          "Getting Started",
          "Leads & CRM",
          "WhatsApp Integration",
          "Workflows & Automation",
          "Tickets & SLA",
          "User Roles & Permissions",
        ].map((item) => (
          <div
            key={item}
            className="bg-card border border-border rounded-xl p-6 hover:shadow-card-hover transition"
          >
            <h3 className="font-semibold text-lg">{item}</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Step-by-step guides and best practices.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
