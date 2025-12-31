import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-cream-background p-24">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-dark-navy">Dew Flow Planner</h1>
        <p className="mt-4 text-lg text-dark-teal">
          The ultimate content planning dashboard for PixelDew.
          <br />
          Plan, track, and optimize your content flow effortlessly.
        </p>
        <div className="mt-8">
          <Link
            href="/dashboard"
            className="rounded-md bg-primary-orange px-6 py-3 text-lg font-semibold text-white shadow-md transition-colors hover:bg-deep-orange"
          >
            Get Started
          </Link>
          <Link
            href="/dashboard"
            className="ml-4 text-lg text-dark-teal underline"
          >
            View Demo Dashboard
          </Link>
        </div>
      </div>
    </main>
  )
}
