import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { CircleCheck, CircleDot, CircleDotDashed } from "lucide-react"

type Status = "completed" | "WIP" | "planned"
type Quarter = "Q1" | "Q2" | "Q3" | "Q4"
type N = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
type YearQuarter = `20${N}${N} ${Quarter}`

function parseYearQuarter(yq: YearQuarter): { year: number; quarter: number } {
    const [yearStr, quarterStr] = yq.split(" ")
    return {
        year: parseInt(yearStr, 10),
        quarter: parseInt(quarterStr.slice(1), 10),
    }
}

function validate(
    ...entries: {
        title: string
        description: string
        yearQuarter: YearQuarter | "????"
        status: Status
    }[]
) {
    const priority = {
        completed: 0,
        WIP: 1,
        planned: 2,
    } as const satisfies Record<Status, number>

    for (let i = 1; i < entries.length; i++) {
        const prev = entries[i - 1]
        const curr = entries[i]

        if (prev.yearQuarter === "????" && curr.yearQuarter !== "????")
            throw new Error(
                `Roadmap ordering violation: "${prev.title}" (${prev.yearQuarter}) must come after "${curr.title}" (${curr.yearQuarter}).`,
            )

        if (prev.yearQuarter !== "????" && curr.yearQuarter !== "????") {
            const prevYearQuarter = parseYearQuarter(prev.yearQuarter)
            const currYearQuarter = parseYearQuarter(curr.yearQuarter)
            if (
                prevYearQuarter.year > currYearQuarter.year ||
                (prevYearQuarter.year === currYearQuarter.year &&
                    prevYearQuarter.quarter > currYearQuarter.quarter)
            )
                throw new Error(
                    `Roadmap ordering violation: "${prev.title}" (${prev.yearQuarter}) must come after "${curr.title}" (${curr.yearQuarter}).`,
                )
        }

        if (priority[prev.status] > priority[curr.status])
            throw new Error(
                `Roadmap ordering violation: "${prev.title}" (${prev.status}) must come after "${curr.title}" (${curr.status}).`,
            )
    }

    return entries
}

const entries = validate(
    {
        title: "Player survey",
        description: "What do people actually think and want?",
        yearQuarter: "2026 Q2",
        status: "WIP",
    },
    {
        title: "Firmware simulator",
        description:
            "Having this will allow developers to work on firmware without having the board themselves",
        yearQuarter: "2026 Q3",
        status: "WIP",
    },
    {
        title: "Firmware",
        description:
            "This is the program that runs on the tablet. It includes USB communication and sensor signal processing.",
        yearQuarter: "2026 Q3",
        status: "WIP",
    },
    {
        title: "OpenTabletDriver support",
        description:
            "Push our set of changes to OpenTabletDriver project so osu! can be used with out tablets.",
        yearQuarter: "2026 Q3",
        status: "planned",
    },
    {
        title: "Case",
        description: "Plastic case for the tablet.",
        yearQuarter: "2026 Q3",
        status: "planned",
    },
    {
        title: "Configurator",
        description: "A web-based tablet configuration tool.",
        yearQuarter: "2026 Q3",
        status: "planned",
    },
    {
        title: "Early testing with select players and content creators",
        description: "Mr. Ling and Ekk??",
        yearQuarter: "2026 Q3",
        status: "planned",
    },
    {
        title: "Wonkleboard mk.1 Lite",
        description: "Tablet for casual gamers.",
        yearQuarter: "2026 Q3",
        status: "planned",
    },
    {
        title: "Wonkleboard mk.1 X",
        description: "Tablet for SFA and FPS players.",
        yearQuarter: "2026 Q3",
        status: "planned",
    },
    {
        title: "User design marketplace",
        description: "A platform for people to share their design for tablet, pen, etc.",
        yearQuarter: "????",
        status: "planned",
    },
    {
        title: "Wonkleboard mk.2 tablets",
        description: "Listen to feedback and improve.",
        yearQuarter: "????",
        status: "planned",
    },
    {
        title: "Wonkleboard mk.1 Pro",
        description: "Tablet for hardcore gamers.",
        yearQuarter: "????",
        status: "planned",
    },
    {
        title: "Wonklepad",
        description: "Wonkle keypad?",
        yearQuarter: "????",
        status: "planned",
    },
)

export default function Roadmap() {
    return (
        <div className="w-full">
            <section className="px-4 pt-32 pb-16">
                <div className="mx-auto max-w-4xl">
                    <h1
                        className="
                          mb-8 text-center text-3xl font-bold tracking-tight
                          sm:text-4xl
                          md:text-5xl
                        "
                    >
                        Roadmap
                    </h1>

                    <div className="space-y-6">
                        {entries.map(
                            ({ description, yearQuarter: estimatedTime, status, title }, index) => (
                                <Card
                                    key={`roadmap-${index}`}
                                    className={cn(
                                        "gap-3 border-4 bg-secondary-background",
                                        status === "completed" && "border-blue-500",
                                        status === "WIP" && "border-green-500",
                                        status === "planned" && "border-slate-400",
                                    )}
                                >
                                    <CardHeader>
                                        <div className="flex items-center gap-3">
                                            <span
                                                className={cn(
                                                    `
                                                      inline-flex items-center gap-1.5 rounded-full
                                                      border-2 px-2.5 py-1 text-xs font-medium
                                                    `,
                                                    status === "completed" &&
                                                        "border-blue-300 bg-blue-100 text-blue-800",
                                                    status === "WIP" &&
                                                        `
                                                          border-green-300 bg-green-100
                                                          text-green-800
                                                        `,
                                                    status === "planned" &&
                                                        `
                                                          border-slate-300 bg-slate-100
                                                          text-slate-800
                                                        `,
                                                )}
                                            >
                                                {status === "completed" && (
                                                    <CircleCheck className="size-4" />
                                                )}
                                                {status === "WIP" && (
                                                    <CircleDot className="size-4" />
                                                )}
                                                {status === "planned" && (
                                                    <CircleDotDashed className="size-4" />
                                                )}

                                                {status}
                                            </span>
                                            <p className="text-sm font-medium text-slate-500">
                                                {estimatedTime}
                                            </p>
                                        </div>
                                        <CardTitle className="text-xl">{title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="leading-relaxed text-slate-600">
                                            {description}
                                        </p>
                                    </CardContent>
                                </Card>
                            ),
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}
