"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ScheduleDemo() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const form = e.currentTarget; // ✅ capture immediately
        const formData = new FormData(form);

        setLoading(true);
        setSuccess("");
        setError("");

        const payload = {
            branch_id: "proeffico",
            org_id: 7,
            entered_by: 7,
            customer_name: formData.get("name"),
            email: formData.get("email"),
            company_name: formData.get("company"),
            contact_no: formData.get("phone"),
            comments: formData.get("message"),
            status_id: 81,
            substatus_id: 39,
            priority: "Medium",
            type: 10, // demo request
        };

        try {
            const res = await fetch('https://api.zivux.ai/what-add-lead', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQxMCwiaWF0IjoxNzUxOTc1MTExfQ.ElI5Pe4uW3PDw2xWuTDZrykAonM4K9_3KpDwaspkTvw`,
                },
                body: JSON.stringify(payload),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.message || "Failed to submit demo request");

            setSuccess("✅ Demo request submitted! Our team will contact you shortly.");
            form.reset(); // ✅ safe reset
        } catch (err: any) {
            setError(err.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="relative overflow-hidden">

            {/* HERO */}
            <section className="relative py-28 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="relative z-10"
                >
                    <Badge className="mb-6 px-4 py-1.5">Schedule a Demo</Badge>

                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 gradient-text">
                        See Zivux.ai in Action
                    </h1>

                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Book a personalized demo to explore how Zivux.ai helps you manage
                        leads, WhatsApp conversations, workflows, and customer operations
                        from one powerful platform.
                    </p>
                </motion.div>

                {/* Background blobs */}
                <motion.div
                    className="absolute -top-24 -left-24 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 14, repeat: Infinity }}
                />
                <motion.div
                    className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 18, repeat: Infinity }}
                />
            </section>

            {/* FORM */}
            <section className="py-20 container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* LEFT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl font-bold gradient-text">
                            What you’ll see in the demo
                        </h2>

                        <ul className="space-y-4 text-muted-foreground">
                            <li>• Omnichannel lead capture (WhatsApp, Email, Facebook)</li>
                            <li>• Dynamic lead & ticket status workflows</li>
                            <li>• WhatsApp bot & automation use cases</li>
                            <li>• Role-based user & permission management</li>
                            <li>• Task, SLA, and ticket lifecycle management</li>
                        </ul>

                        <p className="text-sm text-muted-foreground">
                            The demo is tailored to your business needs and typically lasts
                            30–45 minutes.
                        </p>
                    </motion.div>

                    {/* DEMO FORM */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-card border border-border rounded-3xl p-8 shadow-card space-y-6"
                    >
                        <h3 className="text-2xl font-bold gradient-text">
                            Book Your Demo
                        </h3>

                        <div className="grid sm:grid-cols-2 gap-4">
                            <Input name="name" required placeholder="Full Name" />
                            <Input name="email" type="email" required placeholder="Work Email" />
                        </div>

                        <Input name="company" placeholder="Company Name" />
                        <Input name="phone" placeholder="Phone Number" />

                        <Textarea
                            name="message"
                            placeholder="Tell us about your use case (optional)"
                            rows={4}
                        />

                        {success && <p className="text-green-600">{success}</p>}
                        {error && <p className="text-red-600">{error}</p>}

                        <Button className="w-full text-lg py-6" disabled={loading}>
                            {loading ? "Submitting..." : "Schedule Demo"}
                        </Button>

                        <p className="text-xs text-muted-foreground text-center">
                            By submitting this form, you agree to our Terms & Privacy Policy.
                        </p>
                    </motion.form>
                </div>
            </section>
        </div>
    );
}
