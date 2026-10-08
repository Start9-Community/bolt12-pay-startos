# AGENTS.md

This is a StartOS service-package repository — it builds a `.s9pk` for StartOS.

Develop it inside a StartOS packaging workspace created by `start-cli s9pk init-workspace`,
which provides the packaging guide and agent context one level up. If you're reading this in a
bare clone with no workspace, the full guide is at <https://docs.start9.com/packaging>.

**Start every task at the recipe index** — `../start-technologies/projects/start-sdk/docs/src/recipes.md`
(or <https://docs.start9.com/packaging/recipes.html>). It maps an intent ("prompt the user to create
admin credentials", "expose a web UI") to the constructs, the reference pages, and a named production
package to copy. Find the recipe before you read this package's neighbours: a package you reach by
grepping may be non-conformant, and the recipe outranks it.

Freshly scaffolded? Work the
[New Package Checklist](../start-technologies/projects/start-sdk/docs/src/new-package-checklist.md)
(or <https://docs.start9.com/packaging/new-package-checklist.html>) from top to bottom. It is a
guide page, not a file in this repo — read it, don't copy it in.

Keep `README.md` (technical reference for an AI support or administering agent) and
`instructions.md` (end-user docs) in sync with your changes. This file restates neither:
whoever changes the package has both, so it carries only what they don't — repo mechanics,
a change that looks right and is not, where the next thing gets added, a naming trap, a
build or test invocation particular to this repo.

**Fix a defect you spot rather than reporting it** — you have the package open and the
context to be sure. File **a GitHub issue on this repo** only when the call isn't yours to
make: you can't pin the cause down, two defensible fixes exist, or it's too large to ride on
the work in hand. An open issue is a report, not a queue — implement one when you're asked
to or when it's labelled `Approved`, then close it with `Closes #<n>`.

Don't record work in the repo instead: no `TODO.md`, no `NOTES.md`, no `PLAN.md`. What you
verified, tried, and decided belongs in the commit message and the PR body.

## This repo

- **Resolve LND's addresses with `getBridgeAddress`, chained `.const()`, importing the host ids and ports from `lnd-startos/startos/interfaces`.** Don't read `net.assignedPort`/`assignedSslPort` directly: which of those is populated depends on how the dependency bound the port, and `getBridgeAddress` reads the binding's own derived address instead.
- **Never ask LND to enable onion messages.** LND 0.21 advertises them natively, and setting `protocol.custom-*` on top aborts server creation (`feature bit: 39 already set`) and crash-loops it.
- **Keep the primary URL's `fallback: false` and the hand-written `taskSetPrimaryUrl`.** A fallback would advertise `.local` as the LNURL base, and `primaryUrl.setupTask` would raise a task on every fresh install, where LNURL is opt-in.
- **`store.json` lives on the `startos` volume, which is not mounted into the container and is not backed up.** That keeps the package's chosen URL out of the application's reach, but the primary URL does not survive a restore. Don't move it to `main` to "fix" the backup without deciding whether the app should be able to see it.
