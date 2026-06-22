import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { blogs } from "@/data/blogs";
import blogHero from "@/assets/blog_hero.webp";

export const Route = createFileRoute("/blog/")({
  head: () => ({ meta: [{ title: "Blog — Landedge Group" }, { name: "description", content: "Insights on land investment, RERA & JDA approval, and smart real estate decisions." }] }),
  component: Blog,
});

function Blog() {
  return (
    <Layout>
      <PageHero image={blogHero} title="Blog" />
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((b) => (
            <article key={b.slug} className="bg-background border border-border rounded-md overflow-hidden flex flex-col h-full">
              <img src={b.image} alt={b.title} loading="lazy" className="w-full h-48 object-cover shrink-0" />
              <div className="p-5 flex flex-col flex-grow">
                <p className="text-xs text-muted-foreground mb-2">{b.date}</p>
                <h3 className="font-bold mb-2">{b.title}</h3>
                <p className="text-sm text-foreground/80 mb-4 line-clamp-3">{b.excerpt}</p>
                <div className="mt-auto pt-2">
                  <Link to="/blog/$slug" params={{ slug: b.slug }} className="inline-block border border-brand text-brand font-semibold rounded-full px-5 py-1.5 text-xs hover:bg-brand hover:text-white">
                    Read More
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
