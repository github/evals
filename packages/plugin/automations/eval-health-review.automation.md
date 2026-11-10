---
version: 1
id: "eval-health-review"
name: "Review project evals and customizations"
description: "Inspect project skills, agents, instructions, eval definitions, and saved results for gaps or regressions."
schedule:
  kind: cron
  expression: "0 9 * * 1"
  timeZone: local
---

Use the review skill to inspect the current project's eval definitions, skills, custom agents, instructions, and recent saved results. Summarize high-priority coverage gaps, broken references, or failing checks and recommend the next improvement.
