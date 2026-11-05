# Skill recipe

Read the real SKILL.md and required resources. Extract its exact frontmatter
name, trigger/exclusions, input requirements and outcome promise. Bind the real
directory in `agent_environment.skills`. Never create an easier replacement skill.

For a natural positive prompt, do not name the skill. Require observed invocation
using its exact declared name, plus an independent output/file-content outcome.
Add a near-miss with `disallowed` invocation and its own useful outcome.
An explicit `/skill-name` request tests forced invocation, not natural routing.

## Worked derivation

Suppose the inspected real asset is `release-notes`: it selects completed work
without changing the backlog. An existing input contains one done item and one
open item. The output oracle comes from those statuses, not a model's guess.
From `.copilot/evals/release.eval.yaml`, the pattern is:

```yaml
name: release-selection
defaults:
  executor: copilot-sdk
  runs: 1
  timeout: 60s
agent_environment:
  skills:
    - ../../.agents/skills/release-notes
  files:
    - src: ../../fixtures/backlog.json
      dest: backlog.json
scoring:
  threshold: 1
stimuli:
  - name: completed-work
    prompt: |
      Prepare release notes from backlog.json.
      Return only "- ID: title" bullet points. Do not change the backlog.
    graders:
      - type: skill-invocation
        name: selected-skill
        config:
          required:
            - release-notes
      - type: output-matches
        name: correct-note
        config:
          pattern: '^\s*- PM-101: Validate work-item updates\s*$'
```

This is a pattern, not permission to invent these files/IDs. Replace them only
from the selected project. The exact bullet oracle is justified by the prompt's
format requirement. It rejects the open item, extra invented items and empty
output. If read-only state is required, add an independent supported content
check for the preserved backlog; this output check alone does not prove it.
The threshold means all included checks must pass, not a population release
policy or reliability estimate. If preserving the backlog is essential, the
missing state check makes this fragment incomplete for that full contract.
For no-mutation requirements, finding the original records is insufficient:
additions and trailing content must fail too. Use the
[shared method's whole-state guidance](method.md), not record-presence checks.
The unchanged source, including its final newline, is an essential positive
control; a check that rejects it is not a useful preservation check.
`threshold: 1` is a worked example, not a default. Apply the project's applicable
scoring policy, including a valid lower threshold, and explain its source and
semantics without weakening essential requirements.

For a near-miss, sort three supplied identifiers rather than asking for release
notes: require the correct sorted answer and disallow `release-notes`. Do not
make the negative prompt "do not use release-notes"; that gives away the routing
decision. Documented empty-input/error behavior supplies a third case when known.

An activation grader checks normalized events. The report must still bind source
path/content and trigger type; missing telemetry means unknown, not confirmed
non-use. Synthetic events validate a grader, never live skill behavior.

## Related workflows and current limits

- **Evals workflow skills (`packages/plugin/skills/*`):**
  `create`, `improve`, `review`, `run`, `compare` and `setup` are the six
  canonical workflow skills shipped in `@github/copilot-evals-plugin`.
  Reference customization skills (`release-notes`, `issue-triage`,
  `bug-fixing` and `test-authoring` under `examples/project-maintainer/.agents/skills/`,
  plus `deploy` and `debug` under `examples/deploy-debug/.agents/skills/`) pair
  each skill with companion `evals/*.eval.yaml` or control fixtures.
- **Test graders (`/eval test-graders`):**
  Oracle, negative-control and saved-trajectory grading (`vally oracle` and
  `vally grade`) are provided through the native/CLI `test-graders` workflow
  and `<eval>.grader-tests.json` sidecars rather than a separate `grader-test`
  skill registration.
- **Rubrics and benchmark-derived cases:**
  Rubric-judge criteria and human-alignment practices are documented in
  `method.md` (`Methodology provenance`), and published benchmark patterns are
  adapted to local repository inputs with `metadata.derivedFrom` provenance. A
  standalone human-annotation analysis package and an automated
  `--from-benchmark` starter-generator CLI flag are not implemented and must not
  be claimed as shipped.
