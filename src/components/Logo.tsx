import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
      aria-label="Dew Flow Planner - Back to home"
    >
      <Image
        src="/logo/Dew flow logo.svg"
        alt="Dew Flow Planner Logo"
        className="h-10 md:h-11 w-auto"
      />
    </Link>
  );
}
