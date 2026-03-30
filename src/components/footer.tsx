export function Footer() {
  return (
    <footer className="border-t border-card-border py-8">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
          </div>
          <span className="text-xs font-semibold text-muted uppercase tracking-wider">
            Atisa Group
          </span>
        </div>
        <p className="text-xs text-muted/50">
          Atisa AI Challenge 2026 — Documento interno y confidencial
        </p>
      </div>
    </footer>
  );
}
