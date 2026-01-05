"use client";

import { Badge } from "@/components/ui/badge";

export default function ApiReference() {
  return (
    <div className="container py-20">
      <Badge className="mb-4">API Reference</Badge>

      <h1 className="text-4xl font-bold mb-4 gradient-text">
        Zivux.ai API
      </h1>

      <p className="text-muted-foreground max-w-3xl mb-10">
        Integrate Zivux.ai with your systems using our secure REST APIs.
      </p>

      <div className="space-y-6">
        {[
          { method: "POST", path: "/api/leads", desc: "Create new lead" },
          { method: "GET", path: "/api/leads", desc: "Fetch leads" },
          { method: "POST", path: "/api/tickets", desc: "Create ticket" },
          { method: "GET", path: "/api/conversations", desc: "Get messages" },
        ].map((api) => (
          <div
            key={api.path}
            className="bg-card border border-border rounded-xl p-6"
          >
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 text-xs rounded bg-primary text-primary-foreground">
                {api.method}
              </span>
              <code className="text-sm">{api.path}</code>
            </div>
            <p className="text-muted-foreground mt-2">{api.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
