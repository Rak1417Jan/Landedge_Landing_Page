import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import contact from "@/assets/contact-hero.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Landedge Group" },
      { name: "description", content: "Get in touch with Landedge to start your real estate journey." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <Layout>
      <PageHero image={contact} title="Contact Us" height="h-[360px] md:h-[460px]" />

      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
            Let's Start Your Real Estate Journey Together !
          </h2>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            {[
              { label: "Full Name*", type: "text" },
              { label: "Your Email*", type: "email" },
              { label: "Mobile Number*", type: "tel" },
              { label: "Your City", type: "text" },
            ].map((f) => (
              <div key={f.label}>
                <input
                  type={f.type}
                  placeholder={f.label}
                  className="w-full border-2 border-foreground/80 px-5 py-4 text-lg outline-none focus:border-brand placeholder:text-foreground/80"
                />
              </div>
            ))}
            <label className="flex items-start gap-3 text-sm pt-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-foreground/80">
                I consent to Landedge Realty Contacting me via Call, SMS, WhatsApp, Email, or other suitable channels. I have read and accepted the <a className="text-brand">Terma and Conditions</a>
              </span>
            </label>
            <button
              type="submit"
              className="mt-4 bg-brand text-white font-semibold px-8 py-3 rounded-md hover:bg-brand-dark transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
