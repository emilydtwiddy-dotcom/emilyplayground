import { resumeData } from "@/lib/data";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Résumé — Emily Twiddy",
  description: "Experience, education, and awards.",
};

export default function ResumePage() {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
      {/* Header */}
      <FadeIn>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20 pb-10" style={{ borderBottom: "1px solid var(--border)" }}>
          <div>
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--muted)" }}>
              Résumé
            </p>
            <h1
              className="text-3xl md:text-5xl font-normal tracking-tight"
              style={{ letterSpacing: "-0.025em" }}
            >
              {resumeData.name}
            </h1>
            <p className="mt-2 text-base md:text-lg" style={{ color: "var(--muted)" }}>
              {resumeData.title}
            </p>
          </div>
          <div className="flex flex-col gap-1.5 md:text-right">
            <a
              href={`mailto:${resumeData.email}`}
              className="text-sm hover:opacity-60 transition-opacity"
              style={{ color: "var(--muted)" }}
            >
              {resumeData.email}
            </a>
            <p className="text-sm" style={{ color: "var(--muted)" }}>
              {resumeData.location}
            </p>
            <a
              href="#"
              download
              className="text-sm mt-2 inline-flex items-center gap-1.5 hover:opacity-70 transition-opacity"
              style={{ color: "var(--foreground)" }}
            >
              Download PDF ↓
            </a>
          </div>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-16 lg:gap-24">
        {/* Left column */}
        <div className="space-y-16">
          {/* Experience */}
          <FadeIn delay={0.05}>
            <section>
              <h2
                className="text-xs uppercase tracking-widest mb-8"
                style={{ color: "var(--muted)" }}
              >
                Experience
              </h2>
              <div className="space-y-0">
                {resumeData.experience.map((item, i) => (
                  <div
                    key={i}
                    className="py-7"
                    style={{
                      borderBottom: "1px solid var(--border)",
                      ...(i === 0 ? { borderTop: "1px solid var(--border)" } : {}),
                    }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                      <div>
                        <span className="text-base font-medium">{item.role}</span>
                        <span className="text-base" style={{ color: "var(--muted)" }}>
                          {" "}· {item.company}
                        </span>
                      </div>
                      <span className="text-sm shrink-0" style={{ color: "var(--muted)" }}>
                        {item.period}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* Education */}
          <FadeIn delay={0.1}>
            <section>
              <h2
                className="text-xs uppercase tracking-widest mb-8"
                style={{ color: "var(--muted)" }}
              >
                Education
              </h2>
              <div className="space-y-0">
                {resumeData.education.map((item, i) => (
                  <div
                    key={i}
                    className="py-7"
                    style={{
                      borderBottom: "1px solid var(--border)",
                      ...(i === 0 ? { borderTop: "1px solid var(--border)" } : {}),
                    }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                      <div>
                        <span className="text-base font-medium">{item.degree}</span>
                        <span className="text-base" style={{ color: "var(--muted)" }}>
                          {" "}· {item.school}
                        </span>
                      </div>
                      <span className="text-sm shrink-0" style={{ color: "var(--muted)" }}>
                        {item.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>
        </div>

        {/* Right column */}
        <div className="space-y-12">
          {/* Skills */}
          <FadeIn delay={0.08}>
            <section>
              <h2
                className="text-xs uppercase tracking-widest mb-6"
                style={{ color: "var(--muted)" }}
              >
                Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-full"
                    style={{ background: "var(--surface)", color: "var(--foreground)" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* Awards */}
          <FadeIn delay={0.12}>
            <section>
              <h2
                className="text-xs uppercase tracking-widest mb-6"
                style={{ color: "var(--muted)" }}
              >
                Recognition
              </h2>
              <div className="space-y-0">
                {resumeData.awards.map((award, i) => (
                  <div
                    key={i}
                    className="py-4"
                    style={{
                      borderBottom: "1px solid var(--border)",
                      ...(i === 0 ? { borderTop: "1px solid var(--border)" } : {}),
                    }}
                  >
                    <p className="text-sm font-medium">{award.name}</p>
                    <div className="flex justify-between mt-0.5">
                      <p className="text-xs" style={{ color: "var(--muted)" }}>
                        {award.category}
                      </p>
                      <p className="text-xs" style={{ color: "var(--muted)" }}>
                        {award.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* Availability */}
          <FadeIn delay={0.16}>
            <section
              className="p-5 rounded-xl"
              style={{ background: "var(--surface)" }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: "#4CAF50" }}
                />
                <p className="text-xs font-medium">Available</p>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
                Currently accepting new projects for Q2 2024 onwards. Reach out to discuss.
              </p>
              <a
                href="mailto:emily@example.com"
                className="mt-3 text-xs inline-block hover:opacity-60 transition-opacity"
                style={{ color: "var(--foreground)" }}
              >
                emily@example.com →
              </a>
            </section>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
