# Telemetry

**Standalone telemetry is enabled by default when its connection string is configured.**
Release builds can override or disable the Plugin sender through
`COPILOT_EVALS_TELEMETRY_RELEASE`; see the root
`TELEMETRY.md` for the exact build setting and release prerequisites.
The artifact's the release distribution's telemetry receipt records its effective release status.
Standalone CLI/App collection follows the configured release default and
environment opt-outs, without a per-session consent prompt. Installing or
invoking the Plugin cannot override an opt-out or editor consent policy.

Evals registers no Copilot SDK or root plugin hooks, sends no hook telemetry,
and does not observe skill invocations or skill-document reads.
The Copilot extension observes its activation and direct CLI/tool/Canvas
workflow outcomes, maintaining workspace binding and command-session cleanup
through SDK metadata, Canvas host context, and passive `session.context_changed` / `session.shutdown` events (when a host terminates the extension process before delivering `session.shutdown` during an active run, `owned-process` terminates child runners and unique run directories leave subsequent sessions unblocked without a persistent workspace run lock). The skills do not ask models to send telemetry.
Possible Copilot-owned skill analytics are separate: Evals has not verified
their fields, access, host coverage or delivery. No replacement receipt is
claimed, including in non-Copilot harnesses.
the event inventory included below is the generated event inventory with engineering contact
`github/code-ai-evals`, not the user being tracked or proof of successful delivery.
The inventory documents Plugin telemetry; it does not configure Application
Insights or establish privacy approval.

The standalone integration uses the Node OpenTelemetry Azure Monitor trace exporter
and the Plugin's configured Application Insights resource. The connection string is
separate from VS Code's 1DS key and uses the Application Insights ingestion endpoint.
Each event is a dependency span named `GitHub.copilot-evals/<event>`, with the
same properties and numeric measurements as span attributes. Application Insights
serializes numeric attributes as strings. No resource metrics are exported.
It sends general OS, architecture,
and plugin version fields (`common.os`, `common.nodeArch`, `common.platformversion`,
`common.extname`, `common.extversion`) plus the optional cross-tool developer
device ID (`common.devdeviceid` from `@vscode/deviceid`, omitted when unavailable).
The resolver ships in the artifact, including Windows x64/ARM64 native helpers
in the universal Plugin. The version is embedded from `plugin.json` at build
time, not maintained as a separate runtime version constant.
It does not add repository names, paths, prompts, outputs or raw exceptions.
Every plugin event also carries `common.sessionid`: SHA-256 of the host session
ID, or a hashed random per-process identifier when the host ID is unavailable.
The Copilot extension uses its SDK session identity and metadata outside hooks,
and MCP reads `COPILOT_AGENT_SESSION_ID`. Equal supplied
IDs match across components. A process fallback cannot link separate processes.
The identifier is snapshotted at observation time; raw session IDs are not sent.
Hashing makes the identifier pseudonymous, not anonymous.

Once the release's `plugin` sender configuration is supplied, standalone Plugin
and MCP telemetry is enabled by default and disabled when
`COPILOT_EVALS_TELEMETRY=off`, `DO_NOT_TRACK=1` or `OTEL_SDK_DISABLED=true` is set.
When running inside a Copilot session (`joinSession`), the plugin resolves `host`
from `session.rpc.metadata.snapshot().clientName` (`github/cli` -> `copilot-cli`,
`github/autopilot` -> `copilot-app`, `vscode-agent-host` -> `vscode-agents`).
If `clientName` is absent, the shared classifier checks `COPILOT_CLI=1`,
`COPILOT_EXTENSION_PARENT_PID`, `COPILOT_SDK_PATH`,
`COPILOT_CLI_BINARY_VERSION`.
These fallbacks identify the runtime as `copilot-cli`, not an independently
verified CLI-versus-App distinction. Explicit client metadata takes precedence.
Unidentified clients send with `host: unknown`; environment opt-outs still
apply. Explicitly identified editor clients do not export without a consent
bridge: the native VS Code sender remains responsible for VS Code editor
telemetry, while the Visual Studio host supplies an explicit consent bridge
(`host: "visualstudio"`) backed by Visual Studio's privacy setting
(`TelemetryService.DefaultSession.IsOptedIn`) and standard environment opt-outs.
Once an editor is identified, later client metadata cannot remove that consent
requirement. Host attribution is not a grant of consent or authenticated identity.
MCP waits for client initialization before observing activation.
The unknown-host policy and session field have completed privacy/release
qualification.

