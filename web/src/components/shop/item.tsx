"use client"

import { Icon } from "@iconify/react"
import { OrbitControls, useTexture } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Link from "next/link"
import { NearestFilter } from "three"

import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import img from "./streamline-pixel--interface-essential-question-help-square.png"

function Box() {
    const texture = useTexture(img.src, (texture_) => {
        texture_.magFilter = NearestFilter
        texture_.minFilter = NearestFilter
    })

    return (
        <mesh>
            <boxGeometry />
            <meshPhongMaterial map={texture} />
        </mesh>
    )
}

export default function ShopItem({
    name,
    href,
    price,
    pollingRate,
    activeArea,
}: {
    name: string
    href: string
    price: string
    pollingRate: string
    activeArea: string
}) {
    return (
        <Card className="bg-secondary-background w-full max-w-96 p-0">
            <CardContent className="p-0">
                <div className="h-64 bg-linear-to-b from-pink-100 to-transparent">
                    <Canvas camera={{ position: [3, 3, 3], fov: 25 }}>
                        <ambientLight intensity={3} />
                        <OrbitControls
                            enableZoom={false}
                            rotateSpeed={0.5}
                            autoRotate
                            autoRotateSpeed={0.2}
                        />
                        <Box />
                    </Canvas>
                </div>

                <div className="p-6">
                    <div className="mb-6 flex justify-between gap-4">
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                                {name}
                            </h3>
                        </div>
                    </div>

                    <div className="mb-6 flex flex-col gap-3 *:duration-100">
                        <div className="flex items-center gap-2">
                            <Icon className="h-5 w-5" icon="lucide:chevrons-left-right-ellipsis" />
                            <span className="text-xs font-medium">Polling Rate</span>
                            <span className="font-bold">{pollingRate}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Icon className="h-5 w-5" icon="lucide:ruler" />
                            <span className="text-xs font-medium">Active Area</span>
                            <div className="font-bold">{activeArea}</div>
                        </div>
                    </div>

                    <div className="mt-12 flex justify-between">
                        <div className="text-right">
                            <span className="text-3xl font-bold text-slate-900">{price}</span>
                            <span className="text-xs text-slate-500">USD</span>
                        </div>

                        <Button asChild className="">
                            <Link href={href}>
                                Learn more
                                <Icon
                                    icon="lucide:arrow-right"
                                    className="relative z-10 h-5 w-5 transition-transform group-hover/btn:translate-x-1"
                                />
                            </Link>
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
