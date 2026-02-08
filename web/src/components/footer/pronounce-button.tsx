"use client"

import { cn } from "@/lib/utils"
import { Volume2 } from "lucide-react"
import { useRef } from "react"

// https://github.com/wonkleio/wonkle/pull/29
export default function PronounceButton({ className, ...props }: React.ComponentProps<"button">) {
    const audioRef = useRef<HTMLAudioElement>(null)

    return (
        <>
            <button
                title="Hear pronunciation"
                className={cn("cursor-pointer rounded-sm px-2 py-1", className)}
                onClick={() => audioRef.current?.play()}
                {...props}
            >
                <Volume2 size={16} className="inline-block" />
            </button>
            <audio ref={audioRef} src="/wonkle.mp3" className="hidden" />
        </>
    )
}
