# Makeup SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "Makeup",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "http://makeup-api.herokuapp.com/api/v1",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "product": {},
            },
        },
        "entity": {
      "product": {
        "fields": [
          {
            "name": "api_featured_image",
            "type": "`$STRING`",
          },
          {
            "name": "brand",
            "type": "`$STRING`",
          },
          {
            "name": "category",
            "type": "`$STRING`",
          },
          {
            "name": "colour_name",
            "type": "`$STRING`",
          },
          {
            "name": "created_at",
            "type": "`$STRING`",
          },
          {
            "name": "currency",
            "type": "`$STRING`",
          },
          {
            "name": "description",
            "type": "`$STRING`",
          },
          {
            "name": "hex_value",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "type": "`$INTEGER`",
          },
          {
            "name": "image_link",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "type": "`$STRING`",
          },
          {
            "name": "price",
            "type": "`$STRING`",
          },
          {
            "name": "price_sign",
            "type": "`$STRING`",
          },
          {
            "name": "product_api_url",
            "type": "`$STRING`",
          },
          {
            "name": "product_colors",
            "type": "`$ARRAY`",
          },
          {
            "name": "product_link",
            "type": "`$STRING`",
          },
          {
            "name": "product_type",
            "type": "`$STRING`",
          },
          {
            "name": "rating",
            "type": "`$NUMBER`",
          },
          {
            "name": "tag_list",
            "type": "`$ARRAY`",
          },
          {
            "name": "updated_at",
            "type": "`$STRING`",
          },
          {
            "name": "website_link",
            "type": "`$STRING`",
          },
        ],
        "name": "product",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": "maybelline",
                      "kind": "query",
                      "name": "brand",
                      "orig": "brand",
                      "type": "`$STRING`",
                    },
                    {
                      "example": 10,
                      "kind": "query",
                      "name": "price_greater_than",
                      "orig": "price_greater_than",
                      "type": "`$NUMBER`",
                    },
                    {
                      "example": 20,
                      "kind": "query",
                      "name": "price_less_than",
                      "orig": "price_less_than",
                      "type": "`$NUMBER`",
                    },
                    {
                      "example": "powder",
                      "kind": "query",
                      "name": "product_category",
                      "orig": "product_category",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "vegan",
                      "kind": "query",
                      "name": "product_tag",
                      "orig": "product_tag",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "lipstick",
                      "kind": "query",
                      "name": "product_type",
                      "orig": "product_type",
                      "type": "`$STRING`",
                    },
                    {
                      "example": 4,
                      "kind": "query",
                      "name": "rating_greater_than",
                      "orig": "rating_greater_than",
                      "type": "`$NUMBER`",
                    },
                    {
                      "example": 5,
                      "kind": "query",
                      "name": "rating_less_than",
                      "orig": "rating_less_than",
                      "type": "`$NUMBER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/products.json",
                "parts": [
                  "products.json",
                ],
                "select": {
                  "exist": [
                    "brand",
                    "price_greater_than",
                    "price_less_than",
                    "product_category",
                    "product_tag",
                    "product_type",
                    "rating_greater_than",
                    "rating_less_than",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "params": [
                    {
                      "example": 1048,
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/products/{id}.json",
                "parts": [
                  "products",
                  "{id}.json",
                ],
                "select": {
                  "$action": "id",
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "product",
            ],
          ],
        },
      },
    },
    }
