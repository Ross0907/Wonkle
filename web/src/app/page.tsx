import ShopItem from "@/components/shop/item"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { A } from "@/components/ui/link"
import { cn } from "@/lib/utils"
import { Icon } from "@iconify/react"
import Marquee from "react-fast-marquee"

function PollingRateScroll({ _key, hz }: { _key: string; hz: number }) {
    const marginWidth = 2
    const durationSec = 30
    const TAILWINDCSS_MAX_W_4XL_PX = 896
    const chunkWidth = 24000 / hz
    const itemCount = Math.ceil(TAILWINDCSS_MAX_W_4XL_PX / chunkWidth)

    return (
        <Marquee
            speed={TAILWINDCSS_MAX_W_4XL_PX / durationSec}
            gradient
            gradientColor="oklch(98.7% 0.022 95.277)"
            gradientWidth={50}
            className="min-h-8"
        >
            {[...Array<number>(itemCount)].map((_, i) => (
                <div
                    key={`${_key}${i}`}
                    style={{
                        minWidth: `${chunkWidth - marginWidth}px`,
                        maxWidth: `${chunkWidth - marginWidth}px`,
                        marginLeft: `${marginWidth / 2}px`,
                        marginRight: `${marginWidth / 2}px`,
                    }}
                    className={cn(
                        "h-8 rounded bg-slate-300 hover:bg-slate-400",
                        hz >= 200 && "bg-slate-400 hover:bg-slate-500",
                        hz >= 1000 && "bg-blue-500 hover:bg-blue-800",
                        hz >= 8000 && "bg-fuchsia-600 hover:bg-fuchsia-950",
                    )}
                />
            ))}
        </Marquee>
    )
}

