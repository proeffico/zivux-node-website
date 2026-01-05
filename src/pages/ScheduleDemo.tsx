"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ScheduleDemo() {
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
                    <Badge className="mb-6 px-4 py-1.5">
                        Schedule a Demo
                    </Badge>

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

            {/* FORM SECTION */}
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
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-card border border-border rounded-3xl p-8 shadow-card space-y-6"
                        onSubmit={(e) => {
                            e.preventDefault();
                            // TODO: Hook API / Email / CRM submission
                            alert("Demo request submitted!");
                        }}
                    >
                        <h3 className="text-2xl font-bold gradient-text">
                            Book Your Demo
                        </h3>

                        <div className="grid sm:grid-cols-2 gap-4">
                            <Input required placeholder="Full Name" />
                            <Input required type="email" placeholder="Work Email" />
                        </div>

                        <Input placeholder="Company Name" />
                        <Input placeholder="Phone Number" />

                        <Textarea
                            placeholder="Tell us about your use case (optional)"
                            rows={4}
                        />

                        <Button className="w-full text-lg py-6">
                            Schedule Demo
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
