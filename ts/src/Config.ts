
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Makeup',
        slug: "makeup",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "http://makeup-api.herokuapp.com/api/v1",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      product: {
      },

    }
  }


  entity = {
    "product": {
      "fields": [
        {
          "name": "api_featured_image",
          "short": "Featured image URL for API display",
          "type": "`$STRING`"
        },
        {
          "name": "brand",
          "short": "Brand name of the product",
          "type": "`$STRING`"
        },
        {
          "name": "category",
          "short": "Category of the product (e.g., powder, cream, liquid)",
          "type": "`$STRING`"
        },
        {
          "name": "colour_name",
          "short": "Name of the color variant",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "created_at",
          "short": "Timestamp when the product was added to the database",
          "type": "`$STRING`"
        },
        {
          "name": "currency",
          "short": "Currency code (e.g., USD, CAD, GBP)",
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "short": "Description of the product",
          "type": "`$STRING`"
        },
        {
          "name": "hex_value",
          "short": "Hexadecimal color code",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "short": "Unique identifier for the product",
          "type": "`$INTEGER`"
        },
        {
          "format": "uri",
          "name": "image_link",
          "short": "URL to the product image",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "short": "Name of the product",
          "type": "`$STRING`"
        },
        {
          "name": "price",
          "short": "Price of the product as a string",
          "type": "`$STRING`"
        },
        {
          "name": "price_sign",
          "short": "Currency symbol",
          "type": "`$STRING`"
        },
        {
          "format": "uri",
          "name": "product_api_url",
          "short": "API URL to fetch this specific product",
          "type": "`$STRING`"
        },
        {
          "name": "product_colors",
          "short": "Available color variants of the product",
          "type": "`$ARRAY`"
        },
        {
          "format": "uri",
          "name": "product_link",
          "short": "URL to the product page on the retailer's website",
          "type": "`$STRING`"
        },
        {
          "name": "product_type",
          "short": "Type of the product (e.g., foundation, lipstick, mascara)",
          "type": "`$STRING`"
        },
        {
          "format": "float",
          "name": "rating",
          "short": "Average rating of the product (0-5)",
          "type": "`$NUMBER`"
        },
        {
          "name": "tag_list",
          "short": "List of tags associated with the product (e.g., Vegan, Organic, Gluten Free)",
          "type": "`$ARRAY`"
        },
        {
          "format": "date-time",
          "name": "updated_at",
          "short": "Timestamp when the product was last updated",
          "type": "`$STRING`"
        },
        {
          "format": "uri",
          "name": "website_link",
          "short": "URL to the retailer's website",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
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
                    "type": "`$STRING`"
                  },
                  {
                    "example": 10,
                    "kind": "query",
                    "name": "price_greater_than",
                    "orig": "price_greater_than",
                    "type": "`$NUMBER`"
                  },
                  {
                    "example": 20,
                    "kind": "query",
                    "name": "price_less_than",
                    "orig": "price_less_than",
                    "type": "`$NUMBER`"
                  },
                  {
                    "example": "powder",
                    "kind": "query",
                    "name": "product_category",
                    "orig": "product_category",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "vegan",
                    "kind": "query",
                    "name": "product_tag",
                    "orig": "product_tag",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "lipstick",
                    "kind": "query",
                    "name": "product_type",
                    "orig": "product_type",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 4,
                    "kind": "query",
                    "name": "rating_greater_than",
                    "orig": "rating_greater_than",
                    "type": "`$NUMBER`"
                  },
                  {
                    "example": 5,
                    "kind": "query",
                    "name": "rating_less_than",
                    "orig": "rating_less_than",
                    "type": "`$NUMBER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/products.json",
              "segments": [
                {
                  "lit": "products.json"
                }
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
                  "rating_less_than"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "products.json"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "example": 1048,
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/products/{id}.json",
              "segments": [
                {
                  "lit": "products"
                },
                {
                  "lit": "{id}.json"
                }
              ],
              "select": {
                "$action": "id",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "products",
                "{id}.json"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

