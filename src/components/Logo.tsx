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
        width={40}
        height={40}
        className="w-10 h-10 md:w-11 md:h-11 transition-transform duration-300 group-hover:scale-105"
      />
    </Link>
  );
}
