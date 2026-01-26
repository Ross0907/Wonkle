import { Button } from "@/components/ui/button"
import mrBranWaiting from "@/res/mr_bean_waiting.avif"
import { SiDiscord } from "@icons-pack/react-simple-icons"
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
    title: "Wonkleboard X mk.1",
    description:
        "High-performance osu! tablet with 8000Hz polling rate, 200 lpmm resolution, and 20mm hover height.",
}

export default async function WonkleboardXMk1() {
    return (
        <div className="w-full">
            <section className="border-b-4 pt-32 pb-16 md:pb-22">
                <div className="mx-auto">
                    <div className="animate-fade-in text-center">
                        <h1 className="mb-8 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
                            Wonkleboard
                            <br />
                            <span className="text-blue-600">Pro</span>{" "}
                            <span className="text-3xl">mk.1</span>
                        </h1>

                        <div className="flex justify-center">
                            <div className="w-full">
                                <Button asChild className="bg-[#5865F2] text-white">
                                    <a
                                        href="https://discord.com/invite/h27rwcBn73"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Join the waiting room
                                        <SiDiscord className="ml-2" />
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-b-4 bg-teal-50 px-4 py-16">
                <div className="mx-auto flex h-240 max-w-6xl items-center justify-center">
                    <div className="text-center">
                        <div className="text-9xl">🚧</div>
                        <h2 className="pt-4 pb-10 text-4xl font-black">UNDER CONSTRUCTION</h2>

                        <Image
                            src={mrBranWaiting}
                            width={860}
                            height={721}
                            alt="A 4 panel meme of Mr. Bean getting progressively more bored as he waits for something/someone. In the first panel he stands with hands on hips looking into the distance. In the second panel he checks his wristwatch. In the third panel he sits on the grass. In the last panel he lies flat on his back in the grass."
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}
