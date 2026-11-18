# Native Vally guidance: authoring and separate execution profiles

Vally CLI/core/server compatibility requires >=0.19.0 without an upper bound,
including qualifying prereleases; the lockfile fixes the build/test resolution.
A user's selected compatible runtime is a separate resolved executable/version/profile identity.
Use existing supported discovery/validation; never install, silently switch
or infer features from newer upstream docs.

Authoring requires native static lint and safe context capture, not compatibility
with a runner. `authoringContract` describes preservation and authoring limits;
`backendProfile` is execution-only, including its additional full-engine profile.
Keep source/schema diagnostics, authoring limitations, execution compatibility,
runtime readiness and fresh approval distinct. Static lint is not complete schema
or project-config certification; unknown executors may pass without being loaded.
This reference is guidance, not an independently enforced schema or validator.
Create/Improve's backend-absent host-file procedure may save approved files without
native validation; it must not claim backend acceptance or runtime readiness.

Vally 0.19 moves experiment plugin declarations to `.vally.yaml` and native
lint can now load project grader plugins. This host refuses project `plugins`
before static lint or grader tests; neither execution profile supports project
plugins or project backend/eval-provider defaults. Preserve those declarations
and use a separately reviewed workflow rather than deleting them for acceptance.
Native eval lint reads owned copies of the definition, configuration, sidecars
and declared references, not mutable workspace configuration. Original changes
still invalidate the result; post-run checks alone cannot prevent plugin execution.

For the stock execution recipe, use a named eval with `defaults.executor: copilot-sdk` for actual behavior and
named single-prompt `stimuli` with native `graders`. `mock` is a synthetic
fixture/echo control, not real asset behavior. `mock-executor` is not supported.
Emit one standalone eval per `.eval.yaml` file, with `name`, `defaults`,
`agent_environment` when needed, and top-level `stimuli`. Do not emit a
`suites` wrapper: this host runs the individual eval definition, not a suite
collection. Existing suites or unfamiliar constructs can still be read/reviewed;
the excerpt reader must not flatten them into a standalone candidate.
Preserve requested coverage and existing custom fields, executors, graders,
timeouts and trials. Do not substitute this recipe for the user's configuration.
Runner presets or material adaptations need disclosed tradeoffs and approval.

At execution only, the source-observed bounded profile permits up to ten cases/ten graders per
case, one trial per case and 60s/1m or 120s/2m task deadlines; mock permits
60s/1m. A subject-MCP definition permits one case in the whole run with one
fresh owned server. That does not restrict an Evals MCP transport to one task.
Do not choose another model for the user; retain an explicitly requested
model or leave selection to approved execution. `auto` is not executable by this profile.
These are not generation or save limits.

## Separately approved full-engine mode

When the measurement needs repeated trials, longer native deadlines, prompt or
panel judges, setup commands, HTTPS Git clones, grader-only files, attachments
or multi-turn prompts, preserve them. The Runtime can plan
`vally-full-engine-v1` instead of weakening the eval to fit `vally-bounded`.
Discovery and authoring report this profile as advisory compatibility only;
Run enforces it. Supported shape is not native validation or execution readiness.

This mode uses the selected stock Vally engine and has **no bounded pre-tool
policy**. It requires a distinct trusted-full-engine acknowledgement for the
exact resolved snapshot, even with a mock subject. A mock subject with prompt
or panel graders still makes paid judge calls and needs approved credentials.
Review discloses setup commands, clone URLs/refs, judge configuration, credential
exposure, repeated-trial costs and the total wall-clock deadline. Setup can be
cached across trials by the native engine; do not promise independent resets.
Cancellation cannot undo arbitrary setup effects or remote writes.

An explicit `scoring.timeout` is a per-stimulus, per-trial grading budget, separate
from `defaults.timeout`. It requires full-engine approval and is preserved in
the snapshot and included in the host deadline. A grading timeout retains
completed checks and records unfinished grading as an error, never an ordinary
failing verdict or a pass at threshold zero.

The profile admits at most 100 total trials, 30 graders per case, positive
native duration strings up to 24h, and the same 512,000-byte original/resolved
definition limit. Scalar parameters and `${KEY=default}` use the selected
engine's interpolation API, with eval sidecar values taking precedence over
project defaults. Values are resolved before reference capture and approval;
literal `$${...}` escapes retain native semantics. Changing either sidecar,
the definition, a captured input or the runtime invalidates approval.

Parameter matrices, plugins/custom executors, local Git worktrees, custom model
providers and remote MCP are not executable by this profile. They are not
automatically invalid evals. Do not drop required features to fit a runner.
At execution, ordinary application environment values retain
the existing EVAL_/FIXTURE_/TEST_ policy; runtime settings and additional secrets
are not implicitly inherited. Windows shell execution requires short ordinary
local paths; an actionable path diagnostic is raised before approval.

Every completed trial is retained separately, including judge outcomes and
reported judge token usage when present. Missing judge usage and independently
unverified model or remote-source identity stay unknown. Native artifacts retain
the complete grader configuration/evidence. Strict matched-comparison metadata
is not issued for full-engine runs; inspect their individual saved evidence.

