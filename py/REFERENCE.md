# Makeup Python SDK Reference

Complete API reference for the Makeup Python SDK.


## MakeupSDK

### Constructor

```python
from makeup_sdk import MakeupSDK

client = MakeupSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `MakeupSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = MakeupSDK.test()
```


### Instance Methods

#### `Product(data=None)`

Create a new `ProductEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> tuple`

Make a direct HTTP request to any API endpoint. Returns `(result, err)`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `(result_dict, err)`

#### `prepare(fetchargs=None) -> tuple`

Prepare a fetch definition without sending. Returns `(fetchdef, err)`.


---

## ProductEntity

```python
product = client.Product()
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

#### `list(reqmatch, ctrl=None) -> tuple`

List entities matching the given criteria. Returns an array.

```python
results, err = client.Product().list({})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProductEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = MakeupSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

