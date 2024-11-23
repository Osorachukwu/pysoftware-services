'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getMenuItems } from "@/services";

export default function NavLinks() {
  const pathname = usePathname();
// use swr or react query
  const [menuItems, setMenuItems] = useState([])

  useEffect(() => {
    getMenuItems().then((data) => {
      setMenuItems(data.data ?? [])
      console.log('data: ', data.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  console.log(menuItems)

  return (
    <div className="h-full hidden lg:block">
    <div className="flex items-center gap-4 text-sm xl:text-lg h-full">
      {menuItems && menuItems.map((menuItem, i) => (
        <Link key={i} href={menuItem.href} className={`${pathname === menuItem.href ? "text-blue-700" : ""} hover:text-blue-800`}>
          {menuItem.menuItem || menuItem.menu_item}
        </Link>
      ))}
    </div>
  </div>

  );
}
