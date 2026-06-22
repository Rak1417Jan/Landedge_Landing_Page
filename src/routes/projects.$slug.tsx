import { createFileRoute, notFound } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { findProject } from "@/data/projects";
import investment from "@/assets/investment-graphic.jpg";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = findProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.project.name ?? "Project"} — Landedge` },
      { name: "description", content: loaderData?.project.tagline ?? "" },
    ],
  }),
  component: Detail,
  notFoundComponent: () => (
    <Layout>
      <div className="py-32 text-center">
        <h1 className="text-4xl font-bold">Project not found</h1>
      </div>
    </Layout>
  ),
});

function Detail() {
  const { project } = Route.useLoaderData();

  return (
    <Layout>
      {/* tagline strip */}
      <section className="py-6 border-b border-border">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-sm md:text-base">{project.tagline}</p>
        </div>
      </section>

      {/* Hero with overlay caption */}
      <section className="relative w-full">
        <img src={project.image} alt={project.name} className="w-full h-[280px] md:h-[420px] object-cover" />
        <div className="absolute left-4 md:left-12 top-8 max-w-xs bg-[#e7e0c8]/95 p-4 rounded">
          <p className="text-sm">
            <span className="font-bold">{project.tagline.split(",")[0]}, </span>
            <span className="text-brand">{project.tagline.split(",").slice(1).join(",")}</span>
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-10">
        <div className="mx-auto max-w-5xl px-4 space-y-6 text-sm leading-relaxed">
          <div>
            <h2 className="font-bold mb-2">Welcome to {project.name} by Landedge</h2>
            <p>{project.description}</p>
          </div>

          <div>
            <p className="font-bold mb-1">💰 Affordable Investment, Strong Future Growth</p>
            <p>{project.name} offers budget-friendly plot options, making it easy to invest in real estate with low initial cost. Compared to constructed properties, plots provide better flexibility and higher appreciation potential. With rapid development in the surrounding area, property values are expected to increase steadily—making it a smart long-term investment.</p>
          </div>

          <div>
            <p className="font-bold mb-1">🏡 Freedom to Build Your Dream Home</p>
            <p>At {project.name}, you get the complete freedom to design and build your home as per your needs and lifestyle.</p>
            <ul className="space-y-1 mt-2">
              <li>✓ Build at your own pace</li>
              <li>✓ Choose your own design</li>
              <li>✓ No construction pressure</li>
            </ul>
          </div>

          <div>
            <p className="font-bold mb-1">📍 Prime Location Benefits</p>
            <p>{project.name} is strategically located in a developing area with growing infrastructure and good connectivity.</p>
            <ul className="space-y-1 mt-2">
              <li>✓ Easy access to main roads</li>
              <li>✓ Nearby schools, markets & daily essentials</li>
              <li>✓ Peaceful environment with future growth potential</li>
            </ul>
          </div>

          <div>
            <p className="font-bold mb-1">🛡️ Safe & Secure Investment</p>
            <ul className="space-y-1.5 mt-2">
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-sm bg-brand text-white text-[10px] flex items-center justify-center shrink-0">✓</span>
                <span>{project.approved}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-sm bg-brand text-white text-[10px] flex items-center justify-center shrink-0">✓</span>
                <span>Clear Legal Documentation</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-sm bg-brand text-white text-[10px] flex items-center justify-center shrink-0">✓</span>
                <span>Transparent Process</span>
              </li>
            </ul>
            <p className="mt-2.5">Invest with confidence knowing your property is secure and legally verified.</p>
          </div>

          <div>
            <p className="font-bold mb-1">🛠️ Easy & Hassle-Free Ownership</p>
            <p>Owning a plot in {project.name} is simple and stress-free. With low maintenance and no urgency to build, you can hold your property and benefit from long-term appreciation.</p>
          </div>

          <div>
            <p className="font-bold mb-1">📞 Book Your Plot Today</p>
            <p>Take the first step towards your dream property with {project.name}.</p>
          </div>
        </div>
      </section>

      {/* Investment image */}
      <section>
        <img src={investment} alt="Investment" className="w-full max-h-[500px] object-cover" loading="lazy" />
      </section>

      {/* Bottom body */}
      <section className="py-10">
        <div className="mx-auto max-w-5xl px-4 space-y-6 text-sm leading-relaxed">
          <div>
            <p className="font-bold mb-1">Lower Investment, Higher Growth Potential</p>
            <p>Plots offer a lower entry cost compared to constructed properties like flats or villas. With Landedge, you can invest in premium land at competitive prices without the burden of construction costs.</p>
            <p className="mt-2">Despite the lower initial investment, land often delivers strong long-term appreciation. This makes plot investment an ideal choice for first-time investors as well as those looking for high ROI opportunities.</p>
          </div>
          <div>
            <p className="font-bold mb-1">Flexible Usage for Every Need</p>
            <p>One of the biggest advantages of owning a plot is flexibility. You have the freedom to build according to your needs—whether it's a residential home, a commercial space, or a future investment project.</p>
          </div>
          <div>
            <p className="font-bold mb-1">High Demand in Growing Locations</p>
            <p>Landedge offers plots in rapidly developing areas where infrastructure and connectivity are continuously improving. As these locations grow, the demand for land increases significantly.</p>
          </div>
          <div>
            <p className="font-bold mb-1">Hassle-Free Ownership & Low Maintenance</p>
            <p>Owning a plot is simple and stress-free compared to managing constructed properties. There are no maintenance costs, no tenant issues, and no ongoing upkeep expenses.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
