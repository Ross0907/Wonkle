import ShopItem from "@/components/shop/item"
import { Icon } from "@iconify/react"
import Link from "next/link"

export default async function Home() {
    return (
        <div className="w-full">
            <section id="hero" className="px-4 pt-16 pb-24 sm:pt-24 sm:pb-32">
                <div className="mx-auto max-w-6xl">
                    <div className="animate-fade-in text-center" style={{ animationDelay: "0.1s" }}>
                        <h1 className="mb-6 text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl md:text-7xl">
                            this one is made for <span className="gradient-text sm:block">You</span>
                        </h1>
                        <p className="mx-auto mb-12 max-w-2xl text-lg text-slate-600 sm:text-xl md:text-2xl">
                            Tablets, keypads, pens and more. <br />
                            Made by osu! players, for osu! players.
                        </p>

                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <a
                                href="#products"
                                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                            >
                                Explore products
                                <Icon icon="mdi:arrow-right" className="ml-2 h-5 w-5" />
                            </a>
                            <a
                                href="https://discord.gg/h27rwcBn73"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-full border-2 border-slate-300 bg-white px-8 py-4 text-base font-semibold text-slate-900 transition-all hover:border-slate-400 hover:bg-slate-50 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
                            >
                                Join our Community
                                <Icon icon="simple-icons:discord" className="ml-2 h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="how-were-different" className="bg-slate-50 px-4 py-20">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                            How we&apos;re different
                        </h2>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        <div className="group rounded-2xl bg-white p-8 shadow-sm transition-all">
                            <div className="mb-4 inline-flex rounded-xl bg-blue-100 p-3">
                                <Icon icon="mdi:speedometer" className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="mb-2 text-xl font-semibold text-slate-900">
                                We&apos;re Fast
                            </h3>
                            <p className="text-slate-600">
                                Gaming is an afterthought for every other tablets. Not with ours. We
                                built everything with performance in mind, so your osu! gameplay
                                will feel smoother than ever.
                            </p>
                        </div>

                        <div className="group rounded-2xl bg-white p-8 shadow-sm transition-all">
                            <div className="mb-4 inline-flex rounded-xl bg-yellow-100 p-3">
                                <Icon icon="mdi:attach-money" className="h-8 w-8 text-yellow-600" />
                            </div>
                            <h3 className="mb-2 text-xl font-semibold text-slate-900">
                                We&apos;re Cheap
                            </h3>
                            <p className="text-slate-600">
                                We&apos;re not a traditional business with investors to please. In
                                another words, we&apos;re not motivated to maximize profit.
                                We&apos;re free to be a bunch of passionate players who want
                                what&apos;s best for us.
                            </p>
                        </div>

                        <div className="group rounded-2xl bg-white p-8 shadow-sm transition-all">
                            <div className="mb-4 inline-flex rounded-xl bg-green-100 p-3">
                                <Icon
                                    icon="mdi:open-source-initiative"
                                    className="h-8 w-8 text-green-600"
                                />
                            </div>
                            <h3 className="mb-2 text-xl font-semibold text-slate-900">
                                We&lsquo;re Open
                            </h3>
                            <p className="text-slate-600">
                                Everything we build - the hardware, software, even this very website
                                is available on{" "}
                                <Link
                                    href="https://github.com/wonkleio/wonkle"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 font-semibold text-slate-900 underline decoration-slate-300 decoration-2 underline-offset-2 transition-colors hover:text-blue-600 hover:decoration-blue-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
                                >
                                    Github
                                </Link>
                                {" under "}
                                <Link
                                    href="https://opensource.org/licenses"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 font-semibold text-slate-900 underline decoration-slate-300 decoration-2 underline-offset-2 transition-colors hover:text-blue-600 hover:decoration-blue-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
                                >
                                    OSI-Approved Licenses
                                </Link>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="how-were-better" className="bg-white px-4 py-20">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                            How we&apos;re better
                        </h2>
                    </div>

                    <div className="mx-auto max-w-4xl space-y-12">
                        {/* Polling Rate Comparison */}
                        <div>
                            <h3 className="mb-6 text-2xl font-bold text-slate-900">Polling Rate</h3>
                            <div className="space-y-4">
                                <div>
                                    <div className="mb-2 flex items-center justify-between">
                                        <span className="text-sm font-medium text-slate-700">
                                            Wacom CTL-472
                                        </span>
                                        <span className="text-sm font-semibold text-slate-900">
                                            133Hz
                                        </span>
                                    </div>
                                    <div className="flex h-8 w-full overflow-hidden">
                                        {/* 178.451128px width + 2px margin = 180.451128 for 133Hz */}
                                        {/* max-w-4xl = 896px */}
                                        {[...Array<number>(Math.ceil(896 / 180.451128))].map(
                                            (_, i) => (
                                                <div
                                                    key={`ctl472-polling-rate-${i}`}
                                                    style={{
                                                        animationDelay: `${(i + 1) * 10 * 180.451128}ms`,
                                                    }}
                                                    className="animate-flipflop mx-px h-full max-w-[calc(24000px/133-2px)] min-w-[calc(24000px/133-2px)] rounded bg-slate-300"
                                                />
                                            ),
                                        )}
                                    </div>
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
                                    <div className="flex h-8 w-full overflow-hidden">
                                        {/* 118px width + 2px margin = 120px for 200Hz */}
                                        {[...Array<number>(Math.ceil(896 / 120))].map((_, i) => (
                                            <div
                                                key={`ptk-470-polling-rate-${i}`}
                                                style={{
                                                    animationDelay: `${(i + 1) * 10 * 120}ms`,
                                                }}
                                                className="animate-flipflop mx-px h-full max-w-[calc(24000px/200-2px)] min-w-[calc(24000px/200-2px)] rounded bg-slate-300"
                                            />
                                        ))}
                                    </div>
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
                                    <div className="flex h-8 w-full overflow-hidden">
                                        {/* 22px width + 2px margin = 24px for 1000Hz */}
                                        {[...Array<number>(Math.ceil(896 / 24))].map((_, i) => (
                                            <div
                                                key={`wonkleboardLiteMk1-polling-rate-${i}`}
                                                style={{
                                                    animationDelay: `${(i + 1) * 10 * 24}ms`,
                                                }}
                                                className="animate-flipflop mx-px h-full max-w-[calc(24000px/1000-2px)] min-w-[calc(24000px/1000-2px)] rounded bg-slate-300"
                                            />
                                        ))}
                                    </div>
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
                                    <div className="flex h-8 w-full overflow-hidden">
                                        {/* 1px width + 2px margin = 3px for 8000Hz */}
                                        {[...Array<number>(Math.ceil(896 / 3))].map((_, i) => (
                                            <div
                                                key={`wonkleboardProMk1-polling-rate-${i}`}
                                                style={{
                                                    animationDelay: `${(i + 1) * 10 * 3}ms`,
                                                }}
                                                className="animate-flipflop mx-px h-full max-w-[calc(24000px/8000-2px)] min-w-[calc(24000px/8000-2px)] rounded bg-slate-300"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Resolution Comparison */}
                        <div>
                            <h3 className="mb-6 text-2xl font-bold text-slate-900">Resolution</h3>
                            <div className="space-y-4">
                                <div>
                                    <div className="mb-2 flex items-center justify-between">
                                        <span className="text-sm font-medium text-slate-700">
                                            Wacom CTL-472
                                        </span>
                                        <span className="text-sm font-semibold text-slate-900">
                                            100 lpmm
                                        </span>
                                    </div>
                                    <div className="h-8 w-full overflow-hidden rounded-lg bg-slate-100">
                                        <div className="h-full w-[50%] bg-slate-400 transition-all" />
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-2 flex items-center justify-between">
                                        <span className="text-sm font-medium text-slate-700">
                                            Wacom PTK-470
                                        </span>
                                        <span className="text-sm font-semibold text-slate-900">
                                            200 lpmm
                                        </span>
                                    </div>
                                    <div className="h-8 w-full overflow-hidden rounded-lg bg-slate-100">
                                        <div className="h-full w-full bg-slate-400 transition-all" />
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-2 flex items-center justify-between">
                                        <span className="text-sm font-medium text-slate-700">
                                            Wonkleboard Lite mk.1
                                        </span>
                                        <span className="text-sm font-semibold text-purple-900">
                                            200 lpmm
                                        </span>
                                    </div>
                                    <div className="h-8 w-full overflow-hidden rounded-lg bg-purple-50">
                                        <div className="h-full w-full bg-linear-to-r from-purple-500 to-pink-500 transition-all" />
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-2 flex items-center justify-between">
                                        <span className="text-sm font-medium text-slate-700">
                                            Wonkleboard Pro mk.1
                                        </span>
                                        <span className="text-sm font-semibold text-purple-900">
                                            200 lpmm
                                        </span>
                                    </div>
                                    <div className="h-8 w-full overflow-hidden rounded-lg bg-purple-50">
                                        <div className="h-full w-full bg-linear-to-r from-purple-500 to-pink-500 transition-all" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Active Area Comparison */}
                        <div>
                            <h3 className="mb-6 text-2xl font-bold text-slate-900">Active Area</h3>
                            <div className="space-y-4">
                                <div>
                                    <div className="mb-2 flex items-center justify-between">
                                        <span className="text-sm font-medium text-slate-700">
                                            Wacom CTL-472
                                        </span>
                                        <span className="text-sm font-semibold text-slate-900">
                                            152 × 95 mm
                                        </span>
                                    </div>
                                    <div className="h-8 w-full overflow-hidden rounded-lg bg-slate-100">
                                        <div className="h-full w-[80.2222222222%] bg-slate-400 transition-all" />
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
                                    <div className="h-8 w-full overflow-hidden rounded-lg bg-slate-100">
                                        <div className="h-full w-[85.4777777778%] bg-slate-400 transition-all" />
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-2 flex items-center justify-between">
                                        <span className="text-sm font-medium text-slate-700">
                                            Wonkleboard Lite mk.1
                                        </span>
                                        <span className="text-sm font-semibold text-purple-900">
                                            180 × 100 mm
                                        </span>
                                    </div>
                                    <div className="h-8 w-full overflow-hidden rounded-lg bg-purple-50">
                                        <div
                                            className="h-full bg-linear-to-r from-purple-500 to-pink-500 transition-all"
                                            style={{ width: "100%" }}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-2 flex items-center justify-between">
                                        <span className="text-sm font-medium text-slate-700">
                                            Wonkleboard Pro mk.1
                                        </span>
                                        <span className="text-sm font-semibold text-purple-900">
                                            180 × 100 mm
                                        </span>
                                    </div>
                                    <div className="h-8 w-full overflow-hidden rounded-lg bg-purple-50">
                                        <div
                                            className="h-full bg-linear-to-r from-purple-500 to-pink-500 transition-all"
                                            style={{ width: "100%" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="products" className="px-4 py-20">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                            Products
                        </h2>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-2">
                        <ShopItem
                            name="Wonkleboard Lite mk.1"
                            href="/shop/wonkleboard-lite-mk1"
                            price="147.27"
                            pollingRate="1000Hz"
                            activeArea="180 × 100 mm"
                            resolution="200 lpmm"
                            hoverHeight="15mm"
                        />
                        <ShopItem
                            name="Wonkleboard Pro mk.1"
                            href="/shop/wonkleboard-pro-mk1"
                            price="247.27"
                            pollingRate="8000Hz"
                            activeArea="180 × 100 mm"
                            resolution="200 lpmm"
                            hoverHeight="20mm"
                        />
                    </div>
                </div>
            </section>

            <section id="join-our-community" className="bg-slate-900 px-4 py-20">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Join our community
                    </h2>
                    <p className="mb-8 text-lg text-slate-300">
                        Connect with players / get the latest news / contribute to the project
                    </p>
                    <a
                        href="https://discord.gg/h27rwcBn73"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-[#5865F2] px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-[#4752C4] hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5865F2]"
                    >
                        Join our Community
                        <Icon icon="simple-icons:discord" className="ml-2 h-5 w-5" />
                    </a>
                </div>
            </section>

            {/* todo: re-enable
            <section className="mt-12 mb-16 border-slate-200">
                <div className="mx-auto max-w-2xl text-center">
                    <h3 className="mb-2 text-2xl font-bold text-slate-900">
                        Stay Updated
                    </h3>
                    <p className="mb-6 text-slate-600">
                        Get notified about product launches, updates, and
                        exclusive offers.
                    </p>
                    <MailingListForm variant="compact" source="homepage" />
                </div>
            </section>
            */}
        </div>
    )
}
