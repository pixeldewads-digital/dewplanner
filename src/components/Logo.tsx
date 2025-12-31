import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="Back to Home"
      className="flex items-center"
    >
      <div
className="
  relative
  h-7 w-7
  sm:h-8 sm:w-8
  lg:h-10 lg:w-10
  transition-transform duration-200
  hover:scale-105
  focus-visible:outline-none
  focus-visible:ring-2
  focus-visible:ring-orange-500
"      >
       <Image
          src="/logo/dew-flow-logo.svg"
          alt="Dew Flow Planner"
          fill
          className="object-contain"
          priority
        />
      </div>
    </Link>
  );
}
