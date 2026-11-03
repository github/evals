---
name: compare
description: Help users define a task comparison from short requests such as generating release notes with and without a skill or asking whether any named skill is still effective, helping, or worth using. Compare saved runs or explore one task with a real skill included in or left out of the prepared inputs, not arbitrary file or model comparisons. Use the existing Compare workflow, independent checks, Create when needed and separate approvals. Does not prove the skill was absent or helped, edit assets, retry automatically or guarantee quality.
argument-hint: Two saved runs, or one skill and task to compare
user-invocable: false
disable-model-invocation: false
---

On CLI hosts, prefer `compare_evals`, `compare_saved_results` and `compare_skill`
for `copilotEvals_compare`, `copilotEvals_compareRuns` and
`copilotEvals_compareSkill`, respectively, throughout this skill.
The schemas and permission requirements are unchanged.

# Compare saved results or one skill on one task

Use plain English without em dashes, filler, vague claims or unnecessary jargon.
Keep meaningful limits and approval requirements. Report proposed, saved and
executed work separately and accurately.

Treat the result as an exploratory observation; it cannot show that the skill helps.
Loading this guide does not approve preparing, saving or running anything.

When no native Compare tool is exposed, use `evals_compare_saved_runs` if exposed for saved results.
Refresh unfiltered `evals_inventory`; match exact `runId` values, not titles, and
retain their emitted handles. Supply `workspaceId`, `inventoryId`,
`originalHandle`, `changedHandle` and explicitly selected `descriptive` or `strict`
mode. Ask for the mode if it is unclear. Strict reports use an exact returned
`axisKey`; never invent a key, silently switch modes, rerun or publish a receipt.
Stop after explaining this read-only result. Standalone MCP does not provide
included/omitted skill experiments; do not substitute two ordinary runs.

## Start with the user's goal

Accept ordinary requests, not just evaluation terminology:
- "Help me generate release notes with and without my release notes skill."
- `/eval compare release notes gen without my skill`
- "Is my release notes skill still effective?"
- "Is my test-authoring skill still helping me?"
- "Is release-notes still effective?"
- "Does test-authoring still improve my results?"
- "Is bug-fixing worth using?"

Use whichever skill the user names; these examples are not keyword rules.
Interpret equivalent effectiveness, usefulness, and value questions by meaning,
even without "my", the word "skill", or an explicit with/without request.
Resolve the name against discovered project skills. If it is ambiguous or
unavailable, ask which real skill they mean rather than substituting an example.

Keep conversational intake to one or two sentences unless the user asks for detail.
Help define one useful task
and what success means using project requirements, fixtures and existing evals,
not just the skill's claims. Propose a concrete default when evidence supports it:
"Let's compare completed-work release notes from this backlog, without changing it."
Ask one focused question only when a consequential input or outcome is missing.
Do not repeat information already supplied, give the user a long prompt to copy,
or require them to write the task specification, eval filename or tool arguments.
Once the goal is clear, use the exposed Compare tool; do not send the user back to
a command or ask them to restate the request.

An effectiveness or "still helping me" question starts the Compare flow by
defining a useful task comparison. It is not evidence that the skill is effective
or ineffective globally.
Keep the task neutral and the checks independent. Native forms own source/tool
choices and exact approvals; do not echo their full details in conversational
prose or omit material risks from the required review.

## 1. Choose the question and real inputs

Use the existing `/eval compare` workflow, not another skill slash command.
When `copilotEvals_compare` is exposed, `{}` opens its native intent selector.
In VS Code this tool instead opens or focuses the **Compare** view in the Evals
canvas. Use its actual empty-object schema; do not send CLI-only intent or
execution parameters. If it returns `opened` or `focused`, direct the user to
choose saved runs or a skill comparison in the canvas and stop. This is a UI
handoff, not a prepared or completed comparison; inputs are not transferred.
If it returns `unavailable`, report its message and stop with **not run**.
The canvas retains input selection and separate preparation/execution approvals.
Carry forward explicit user choices using its actual schema; do not ask the same
question again or replace a native selection with a model guess.
For two saved runs select `intent: "saved"` with their exact identities.
Descriptive mode keeps independent counts; strict mode needs verified matching
evidence and one supported change. Reading saved results never reruns or regrades.
If only `copilotEvals_compareRuns` is available, it is the saved-results path.
Do not silently promote an ineligible pair into strict evidence or a new run.
When handed off from Review after an explicitly approved target-asset fix for failing trials and a post-fix `/eval run`, compare the saved pre-fix and post-fix runs (`intent: "saved"`) or evaluate the old vs. updated asset on the same eval before claiming improvement.

