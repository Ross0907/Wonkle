import {
    SiBluesky,
    SiDiscord,
    SiGithub,
    SiOpencollective,
    SiProtonmail,
} from "@icons-pack/react-simple-icons"
import "lucide-react"

import { Button } from "../ui/button"
import PronounceButton from "./pronounce-button"

export default function Footer() {
    return (
        <footer className="bg-white px-4 py-12">
            <div className="mx-auto max-w-6xl">
                <div
                    className="
                      flex flex-col items-center justify-between gap-6
                      md:flex-row
                    "
                >
                    {/* Brand and Attribution */}
                    <div
                        className="
                          text-center
                          md:text-left
                        "
                    >
                        <p className="text-sm text-slate-600">
                            Wonkle • /ˈwɑːŋkəl/
                            <PronounceButton />
                        </p>
                        <p className="text-sm text-slate-600">Made with ❤️ by gamers</p>
                    </div>

                    {/* Social Links */}
                    <div
                        className="
                          flex items-center gap-4
                          [&_svg]:size-6
                        "
                    >
                        <Button
                            asChild
                            className="
                              flex size-14 items-center justify-center bg-[#5865F2] text-white
                            "
                        >
                            <a
                                title="Join our Discord community"
                                href="https://discord.com/invite/h27rwcBn73"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Discord"
                                data-rybbit-event="footer-discord"
                            >
                                <SiDiscord size={24} />
                            </a>
                        </Button>

                        <Button
                            asChild
                            className="
                              flex size-14 items-center justify-center bg-[#7FADF2] text-white
                            "
                        >
                            <a
                                title="Support us on Open Collective"
                                href="https://opencollective.com/wonkle"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Open Collective"
                                data-rybbit-event="footer-opencollective"
                            >
                                <SiOpencollective size={24} />
                            </a>
                        </Button>

                        <Button
                            asChild
                            className="
                              flex size-14 items-center justify-center bg-[#1185FE] text-white
                            "
                        >
                            <a
                                title="Follow us on BlueSky"
                                href="https://bsky.app/profile/wonkle.io"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="BlueSky"
                                data-rybbit-event="footer-bluesky"
                            >
                                <SiBluesky size={24} />
                            </a>
                        </Button>

                        <Button
                            asChild
                            className="flex size-14 items-center justify-center bg-white text-black"
                        >
                            <a
                                title="View source code on GitHub"
                                href="https://github.com/wonkleio/wonkle"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                data-rybbit-event="footer-github"
                            >
                                <SiGithub size={24} />
                            </a>
                        </Button>

                        <Button
                            asChild
                            className="
                              flex size-14 items-center justify-center bg-[#6D4AFF] text-white
                            "
                        >
                            <a
                                title="Send us an email"
                                href="mailto:pompydev@proton.me"
                                aria-label="Email"
                                data-rybbit-event="footer-email"
                            >
                                <SiProtonmail size={24} />
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    )
}
