import "react"

type RybbitEvent =
    | {
          "data-rybbit-event": "explore-products"
          "data-rybbit-prop-location": "homepage hero"
      }
    | {
          "data-rybbit-event": "open-discord"
          "data-rybbit-prop-location":
              | "homepage hero"
              | "footer"
              | "waiting-room-wonkleboard-lite-mk1"
              | "waiting-room-wonkleboard-pro-mk1"
              | "waiting-room-wonkleboard-x-mk1"
      }
    | {
          "data-rybbit-event": "open-opencollective"
          "data-rybbit-prop-location": "footer"
      }
    | {
          "data-rybbit-event": "open-bluesky"
          "data-rybbit-prop-location": "footer"
      }
    | {
          "data-rybbit-event": "open-github"
          "data-rybbit-prop-location": "footer"
      }
    | {
          "data-rybbit-event": "open-email"
          "data-rybbit-prop-location": "footer"
      }

declare module "react" {
    // https://rybbit.com/docs/track-events
    interface HTMLAttributes {
        // ❌❌❌ DO NOT USE THESE DIRECTLY. USE rybbit FUNCTION in src/lib/utils.ts INSTEAD ❌❌❌
        "data-rybbit-event"?: RybbitEvent["data-rybbit-event"]
        "data-rybbit-prop-location"?: RybbitEvent["data-rybbit-prop-location"]
    }
}
