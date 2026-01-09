import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 group"
      aria-label="Dew Flow Planner - Back to home"
    >
      <Image
        src="/logo/dew-flow-logo.png"
        alt="Dew Flow Planner Logo"
        width={32}
        height={32}
        className="w-7 h-7 md:w-8 md:h-8 transition-transform duration-300 group-hover:scale-105"
      />
      <h1 className="text-xl font-bold text-dark-navy">Dew Flow Planner</h1>
    </Link>
  );
}
