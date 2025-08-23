"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { SignedOut, SignInButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { SignedIn, UserButton } from "@clerk/clerk-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { checkUser } from "@/actions/checkUser";

const Header = () => {
  useEffect(() => {
    (async () => {
      await checkUser(); // triggers on mount, not during SSR
    })();
  }, []);
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-2">
          <Image
            src={"/name-light.png"}
            width={150}
            height={60}
            alt="BrandFlow"
          />
        </div>
        <nav className="hidden items-center gap-6 md:flex text-sm">
          <a href="#features" className="hover:text-primary">
            Features
          </a>
          <a href="#demo" className="hover:text-primary">
            Demo
          </a>
          <a href="#pricing" className="hover:text-primary">
            Pricing
          </a>
          <a href="#faq" className="hover:text-primary">
            FAQ
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <GitHubLogoIcon className="mr-2 h-4 w-4" />
              Star
            </a>
          </Button>
          <SignedOut>
            <SignInButton>
              <Button variant="ghost">Get Started</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
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
