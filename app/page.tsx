import Link from "next/link";
import { projects, resumeData } from "@/lib/data";
import FadeIn from "@/components/FadeIn";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 pt-24 pb-28 md:pt-36 md:pb-40">
        <FadeIn>
          <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>
            Designer & Creative Director
          </p>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-normal tracking-tight leading-none mb-8"
            style={{ letterSpacing: "-0.03em" }}
          >
            {resumeData.name}
          </h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p
            className="text-lg md:text-xl max-w-xl leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            {resumeData.bio}
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="flex items-center gap-4 mt-10">
            <Link
              href="/projects"
              className="text-sm px-5 py-2.5 rounded-full transition-opacity hover:opacity-70"
              style={{
                background: "var(--foreground)",
                color: "var(--background)",
              }}
            >
              View Work
            </Link>
            <Link
              href="/resume"
              className="text-sm px-5 py-2.5 rounded-full transition-opacity hover:opacity-70"
              style={{
                border: "1px solid var(--border)",
                color: "var(--foreground)",
              }}
            >
              Résumé
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* Divider */}
      <div style={{ borderTop: "1px solid var(--border)" }} />

      {/* Featured Work */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <FadeIn>
          <div className="flex items-baseline justify-between mb-12">
            <h2
              className="text-xs uppercase tracking-widest"
              style={{ color: "var(--muted)" }}
            >
              Selected Work
            </h2>
            <Link
              href="/projects"
              className="text-xs hover:opacity-60 transition-opacity"
              style={{ color: "var(--muted)" }}
            >
              All projects →
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 0.07}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div style={{ borderTop: "1px solid var(--border)" }} />

      {/* About strip */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <FadeIn>
            <h2
              className="text-xs uppercase tracking-widest mb-6"
              style={{ color: "var(--muted)" }}
            >
              About
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              Fifteen years of design practice across branding, product, and
              editorial. I partner with ambitious clients to create work that
              holds up — visually, strategically, and over time.
            </p>
            <p
              className="text-base md:text-lg leading-relaxed mt-4"
              style={{ color: "var(--muted)" }}
            >
              Previously at{" "}
              <span style={{ color: "var(--foreground)" }}>Pentagram</span>,{" "}
              <span style={{ color: "var(--foreground)" }}>
                The New York Times
              </span>
              , and{" "}
              <span style={{ color: "var(--foreground)" }}>Wolff Olins</span>.
            </p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h2
              className="text-xs uppercase tracking-widest mb-6"
              style={{ color: "var(--muted)" }}
            >
              Expertise
            </h2>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              {[
                "Brand Identity",
                "Design Systems",
                "Art Direction",
                "Typography",
                "Product Design",
                "Editorial Design",
              ].map((skill) => (
                <p
                  key={skill}
                  className="text-sm"
                  style={{ color: "var(--foreground)" }}
                >
                  {skill}
                </p>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/resume"
                className="text-sm hover:opacity-60 transition-opacity"
                style={{ color: "var(--muted)" }}
              >
                Full résumé →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <div style={{ borderTop: "1px solid var(--border)" }} />
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28 text-center">
        <FadeIn>
          <p
            className="text-xs uppercase tracking-widest mb-4"
            style={{ color: "var(--muted)" }}
          >
            Available for projects
          </p>
          <h2
            className="text-3xl md:text-5xl font-normal tracking-tight mb-8"
            style={{ letterSpacing: "-0.025em" }}
          >
            Let&apos;s work together.
          </h2>
          <a
            href="mailto:emily@example.com"
            className="text-sm px-6 py-3 rounded-full inline-block transition-opacity hover:opacity-70"
            style={{
              background: "var(--foreground)",
              color: "var(--background)",
            }}
          >
            Get in touch
          </a>
        </FadeIn>
      </section>
    </div>
  );
}
