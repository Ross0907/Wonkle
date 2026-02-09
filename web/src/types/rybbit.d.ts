import "react"

type RybbitEvent =
    // Home Hero
    | "home-hero-explore-products"
    | "home-hero-join-community"
    // Home Products
    | "home-products-wonkleboard-lite-mk1"
    | "home-products-wonkleboard-pro-mk1"
    | "home-products-wonkleboard-x-mk1"
    // Join waiting room
    | "join-waiting-room-wonkleboard-lite-mk1"
    | "join-waiting-room-wonkleboard-pro-mk1"
    | "join-waiting-room-wonkleboard-x-mk1"
    // Footer
    | "footer-discord"
    | "footer-opencollective"
    | "footer-bluesky"
    | "footer-github"
    | "footer-email"

declare module "react" {
    // https://rybbit.com/docs/track-events
    interface HTMLAttributes {
        "data-rybbit-event"?: RybbitEvent
        // We're not using data-rybbit-prop-* because it's not type-safe
    }
}
