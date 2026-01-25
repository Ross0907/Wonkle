"use client"

import { cn } from "@/lib/utils"
import { Icon } from "@iconify/react"
import { useRef } from "react"

// https://github.com/wonkleio/wonkle/pull/29
export default function PronounceButton({ className, ...props }: React.ComponentProps<"button">) {
    const audioRef = useRef<HTMLAudioElement>(null)

    return (
        <>
            <button
                title="Hear pronunciation"
                className={cn("cursor-pointer rounded px-2 py-1", className)}
                onClick={() => audioRef.current?.play()}
                {...props}
            >
                <Icon icon="lucide:volume-2" className="inline-block h-5 w-5" />
            </button>
            <audio ref={audioRef} src="/wonkle.mp3" className="hidden" />
        </>
    )
}
