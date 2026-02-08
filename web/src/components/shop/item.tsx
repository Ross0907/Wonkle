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

type ProductID = "wonkleboard-lite-mk1" | "wonkleboard-pro-mk1" | "wonkleboard-x-mk1"

const data: Record<
    ProductID,
    {
        category: string
        model: string
        rev: string
        nick: string
        highlight: "pollingRate" | "activeArea" | "price"
        pollingRate: string
        activeArea: string
        price: string
    }
> = {
    "wonkleboard-lite-mk1": {
        category: "Wonkleboard",
        model: "Lite",
        rev: "mk.1",
        nick: "cheap boi",
        highlight: "price",
        pollingRate: "1000Hz",
        activeArea: "180 × 100 mm",
        price: "147.27",
    },
    "wonkleboard-pro-mk1": {
        category: "Wonkleboard",
        model: "Pro",
        rev: "mk.1",
        nick: "quick boi",
        highlight: "pollingRate",
        pollingRate: "8000Hz",
        activeArea: "180 × 100 mm",
        price: "247.27",
    },
    "wonkleboard-x-mk1": {
        category: "Wonkleboard",
        model: "X",
        rev: "mk.1",
        nick: "big boi",
        highlight: "activeArea",
        pollingRate: "1000Hz",
        activeArea: "300 × 300 mm",
        price: "247.27",
    },
}

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

export default function ShopItem({ product }: { product: ProductID }) {
    const { category, model, rev, nick, highlight, pollingRate, activeArea, price } = data[product]

    return (
        <Card className="h-135 w-96 gap-0 bg-secondary-background pt-0">
            <div className="h-64 bg-ease-in-to-b from-pink-100 to-transparent">
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
                    <Link href={`/shop/${product}`} data-rybbit-event={`home-products-${product}`}>
                        Learn more
                        <ArrowRight />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    )
}
