# Native instructions and prompt assets

Finding an instruction or prompt file does not make it runnable. The current bounded runner has no
verified instruction-loading or prompt-file expansion/invocation adapter.
Native `.github` instructions and AGENTS.md staging is rejected at execution; ordinary file
presence does not prove instructions were loaded.

Read the real asset to design a useful behavior contract and cases, but label
native execution **unsupported**. Do not convert instructions to a synthetic
skill, rename a prompt to ordinary documentation, paste frontmatter as a user
prompt, invent a root-agent selector or attach a manual relationship sidecar.
You can still read, review and author the intended eval.
Retain required configuration and disclose unsupported authoring-context limits.

If the user explicitly wants a resolved-text experiment instead of native asset
activation, explain that these measure different things. A faithful future
adapter needs source identity, actual injection layer, variable/resource
resolution, applicable scope and outcome evidence. Do not silently broaden
the current host profile to create that experiment.

Compositions are supported only to the extent each component's real binding and
observations are supported. You can test a skill and a delegated agent together.
To show workflow order, instruction obedience or general policy enforcement,
you need more than a declaration or calls recorded in the same run.
