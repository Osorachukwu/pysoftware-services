"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();

  const links = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Services", path: "/service" },
    { title: "Project", path: "/project" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <div className="h-full hidden lg:block">
      <div className="flex items-center gap-4 text-sm xl:text-lg h-full">
        {links.map((link, i) => (
          <Link
            key={i}
            href={link.path}
            className={`${pathname === link.path ? "text-blue-700" : ""} hover:text-blue-800`}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
