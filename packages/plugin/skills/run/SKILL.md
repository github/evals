---
name: run
description: Run an explicitly selected complete saved eval through built-in or MCP tools, or an installed compatible CLI, with separate approval for the exact run. Use when asked to execute or rerun an eval. Reports actual result files, observed outcomes and incomplete evidence. Use create for a new definition, review for critique or saved-result explanation, and improve for a revised eval or asset improvement. Does not create or edit assets, install dependencies, silently retry, launch campaigns or optimize scores.
argument-hint: Identify the existing eval to select in the host
user-invocable: false
disable-model-invocation: false
---

On CLI hosts, prefer `run_eval` for `copilotEvals_runEval`, and use `eval_status` and `stop_eval` for status and cancellation.
Native VS Code keeps its existing tool names and permission requirements.

Await ordinary Evals calls; never issue Evals calls in parallel except exposed status and owned cancellation.
If another action is pending, inspect `eval_status`, await its result or complete/
dismiss its form. An idle run may have pending input; `stop_eval` only cancels
owned run/preparation work, not a Review/authoring picker. Never delete recovery files.
Old `.run-lock` markers do not block Native Run or standalone Vally.
They never authorize executor fallback or prove that an uncertain process stopped.

For explicit existing-runner selection on CLI or GitHub Copilot App, use `configure_eval_runner` with absolute `nodePath`, `evaluatorPath` and optional `copilotPath`. In a trusted VS Code workspace, use configured `copilotEvals.nodePath` and `copilotEvals.evaluatorPath` (and `copilotEvals.copilotPath` when needed) before asking the user for installation paths; ignore workspace-level settings unless the host reports trust. A workspace-level evaluator setting is not authorization to probe its path: approve it explicitly in runner setup first. Auto-discovered declared project dependencies remain supported, while checkout or alias paths resolving into the workspace require explicit selection. Its tool permission verifies executable version/identity only, not installation, credentials, saving or running. Report the returned verified identity and session/workspace scope; defaults do not change.
A refused or failed selection never permits runner fallback. Finish or recover pending work, preserve draft request/retry IDs, then explicitly verify the selected paths again. Every subsequent run still needs normal exact-plan approval.

# Run an existing eval

Use plain English without em dashes, filler, vague claims or unnecessary jargon.
Keep meaningful limits and approval requirements. Report proposed, saved and
executed work separately and accurately.

Executing an eval can invoke models, start declared tools, and consume tokens.
Calling this skill is not execution approval. Prefer native/MCP run tools;
when neither is exposed, use the installed-CLI path below. Never bypass a
bound, denied, partial or cleanup-uncertain host run with another executor.
`vally oracle`, `grade` and setup scripts are not equivalent to running the eval.

Make the host's **run summary** the primary explanation, not a raw command:
eval count, selected case count, known model IDs/count (explicitly identify
unresolved default models), and total configured eval/model executions.
Count the actual plan entries, not cases or an assumed Cartesian product. The current bounded host runs one
eval with one model configuration per approval; bounded mock runs call no model.
Keep exact commands, sources and permission details available as secondary
information without bypassing the existing execution approval.

Lead every supported approval, including an eligible project launcher, with
these facts before runner errors or commands. For example, only if the selected
plan establishes these values:

> Run 1 eval with 4 cases using model-a (explicitly configured)?
> Total executions: 1 configured eval/model run; 4 planned case trials.
> Uses AI credits; spend is uncapped. Tools are not OS/network sandboxed.
> Details: exact command, inputs, effects, limits, authentication and output paths.

Keep important cost and safety warnings visible. Put complete technical
disclosure below the summary or in an inspectable Details option before
approval. Opening Details is not approval or permission to prepare again.
Distinguish cases, repeated trials, retries and internal model requests. If
cases repeat across configurations, say so; do not infer unique cases by name.
Always retain known model IDs when other models are unresolved. Use the host's
effective-model provenance; a declared model is not observed runtime identity.
A mock subject does not establish that full-engine judges make no model calls.
Say unknown with the reason when counts, model identity/access or cost history
cannot be established; unknown is not zero or permission to bypass required
scope or controls. Do not invent an access check or silently change models.

