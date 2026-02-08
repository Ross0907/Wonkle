"use client"

import { cn } from "@/lib/utils"
import { OrbitControls, useTexture } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { ArrowRight, ChevronsLeftRightEllipsis, Ruler } from "lucide-react"
import Link from "next/link"
import { NearestFilter } from "three"

import { Button } from "../ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card"
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
    category,
    model,
    rev,
    nick,
    href,
    highlight,
    pollingRate,
    activeArea,
    price,
}: {
    category: string
    model: string
    rev: string
    nick: string
    href: string
    highlight: "pollingRate" | "activeArea" | "price"
    pollingRate: string
    activeArea: string
    price: string
}) {
    return (
        <Card className="bg-secondary-background h-135 w-96 gap-0 pt-0">
            <div className="bg-ease-in-to-b h-64 from-pink-100 to-transparent">
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

            <CardHeader className="pb-6">
                <h3 className="text-2xl font-bold">
                    {category} <span className="text-blue-500">{model}</span> {rev}
                </h3>
                <span className="text-slate-500" style={{ textDecorationSkipInk: "none" }}>
                    {nick}
                </span>
            </CardHeader>

            <CardContent className="flex grow flex-col gap-3">
                <div
                    className={cn(
                        "flex w-fit items-center gap-1 px-2",
                        highlight === "pollingRate" && "bg-yellow-200",
                    )}
                >
                    <ChevronsLeftRightEllipsis size={20} className="mr-1" />
                    <span className="text-xs font-medium">Polling Rate</span>
                    <span className="font-bold">{pollingRate}</span>
                </div>

                <div
                    className={cn(
                        "flex w-fit items-center gap-1 px-2",
                        highlight === "activeArea" && "bg-yellow-200",
                    )}
                >
                    <Ruler size={20} className="mr-1" />
                    <span className="text-xs font-medium">Active Area</span>
                    <div className="font-bold">{activeArea}</div>
                </div>
            </CardContent>

            <CardFooter className="flex items-end justify-between">
                <div className={cn("px-2", highlight === "price" && "bg-yellow-200")}>
                    <span className="text-3xl font-bold text-slate-900">{price}</span>
                    <span className="text-xs text-slate-500">USD</span>
                </div>

                <Button asChild>
                    <Link href={href}>
                        Learn more
                        <ArrowRight />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    )
}
