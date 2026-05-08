import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const ecosystem = [
  { to: "/worth-in-motion", label: "Worth in Motion" },
  { to: "/lms", label: "LMS / The Mirror" },
  { to: "/living-university", label: "Living University" },
  { to: "/marketplace", label: "CiM Marketplace" },
  { to: "/platform", label: "CiM Platform" },
];

const partners = [
  { to: "/partners/corporates", label: "Corporates" },
  { to: "/partners/government", label: "Government" },
  { to: "/partners/schools-ngos", label: "Schools & NGOs" },
  { to: "/partners/facilitators", label: "Facilitators" },
  { to: "/partners/pilots", label: "Pilot Programmes" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-background/80 border-b">
      <div className="container-edit flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="font-display text-2xl tracking-tight flex items-baseline gap-1">
          <span>CiM</span>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground hidden sm:inline">
            Couture in Motion
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/worth-in-motion">Worth in Motion</NavLink>
          <DropdownLink to="/ecosystem" label="Ecosystem" items={ecosystem} />
          <DropdownLink to="/partners" label="Partners" items={partners} />
          <NavLink to="/impact">Impact</NavLink>
          <NavLink to="/insights">Insights</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center gap-2 text-sm border border-foreground/20 px-4 py-2 rounded-full hover:bg-foreground hover:text-background transition-colors"
        >
          Partner with us →
        </Link>

        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t bg-background">
          <div className="container-edit py-6 flex flex-col gap-1 text-sm">
            <MobileLink to="/" onNav={() => setOpen(false)}>Home</MobileLink>
            <MobileLink to="/about" onNav={() => setOpen(false)}>About</MobileLink>
            <MobileLink to="/worth-in-motion" onNav={() => setOpen(false)}>Worth in Motion</MobileLink>
            <MobileGroup to="/ecosystem" label="Ecosystem" items={ecosystem} onNav={() => setOpen(false)} />
            <MobileGroup to="/partners" label="Partners" items={partners} onNav={() => setOpen(false)} />
            <MobileLink to="/impact" onNav={() => setOpen(false)}>Impact</MobileLink>
            <MobileLink to="/insights" onNav={() => setOpen(false)}>Insights</MobileLink>
            <MobileLink to="/contact" onNav={() => setOpen(false)}>Contact</MobileLink>
          </div>
        </div>
      )}
    </header>
  );
}

function MobileLink({ to, children, onNav }: { to: string; children: React.ReactNode; onNav: () => void }) {
  return (
    <Link to={to} onClick={onNav} className="py-2.5 border-b last:border-0">
      {children}
    </Link>
  );
}

function MobileGroup({
  to,
  label,
  items,
  onNav,
}: {
  to: string;
  label: string;
  items: { to: string; label: string }[];
  onNav: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="border-b">
      <div className="flex items-center justify-between">
        <Link to={to} onClick={onNav} className="py-2.5 flex-1">
          {label}
        </Link>
        <button
          onClick={() => setExpanded(!expanded)}
          aria-label={`Toggle ${label}`}
          className="p-2.5"
        >
          <ChevronDown className={`size-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
        </button>
      </div>
      {expanded && (
        <div className="pb-2 pl-4 flex flex-col">
          {items.map((it) => (
            <Link
              key={it.to}
              to={it.to}
              onClick={onNav}
              className="py-2 text-muted-foreground hover:text-foreground"
            >
              {it.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      activeProps={{ className: "text-foreground" }}
      inactiveProps={{ className: "text-muted-foreground" }}
      className="hover:text-foreground transition-colors"
    >
      {children}
    </Link>
  );
}

function DropdownLink({ to, label, items }: { to: string; label: string; items: { to: string; label: string }[] }) {
  return (
    <div className="relative group">
      <Link
        to={to}
        activeProps={{ className: "text-foreground" }}
        inactiveProps={{ className: "text-muted-foreground" }}
        className="flex items-center gap-1 hover:text-foreground transition-colors"
      >
        {label} <ChevronDown className="size-3.5" />
      </Link>
      <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
        <div className="min-w-[220px] bg-background border rounded-md shadow-sm py-2">
          <Link to={to} className="block px-4 py-2 text-sm font-medium hover:bg-secondary transition-colors border-b mb-1">
            Overview →
          </Link>
          {items.map((it) => (
            <Link
              key={it.to}
              to={it.to}
              className="block px-4 py-2 text-sm hover:bg-secondary transition-colors"
            >
              {it.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
