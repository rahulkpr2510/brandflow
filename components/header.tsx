"use client";
import React, { useEffect, } from "react";
import Image from "next/image";
import { SignedOut, SignInButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { SignedIn, UserButton } from "@clerk/clerk-react";
import { checkUser } from "@/actions/checkUser";
import Link from "next/link";
import { Bell } from "lucide-react";

const Header = () => {
  const links = [
    { href: "#features", label: "Features" },
    { href: "#demo", label: "Demo" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
  ];
  const loggedInLinks = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/posts", label: "Posts" },
    { href: "/calendar", label: "Calendar" },
    { href: "/analytics", label: "Analytics" },
    { href: "/billing", label: "Billing" },
  ];

  useEffect(() => {
    (async () => {
      await checkUser();
    })();
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-7xl items-center px-6 py-3">
        <Link href={"/"}>
          <Image
            src={"/name-light.png"}
            width={150}
            height={60}
            alt="BrandFlow"
          />
        </Link>

        <div className="ml-auto flex items-center gap-6">
          <SignedOut>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </SignedOut>

          <SignedIn>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              {loggedInLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <Button variant="ghost">Get Started</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <div className="flex items-center gap-2">
              <Link href= '/notification' >
              <Bell  className="size-4 " />
              </Link>
            </div>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "size-10",
                  userButtonPopoverCard: "shadow-xl",
                  userPreviewMainIdentifier: "font-semibold",
                },
              }}
            />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Header;
