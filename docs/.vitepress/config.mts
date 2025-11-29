import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Wonkle",
    description: "Wonkle documentation & blog",
    head: [["link", { rel: "icon", href: "/favicon.svg" }]],
    themeConfig: {
        logo: "/favicon.svg",

        search: {
            provider: "local",
        },

        nav: [
            { text: "FAQ", link: "/faq" },
            { text: "Manual", link: "/manual" },
            { text: "Docs", link: "/docs" },
            { text: "Blog", link: "/blog" },
        ],

        sidebar: {
            "/manual/": [
                {
                    text: "User Manual",
                    items: [{ text: "Index", link: "/manual" }],
                },
            ],

            "/docs/": [
                {
                    text: "Documentation",
                    items: [{ text: "Index", link: "/docs" }],
                },
            ],

            "/blog/": [
                {
                    text: "Blog",
                    items: [{ text: "Index", link: "/blog" }],
                },
            ],
        },

        socialLinks: [
            { icon: "discord", link: "https://discord.gg/h27rwcBn73" },
            { icon: "bluesky", link: "https://bsky.app/profile/wonkle.io" },
            { icon: "github", link: "https://github.com/wonkleio/wonkle" },
        ],
    },
})