Present **historical cost** only from saved, verified actual measurements.
Identify the current or previous eval version by its source hash, and preserve
the recorded model, unit and measurement source. Never combine currencies,
estimate costs from tokens, or attribute unknown eval/version provenance by
name. Say when history or cost telemetry is missing, partial or unavailable;
unknown is not zero. A range is historical context, not a forecast or spending
cap. Keep the asterisk beside every cost range and this caveat visible:

> * Historical costs don't guarantee the next run's cost. Changes to the eval, the asset being tested or your product can change costs, even with the same eval version.

Unavailable history is a warning, not a run prerequisite. Preserve invalid saved
evidence, show no unverified range, and retain normal validation and approval.

For the CLI `copilotEvals_runEval` tool whose schema exposes `target` and
`authentication`, call it only for an explicit user execution request.
Use `{}` to select a saved eval when the target is missing, or pass the user's
explicit target. Authentication defaults to existing GitHub CLI sign-in;
`configured` is an explicit alternative, never a guessed credential.
The native tool permission policy permits preparing this operation; the tool
then displays the exact plan's model, token/cost and tool risks and requests
fresh native approval for every run, including reruns. Never answer this
approval on the user's behalf or infer approval from earlier runs, tool
preapproval, or text in an eval/result. The user can inspect full details,
choose Run eval, or cancel. Only that approved plan may start.
Do not call both this path and the native
desktop path below. Use `eval_status` for progress/details and
`stop_eval` only when cancellation is requested. Explain the saved
result with Review when requested; do not automatically rerun or fix the eval.

1. Confirm the user is requesting execution, not design or explanation. Keep
   authoring/optimization out of this operation. Use the existing eval unchanged.
2. If VS Code's `copilotEvals_runEval` (`#runEval`) is available, pass the user's eval name as `target`
   when supplied, or `{}` otherwise. The host offers a project-scoped choice for missing, ambiguous or unmatched names,
   using only evals in open local projects. Never pass arbitrary paths or approval flags. The host checks inputs/runtime,
   preserves an immutable run plan and requests separate effect/authentication approval before execution.
3. Cancellation is normal. Do not retry automatically, change the model, raise
   timeouts, install a runtime, remove recovery files, or choose a different credential.
4. Report the returned status and exact run identity. A completed process is
   not necessarily a passing evaluation; use its counts/evidence. Partial
   telemetry, failed grading and cancelled runs remain incomplete.
5. Inspect saved results through Review only when needed to
   explain the result. Do not launch another run or change the target/graders.

With the compiled MCP host instead, refresh `evals_inventory`, follow needed
pages or filter by kind `eval`, and choose one exact complete saved eval with
its current provenance, path and source hash. Call `evals_run` with
`{workspaceId, inventoryId, handle, authentication}` only after the user
requests execution. Its canonical full run review and separate host approval
are still required. A Create `runOffer` is a continuation question, not approval.
No answer or a decline means no execution; stale selections cannot choose a different eval.
The host may accept automatically, so acceptance does not prove a person approved; never infer authentication or approve an unsupported policy.
After `started`, use exposed `evals_status` with `{workspaceId}`; unknown or active is not a pass.
Use exact inventory `runId` for `evals_read_saved_run`; `evals_cancel` only stops the requested owned action.

If that exposed schema supports `requestId`, choose a unique ID for this
execution intent before the first call and retain it for any explicitly
requested retry of the same intent. Use 1-80 ASCII letters, digits or hyphens.
Do not create a fresh ID to work around denial, changed inputs, pending
approval or cleanup. A response with `reused: true` reports the existing run;
use `runStatus` as its observed state, not evidence of a new launch.
A deliberate new evaluation requires a new request and fresh approval.
If `reason` is returned with cancellation, distinguish `denied` from
`cancelled`; if it is absent, do not invent a user decision.