| Check | Native configuration | Bounded claim |
|---|---|---|
| `output-contains` | `substring`, optional `case_sensitive`, `negate` | Literal final output, not factual validity. |
| `output-matches` | `pattern`, optional `negate` | Final-output regex; anchor/escape exact task requirements. |
| `file-exists` | `path`, optional `negate` | Existence, not behavior. |
| `file-contains` | `path`, `value`, optional `negate` | Text in a bounded relative output file. |
| `file-matches` | `path`, `pattern`, optional `negate` | Regex in that file. |
| `completed` | No expected-value field | Completion, not business correctness. |
| `skill-invocation` | Exact `required` / `disallowed` names | Observed activation needs source/telemetry qualification. |
| `tool-calls` | `required` / `disallowed` object matchers | Exact identity/bounded string args; not successful or exactly-once execution. |
| `assistant-contains-tool-output` | Exact `tools` and `pattern` | Captured result later echoed, not necessarily correct state. |

For the bounded execution recipe, use types with `negate`, not negative aliases such as `file-not-exists`.
Optional grader `scope` is `parent` or `subagent`; omit for all agents.
Never guess `scope: all` or a runtime child ID.
The native validator owns grader syntax/identity rules; a host name-length
or uniqueness check is not evidence native Vally accepts that shape.

## YAML strings and regexes

Use literal YAML single-quoted
  strings (`'...'`) or block scalars (`|` / `>-`) for regex `pattern` values and
  multi-line `prompt` text so backslashes (`\b`, `\d`, `\s`) are not corrupted
  by YAML double-quote escape parsing. Keep regex patterns portable to standard
  JavaScript `RegExp` (avoid PCRE-only inline flags or unsupported lookbehinds) and
  validate every generated regex pattern before proposing the file.
## When authoring tools are unavailable

When no native or MCP authoring
  backend is exposed (such as a skills-only install in GitHub Copilot App or CLI),
  explain in one plain sentence that native Vally lint is unavailable in this
  session and proceed directly with the approved host-file creation flow instead
  of stopping at a backend error.

## Binding and source paths

Prefer `agent_environment` for new definitions. Native `environment` is a
deprecated alias supported for authoring: preserve its authored spelling unless
the user approves changing it. Reference capture normalizes it only in the
inspection copy, at root and stimulus levels, including named environments.
Supplying both spellings in one block is ambiguous and refused before lint.
Execution profiles require `agent_environment`; do not rename authored fields
solely to fit a runner without approval.
`skills` lists real skill directories, not SKILL.md files. `files` uses literal
`src`/`dest`; sources are final-eval-relative and destinations are disposable
workspace-relative. File staging is not native instruction/prompt activation.

Authoring mirrors explicit relative sources after native scalar parameter
resolution when needed for references. Named environments are inspected from captured project
configuration without changing the definition, and clone declarations are preserved without cloning.
File-backed (`file:`), local-path and network-share clone references are refused
before native lint: even static lint can canonicalize those paths. This is a
reference-safety limit, not the execution profile's HTTPS-only clone policy.
Provider/glob/absolute/outside references and complex YAML aliases/tags remain
unsupported for authoring. Preserve required configuration/context; do not
flatten or drop it for lint acceptance. Retain the unchanged draft for explicit
source review or a workflow supporting that context; a bound failed save cannot
be bypassed with another writer. Existing configuration/parameter sidecars remain
exact inputs, not secretly replaced empty files. Custom fields remain unchanged;
safe mirroring of known references does not certify every custom field's semantics.

## Unsupported essential measurement

The bounded profile does not accept multi-turn/attachments at execution,
command/setup/custom executors, plugins/simulation/Git environments,
`dest_root`, hidden `grading_environment`, remote MCP or native root-agent/
instruction/prompt selection.

Bounded-profile unsupported graders include command/program, semantic prompt/panel, diff,
transcript and metrics. Tool-call assertions do not provide sequence/count/
result filters, wildcard identity, nested/numeric args or arbitrary builtin-tool
proof. Preserve essential requirements as gaps instead of weaker substitutes.

## Evidence and approval

Authoring validation is static. It neither tests grader controls nor observes
subject use, outcome correctness or runtime readiness. Designed controls stay
unexecuted. No command, paid judge or model is automatic.

Begin/discovery does not create authoring metadata. Explicitly approved static
validation can create private staging/journal data and an owned temporary
workspace coordination guard, but publishes no eval/fixture outputs.
Confirmed cleanup releases ownership; uncertain process cleanup retains it.
This coordination is not a human-approval carrier or an OS sandbox.

The later Run workflow performs its own source/runtime checks and exact approval.
Declare actual case/trial/time/zero-retry enforcement. Total spend and internal
model requests are not hard-capped; required unenforceable hard policies must
be refused, not softened. Disposable workspaces are not OS/network sandboxes.
One attempt is not reliability, calibration or release-policy evidence.
