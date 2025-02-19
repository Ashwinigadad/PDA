"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Werkzaamheden", href: "/services" },
  { name: "Over PDA", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#F5F5F5] text-black shadow-md">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image 
            src="/images/p1.jpeg" 
            alt="PDA Logo" 
            width={150} 
            height={70} 
            className="object-contain h-auto w-auto max-h-[50px] max-w-[150px]"
          />
        </Link>
        <nav className="ml-auto flex gap-6">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-gray-900",
                pathname === item.href
                  ? "text-gray-900 font-semibold"
                  : "text-gray-700"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
