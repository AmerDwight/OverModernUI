# Console — UI Kit

An interactive recreation of the **OverModern Console**: a cloud-infrastructure /
observability dashboard. It demonstrates the design system composed into a real
product shell.

## Run
Open `index.html`. The flow is interactive:
1. **Login** — submit the prefilled credentials (any value works) to enter.
2. **Overview** — live throughput chart, regional traffic, recent deployments.
3. **Deployments** — filterable build history (All / Production / Staging).
4. Other sidebar items render a labelled placeholder (kit covers the shell, not every surface).

## Files
| File | Role |
|---|---|
| `index.html` | Orchestrator — loads React, Babel, the DS bundle, then every screen. |
| `console.css` | Layout-only styles. All color/type/spacing come from DS tokens. |
| `App.jsx` | Top-level state: auth, active nav, environment. |
| `Sidebar.jsx` · `Topbar.jsx` | Persistent navigation chrome. |
| `LoginScreen.jsx` | Glass auth card over grid + aura background. |
| `OverviewScreen.jsx` | Stat cards, SVG area chart, regions, deployment feed. |
| `DeploymentsScreen.jsx` | Tabbed deployment table. |

## Notes
- Screens are **plain Babel scripts** (no `import`/`export`); they read components
  from `window.OverModernDesignSystem_22ac94` and register themselves on `window`.
- Components (Button, Card, Badge, Input, Tabs, Avatar, Icon, …) come straight from
  the design system bundle — none are re-implemented here.
- The product/company ("Northwind Labs", regions, metrics) is fictional sample data.
