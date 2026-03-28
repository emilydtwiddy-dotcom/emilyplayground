"use client";

import Link from "next/link";
import { Project } from "@/lib/data";
import { useState } from "react";

export default function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image area */}
      <div
        className="w-full aspect-[4/3] rounded-xl mb-4 overflow-hidden flex items-end transition-all duration-500"
        style={{
          background: project.accentColor,
          transform: hovered ? "scale(0.98)" : "scale(1)",
        }}
      >
        <div
          className="w-full p-5 transition-opacity duration-300"
          style={{ opacity: hovered ? 1 : 0 }}
        >
          <span
            className="text-xs font-medium px-2.5 py-1 rounded-full"
            style={{
              background: "rgba(0,0,0,0.08)",
              color: "var(--foreground)",
            }}
          >
            View Project →
          </span>
        </div>
      </div>

      {/* Meta */}
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-sm font-medium leading-snug">{project.title}</p>
          <p className="text-sm mt-0.5" style={{ color: "var(--muted)" }}>
            {project.category}
          </p>
        </div>
        <p
          className="text-sm shrink-0 mt-0.5"
          style={{ color: "var(--muted)" }}
        >
          {project.year}
        </p>
      </div>
    </Link>
  );
}
