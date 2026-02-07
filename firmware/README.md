# Wonkle Firmware

## Must read

- https://probe.rs
- https://github.com/stm32-rs/stm32f4xx-hal
- https://github.com/rust-embedded/cortex-m
- https://defmt.ferrous-systems.com
- https://docs.rust-embedded.org/book
- (optional) also check
  - https://github.com/rust-lang/rustlings
  - https://www.youtube.com/@therustybits/videos
  - https://doc.rust-lang.org/stable/book

## Setting up

1. Setup development environment with [mise](https://mise.jdx.dev/getting-started.html) and [nix](https://nixos.org/download/#download-nix)
   - [IDE integration](https://mise.jdx.dev/ide-integration.html)
2. add target for tablet microprocessor
   ```
   rustup target add thumbv7em-none-eabihf
   ```

## Commands

### Flash and run

See https://probe.rs/docs/tools/probe-rs/ for more information.

```bash
cargo run --release
```

### List USB devices

```bash
lsusb
```

### Show device descriptor

```bash
lsusb -v -d 1209:02d7 # (vid:pid)
```

### Show HID descriptor

You can use https://eleccelerator.com/usbdescreqparser/ to parse the output.

```bash
usbhid-dump -m 1209:02d7 # (vid:pid)
```
