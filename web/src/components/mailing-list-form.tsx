"use client"

import { cn } from "@/lib/utils"
import { Icon } from "@iconify/react"
import confetti from "canvas-confetti"
import { useMutation } from "convex/react"
import { useState } from "react"

import { api } from "../../convex/_generated/api"
import type { Id } from "../../convex/_generated/dataModel"
import { Alert, AlertDescription, AlertTitle } from "./ui/alert"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

export default function MailingListForm({
    source,
    productId,
}: {
    source:
        | "homepage"
        | "product-tablet-mk1-lite"
        | "product-tablet-mk1-lite-cta"
        | "product-tablet-mk1-pro"
        | "product-tablet-mk1-pro-cta"
        | "product-tablet-mk1-x"
        | "product-tablet-mk1-x-cta"
    productId?: Id<"products">
}) {
    const [email, setEmail] = useState("")
    const [honeypot, setHoneypot] = useState("")
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
    const [message, setMessage] = useState("")

    const joinWaitlist = useMutation(api.waitlist.joinWaitlist)

    const getClientIdentifier = () => {
        const ua = navigator.userAgent
        const screen = `${window.screen.width}x${window.screen.height}`
        return btoa(`${ua}-${screen}`).substring(0, 32)
    }

    const triggerConfetti = (origin: { x: number; y: number }) => {
        confetti({
            particleCount: 70,
            spread: 60,
            origin,
            startVelocity: 60,
            ticks: 200,
            gravity: 1.2,
            zIndex: 9999,
        })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setStatus("loading")

        const formElement = e.currentTarget
        const rect = formElement.getBoundingClientRect()
        const confettiOrigin = {
            x: (rect.left + rect.width / 2) / window.innerWidth,
            y: (rect.top + rect.height / 2) / window.innerHeight,
        }

        try {
            const result = await joinWaitlist({
                email: email.trim(),
                productId,
                source,
                referrer: typeof document !== "undefined" ? document.referrer : undefined,
                userAgent: typeof navigator !== "undefined" ? navigator.userAgent : undefined,
                honeypot,
                clientIdentifier: getClientIdentifier(),
            })

            console.log(result)

            if (result.success) {
                setStatus("success")
                setMessage(result.message)
                setEmail("")

                triggerConfetti(confettiOrigin)
            } else {
                setStatus("error")
                setMessage(result.message)
            }
        } catch (error) {
            console.error("Mailing list signup error:", error)
            setStatus("error")
            setMessage("Oops! Something went wrong. Please try again.")
        }
    }

    return (
        <div className="mx-auto w-full max-w-md">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
                <input
                    type="text"
                    name="website"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                    className="sr-only"
                    aria-hidden="true"
                />

                <div className="relative flex-1">
                    <Label htmlFor="email-compact" className="sr-only">
                        Email address
                    </Label>

                    <Icon
                        icon="lucide:mail"
                        className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-slate-400"
                    />
                    <Input
                        id="email-compact"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        disabled={status === "loading" || status === "success"}
                        className="pl-12"
                        aria-describedby={
                            status === "success" || status === "error" ? "form-message" : undefined
                        }
                    />
                </div>

                <Button
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    className="cursor-pointer bg-blue-600 text-white"
                >
                    {status === "idle" && (
                        <>
                            Subscribe
                            <Icon icon="lucide:arrow-right" className="h-5 w-5" />
                        </>
                    )}

                    {status === "loading" && (
                        <>
                            <Icon icon="lucide:loader-circle" className="h-5 w-5 animate-spin" />
                            Subscribing...
                        </>
                    )}

                    {status === "success" && (
                        <>
                            <Icon icon="lucide:circle-check" className="h-5 w-5" />
                            Subscribed!
                        </>
                    )}

                    {status === "error" && (
                        <>
                            idk
                            <Icon icon="lucide:circle-question-mark" className="size-5" />
                        </>
                    )}
                </Button>
            </form>

            {message && (
                <>
                    <Alert
                        id="form-message"
                        className={cn(
                            "mt-4",
                            status === "success"
                                ? "bg-green-50 text-green-800"
                                : "bg-red-50 text-red-800",
                        )}
                        role={status === "error" ? "alert" : "status"}
                        aria-live="polite"
                    >
                        <Icon
                            icon={
                                status === "success" ? "lucide:circle-check" : "lucide:circle-alert"
                            }
                            className="size-5"
                        />
                        <AlertTitle className="w-fit">
                            {status === "success" && "Success!"}
                            {status === "error" && "Error!"}
                        </AlertTitle>
                        <AlertDescription>{message}</AlertDescription>
                    </Alert>
                </>
            )}
        </div>
    )
}