Telemetry failures must not fail an evaluation. Evals does not retry telemetry,
save a queue of events to disk or install telemetry tools at startup. Azure Monitor
offline storage, retries and exporter self-telemetry are disabled. The isolated trace
provider uses a fixed service role/instance, no hostname/resource detectors,
and no ambient trace correlation. Spans receive independent SDK-generated IDs.
The bounded SDK buffer does not write events
to disk. Changing a setting cannot recall data already sent.

SDK metadata snapshots are resolved asynchronously outside hooks at startup,
existing functional metadata reads and host context changes. Runtime reads the
latest resolved context at telemetry boundaries; pending or unavailable context
blocks collection rather than becoming an unidentified standalone client.
Late editor identification still enforces consent without telemetry calls from hooks.
Natural process quiescence (`beforeExit`) owns one bounded reporter drain outside
Copilot hooks, after active host work becomes idle. A session-end hook does not
flush events. Telemetry does not intercept `SIGTERM`, suppress host termination
or terminate other workflow owners. Forced, signal-driven and explicit
`process.exit()` endings are not qualified delivery boundaries.

Saved eval results are local product files, not exported usage
analytics. Opting out does not erase or disable those results. Vally's existing
subprocess telemetry opt-outs are unchanged.

Any enabled release must disclose its approved destination, fields, consent and
retention policy. Microsoft privacy information:
https://privacy.microsoft.com/privacystatement


## Complete event inventory

