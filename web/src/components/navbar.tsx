"use client"

import cn from "@/lib/cn"
import { Icon } from "@iconify/react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const links: { name: string; href: string }[] = [
    { name: "Home", href: "/" },
    // { name: "Shop", href: "/shop" },
]

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname()

    return (
        <nav className="sticky top-0 z-50 h-16 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl transition-all">
            <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4">
                <Link
                    href="/"
                    className="group relative flex items-center gap-3 transition-opacity hover:opacity-80"
                    aria-label="Go to home"
                >
                    <Image
                        className="h-10 w-10 transition-transform select-none group-hover:scale-105"
                        src="/logo.png"
                        width={32}
                        height={32}
                        alt="wonkle logo"
                        priority
                    />
                    <span className="text-xl font-bold text-slate-900 select-none">Wonkle</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-6 md:flex">
                    {links.map(({ name, href }, i) => (
                        <Link
                            key={i}
                            href={href}
                            className={cn(
                                "text-sm font-medium text-slate-700 underline decoration-slate-300 decoration-2 underline-offset-2 transition-colors hover:text-slate-900 hover:decoration-blue-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600",
                                pathname === href && "decoration-blue-600",
                            )}
                        >
                            {name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="rounded-md p-2 text-slate-700 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 md:hidden"
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? (
                        <Icon icon="mdi:close" className="h-6 w-6" />
                    ) : (
                        <Icon icon="mdi:menu" className="h-6 w-6" />
                    )}
                </button>
            </div>

            {/* Mobile Navigation */}
            <div
                className={cn(
                    "border-t border-slate-200/80 bg-white/95 backdrop-blur-xl",
                    !isMenuOpen && "hidden",
                )}
            >
                <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4">
                    {links.map(({ name, href }, i) => (
                        <Link
                            key={i}
                            href={href}
                            onClick={() => setIsMenuOpen(false)}
                            className={cn(
                                "py-2 text-sm font-medium text-slate-700 transition-colors hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600",
                                pathname === href && "decoration-blue-600",
                            )}
                        >
                            {name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}
