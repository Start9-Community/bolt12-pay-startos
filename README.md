<p align="center">
  <img src="icon.png" alt="BOLT12 Pay Logo" width="21%">
</p>

# BOLT12 Pay on StartOS

> Everything not listed in this document should behave the same as upstream
> BOLT12 Pay. If a feature, setting, or behavior is not mentioned here, the
> upstream documentation is accurate and fully applicable — see the
> Documentation section of `instructions.md` for links.

[BOLT12 Pay](https://github.com/Alex71btc/lndk-pay) is a web front end for creating and paying BOLT12 offers through LND, with LNURL and Lightning Address support. This package builds it together with the LNDK runtime it needs, wires it to the LND on the same server, and adds one thing upstream cannot know: which of the server's addresses is the public one.

- **Upstream repo:** <https://github.com/Alex71btc/lndk-pay>
- **Wrapper repo:** <https://github.com/Start9-Community/bolt12-pay-startos>

---

## Table of Contents

- [Image and Container Runtime](#image-and-container-runtime)
- [Volume and Data Layout](#volume-and-data-layout)
- [File Models](#file-models)
- [Dependencies](#dependencies)
- [Network Access and Interfaces](#network-access-and-interfaces)
- [Installation and First-Run Flow](#installation-and-first-run-flow)
- [Actions](#actions)
- [Tasks](#tasks)
- [Health Checks](#health-checks)
- [Backups and Restore](#backups-and-restore)
- [Limitations and Differences](#limitations-and-differences)
- [Quick Reference for AI Consumers](#quick-reference-for-ai-consumers)

---

## Image and Container Runtime

One image, built here from the vendored upstream app plus the LNDK runtime it depends on.

| Property      | Value                                         |
| ------------- | --------------------------------------------- |
| Image         | Built from this repo's `Dockerfile`           |
| Architectures | x86_64, aarch64                               |
| Entrypoint    | The image's entrypoint, which runs `start.sh` |

| Subcontainer     | Purpose                                  |
| ---------------- | ---------------------------------------- |
| `bolt12-pay-sub` | The only daemon — the one to `attach` to |

**Two processes run in that one container.** The web app serves the interface, and a background `lndk` process — the thing that actually speaks BOLT12 — runs beside it and serves gRPC on container loopback for the app to use. `start.sh` starts both and waits for LND to become reachable before starting LNDK, so a BOLT12 Pay that comes up before LND is not broken, only waiting.

## Volume and Data Layout

Two volumes, and only one of them is mounted into the container.

| Volume            | Mount Point | Purpose                                     |
| ----------------- | ----------- | ------------------------------------------- |
| `main`            | `/data`     | App configuration, secrets, and LNDK's data |
| `startos`         | not mounted | Package state — the chosen primary URL      |
| LND's `main` (ro) | `/mnt/lnd`  | LND's TLS certificate and admin macaroon    |

The split matters: `startos` holds a value the _package_ owns and the application must never see directly, so it is deliberately kept out of the container. What reaches the app is the derived environment, not the file.

## File Models

One model, holding a single value.

| File         | Format | Modelled                | Written by                 |
| ------------ | ------ | ----------------------- | -------------------------- |
| `store.json` | JSON   | Yes — `FileHelper.json` | The Set Primary URL action |

It records `primaryUrl` — one of this service's own non-local addresses, chosen by the user. `main` reads it reactively through the primary-URL helper's `bestUsable`, so setting it restarts the service with the new value. If the chosen hostname moves to another port, `bestUsable` follows it; if the hostname is no longer one of the interface's addresses, it yields nothing and the four variables below are omitted.

**What the package derives from it is four environment variables**, not one: the LNURL base URL, its bare domain, and the LNURL and BIP353 addresses built from that domain. They are **defaults** — the application's own admin settings still override them — so a value set in-app and a value set here can disagree, and the in-app one wins.

A malformed URL yields nothing rather than a broken environment: the derivation parses the value and returns an empty set if it cannot.

Everything else the application configures, it configures itself, inside the web interface, on the `main` volume. The package models none of it.

## Dependencies

One, and it is required.

| Dependency | Required | Health checks required | Mounted                         | Why                               |
| ---------- | -------- | ---------------------- | ------------------------------- | --------------------------------- |
| LND        | Yes      | `lnd`                  | `main`, read-only at `/mnt/lnd` | Creating and paying BOLT12 offers |

The package reaches **both** of LND's interfaces over the internal bridge — REST and gRPC — and injects the resolved addresses into `start.sh`. The mounted certificate validates both legs, because it is a full chain ending in the server's root CA, which also signed what the REST proxy presents.

**LND binds neither until its wallet has been unlocked at least once.** Until then each address resolves to nothing and the package **omits the variable** rather than writing a placeholder; `start.sh` blocks on its own wait for the certificate and macaroon, the health check stays red, and `main` heals onto the real addresses with a single restart once LND binds.

**BOLT12 needs onion messages on LND**, which LND advertises natively from 0.21 onward. The dependency range admits only such versions, so the package configures nothing on LND.

## Network Access and Interfaces

One interface.

| Interface | Id   | Type | Port | Description                  |
| --------- | ---- | ---- | ---- | ---------------------------- |
| Web UI    | `ui` | ui   | 8081 | The BOLT12 Pay web interface |

Bound on the `main` MultiHost over HTTP and not masked. Once a primary URL is chosen, **Open UI** prefers that address when StartOS considers it reachable from the current session; an onion origin, for example, is used only from a Tor session.

**Which address this is reached at is not cosmetic here.** LNURL and Lightning Address require a _publicly resolvable_ host, because the sender's wallet — not the user's browser — has to fetch the well-known endpoint. A Tor or `.local` address works fine for the operator and cannot be used by anyone paying them. That is what [Set Primary URL](#actions) exists to settle, and why it only offers non-local addresses.

## Installation and First-Run Flow

There is no wizard, no credential, and no install task. The service starts, waits for LND, and serves its interface.

**LND must be installed and unlocked** before BOLT12 Pay is useful; installed first or second does not matter, since the package heals onto LND's addresses when they appear.

LNURL and Lightning Address are **opt-in**: the package does not force a primary URL at install, because a server with no public address has no honest value to choose. Set one when — and if — the user wants to receive payments at an address.

## Actions

One action.

### Set Primary URL

Chooses which of this service's non-local addresses to advertise as the LNURL and Lightning Address base. Run it after adding a public domain, and again if that domain changes.

- **What it changes:** `primaryUrl` in the package store, and through it four environment variables on the next start.
- **Cost:** if the service is running, it restarts to apply the new value.
- **Repeat safety:** idempotent; the last choice wins.
- **Input:** a dropdown of the service's current non-local addresses, with nothing preselected. **If the service has no non-local addresses the dropdown is empty** — that is a missing domain, not a broken action.
- **Choose a clearnet or custom-domain address.** Tor and `.local` will not resolve for whoever is trying to pay you.
- **It is not the last word.** The application's own admin settings override these values.

## Tasks

One, and it is raised by circumstance rather than at install.

| Task            | Severity   | Raised when                                            | Cleared when    |
| --------------- | ---------- | ------------------------------------------------------ | --------------- |
| Set Primary URL | `critical` | A previously chosen primary URL is no longer available | The action runs, or the chosen address returns |

**It is never raised on a fresh install** — only when a URL that _was_ set has since disappeared, typically because a custom domain was removed. That is the case worth interrupting for: the address the package advertised no longer resolves, which fails silently for senders and is invisible from the operator's side.

A user who has never set a primary URL sees no task, because there is nothing to repair.

## Health Checks

One check, on the only daemon.

| Check     | Displayed as | Method                 |
| --------- | ------------ | ---------------------- |
| `primary` | "Web UI"     | Port 8081 is listening |

It reports whether the web app is serving, which is not the same as being able to pay: LNDK runs beside the app and is not probed, so a green check with failing BOLT12 operations points at LND or LNDK rather than at the interface. The service logs are where that shows.

## Backups and Restore

The `main` volume is copied wholesale — `sdk.Backups.ofVolumes('main')`. That is the app's configuration, its secrets, and LNDK's data.

**The `startos` volume is not in the backup**, so the chosen primary URL does not survive a restore. On a restored server the LNURL and Lightning Address settings fall back to whatever the application itself holds, and Set Primary URL has to be run again if the address matters.

LND's credentials are not backed up here either — they belong to LND and are re-mounted from it on restore.

## Limitations and Differences

1. **The primary URL is not backed up.** It lives on the `startos` volume, which is outside the backup, so it must be set again after a restore.
2. **LNURL and Lightning Address need a publicly resolvable address.** Tor and `.local` cannot serve them, whatever is selected.
3. **The package's URL settings are defaults only** — the application's own admin settings override them.
4. **Mainnet only.** The macaroon path is pinned to Bitcoin mainnet.
5. **LNDK is not health-checked.** Only the web interface is.
6. **Upstream is vendored as a submodule**, so the packaged app is whatever commit that submodule points at rather than a published release.

---

## Quick Reference for AI Consumers

```yaml
package_id: bolt12-pay
image: built from ./Dockerfile # upstream app submodule + LNDK runtime
architectures:
  - x86_64
  - aarch64
subcontainers:
  - bolt12-pay-sub
volumes:
  main: /data
  startos: not mounted into the container # holds store.json
file_models:
  - store.json # on the startos volume
startos_managed_env_vars:
  - LND_REST_URL # resolved from lnd; omitted until lnd binds
  - LND_GRPC_ADDRESS # resolved from lnd; omitted until lnd binds
  - LNURL_BASE_URL
  - LNURL_BASE_DOMAIN
  - PUBLIC_LNURL_ADDRESS
  - PUBLIC_BIP353_ADDRESS
dependencies:
  - lnd # required, kind: running, read-only mount at /mnt/lnd
interfaces:
  ui: { type: ui, port: 8081 }
actions:
  - set-primary-url
tasks:
  - { action: set-primary-url, severity: critical } # only when a set URL disappears
health_checks:
  - primary # displayed "Web UI"
```
