# Tool and MCP recipe

Inspect the actual static schema, configured server entry and implementation/
contract needed to establish expected results. Do not connect to or enumerate
a server during authoring. A VS Code-provided tool is not automatically a tool
inside Vally's Copilot SDK executor.

The bounded execution recipe supports one owned local Node stdio server and one case per
fresh eval run. Use the explicitly configured Node executable, an absolute
in-root built JavaScript entry, declared dependencies as `agent_environment.files`,
and an explicit in-root cwd. Input file `src` references still use final-relative
paths. Do not invent machine paths, build missing code, run npm/npx, or add setup.
If the real prepared server bundle is absent, state the prerequisite.

Python, `uv run` and `uvx` stdio targets use the separately approved trusted
full-engine profile, not a Node shim or a wider bounded tool policy. Preserve
the real configured server name, command, arguments, cwd, environment, declared
local server dependencies/fixtures and task-specific required-call and outcome
checks. Do not replace a Python entry with JavaScript or invent a server.
Declare local path arguments in `agent_environment.files`; preparation preserves
workspace-rooted file/directory `dest` mappings, maps those destinations and cwd to
owned copies, and retains the original source hashes. Native per-trial
`dest_root: assets` inputs are unsupported for this separate service workspace;
retain that configuration for authoring rather than changing its meaning.
Root and case fixtures are combined; conflicting or duplicate destinations are
rejected consistently with the pinned native engine, not silently overridden.
An omitted cwd uses the owned workspace root. An explicit relative cwd remains
relative to the eval file and keeps its workspace-relative location.
One server, one case and one trial run fresh; split additional cases without
removing their checks.

Literal server application keys need not use the bounded Node profile's
`EVAL_`/`FIXTURE_`/`TEST_` prefixes. Credential and runtime-policy overrides remain
unsupported. A selected virtual-environment interpreter retains its launcher
location; its binary target and `pyvenv.cfg` are fingerprinted separately.

The workspace host must already have native Python and, when selected, uv/uvx.
Preparation inspects executable files without running Python, connecting to the
server, importing packages or installing runtimes. File presence is not server
readiness: provision required interpreter libraries and server dependencies
separately. The approval preview includes original and prepared launch details,
executable identities, declared inputs, model costs and exact server effects.
uv/uvx package resolution can download and execute package code only during the
separately approved run, with owned caches and Python downloads disabled.
uv project environments also use owned runtime storage. `uv run` may generate
a bounded, sanitized `uv.lock` beside a declared `pyproject.toml` in the service
copy; declared input lockfiles remain immutable.
An owned, fingerprinted unmanaged metadata boundary prevents uv from inheriting
undeclared parent projects/workspaces or modifying their lockfiles. This boundary
is disclosed before approval and does not replace declared service projects.
Launch options that override that policy are unsupported, not silently removed.
Full-engine approval explicitly acknowledges stock tool approval and no bounded
pre-tool policy; owned copies and credential-clearing overrides are not an OS
or network sandbox. Cancellation stops the owned process tree, not remote effects.
An unavailable runtime/profile or missing dependency must remain an actionable
execution prerequisite/error; it does not prevent authoring the real eval.

Use native `agent_environment.mcpServers` with the real server identity, `type:
stdio`, `command`, `args`, `cwd`, optional supported environment and 5s/15s timeout.
MCP tools need exact anchored names and string arguments for approved native use:

```yaml
graders:
  - type: tool-calls
    name: intended-read
    config:
      required:
        - name: '^work-items-get_item$'
          args:
            id: '^ITEM-101$'
  - type: assistant-contains-tool-output
    name: observed-title
    config:
      tools:
        - work-items-get_item
      pattern: '(Expected fixture title)'
  - type: output-contains
    name: correct-status
    config:
      substring: done
```

Replace names, arguments and expected data from actual sources. The observed
echo and independent correctness assertion prove different things. Neither a
matching tool request nor echoing its result establishes that a mutation worked.
If the requirement needs a state oracle that this execution profile cannot express,
preserve the oracle and report the execution gap; do not narrow authoring to it.

For documented errors, use a separate fresh case with valid-shaped but missing
fixture input, require the actual operation and the documented error report.
Don't invent a simulation mechanism. Pure MCP non-use tests are not supported
by the current required-call policy; omitting the server would not test routing.

Unsupported by this execution recipe: HTTP/SSE, third-party state reset, nested/numeric argument evidence,
arbitrary tools, count/ordering proofs and source association by display-name
alone. An inline server declaration is not a verified link to a workspace MCP
configuration entry. Missing native telemetry remains unknown.
