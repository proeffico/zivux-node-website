"use client";

import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export default function HelpCenter() {
  return (
    <div className="container py-20">
      <Badge className="mb-4">Help Center</Badge>

      <h1 className="text-4xl font-bold mb-6 gradient-text">
        How can we help?
      </h1>

      <Input
        placeholder="Search articles, guides, or FAQs..."
        className="max-w-xl mb-10"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          "Account & Billing",
          "WhatsApp Issues",
          "CRM Setup",
          "Automation Help",
          "User Management",
          "Reports & Analytics",
        ].map((topic) => (
          <div
            key={topic}
            className="bg-card border border-border rounded-xl p-6 hover:shadow-card-hover transition"
          >
            <h3 className="font-semibold">{topic}</h3>
            <p className="text-sm text-muted-foreground mt-2">
              FAQs and troubleshooting articles.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
