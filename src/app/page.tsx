import Link from "next/link";
import { CalendarCheck, Car, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 font-semibold">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Car className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>Laxmi Toyota</span>
          </Link>

          <Button asChild variant="outline">
            <Link href="/login">Login</Link>
          </Button>
        </nav>

        <div className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-medium uppercase text-primary">
              Booking starter
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Next.js 15 foundation for Toyota bookings.
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              A clean App Router project with TypeScript, Tailwind CSS,
              shadcn-compatible UI primitives, and ESLint ready for production
              deployment.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/login">Open login page</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="https://nextjs.org/docs" rel="noreferrer" target="_blank">
                  Next.js docs
                </a>
              </Button>
            </div>
          </div>

          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="space-y-5">
              {[
                {
                  icon: CalendarCheck,
                  title: "App Router pages",
                  text: "Home and login routes are organized under src/app.",
                },
                {
                  icon: ShieldCheck,
                  title: "No backend assumptions",
                  text: "No database, auth service, ORM, Docker, or cloud vendor lock-in.",
                },
                {
                  icon: Car,
                  title: "GitHub-ready",
                  text: "Includes lint, build, start scripts, .gitignore, and initialized git.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-muted">
                    <item.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="font-semibold">{item.title}</h2>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
