# Makeup Ruby SDK Reference

Complete API reference for the Makeup Ruby SDK.


## MakeupSDK

### Constructor

```ruby
require_relative 'makeup_sdk'

client = MakeupSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `MakeupSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = MakeupSDK.test
```


### Instance Methods

#### `Product(data = nil)`

Create a new `Product` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## ProductEntity

```ruby
product = client.Product
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `api_featured_image` | ``$STRING`` | No |  |
| `brand` | ``$STRING`` | No |  |
| `category` | ``$STRING`` | No |  |
| `colour_name` | ``$STRING`` | No |  |
| `created_at` | ``$STRING`` | No |  |
| `currency` | ``$STRING`` | No |  |
| `description` | ``$STRING`` | No |  |
| `hex_value` | ``$STRING`` | No |  |
| `id` | ``$INTEGER`` | No |  |
| `image_link` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |
| `price` | ``$STRING`` | No |  |
| `price_sign` | ``$STRING`` | No |  |
| `product_api_url` | ``$STRING`` | No |  |
| `product_color` | ``$ARRAY`` | No |  |
| `product_link` | ``$STRING`` | No |  |
| `product_type` | ``$STRING`` | No |  |
| `rating` | ``$NUMBER`` | No |  |
| `tag_list` | ``$ARRAY`` | No |  |
| `updated_at` | ``$STRING`` | No |  |
| `website_link` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.Product.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ProductEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = MakeupSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

