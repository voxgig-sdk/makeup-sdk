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

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## ProductEntity

```python
product = client.Product()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `api_featured_image` | `str` | No | Featured image URL for API display |
| `brand` | `str` | No | Brand name of the product |
| `category` | `str` | No | Category of the product (e.g., powder, cream, liquid) |
| `colour_name` | `str` | No | Name of the color variant |
| `created_at` | `str` | No | Timestamp when the product was added to the database |
| `currency` | `str` | No | Currency code (e.g., USD, CAD, GBP) |
| `description` | `str` | No | Description of the product |
| `hex_value` | `str` | No | Hexadecimal color code |
| `id` | `int` | No | Unique identifier for the product |
| `image_link` | `str` | No | URL to the product image |
| `name` | `str` | No | Name of the product |
| `price` | `str` | No | Price of the product as a string |
| `price_sign` | `str` | No | Currency symbol |
| `product_api_url` | `str` | No | API URL to fetch this specific product |
| `product_colors` | `list` | No | Available color variants of the product |
| `product_link` | `str` | No | URL to the product page on the retailer's website |
| `product_type` | `str` | No | Type of the product (e.g., foundation, lipstick, mascara) |
| `rating` | `float` | No | Average rating of the product (0-5) |
| `tag_list` | `list` | No | List of tags associated with the product (e.g., Vegan, Organic, Gluten Free) |
| `updated_at` | `str` | No | Timestamp when the product was last updated |
| `website_link` | `str` | No | URL to the retailer's website |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Product().list()
for product in results:
    print(product)
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