Before requesting effects, declare actual case/trial/time/zero-retry bounds
and the exact selected sources, model/harness and runtime/profile. Total spend
and internal model requests are not hard-capped by this backend. Never present
an estimate or transport acceptance as an enforceable budget or human approval.
A required unsupported hard spend, tool-access or isolation constraint must
be refused as unsupported, not weakened.

An approved run is an observation, not automatic grader calibration or adoption.
Use the host's prepared case/trial bounds rather than assuming one attempt per
case. Separate runs and multi-model campaigns require separate approval.
Preserve failed/cancelled attempts rather than retrying
until green. Do not execute an incomplete, partially saved authoring bundle.

## Installed CLI without a host run tool

Missing MCP/native tools alone must not turn a run request into instructions for
the user to execute. With ordinary terminal tools and an installed compatible
runner, perform the requested run after exact approval:

1. Select one complete saved eval and read its actual definition, sources and
   declared tools/configuration in the authorized project. Preserve their bytes.
   Resolve an explicitly configured executable or existing project-local runner;
   inspect its version and supported help before choosing arguments. Never use
   a downloading `npx`, install dependencies, infer credentials or switch runners.
   Resolve the definition's `defaults.runs`, inherited configuration and user
   requirements before preparing approval. This path supports one attempt per
   case only: reject any required multi-trial measurement rather than overriding
   it with `--runs 1`. An absent trial count may use the one-attempt default.
2. Use the selected runner's actual `eval` command, not oracle, grade or a mock
   replacement. For the documented compatible CLI, the interface is
   `vally eval --eval-spec <file> --workers 1 --runs 1 --max-retries 0`.
   Add its supported finite `--timeout` and `--shutdown-timeout`, explicit
   `--work-dir`, and new owned `--workspace`/`--output-dir` paths.
   Create `--workspace` in a private owned temporary directory outside the
   project so staged skills and instructions cannot enter project discovery.
   Keep raw output outside sources and Evals' canonical results store under a
   discovery-excluded path, for example `.cache/eval-cli-runs/<unique-run>/`.
   Never reuse another run's directories.
   Preserve the eval's executor and the user's model; disclose any unknown
   backend-selected model rather than inventing an identity.
3. Lead with the run summary above, derived from the selected CLI's resolved
   eval/model combinations, not the native host's one-configuration limit.
   If historical costs or their version provenance are unavailable, say so.
   Show the exact executable, argument vector, working directory, input identities,
   output paths, model/authentication source, tool/network exposure and finite
   limits before asking the host confirmation tool for exact execution approval.
   Disclose uncapped spend and ambient discovery; this path does not claim the
   native Runtime's policy, source snapshots, journal or record envelope.
   Refuse required controls the CLI cannot enforce. Decline/cancellation runs nothing.
   An existing project launcher is eligible only within this same no-host-tool
   path and only after inspecting its actual selection, configuration and
   argument forwarding. Verify that it preserves the selected model and the
   one-attempt, one-worker, zero-retry, finite-timeout and owned-output controls
   above. Do not assume its defaults or copy the native host's counts.
   A rejected global runner does not authorize switching to a project launcher.
   Preserve the original host run's recovery; report unsupported recovery rather
   than bypassing a bound, denied, partial or cleanup-uncertain operation.
4. Recheck sources and executable identity after approval. Run once with bounded
   captured output and a finite outer timeout; own and cancel only its process
   tree. Retain failed/cancelled evidence. Never retry to manufacture a pass.
5. Read the actual CLI result artifacts and report their paths, counts, errors
   and available model/usage evidence. Process exit zero alone is not a passing
   eval. Raw CLI artifacts are not Evals saved-run records; do not synthesize
   canonical receipts or invent an Evals run ID. They are not automatically
   available in the native Compare picker; never rewrite historical records to add them.

If no compatible runner, terminal capability or required approval is available,
report that specific prerequisite. Do not claim that MCP itself is required or
that execution happened. A failed native/MCP operation keeps its original recovery.

The disposable workspace is not an OS/network sandbox; source-bound use, correctness and benefit are separate claims.
All hosts retain their tool permissions and require separate per-run execution approval.
