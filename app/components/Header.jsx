"use client";

import { ChevronDownIcon, Menu, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Home", href: "/" },
    { label: "Our Story", href: "/about" },
    { label: "Solution", href: "/solution" },
    { label: "Contact", href: "/contact" },
  ];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full ${scrolled ? "bg-[#264c92] pb-5" : "bg-transparent"}`}
    >
      <div
        className={`relative flex justify-between items-center  ${
          scrolled
            ? "px-4 sm:px-6 lg:px-16 pt-6 "
            : "px-4 sm:px-6 lg:px-16 pt-6 sm:pt-8 lg:pt-10"
        }`}
      >
        <Image
          className="w-32 sm:w-40 lg:w-56 h-auto object-contain"
          alt="Hiring instagram"
          src="https://c.animaapp.com/metmcazsfuMR7v/img/hiring-instagram-post--2--2.png"
          width={248}
          height={49}
        />

        <nav
          className={`hidden md:block absolute  left-1/2 transform -translate-x-1/2 z-20  ${
            scrolled ? "top-[10px]" : "top-[30px]"
          }`}
        >
          <div className="bg-[#264c9266] rounded-[12.69px] border border-[#ffffff33] backdrop-blur-[2.12px] px-6 py-4">
            <NavigationMenu>
              <NavigationMenuList className="flex items-center gap-8">
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuLink
                      href={item.href}
                      className="font-['Inter'] font-normal text-white text-[19px] hover:text-white/80 transition-colors"
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-['Inter'] font-normal text-white text-[19px] bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                    More
                    <ChevronDownIcon className="ml-2 h-3 w-3" />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-4 w-48">
                      <NavigationMenuLink
                        href="#more"
                        className="block p-2 text-sm hover:bg-accent rounded"
                      >
                        Additional Options
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </nav>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-white z-30"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        <button className="hidden md:block bg-[#264c92] px-6 py-2 rounded-xl text-white text-xl font-medium hover:bg-[#264c92]/90 transition-colors">
          Let's Transform
        </button>
      </div>

      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div
        className={`md:hidden fixed top-0 right-0 h-full w-80 bg-[#264c92] transform transition-transform duration-300 z-50 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-white"
          >
            <X className="h-6 w-6" />
          </button>

          <nav className="mt-16">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white text-lg py-4 hover:text-white/80"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#more"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-white text-lg py-4 hover:text-white/80"
            >
              More
            </a>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full bg-white text-[#264c92] px-6 py-3 rounded-xl font-medium mt-8"
          >
            Let's Transform
          </button>
        </div>
      </div>
    </header>
  );
};
