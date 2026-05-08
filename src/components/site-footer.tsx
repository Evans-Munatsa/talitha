import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t mt-32 bg-secondary/40">
      <div className="container-edit py-20 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05] max-w-md">
            Identity before opportunity.
            <br />
            <em className="text-accent not-italic">Infrastructure</em> before impact.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-sm text-sm leading-relaxed">
            A human development ecosystem for the next generation of African talent.
          </p>
        </div>

        <FooterCol
          title="Ecosystem"
          links={[
            ["Worth in Motion", "/worth-in-motion"],
            ["LMS / The Mirror", "/lms"],
            ["Living University", "/living-university"],
            ["Marketplace", "/marketplace"],
            ["Platform", "/platform"],
          ]}
        />
        <FooterCol
          title="Partners"
          links={[
            ["Corporates", "/partners/corporates"],
            ["Government", "/partners/government"],
            ["Schools & NGOs", "/partners/schools-ngos"],
            ["Facilitators", "/partners/facilitators"],
            ["Pilots", "/partners/pilots"],
          ]}
        />
        <FooterCol
          title="Hub"
          links={[
            ["About", "/about"],
            ["Impact", "/impact"],
            ["Insights", "/insights"],
            ["Contact", "/contact"],
          ]}
        />
      </div>
      <div className="container-edit pb-10 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-muted-foreground border-t pt-8">
        <p>© {new Date().getFullYear()} CiM. A movement in motion.</p>
        <p>Built for human development. Africa and beyond.</p>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div className="md:col-span-2">
      <p className="eyebrow mb-4">{title}</p>
      <ul className="space-y-2 text-sm">
        {links.map(([label, to]) => (
          <li key={to}>
            <Link to={to} className="hover:text-accent transition-colors">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
