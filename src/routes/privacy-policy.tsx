import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import aerial from "@/assets/aerial-plots.jpg";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({ meta: [{ title: "Privacy Policy — Landedge Group" }, { name: "description", content: "Landedge Group privacy policy." }] }),
  component: Privacy,
});

function Privacy() {
  return (
    <Layout>
      <PageHero image={aerial} title="Privacy Policy" />
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 prose prose-sm">
          <h2 className="text-xl font-bold mt-6">1. Information We Collect</h2>
          <p className="text-sm text-foreground/80">We collect information you provide directly to us, such as when you fill out a contact form, request a callback, or sign up for our newsletter.</p>
          <h2 className="text-xl font-bold mt-6">2. How We Use Your Information</h2>
          <p className="text-sm text-foreground/80">We use the information to provide, maintain, and improve our services, respond to your inquiries, and communicate with you about properties and offers.</p>
          <h2 className="text-xl font-bold mt-6">3. Sharing of Information</h2>
          <p className="text-sm text-foreground/80">We do not sell your personal information. We may share it with trusted partners who assist us in operating our business under strict confidentiality agreements.</p>
          <h2 className="text-xl font-bold mt-6">4. Contact</h2>
          <p className="text-sm text-foreground/80">For any privacy-related questions, contact us at Landedgesolution@gmail.com.</p>
        </div>
      </section>
    </Layout>
  );
}
