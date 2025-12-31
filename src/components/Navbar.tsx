'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Logo from '@/components/Logo';

const navLinks = [
  { href: '/features', label: 'Features' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/docs', label: 'Docs' },
];

export default function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      
    <header>
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        hasScrolled
          ? 'border-b bg-cream-background/80 backdrop-blur-lg shadow-sm'
          : 'bg-cream-background'
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-4">
          <Logo />
          {pathname !== '/' && (
            <Link
              href="/"
              className="hidden md:block text-sm font-medium text-dark-navy/70 hover:text-primary-orange transition-colors"
            >
              &larr; Back to Home
            </Link>
          )}
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-dark-navy font-medium transition-colors hover:text-primary-orange"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="text-dark-navy hover:bg-teal/10">
            Sign In
          </Button>
          <Button className="bg-primary-orange hover:bg-deep-orange text-white">
            Get Started
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-dark-navy" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-cream-background">
              <div className="p-6">
                <Logo />
                <div className="mt-8 flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium text-dark-navy transition-colors hover:text-primary-orange"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="mt-6 flex flex-col gap-4">
                     <Button variant="ghost" className="text-dark-navy hover:bg-teal/10 w-full">
                        Sign In
                      </Button>
                      <Button className="bg-primary-orange hover:bg-deep-orange text-white w-full">
                        Get Started
                      </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