Unless the user explicitly requests saved results, with/without and skill-usefulness
questions select `intent: "skill"`; do not ask the user to repeat that choice.
Carry the named skill into the native tool and omit `eval` when the user wants
help finding a scenario. The host checks saved tasks for compatibility with the
selected skill and offers eligible scenarios plus Create. It reports
excluded tasks without modifying them. Let the user choose a scenario when
more than one is suitable; do not substitute a task they explicitly selected.
Do not require the user to know an eval filename or type tool-argument JSON.
For an explicit preview-only or setup-only request, use `previewOnly: true`.
Otherwise the native workflow shows the preview and collects preparation and
per-condition approvals in the same journey; the initial request grants none
of those approvals.
If the intent is unclear, confirm that the question is the skill included versus
omitted from prepared inputs on the same task.
Other treatment types, campaigns and statistical claims are unsupported.

Choose one real skill and one saved single-case eval in the current project.
The shared native tool's omitted selections open project pickers;
`copilotEvals_compareSkill`, when exposed separately, uses the same controller.
Ambiguous or unavailable sources need explicit selection, not silent replacement.
Do not scan global configuration or execute the skill to discover it.

If the task does not exist, choose the native **Create a neutral task** option.
It binds canonical Create to the selected skill and independent success/protected
checks and inert inputs. Saving needs its supported approval.
Do not edit the skill, substitute a synthetic skill, or execute a partially saved
bundle. A complete save offers **Return to Compare**, bound to the original
request and exact saved eval. Acceptance returns a read-only preview, not
preparation or execution. Partial/declined saves cannot continue; use the same
request/proposal for a save retry and canonical retryRequestId for unsaved changes.
Do not guess the latest eval or repeat a preview already returned by this handoff.

Review the same neutral task and independently justified business/protected
checks for both conditions. A skill invocation, file existence or completion
message alone is not correctness. Do not weaken checks to obtain a favorable
comparison. The task must not demand skill invocation or name the treatment.
Native tasks require an explicit recorded model and an independently selected
supported `taskTools` list. The native execution flow can collect that selection
when it is omitted; an unconfigured preview is not execution approval.
Do not infer broader tool access from the skill.

## 2. Preview without effects

Use the actual schema of the shared Compare tool with `intent: "skill"` and
`previewOnly: true` (or the exposed dedicated skill tool)
when a preview is requested. Supply only explicitly selected skill/eval names,
task tools and protected check identities. The host binds current source hashes
and rejects unsupported closures or changed inputs. Preview inputs are
**unreviewed**, not proof that the user accepted the checks. A later explicit
review binds the common-input identity; source/fixture/check changes require
fresh preview and review.

Show both conditions as **skill included in prepared inputs** and **skill omitted
from prepared inputs**. Other skill discovery is **unverified**: the agent might
find the omitted skill elsewhere, and including it does not mean it ran.
Show the task, independent checks, requested model/runtime, one case and one
trial per condition, actual timeout and zero automatic retries.
Total spend and internal model requests are not hard-capped; requested model
is not actual observed identity. Required unsupported isolation, hard spend or
tool controls must be refused, not weakened.

## 3. Request execution only through the host

When the user requests the experiment, call the exposed
shared native Compare tool with `intent: "skill"` without `previewOnly`,
using the same selections.
The native host asks before preparing snapshots/static validation and separately
before each exact arm run, including authentication, tools, limits and files.
Native approval is **host-mediated and may be delegated**: the host or automation
may have approved it. Do not describe it as consent from a person or eligibility for strict Compare.
Only the shared Runtime contrast lifecycle executes conditions through the Run
owner, serially, at most once each. CLI and Canvas must not create separate loops.

Declined preparation runs nothing. Declined/cancelled execution preserves
failures and both intended slots, including the unstarted condition.
Use the host's status/cancel controls for this comparison and both condition run IDs (`armRunIds`);
historical readback does not grant restart or cross-owner cancellation.
No automatic retries,
credential changes, installs, terminal fallback or alternate runner.

If this tool, native forms or required runtime support are unavailable, stop at
**setup only: not run**. A supported compiled host is required; installing these
instructions alone does not provide execution. Never manufacture a result.
Hosts that require protected approval retain that policy; ordinary elicitation
acceptance is not protected consent.

## 4. Explain the observation

Lead with the returned compact summary and offer **Done** or **View details**,
not a full technical dump or a new model explanation pass.
Report exact contrast and arm run identities, actual recorded approval origin,
per-condition outcomes and
independent check results. Use available actual duration/tokens/cost only with
their recorded comparison limits; missing identity or usage stays **unknown**,
not zero or a match. Failed, cancelled and incomplete results stay visible.

Explain observed differences without causal certainty, statistical confidence,
global usefulness, Remove/Keep/Update advice or automatic asset adoption/removal.
Do not mint a strict comparison receipt. Reviewing output is not permission for
another run or a skill edit.
