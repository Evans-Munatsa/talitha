import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "CiM. Couture in Motion. Identity before opportunity." },
      { name: "description", content: "CiM is a human development ecosystem helping young people know who they are, build skills, and connect to real-world opportunity." },
      { name: "author", content: "CiM" },
      { property: "og:title", content: "CiM. Couture in Motion." },
      { property: "og:description", content: "A human development ecosystem helping young people know who they are, build skills, and connect to real-world opportunity." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@cim" },
      { name: "twitter:title", content: "CiM. Couture in Motion." },
      { name: "twitter:description", content: "A human development ecosystem helping young people know who they are, build skills, and connect to real-world opportunity." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7486d40b-009a-42b1-b3b6-a0f8d3da8e97/id-preview-b87b06cc--25e87de5-203e-4535-a9a3-3e3779663cc7.lovable.app-1778129599508.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7486d40b-009a-42b1-b3b6-a0f8d3da8e97/id-preview-b87b06cc--25e87de5-203e-4535-a9a3-3e3779663cc7.lovable.app-1778129599508.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}