```json
{
  "events": {
    "GitHub.copilot-evals/activation": {
      "owner": "github/code-ai-evals",
      "comment": "Evals component activation.",
      "extensionMode": {
        "classification": "SystemMetaData",
        "purpose": "FeatureInsight",
        "comment": "Host execution mode."
      },
      "durationMs": {
        "classification": "SystemMetaData",
        "purpose": "PerformanceAndHealth",
        "comment": "Elapsed operation time in milliseconds.",
        "isMeasurement": true
      },
      "host": {
        "classification": "SystemMetaData",
        "purpose": "FeatureInsight",
        "comment": "Observed host profile; unknown when available client and runtime signals cannot identify it."
      },
      "surface": {
        "classification": "SystemMetaData",
        "purpose": "FeatureInsight",
        "comment": "First-party action entry surface."
      }
    },
    "GitHub.copilot-evals/workflowRequested": {
      "owner": "github/code-ai-evals",
      "comment": "An Evals action was requested; not proof of execution.",
      "workflow": {
        "classification": "SystemMetaData",
        "purpose": "FeatureInsight",
        "comment": "First-party Evals workflow, never a customer asset name."
      },
      "host": {
        "classification": "SystemMetaData",
        "purpose": "FeatureInsight",
        "comment": "Observed host profile; unknown when available client and runtime signals cannot identify it."
      },
      "surface": {
        "classification": "SystemMetaData",
        "purpose": "FeatureInsight",
        "comment": "First-party action entry surface."
      }
    },
    "GitHub.copilot-evals/approvalResolved": {
      "owner": "github/code-ai-evals",
      "comment": "Host-reported approval disposition; not proof of human approval.",
      "workflow": {
        "classification": "SystemMetaData",
        "purpose": "FeatureInsight",
        "comment": "First-party Evals workflow, never a customer asset name."
      },
      "decision": {
        "classification": "SystemMetaData",
        "purpose": "FeatureInsight",
        "comment": "Reported host decision."
      },
      "origin": {
        "classification": "SystemMetaData",
        "purpose": "FeatureInsight",
        "comment": "Host mediation may include delegated approval."
      },
      "host": {
        "classification": "SystemMetaData",
        "purpose": "FeatureInsight",
        "comment": "Observed host profile; unknown when available client and runtime signals cannot identify it."
      },
      "surface": {
        "classification": "SystemMetaData",
        "purpose": "FeatureInsight",
        "comment": "First-party action entry surface."
      }
    },
    "GitHub.copilot-evals/operationFinished": {
      "owner": "github/code-ai-evals",
      "comment": "Observed operation outcome, distinct from eval check results.",
      "workflow": {
        "classification": "SystemMetaData",
        "purpose": "FeatureInsight",
        "comment": "First-party Evals workflow, never a customer asset name."
      },
      "outcome": {
        "classification": "SystemMetaData",
        "purpose": "FeatureInsight",
        "comment": "Final observed outcome."
      },
      "durationMs": {
        "classification": "SystemMetaData",
        "purpose": "PerformanceAndHealth",
        "comment": "Elapsed operation time in milliseconds.",
        "isMeasurement": true
      },
      "completed": {
        "classification": "SystemMetaData",
        "purpose": "PerformanceAndHealth",
        "comment": "Observed completed trial count.",
        "isMeasurement": true
      },
      "total": {
        "classification": "SystemMetaData",
        "purpose": "PerformanceAndHealth",
        "comment": "Known total trial count.",
        "isMeasurement": true
      },
      "host": {
        "classification": "SystemMetaData",
        "purpose": "FeatureInsight",
        "comment": "Observed host profile; unknown when available client and runtime signals cannot identify it."
      },
      "surface": {
        "classification": "SystemMetaData",
        "purpose": "FeatureInsight",
        "comment": "First-party action entry surface."
      }
    },
    "GitHub.copilot-evals/operationError": {
      "owner": "github/code-ai-evals",
      "comment": "Operational failure without raw exceptions or customer content.",
      "workflow": {
        "classification": "SystemMetaData",
        "purpose": "PerformanceAndHealth",
        "comment": "First-party Evals workflow, never a customer asset name."
      },
      "reason": {
        "classification": "SystemMetaData",
        "purpose": "PerformanceAndHealth",
        "comment": "First-party failure category."
      },
      "host": {
        "classification": "SystemMetaData",
        "purpose": "FeatureInsight",
        "comment": "Observed host profile; unknown when available client and runtime signals cannot identify it."
      },
      "surface": {
        "classification": "SystemMetaData",
        "purpose": "FeatureInsight",
        "comment": "First-party action entry surface."
      }
    }
  },
  "commonProperties": {
    "common.devdeviceid": {
      "endPoint": "None",
      "classification": "EndUserPseudonymizedInformation",
      "purpose": "FeatureInsight",
      "comment": "Cross-tool developer device identifier from @vscode/deviceid when available."
    },
    "common.extname": {
      "classification": "PublicNonPersonalData",
      "purpose": "FeatureInsight",
      "comment": "Standard VS Code telemetry SDK field: common.extname."
    },
    "common.extversion": {
      "classification": "PublicNonPersonalData",
      "purpose": "FeatureInsight",
      "comment": "Standard VS Code telemetry SDK field: common.extversion."
    },
    "common.nodeArch": {
      "classification": "SystemMetaData",
      "purpose": "FeatureInsight",
      "comment": "Standard VS Code telemetry SDK field: common.nodeArch."
    },
    "common.os": {
      "classification": "SystemMetaData",
      "purpose": "FeatureInsight",
      "comment": "Standard VS Code telemetry SDK field: common.os."
    },
    "common.platformversion": {
      "classification": "SystemMetaData",
      "purpose": "FeatureInsight",
      "comment": "Standard VS Code telemetry SDK field: common.platformversion."
    },
    "common.sessionid": {
      "classification": "EndUserPseudonymizedInformation",
      "purpose": "FeatureInsight",
      "comment": "SHA-256 of the host session identifier; a random per-process identifier is hashed when unavailable. Never the raw session ID."
    }
  }
}

```
