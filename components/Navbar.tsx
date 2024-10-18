"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Function to close the menu when clicking outside the menu or on the close icon
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="flexBetween max-container padding-container relative z-30 py-5">
        <Link href="/">
          <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          ))}
        </ul>

        <div className="lg:flexCenter hidden">
          <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </div>

        {/* Hamburger Icon for Mobile */}
        <Image
          src="/menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
          onClick={toggleMenu}
        />
      </nav>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={closeMenu} // Close menu when clicking outside
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[80%] bg-black transition-transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative p-5">
          {/* Close Icon */}
          <Image
            src="/close.svg"
            alt="close"
            width={24}
            height={24}
            className="absolute top-5 right-5 cursor-pointer"
            onClick={closeMenu} // Close menu when close icon is clicked
          />

          {/* Menu Links */}
          <ul className="flex flex-col items-center justify-center h-full gap-8 pt-10">
            {[
              { label: "Home", href: "/" },
              { label: "How Hilink Work?", href: "#features" },
              { label: "Products", href: "/products" },
              { label: "Our Teams", href: "/teams" },
              { label: "Contact Us", href: "/about" },
            ].map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="block text-white text-2xl"
                  onClick={closeMenu} // Close menu when a link is clicked
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
