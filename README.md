# Bejakeun

**Turn conversations into customers.**

Bejakeun is building an AI sales workforce for businesses that want to respond to leads, qualify opportunities, follow up consistently, and keep their sales pipeline moving.

The brand is designed to support multiple industries. The first product direction is **Bejakeun Sales Agent**: a focused workflow for inbound conversations, lead qualification, follow-up coordination, and sales visibility.

## Product principles

- **Outcome-led:** help teams move real sales opportunities forward, not just answer FAQs.
- **Grounded:** responses should use approved business knowledge and clearly handle uncertainty.
- **Human-controlled:** sensitive actions, pricing commitments, and exceptions require the right approvals.
- **Honest by default:** this repository currently contains a marketing site and an interactive concept demo, not a production AI agent.
- **Build narrow, expand deliberately:** validate one repeatable workflow before adding industries, channels, or agent types.

## Current website

The landing page includes:

- AI sales workforce positioning and product narrative.
- Interactive concept demo with agent, pipeline, and revenue-insight views.
- Workflow overview, industry examples, automation guardrails, and FAQ.
- Responsive layout and keyboard-accessible navigation.

**Demo note:** all product metrics, contacts, and conversations are fictional. The demo does not send messages, call an AI API, connect to a CRM, or persist customer information.

## Technology

- React + TypeScript
- TanStack Start and TanStack Router
- Vite
- Tailwind CSS v4
- Lucide icons
- Vitest and Testing Library

## Run locally

Prerequisites: Bun or a compatible Node.js runtime.

```bash
bun install
bun run dev
```

## Quality checks

```bash
bun run test
bun run build
bun run lint
```

## Product roadmap

1. Validate a high-value sales workflow with prospective customers.
2. Run a tightly scoped, human-supervised paid pilot.
3. Build the first production workflow only after willingness to pay and operating constraints are clear.
4. Add secure channel integrations, auditability, permissions, and evaluation before enabling real-world actions.
5. Expand into reusable workflows and additional AI workforce modules based on retention and measured customer value.

## Repository

The main marketing page lives in `src/routes/index.tsx`; global visual styles and responsive behavior live in `src/styles.css`.
