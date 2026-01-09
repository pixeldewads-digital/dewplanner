import Link from 'next/link';
import Logo from '@/components/Logo';

const Footer = () => {
  return (
    <footer className="bg-cream-background border-t border-orange-50/20">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <Logo />
            <p className="mt-2 text-dark-teal">Plan. Track. Ship.</p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 mb-6 md:mb-0">
            <Link href="/" className="text-dark-teal hover:text-primary-orange transition-colors">Home</Link>
            <Link href="/dashboard" className="text-dark-teal hover:text-primary-orange transition-colors">Demo</Link>
            <Link href="#" className="text-dark-teal hover:text-primary-orange transition-colors">Sign In</Link>
            <Link href="#" className="text-dark-teal hover:text-primary-orange transition-colors">Privacy Policy</Link>
          </div>
        </div>
        <div className="border-t border-orange-50/20 mt-8 pt-6 text-center text-dark-teal/80">
          <p>&copy; {new Date().getFullYear()} Dew Flow Planner. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
