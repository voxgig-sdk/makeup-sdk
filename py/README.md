# Makeup Python SDK



The Python SDK for the Makeup API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.Product()` — each
carrying a small, uniform set of operations (`list`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/makeup-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
from makeup_sdk import MakeupSDK

client = MakeupSDK()
```

### 2. List product records

`list()` returns a `list` of records (each a `dict`) and raises on
error — iterate it directly.

```python
try:
    products = client.Product().list()
    for product in products:
        print(product)
except Exception as err:
    print(f"list failed: {err}")
```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    products = client.Product().list()
    print(products)
except Exception as err:
    print(f"list failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = MakeupSDK.test()

# Entity ops return the ENTITY and raises on error;
# call data_get() for the record.
product = client.Product().list()
# product contains the mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = MakeupSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
    },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
MAKEUP_TEST_LIVE=TRUE
```

Then run:

```bash
cd py && pytest test/
```


## Reference

### MakeupSDK

```python
from makeup_sdk import MakeupSDK

client = MakeupSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = MakeupSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### MakeupSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
| `Product` | `(data) -> ProductEntity` | Create a Product entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

### Entities

#### Product

| Field | Description |
| --- | --- |
| `api_featured_image` | Featured image URL for API display |
| `brand` | Brand name of the product |
| `category` | Category of the product (e.g., powder, cream, liquid) |
| `colour_name` | Name of the color variant |
| `created_at` | Timestamp when the product was added to the database |
| `currency` | Currency code (e.g., USD, CAD, GBP) |
| `description` | Description of the product |
| `hex_value` | Hexadecimal color code |
| `id` | Unique identifier for the product |
| `image_link` | URL to the product image |
| `name` | Name of the product |
| `price` | Price of the product as a string |
| `price_sign` | Currency symbol |
| `product_api_url` | API URL to fetch this specific product |
| `product_colors` | Available color variants of the product |
| `product_link` | URL to the product page on the retailer's website |
| `product_type` | Type of the product (e.g., foundation, lipstick, mascara) |
| `rating` | Average rating of the product (0-5) |
| `tag_list` | List of tags associated with the product (e.g., Vegan, Organic, Gluten Free) |
| `updated_at` | Timestamp when the product was last updated |
| `website_link` | URL to the retailer's website |

Operations: List.

API path: `/products.json`



## Entities


### Product

Create an instance: `product = client.Product()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `api_featured_image` | `str` | Featured image URL for API display |
| `brand` | `str` | Brand name of the product |
| `category` | `str` | Category of the product (e.g., powder, cream, liquid) |
| `colour_name` | `str` | Name of the color variant |
| `created_at` | `str` | Timestamp when the product was added to the database |
| `currency` | `str` | Currency code (e.g., USD, CAD, GBP) |
| `description` | `str` | Description of the product |
| `hex_value` | `str` | Hexadecimal color code |
| `id` | `int` | Unique identifier for the product |
| `image_link` | `str` | URL to the product image |
| `name` | `str` | Name of the product |
| `price` | `str` | Price of the product as a string |
| `price_sign` | `str` | Currency symbol |
| `product_api_url` | `str` | API URL to fetch this specific product |
| `product_colors` | `list` | Available color variants of the product |
| `product_link` | `str` | URL to the product page on the retailer's website |
| `product_type` | `str` | Type of the product (e.g., foundation, lipstick, mascara) |
| `rating` | `float` | Average rating of the product (0-5) |
| `tag_list` | `list` | List of tags associated with the product (e.g., Vegan, Organic, Gluten Free) |
| `updated_at` | `str` | Timestamp when the product was last updated |
| `website_link` | `str` | URL to the retailer's website |

#### Example: List

```python
products = client.Product().list()
```


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a Python class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── makeup_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`makeup_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```python
product = client.Product()
product.list()

# product.data_get() now returns the product data from the last list
# product.match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
