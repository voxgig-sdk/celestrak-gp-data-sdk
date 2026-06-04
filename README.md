# CelestrakGpData SDK

Query CelesTrak's General Perturbations orbital element sets for satellites and space debris

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About CelesTrak GP Data

[CelesTrak](https://celestrak.org) is a long-running independent service maintained by Dr. T.S. Kelso that publishes orbital element data for objects tracked by the US Space Force's Space Surveillance Network. The GP (General Perturbations) data service is its modern HTTP query interface for retrieving current element sets.

What you get from the API:

- Two-Line Element Sets (TLE) and the legacy 3-line variant (`2LE`) suitable for SGP4 propagators.
- Orbital Mean-Elements Messages (OMM) in `XML`, `KVN`, `JSON`, `JSON-PRETTY`, and `CSV` per CCSDS recommendations.
- Queries by NORAD catalog number (`CATNR`), International Designator (`INTDES`), satellite name (`NAME`), or a curated group (`GROUP`, e.g. `starlink`, `stations`, `active`).
- Special data sets via `SPECIAL` for supplemental or operator-supplied elements.

The endpoint typically used is `https://celestrak.org/NORAD/elements/gp.php` with `FORMAT=` selecting the output encoding. CORS is not enabled, so browser clients usually proxy requests. Data is refreshed continuously; CelesTrak asks consumers not to poll faster than the underlying TLE update cadence (a few hours).

## Try it

**TypeScript**
```bash
npm install celestrak-gp-data
```

**Python**
```bash
pip install celestrak-gp-data-sdk
```

**PHP**
```bash
composer require voxgig/celestrak-gp-data-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/celestrak-gp-data-sdk/go
```

**Ruby**
```bash
gem install celestrak-gp-data-sdk
```

**Lua**
```bash
luarocks install celestrak-gp-data-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { CelestrakGpDataSDK } from 'celestrak-gp-data'

const client = new CelestrakGpDataSDK({})

// List all gpns
const gpns = await client.Gpn().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o celestrak-gp-data-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "celestrak-gp-data": {
      "command": "/abs/path/to/celestrak-gp-data-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **Gpn** | General Perturbations element sets for tracked space objects, retrieved from `GET /NORAD/elements/gp.php` with query parameters such as `CATNR`, `INTDES`, `GROUP`, `NAME`, or `SPECIAL` and a `FORMAT` of TLE, 2LE, XML, KVN, JSON, JSON-PRETTY, or CSV. | `/NORAD/elements/gp.php` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from celestrakgpdata_sdk import CelestrakGpDataSDK

client = CelestrakGpDataSDK({})

# List all gpns
gpns, err = client.Gpn(None).list(None, None)
```

### PHP

```php
<?php
require_once 'celestrakgpdata_sdk.php';

$client = new CelestrakGpDataSDK([]);

// List all gpns
[$gpns, $err] = $client->Gpn(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/celestrak-gp-data-sdk/go"

client := sdk.NewCelestrakGpDataSDK(map[string]any{})

// List all gpns
gpns, err := client.Gpn(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "CelestrakGpData_sdk"

client = CelestrakGpDataSDK.new({})

# List all gpns
gpns, err = client.Gpn(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("celestrak-gp-data_sdk")

local client = sdk.new({})

-- List all gpns
local gpns, err = client:Gpn(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = CelestrakGpDataSDK.test()
const result = await client.Gpn().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = CelestrakGpDataSDK.test(None, None)
result, err = client.Gpn(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = CelestrakGpDataSDK::test(null, null);
[$result, $err] = $client->Gpn(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Gpn(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = CelestrakGpDataSDK.test(nil, nil)
result, err = client.Gpn(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Gpn(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the CelesTrak GP Data

- Upstream: [https://celestrak.org](https://celestrak.org)
- API docs: [https://celestrak.org/NORAD/documentation/gp-data-formats.php](https://celestrak.org/NORAD/documentation/gp-data-formats.php)

- Governed by the [CelesTrak Terms of Use](https://celestrak.org/publications/disclaimer.php).
- Underlying GP element sets are derived from US Space Force data, redistributed by CelesTrak (operated by [Dr. T.S. Kelso](https://celestrak.org)).
- Attribution to CelesTrak is expected when the data is republished.
- No warranty of fitness; CelesTrak does not guarantee accuracy for operational decisions.

---

Generated from the CelesTrak GP Data OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
