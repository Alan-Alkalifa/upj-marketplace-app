'use client';

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavbarItems = ({ href, children, isActive }: NavbarItemProps) => {
  return (
    <Button asChild variant="secondary" className={cn(isActive && "border-1 bg-base border-secondary text-secondary hover:text-white")}>
      <Link href={href}>{children}</Link>
    </Button>
  );
};

const navbarItems = [
  { href: "/", children: "Home" },
  { href: "/about", children: "About" },
  { href: "/contact", children: "Contact" },
];

export const Navbar = () => {
    const pathname = usePathname();
  return (
    <nav className="h-20 flex border-b justify-between font-medium bg-base">
      <Link href="/" className="pl-6 text-white flex items-center">
        <Image
          src="/upj.svg"
          alt="Logo"
          width={64}
          height={64}
          className="inline-block mr-2"
        />
        <span className={cn("text-5xl font-semibold text-secondary")}>
          Mar<span className="text-destructive">ket</span>
          <span className="text-primary">place</span>
        </span>
      </Link>

      <div className="items-center hidden gap-4 pr-6 lg:flex">
        {navbarItems.map((item) => (
          <NavbarItems key={item.href} href={item.href} isActive={pathname === item.href}>
            {item.children}
          </NavbarItems>
        ))}
      </div>

      <div className="hidden lg:flex">
        <Button asChild variant="default" className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none text-primary bg-white hover:bg-primary hover:text-white transition-colors text-lg"><Link href="/sign-up">Log in</Link></Button>
        <Button asChild variant="secondary" className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none text-white bg-secondary transition-colors text-lg"><Link href="/sign-up">Start Selling</Link></Button> 
      </div>
    </nav>
  );
};
