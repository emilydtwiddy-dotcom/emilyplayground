export default function Footer() {
  return (
    <footer
      className="mt-32"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          © 2024 Emily Twiddy
        </p>
        <div className="flex items-center gap-6">
          {[
            { label: "Email", href: "mailto:emily@example.com" },
            { label: "LinkedIn", href: "#" },
            { label: "Instagram", href: "#" },
            { label: "Twitter / X", href: "#" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm hover:opacity-100 transition-opacity"
              style={{ color: "var(--muted)" }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
