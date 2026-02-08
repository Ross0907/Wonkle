"use client"

import { cn } from "@/lib/utils"
import { Spin as Hamburger } from "hamburger-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const links: { name: string; href: string }[] = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
]

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname()

    return (
        <nav
            className="
              fixed top-0 z-50 w-full overflow-hidden border-b-4 backdrop-blur-xs transition-all
            "
        >
            <div className="w-full bg-white/80">
                <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
                    <Link
                        href="/"
                        className="
                          group relative flex items-center gap-3 transition-opacity
                          hover:opacity-80
                        "
                        aria-label="Go to home"
                    >
                        <Image
                            className="
                              h-10 w-10 transition-transform select-none
                              group-hover:scale-105
                            "
                            src="/logo.png"
                            width={32}
                            height={32}
                            alt="wonkle logo"
                            priority
                        />
                        <span className="text-xl font-bold text-slate-900 select-none">Wonkle</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <ul
                        className="
                          hidden items-center gap-6
                          md:flex
                        "
                    >
                        {links.map(({ name, href }, i) => (
                            <li key={i}>
                                <Link
                                    href={href}
                                    className={cn(
                                        `
                                          font-medium text-slate-700 underline decoration-slate-300
                                          decoration-2 underline-offset-2 transition-colors
                                          hover:text-slate-900 hover:decoration-blue-600
                                        `,
                                        pathname === href && "decoration-blue-600",
                                    )}
                                >
                                    {name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        className="md:hidden"
                        aria-label="Toggle navigation menu"
                        aria-expanded={isMenuOpen}
                    >
                        <div aria-hidden>
                            <Hamburger toggled={isMenuOpen} />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className="
                  transition-all duration-300
                  md:hidden
                "
                style={{
                    height: `${isMenuOpen ? 48 * links.length : 0}px`,
                }}
            >
                <ul className="flex max-w-6xl flex-col">
                    {links.map(({ name, href }, i) => (
                        <li key={i}>
                            <Link
                                href={href}
                                onClick={() => setIsMenuOpen(false)}
                                className={cn(
                                    `
                                      flex h-12 items-center justify-center bg-white/80 pl-4
                                      font-medium text-slate-700 underline decoration-slate-300
                                      decoration-2 underline-offset-2 transition-colors
                                      hover:bg-neutral-200/80 hover:text-slate-900
                                      hover:decoration-blue-600
                                    `,
                                    pathname === href && "decoration-blue-600",
                                )}
                            >
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
