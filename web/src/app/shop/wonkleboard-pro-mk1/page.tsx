import MailingListForm from "@/components/mailing-list-form"
import { Icon } from "@iconify/react"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Wonkleboard Pro mk.1",
    description:
        "High-performance osu! tablet with 8000Hz polling rate, 200 lpmm resolution, and 20mm hover height.",
}

export default async function WonkleboardProMk1() {
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
                                <div className="mb-4 flex items-center justify-center gap-2 text-sm text-slate-600">
                                    <Icon icon="lucide:users" className="size-5 text-blue-600" />
                                    <span>Join players on the waitlist</span>
                                </div>
                                <MailingListForm source="product-tablet-mk1-pro" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-b-4 bg-teal-50 px-4 py-16">
                <div className="flex h-96 max-w-6xl items-center justify-center">
                    <p className="text-center">
                        <div className="pb-4 text-9xl">🚧</div>
                        <h2 className="text-6xl font-black">UNDER CONSTRUCTION</h2>
                    </p>
                </div>
            </section>

            <section className="border-b-4 bg-blue-600 py-16 text-blue-50">
                <div className="mx-auto text-center">
                    <h2 className="mb-4 text-4xl font-bold tracking-tight">
                        Don&apos;t miss launch day
                    </h2>
                    <p className="mb-6 text-lg">Get notified the moment we launch</p>
                    <div className="mb-6 flex justify-center">
                        <MailingListForm source="product-tablet-mk1-pro-cta" />
                    </div>
                </div>
            </section>
        </div>
    )
}
