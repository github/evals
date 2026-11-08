# Delegated agent recipe

Stage the real profile with `agent_environment.files`, for example `src` pointing
from the final eval directory to the real file, and `dest` equal to
`.github/agents/release-manager.agent.md`. Use its exact frontmatter name; the
host supports the destination-filename fallback only when no name is declared.
Do not strip unsupported profile fields just to make a plan pass.

There is no verified native eval root-agent selector. Explicitly ask the parent
to delegate synchronously to the selected agent; label this forced delegation,
not natural routing. Include dependent real skills only if the profile needs them.

```yaml
graders:
  - type: tool-calls
    name: intended-agent
    scope: parent
    config:
      required:
        - name: '^task$'
          args:
            agent_type: '^Release Manager$'
  - type: completed
    name: child-completed
    scope: subagent
  - type: output-matches
    name: child-correct-answer
    scope: subagent
    config:
      pattern: '^\s*- PM-101: Validate work-item updates\s*$'
```

Derive the outcome from real task data; this fragment is not an answer to copy.
Escape regex punctuation in agent names. Required task matching is not an
exactly-once check, successful delegation, or child correctness. The host needs
correlated child configuration, selection, lifecycle and parent completion
evidence. Multiple children make generic subagent-scoped outcomes ambiguous.

Use an independent result in every case, including failure/non-delegation cases.
If the case requires unsupported child-specific scope or isolation, report it.
Native agent execution later requires the host's explicit full Copilot CLI
selection; don't install or launch it during authoring.