export default async function Home() {
    return (
        <div className="w-full">
            <section id="hero" className="border-b-4 pt-32 pb-16 md:pb-22">
                <div className="mx-auto max-w-6xl">
                    <div className="animate-fade-in text-center">
                        <h1 className="mb-6 text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl md:text-7xl">
                            this one is made for <span className="text-blue-600 sm:block">You</span>
                        </h1>
                        <p className="mx-auto mb-12 max-w-2xl text-lg text-slate-600 sm:text-xl md:text-2xl">
                            Tablets, keypads, pens and more. <br />
                            Made by gamers, for gamers.
                        </p>

                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Button asChild>
                                <a href="#products">
                                    Explore products
                                    <Icon icon="lucide:arrow-right" className="ml-2 size-5" />
                                </a>
                            </Button>
                            <Button asChild variant="neutral">
                                <a
                                    href="https://discord.com/invite/h27rwcBn73"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Join our Community
                                    <Icon icon="simple-icons:discord" className="ml-2 size-5" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="how-were-different" className="border-b-4 bg-teal-50 px-4 py-16">
                <div className="mx-auto max-w-6xl">
                    <h2 className="pb-16 text-center text-4xl font-bold tracking-tight sm:text-5xl">
                        How we&apos;re different
                    </h2>

                    <div className="grid gap-8 md:grid-cols-3">
                        <Card className="bg-secondary-background">
                            <CardHeader>
                                <CardTitle>
                                    <Icon icon="lucide:rocket" className="mb-4 size-8" />
                                    <h3>We&apos;re Fast</h3>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                Gaming is an afterthought for every other tablets. Not with ours. We
                                built everything with performance in mind, so your osu! gameplay
                                will feel smoother than ever.
                            </CardContent>
                        </Card>

                        <Card className="bg-secondary-background">
                            <CardHeader>
                                <CardTitle>
                                    <Icon icon="lucide:piggy-bank" className="mb-4 size-8" />
                                    <h3>We&apos;re Cheap</h3>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                We&apos;re not a traditional business with investors to please. In
                                another words, we&apos;re not motivated to maximize profit.
                                We&apos;re free to be a bunch of passionate players who want
                                what&apos;s best for us.
                            </CardContent>
                        </Card>

                        <Card className="bg-secondary-background">
                            <CardHeader>
                                <CardTitle>
                                    <Icon icon="lucide:git-merge" className="mb-4 size-8" />
                                    <h3>We&lsquo;re Open</h3>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                Everything we build - the hardware, software, even this very website
                                is available on{" "}
                                <A external href="https://github.com/wonkleio/wonkle">
                                    Github
                                </A>
                                {" under "}
                                <A external href="https://opensource.org/licenses">
                                    OSI-Approved Licenses
                                </A>
                                .
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section id="how-were-better" className="border-b-4 px-4 py-16">
                <div className="mx-auto max-w-6xl">
                    <h2 className="pb-16 text-center text-4xl font-bold tracking-tight sm:text-5xl">
                        How we compare
                    </h2>

                    <div className="mx-auto max-w-4xl space-y-12">
                        {/* Polling Rate Comparison */}
                        <div>
                            <h3 className="mb-6 text-2xl font-bold">Polling Rate</h3>
                            <div className="relative space-y-4 py-2">
                                <div className="absolute top-1/2 left-1/2 z-10 h-full w-0.5 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-black opacity-50">
                                    <Icon
                                        className="absolute -top-5 left-1/2 -translate-x-1/2 opacity-100"
                                        icon="mdi-triangle-down"
                                    />
                                    <Icon
                                        className="absolute -bottom-5 left-1/2 -translate-x-1/2 opacity-100"
                                        icon="mdi-triangle"
                                    />
                                </div>
                                <div>
                                    <div className="mb-2 flex items-center justify-between">
                                        <span className="text-sm font-medium text-slate-700">
                                            Wacom CTL-472
                                        </span>
                                        <span className="text-sm font-semibold text-slate-900">
                                            133Hz
                                        </span>
                                    </div>
                                    <PollingRateScroll _key="ctl472" hz={133} />
                                </div>
                                <div>
                                    <div className="mb-2 flex items-center justify-between">
                                        <span className="text-sm font-medium text-slate-700">
                                            Wacom PTK-470
                                        </span>
                                        <span className="text-sm font-semibold text-slate-900">
                                            200Hz
                                        </span>
                                    </div>
                                    <PollingRateScroll _key="ptk470" hz={200} />
                                </div>
                                <div>
                                    <div className="mb-2 flex items-center justify-between">
                                        <span className="text-sm font-medium text-slate-700">
                                            Wonkleboard Lite mk.1
                                        </span>
                                        <span className="text-sm font-semibold text-slate-900">
                                            1000Hz
                                        </span>
                                    </div>
                                    <PollingRateScroll _key="wonkleboardLiteMk1" hz={1000} />
                                </div>
                                <div>
                                    <div className="mb-2 flex items-center justify-between">
                                        <span className="text-sm font-medium text-slate-700">
                                            Wonkleboard Pro mk.1
                                        </span>
                                        <span className="text-sm font-semibold text-slate-900">
                                            8000Hz
                                        </span>
                                    </div>
                                    <PollingRateScroll _key="wonkleboardProMk1" hz={8000} />
                                </div>
                            </div>
                        </div>

                        {/* Active Area Comparison */}
                        <div>
                            <h3 className="mb-6 text-2xl font-bold text-slate-900">Active Area</h3>
                            <div className="space-y-4">
                                <div className="relative mx-auto aspect-square h-full max-h-[600px]">
                                    <div className="absolute h-[calc(100%*300/300)] w-[calc(100%*300/300)] rounded-sm border-2 bg-purple-500"></div>
                                    <div className="absolute h-[calc(100%*135/300)] w-[calc(100%*216/300)] rounded-sm border-2 bg-indigo-600"></div>
                                    <div className="absolute h-[calc(100%*100/300)] w-[calc(100%*180/300)] rounded-sm border-2 bg-teal-600"></div>
                                    <div className="absolute h-[calc(100%*98/300)] w-[calc(100%*157/300)] rounded-sm border-2 bg-slate-400"></div>
                                    <div className="absolute h-[calc(100%*95/300)] w-[calc(100%*152/300)] rounded-sm border-2 bg-slate-300"></div>
                                </div>

                                <div>
                                    <div className="mb-2 flex items-center justify-between">
                                        <span className="text-sm font-medium text-slate-700">
                                            Wacom CTL-472
                                        </span>
                                        <span className="text-sm font-semibold text-slate-900">
                                            152 × 95 mm
                                        </span>
                                    </div>
                                    <div className="h-8 w-full overflow-hidden rounded-lg border-2 bg-white">
                                        <div
                                            className="h-full bg-slate-300"
                                            style={{ width: "calc(100% * 152 * 95 / 300 / 300)" }}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-2 flex items-center justify-between">
                                        <span className="text-sm font-medium text-slate-700">
                                            Wacom PTK-470
                                        </span>
                                        <span className="text-sm font-semibold text-slate-900">
                                            157 × 98 mm
                                        </span>
                                    </div>
                                    <div className="h-8 w-full overflow-hidden rounded-lg border-2 bg-white">
                                        <div
                                            className="h-full bg-slate-400"
                                            style={{ width: "calc(100% * 157 * 98 / 300 / 300)" }}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-2 flex items-center justify-between">
                                        <span className="text-sm font-medium text-slate-700">
                                            Wonkleboard Lite & Pro
                                        </span>
                                        <span className="text-sm font-semibold text-slate-900">
                                            216 × 135 mm
                                        </span>
                                    </div>
                                    <div className="h-8 w-full overflow-hidden rounded-lg border-2 bg-white">
                                        <div
                                            className="h-full bg-teal-500"
                                            style={{ width: "calc(100% * 180 * 100 / 300 / 300)" }}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-2 flex items-center justify-between">
                                        <span className="text-sm font-medium text-slate-700">
                                            Wacom CTL-680
                                        </span>
                                        <span className="text-sm font-semibold text-slate-900">
                                            216 × 135 mm
                                        </span>
                                    </div>
                                    <div className="h-8 w-full overflow-hidden rounded-lg border-2 bg-white">
                                        <div
                                            className="h-full bg-indigo-500"
                                            style={{ width: "calc(100% * 216 * 135 / 300 / 300)" }}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-2 flex items-center justify-between">
                                        <span className="text-sm font-medium text-slate-700">
                                            Wonkleboard X
                                        </span>
                                        <span className="text-sm font-semibold text-slate-900">
                                            300 × 300 mm
                                        </span>
                                    </div>
                                    <div className="h-8 w-full overflow-hidden rounded-lg border-2 bg-white">
                                        <div
                                            className="h-full bg-purple-500"
                                            style={{ width: "calc(100% * 300 * 300 / 300 / 300)" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="products" className="border-b-4 bg-teal-50 px-4 py-16">
                <div className="mx-auto max-w-6xl">
                    <h2 className="pb-16 text-center text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                        Products
                    </h2>

                    <div className="flex w-full flex-col items-center justify-center gap-8 lg:flex-row">
                        <ShopItem
                            name="Wonkleboard Lite mk.1"
                            href="/shop/wonkleboard-lite-mk1"
                            price="147.27"
                            pollingRate="1000Hz"
                            activeArea="180 × 100 mm"
                        />
                        <ShopItem
                            name="Wonkleboard Pro mk.1"
                            href="/shop/wonkleboard-pro-mk1"
                            price="247.27"
                            pollingRate="8000Hz"
                            activeArea="180 × 100 mm"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}
