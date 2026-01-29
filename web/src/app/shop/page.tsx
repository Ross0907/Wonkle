import { A } from "@/components/ui/link"

// TODO: Actually build this page instead of just showing a construction cone emoji
export default async function Page({}: { params: Promise<{ product: string }> }) {
    return (
        <div className="flex flex-col items-center gap-6 p-8 pt-32 text-center">
            <div className="text-9xl">🚧</div>
            <h2 className="text-6xl font-black text-slate-900">COMING SOON</h2>
            <p className="max-w-md text-lg text-slate-600">
                We&apos;re still building this page. In the meantime, why not join our{" "}
                <A external href="https://discord.com/invite/h27rwcBn73">
                    Discord
                </A>{" "}
                server? You&apos;ll get notified when we launch (and probably some memes too)
            </p>
        </div>
    )
}
