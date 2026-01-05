"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const categories = [
    "All",
    "CRM",
    "WhatsApp",
    "Automation",
    "Sales",
    "Support",
    "Product Updates",
];

const blogs = [
    {
        id: 1,
        title: "How Omnichannel CRM Improves Lead Conversion by 40%",
        excerpt:
            "Discover how businesses using omnichannel CRM platforms like Zivux.ai close deals faster by centralizing conversations.",
        image: "/blog/omnichannel-crm.jpg",
        category: "CRM",
        date: "Jan 10, 2026",
        slug: "omnichannel-crm-lead-conversion",
    },
    {
        id: 2,
        title: "WhatsApp Automation: The Future of Customer Support",
        excerpt:
            "Learn how WhatsApp bots and workflow automation reduce response time and improve CSAT.",
        image: "/blog/whatsapp-automation.jpg",
        category: "WhatsApp",
        date: "Jan 05, 2026",
        slug: "whatsapp-automation-support",
    },
    {
        id: 3,
        title: "Designing SLA Workflows for High-Volume Support Teams",
        excerpt:
            "A step-by-step guide to building SLA-driven ticket systems with real-time escalation.",
        image: "/blog/sla-workflows.jpg",
        category: "Support",
        date: "Dec 28, 2025",
        slug: "sla-workflows-support",
    },
];

export default function BlogPage() {
    return (
        <div className="relative overflow-hidden">

            {/* HERO */}
            <section className="py-28 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="space-y-6"
                >
                    <Badge>Insights & Resources</Badge>

                    <h1 className="text-4xl md:text-6xl font-extrabold gradient-text">
                        Zivux.ai Blog
                    </h1>

                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Learn about CRM best practices, WhatsApp automation, sales workflows,
                        and customer experience strategies from industry experts.
                    </p>
                </motion.div>
            </section>

            {/* CATEGORY FILTER */}
            <section className="sticky top-16 z-20 bg-background/80 backdrop-blur border-y border-border">
                <div className="container mx-auto px-4 py-4 flex gap-3 overflow-x-auto">
                    {categories.map((cat) => (
                        <Button
                            key={cat}
                            variant="outline"
                            className="rounded-full whitespace-nowrap"
                        >
                            {cat}
                        </Button>
                    ))}
                </div>
            </section>

            {/* BLOG GRID */}
            <section className="container mx-auto px-4 py-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {blogs.map((blog, index) => (
                        <motion.article
                            key={blog.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="group bg-card border border-border rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />

                            </div>

                            <div className="p-6 space-y-4">
                                <div className="flex items-center justify-between">
                                    <Badge variant="secondary">{blog.category}</Badge>
                                    <span className="text-xs text-muted-foreground">
                                        {blog.date}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold leading-snug">
                                    {blog.title}
                                </h3>

                                <p className="text-sm text-muted-foreground">
                                    {blog.excerpt}
                                </p>

                                <Link
                                    to={`/blog/${blog.slug}`}
                                    className="inline-flex items-center text-sm font-semibold text-primary hover:underline"
                                >
                                    Read More →
                                </Link>
                            </div>
                        </motion.article>
                    ))}

                </div>

                {/* PAGINATION */}
                <div className="flex justify-center mt-20">
                    <Button variant="outline">Load More</Button>
                </div>
            </section>

        </div>
    );
}
