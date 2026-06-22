import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { ChevronDown } from "lucide-react";
import faqHero from "@/assets/faq_hero.webp";

const faqs = [
  { q: "Are your plots RERA and JDA approved?", a: "Yes, all our projects are RERA registered and JDA approved with full legal documentation." },
  { q: "What is the booking process?", a: "You can book a plot by visiting our office, paying the booking amount, and signing the booking form. Our team will guide you through every step." },
  { q: "Do you offer loan assistance?", a: "Yes, we work with leading banks to help our customers get plot loans easily." },
  { q: "Can NRIs invest in Landedge plots?", a: "Yes, NRIs can invest in our plots. We provide complete documentation support for NRI customers." },
  { q: "What are the payment options?", a: "We offer flexible payment plans including down payment, installments, and full payment options with attractive discounts." },
];

export const Route = createFileRoute("/faq")({
  head: () => ({ meta: [{ title: "FAQ — Landedge Group" }, { name: "description", content: "Frequently asked questions about Landedge plots and services." }] }),
  component: FAQ,
});

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Layout>
      <PageHero image={faqHero} title="FAQ" />
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="border border-border rounded-md">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left font-semibold"
              >
                <span>{f.q}</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-sm text-foreground/80 leading-relaxed">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
