# Makeup SDK

Search cosmetic products across brands by category, price, rating, and tags such as vegan or cruelty-free

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Makeup API

The [Makeup API](http://makeup-api.herokuapp.com/) is a free, read-only REST service that exposes a catalogue of cosmetic products across a range of mainstream brands. It is a community-maintained project hosted on Heroku and listed on [Free Public APIs](https://freepublicapis.com/makeup-api).

What you get from the API:

- A single `GET /api/v1/products.json` endpoint that returns a JSON array of products.
- Filtering by `brand`, `product_type` (e.g. lipstick, eyeliner, foundation, mascara, nail polish, blush, bronzer, eyebrow, eyeshadow, lip liner), and `product_category` (subcategory such as lip gloss).
- Filtering by `product_tags` (comma-separated, e.g. `vegan`, `cruelty free`).
- Numeric range filters: `price_greater_than`, `price_less_than`, `rating_greater_than`, `rating_less_than`.

The API requires no authentication or API key and supports CORS for use directly from browser clients. As a hobby Heroku deployment it can be slow to respond after periods of inactivity, and uptime is not guaranteed.

## Try it

**TypeScript**
```bash
npm install makeup
```

**Python**
```bash
pip install makeup-sdk
```

**PHP**
```bash
composer require voxgig/makeup-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/makeup-sdk/go
```

**Ruby**
```bash
gem install makeup-sdk
```

**Lua**
```bash
luarocks install makeup-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { MakeupSDK } from 'makeup'

const client = new MakeupSDK({})

// List all products
const products = await client.Product().list()
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
cd go-mcp && go build -o makeup-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "makeup": {
      "command": "/abs/path/to/makeup-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **Product** | A cosmetic product record returned by `GET /api/v1/products.json`, filterable by brand, product type, category, tags, price range, and rating range. | `/products.json` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from makeup_sdk import MakeupSDK

client = MakeupSDK({})

# List all products
products, err = client.Product(None).list(None, None)
```

### PHP

```php
<?php
require_once 'makeup_sdk.php';

$client = new MakeupSDK([]);

// List all products
[$products, $err] = $client->Product(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/makeup-sdk/go"

client := sdk.NewMakeupSDK(map[string]any{})

// List all products
products, err := client.Product(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "Makeup_sdk"

client = MakeupSDK.new({})

# List all products
products, err = client.Product(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("makeup_sdk")

local client = sdk.new({})

-- List all products
local products, err = client:Product(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = MakeupSDK.test()
const result = await client.Product().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = MakeupSDK.test(None, None)
result, err = client.Product(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = MakeupSDK::test(null, null);
[$result, $err] = $client->Product(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Product(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = MakeupSDK.test(nil, nil)
result, err = client.Product(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Product(nil):load(
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

## Using the Makeup API

- Upstream: [http://makeup-api.herokuapp.com/](http://makeup-api.herokuapp.com/)

- The Makeup API documentation does not publish an explicit license or terms of use.
- No attribution requirements are documented; treat product data as third-party content owned by the respective brands.
- The service is hosted on Heroku and may be paused or retired without notice.

---

Generated from the Makeup API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
