import { RybbitEvent } from "@/types/rybbit"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function rybbit(event: RybbitEvent) {
    return event
}
