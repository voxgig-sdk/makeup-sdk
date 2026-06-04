# Makeup SDK configuration


def make_config():
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
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "brand",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "category",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "colour_name",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "created_at",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "currency",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "description",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "hex_value",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "id",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 8,
          },
          {
            "name": "image_link",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 9,
          },
          {
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 10,
          },
          {
            "name": "price",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 11,
          },
          {
            "name": "price_sign",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 12,
          },
          {
            "name": "product_api_url",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 13,
          },
          {
            "name": "product_color",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 14,
          },
          {
            "name": "product_link",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 15,
          },
          {
            "name": "product_type",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 16,
          },
          {
            "name": "rating",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 17,
          },
          {
            "name": "tag_list",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 18,
          },
          {
            "name": "updated_at",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 19,
          },
          {
            "name": "website_link",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 20,
          },
        ],
        "name": "product",
        "op": {
          "list": {
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
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": 10,
                      "kind": "query",
                      "name": "price_greater_than",
                      "orig": "price_greater_than",
                      "reqd": False,
                      "type": "`$NUMBER`",
                      "active": True,
                    },
                    {
                      "example": 20,
                      "kind": "query",
                      "name": "price_less_than",
                      "orig": "price_less_than",
                      "reqd": False,
                      "type": "`$NUMBER`",
                      "active": True,
                    },
                    {
                      "example": "powder",
                      "kind": "query",
                      "name": "product_category",
                      "orig": "product_category",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": "vegan",
                      "kind": "query",
                      "name": "product_tag",
                      "orig": "product_tag",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": "lipstick",
                      "kind": "query",
                      "name": "product_type",
                      "orig": "product_type",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": 4,
                      "kind": "query",
                      "name": "rating_greater_than",
                      "orig": "rating_greater_than",
                      "reqd": False,
                      "type": "`$NUMBER`",
                      "active": True,
                    },
                    {
                      "example": 5,
                      "kind": "query",
                      "name": "rating_less_than",
                      "orig": "rating_less_than",
                      "reqd": False,
                      "type": "`$NUMBER`",
                      "active": True,
                    },
                  ],
                },
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
                "active": True,
                "index$": 0,
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
                      "active": True,
                    },
                  ],
                },
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
                "active": True,
                "index$": 1,
              },
            ],
            "input": "data",
            "key$": "list",
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
