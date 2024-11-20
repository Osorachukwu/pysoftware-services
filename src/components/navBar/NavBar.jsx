import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavLinks from "./NavLinks";
import logo from "@/assets/logo.webp";
import Hambourger from "./Hambourger";
import {
  MapPin,
  Clock,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

export default function NavBar() {
  return (
    <section>
      <div className="relative w-full flex gap-16 justify-around items-center h-20 bg-white shadow-2xl z-50">
        <div className="h-full pl-5 flex items-center">
          <Link
            href="/"
            className=" text-lg md:text-2xl xl:text-4xl font-semibold flex items-center gap-4 whitespace-nowrap"
          >
            <Image
              src={logo}
              alt="Logo"
              className="h-full w-8 lg:h-16 lg:w-16 rounded-full"
            />
            <span className="text-green-500">Pysoftware</span>
          </Link>
        </div>
        <NavLinks />
        <Hambourger />
      </div>
    </section>
  );
}
