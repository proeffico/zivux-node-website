import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const coreValues = [
  { title: "Customer Centricity", desc: "We design solutions by deeply understanding customer challenges and outcomes." },
  { title: "Ownership & Commitment", desc: "We take complete ownership of every engagement we undertake." },
  { title: "Problem Solving Mindset", desc: "We break down complex business problems into scalable digital solutions." },
  { title: "Data-Driven Decisions", desc: "Every strategy we build is backed by analytics and measurable impact." },
  { title: "Leadership by Example", desc: "We lead through expertise, accountability, and transparency." },
  { title: "Agility & Adaptability", desc: "We embrace change, iterate fast, and continuously improve." },
];

const stats = [
  { value: "25+", label: "Enterprise Clients" },
  { value: "20+", label: "Successful Implementations" },
  { value: "40+", label: "Technology Experts" },
  { value: "30+", label: "Long-term Customers" },
  { value: "100%", label: "Delivery Commitment" },
];

const advisors = [
  "Dr. Sanjay Tripathi – Director of Product Design & UX, TCS",
  "Ramandeep Singh Ahluwalia – Director of Software Development, Amazon",
  "Nitin Garg – Strategic Partnerships Leader",
  "Mayank Gupta – Chief Marketing Officer",
  "Pooja Chawla – Strategic Communications Consultant",
  "Purva Mehta – Legal Advisor",
];

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">

      {/* HERO */}
      <section className="relative py-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <Badge variant="new" className="mb-6 px-4 py-1.5">
            About Proeffico
          </Badge>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 gradient-text">
            Building Intelligent Digital Ecosystems for Businesses
          </h1>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Proeffico is a technology consulting and product company focused on
            enabling businesses to scale through intelligent automation,
            data-driven insights, and cloud-first platforms.
          </p>
        </motion.div>
      </section>

      {/* COMPANY STORY */}
      <section className="py-20 container mx-auto px-4 max-w-5xl space-y-10">
        {[
          {
            title: "Who We Are",
            text: "Proeffico partners with growing and enterprise businesses to design, build, and scale digital platforms that improve operational efficiency, customer experience, and decision-making."
          },
          {
            title: "Our Mission",
            text: "To democratize enterprise-grade technology adoption for MSMEs and fast-growing organizations through practical, scalable, and secure digital solutions."
          },
          {
            title: "Our Vision",
            text: "To create a digitally connected ecosystem where businesses leverage technology not just to operate, but to innovate and lead."
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
          >
            <h2 className="text-3xl font-bold mb-3 gradient-text">
              {item.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {item.text}
            </p>
          </motion.div>
        ))}
      </section>

      {/* FOUNDER SECTION */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-card"
          >
            <img
              src="/images/founder.jpg" // replace later
              alt="Founder"
              className="w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <Badge variant="new">Founder & Leadership</Badge>
            <h2 className="text-3xl font-bold gradient-text">
              Leadership with Purpose
            </h2>
            <p className="text-muted-foreground">
              Proeffico was founded with a vision to simplify enterprise
              technology and make digital transformation practical, scalable,
              and outcome-driven.
            </p>
            <p className="font-semibold">
              — Founder, Proeffico Solutions Pvt Ltd
            </p>
          </motion.div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
            Our Core Values
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {coreValues.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ translateY: -6 }}
                className="p-6 bg-card rounded-2xl border shadow-card"
              >
                <h3 className="font-semibold mb-2 gradient-text">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
          Our Journey
        </h2>

        {[
          { year: "2019", text: "Founded with a focus on consulting and digital transformation." },
          { year: "2020", text: "Expanded into cloud platforms and enterprise integrations." },
          { year: "2021", text: "Launched CRM & workflow automation solutions." },
          { year: "2022", text: "Scaled WhatsApp automation & analytics platforms." },
          { year: "2023+", text: "Building AI-powered enterprise systems." },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex gap-6 mb-6"
          >
            <div className="font-bold gradient-text w-24">{item.year}</div>
            <div className="bg-card p-5 rounded-xl shadow-card flex-1">
              {item.text}
            </div>
          </motion.div>
        ))}
      </section>

      {/* MEDIA */}
      <section className="py-20 bg-muted/30 text-center">
        <h2 className="text-3xl font-bold mb-10 gradient-text">
          Media & Recognition
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 container mx-auto px-4">
          {["/images/media1.png", "/images/media2.png", "/images/media3.png", "/images/media4.png"].map((logo, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="bg-card p-6 rounded-xl shadow-card"
            >
              <img src={logo} alt="Media" className="mx-auto h-10" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ADVISORS */}
      <section className="py-20 container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 gradient-text">
          Advisory Board
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {advisors.map((advisor, i) => (
            <motion.div
              key={i}
              whileHover={{ translateY: -6 }}
              className="p-6 bg-card rounded-2xl border shadow-card"
            >
              {advisor}
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
