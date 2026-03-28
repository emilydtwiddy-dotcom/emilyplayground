import { projects } from "@/lib/data";
import FadeIn from "@/components/FadeIn";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
  title: "Work — Emily Twiddy",
  description: "Selected projects across branding, product design, and editorial.",
};

export default function ProjectsPage() {
  const categories = Array.from(new Set(projects.map((p) => p.category)));

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
      {/* Header */}
      <FadeIn>
        <div className="mb-16 md:mb-20">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--muted)" }}>
            Work
          </p>
          <h1
            className="text-3xl md:text-5xl font-normal tracking-tight"
            style={{ letterSpacing: "-0.025em" }}
          >
            Selected Projects
          </h1>
        </div>
      </FadeIn>

      {/* Category filter row */}
      <FadeIn delay={0.05}>
        <div className="flex flex-wrap gap-2 mb-12 pb-8" style={{ borderBottom: "1px solid var(--border)" }}>
          <span
            className="text-xs px-3 py-1.5 rounded-full"
            style={{ background: "var(--foreground)", color: "var(--background)" }}
          >
            All
          </span>
          {categories.map((cat) => (
            <span
              key={cat}
              className="text-xs px-3 py-1.5 rounded-full cursor-pointer hover:opacity-70 transition-opacity"
              style={{ border: "1px solid var(--border)", color: "var(--muted)" }}
            >
              {cat}
            </span>
          ))}
        </div>
      </FadeIn>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, i) => (
          <FadeIn key={project.slug} delay={i * 0.05}>
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>

      {/* Stats row */}
      <FadeIn delay={0.2}>
        <div
          className="mt-24 pt-10 grid grid-cols-2 md:grid-cols-4 gap-8"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          {[
            { label: "Projects", value: `${projects.length}+` },
            { label: "Years Active", value: "15" },
            { label: "Categories", value: `${categories.length}` },
            { label: "Clients", value: "40+" },
          ].map(({ label, value }) => (
            <div key={label}>
              <p
                className="text-3xl md:text-4xl font-normal tracking-tight mb-1"
                style={{ letterSpacing: "-0.02em" }}
              >
                {value}
              </p>
              <p className="text-sm" style={{ color: "var(--muted)" }}>
                {label}
              </p>
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  );
}
