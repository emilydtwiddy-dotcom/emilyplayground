import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import ProjectCard from "@/components/ProjectCard";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Emily Twiddy`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const related = projects.filter((_, i) => i !== currentIndex).slice(0, 2);

  return (
    <div>
      {/* Back */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-10">
        <FadeIn>
          <Link
            href="/projects"
            className="text-sm hover:opacity-60 transition-opacity inline-flex items-center gap-1"
            style={{ color: "var(--muted)" }}
          >
            ← All Work
          </Link>
        </FadeIn>
      </div>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 pt-10 pb-14 md:pb-20">
        <FadeIn>
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span
              className="text-xs px-2.5 py-1 rounded-full"
              style={{ background: "var(--surface)", color: "var(--muted)" }}
            >
              {project.category}
            </span>
            <span
              className="text-xs px-2.5 py-1 rounded-full"
              style={{ background: "var(--surface)", color: "var(--muted)" }}
            >
              {project.year}
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h1
            className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight mb-6"
            style={{ letterSpacing: "-0.03em", maxWidth: "18ch" }}
          >
            {project.title}
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p
            className="text-base md:text-lg leading-relaxed max-w-2xl"
            style={{ color: "var(--muted)" }}
          >
            {project.longDescription}
          </p>
        </FadeIn>

        {(project.liveUrl || project.githubUrl) && (
          <FadeIn delay={0.15}>
            <div className="flex gap-4 mt-8">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-4 py-2 rounded-full transition-opacity hover:opacity-70"
                  style={{ background: "var(--foreground)", color: "var(--background)" }}
                >
                  Live Site ↗
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-4 py-2 rounded-full transition-opacity hover:opacity-70"
                  style={{ border: "1px solid var(--border)", color: "var(--foreground)" }}
                >
                  GitHub ↗
                </a>
              )}
            </div>
          </FadeIn>
        )}
      </section>

      {/* Cover image */}
      <FadeIn delay={0.1}>
        <div
          className="w-full aspect-[16/7] md:aspect-[16/6]"
          style={{ background: project.accentColor }}
        />
      </FadeIn>

      {/* Tags + body */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12 md:gap-20">
          {/* Sidebar */}
          <FadeIn delay={0.05}>
            <div className="space-y-8">
              <div>
                <p
                  className="text-xs uppercase tracking-widest mb-3"
                  style={{ color: "var(--muted)" }}
                >
                  Disciplines
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{ background: "var(--surface)", color: "var(--muted)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p
                  className="text-xs uppercase tracking-widest mb-1.5"
                  style={{ color: "var(--muted)" }}
                >
                  Year
                </p>
                <p className="text-sm">{project.year}</p>
              </div>
              <div>
                <p
                  className="text-xs uppercase tracking-widest mb-1.5"
                  style={{ color: "var(--muted)" }}
                >
                  Category
                </p>
                <p className="text-sm">{project.category}</p>
              </div>
            </div>
          </FadeIn>

          {/* Sections */}
          <div className="space-y-14">
            {project.sections.map((section, i) => (
              <FadeIn key={i} delay={0.07 + i * 0.05}>
                <div
                  className="pb-14"
                  style={{
                    borderBottom:
                      i < project.sections.length - 1
                        ? "1px solid var(--border)"
                        : "none",
                  }}
                >
                  <h2
                    className="text-xs uppercase tracking-widest mb-5"
                    style={{ color: "var(--muted)" }}
                  >
                    {section.heading}
                  </h2>
                  <p className="text-base md:text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
                    {section.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* Secondary image blocks */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 pb-16 grid grid-cols-2 gap-4">
        <FadeIn>
          <div
            className="w-full aspect-square rounded-xl"
            style={{ background: project.accentColor, opacity: 0.6 }}
          />
        </FadeIn>
        <FadeIn delay={0.05}>
          <div
            className="w-full aspect-square rounded-xl"
            style={{ background: project.accentColor, opacity: 0.35 }}
          />
        </FadeIn>
      </div>

      {/* Related */}
      <div style={{ borderTop: "1px solid var(--border)" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
          <FadeIn>
            <h2
              className="text-xs uppercase tracking-widest mb-10"
              style={{ color: "var(--muted)" }}
            >
              More Projects
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {related.map((p, i) => (
              <FadeIn key={p.slug} delay={i * 0.07}>
                <ProjectCard project={p} />
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
