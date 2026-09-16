# Makeup SDK configuration

module MakeupConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "Makeup",
        "slug" => "makeup",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "http://makeup-api.herokuapp.com/api/v1",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "product" => {},
        },
      },
      "entity" => {
        "product" => {
          "fields" => [
            {
              "name" => "api_featured_image",
              "short" => "Featured image URL for API display",
              "type" => "`$STRING`",
            },
            {
              "name" => "brand",
              "short" => "Brand name of the product",
              "type" => "`$STRING`",
            },
            {
              "name" => "category",
              "short" => "Category of the product (e.g., powder, cream, liquid)",
              "type" => "`$STRING`",
            },
            {
              "name" => "colour_name",
              "short" => "Name of the color variant",
              "type" => "`$STRING`",
            },
            {
              "format" => "date-time",
              "name" => "created_at",
              "short" => "Timestamp when the product was added to the database",
              "type" => "`$STRING`",
            },
            {
              "name" => "currency",
              "short" => "Currency code (e.g., USD, CAD, GBP)",
              "type" => "`$STRING`",
            },
            {
              "name" => "description",
              "short" => "Description of the product",
              "type" => "`$STRING`",
            },
            {
              "name" => "hex_value",
              "short" => "Hexadecimal color code",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "short" => "Unique identifier for the product",
              "type" => "`$INTEGER`",
            },
            {
              "format" => "uri",
              "name" => "image_link",
              "short" => "URL to the product image",
              "type" => "`$STRING`",
            },
            {
              "name" => "name",
              "short" => "Name of the product",
              "type" => "`$STRING`",
            },
            {
              "name" => "price",
              "short" => "Price of the product as a string",
              "type" => "`$STRING`",
            },
            {
              "name" => "price_sign",
              "short" => "Currency symbol",
              "type" => "`$STRING`",
            },
            {
              "format" => "uri",
              "name" => "product_api_url",
              "short" => "API URL to fetch this specific product",
              "type" => "`$STRING`",
            },
            {
              "name" => "product_colors",
              "short" => "Available color variants of the product",
              "type" => "`$ARRAY`",
            },
            {
              "format" => "uri",
              "name" => "product_link",
              "short" => "URL to the product page on the retailer's website",
              "type" => "`$STRING`",
            },
            {
              "name" => "product_type",
              "short" => "Type of the product (e.g., foundation, lipstick, mascara)",
              "type" => "`$STRING`",
            },
            {
              "format" => "float",
              "name" => "rating",
              "short" => "Average rating of the product (0-5)",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "tag_list",
              "short" => "List of tags associated with the product (e.g., Vegan, Organic, Gluten Free)",
              "type" => "`$ARRAY`",
            },
            {
              "format" => "date-time",
              "name" => "updated_at",
              "short" => "Timestamp when the product was last updated",
              "type" => "`$STRING`",
            },
            {
              "format" => "uri",
              "name" => "website_link",
              "short" => "URL to the retailer's website",
              "type" => "`$STRING`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "product",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "maybelline",
                        "kind" => "query",
                        "name" => "brand",
                        "orig" => "brand",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => 10,
                        "kind" => "query",
                        "name" => "price_greater_than",
                        "orig" => "price_greater_than",
                        "type" => "`$NUMBER`",
                      },
                      {
                        "example" => 20,
                        "kind" => "query",
                        "name" => "price_less_than",
                        "orig" => "price_less_than",
                        "type" => "`$NUMBER`",
                      },
                      {
                        "example" => "powder",
                        "kind" => "query",
                        "name" => "product_category",
                        "orig" => "product_category",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "vegan",
                        "kind" => "query",
                        "name" => "product_tag",
                        "orig" => "product_tag",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "lipstick",
                        "kind" => "query",
                        "name" => "product_type",
                        "orig" => "product_type",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => 4,
                        "kind" => "query",
                        "name" => "rating_greater_than",
                        "orig" => "rating_greater_than",
                        "type" => "`$NUMBER`",
                      },
                      {
                        "example" => 5,
                        "kind" => "query",
                        "name" => "rating_less_than",
                        "orig" => "rating_less_than",
                        "type" => "`$NUMBER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/products.json",
                  "segments" => [
                    {
                      "lit" => "products.json",
                    },
                  ],
                  "select" => {
                    "exist" => [
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
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "parts" => [
                    "products.json",
                  ],
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "example" => 1048,
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/products/{id}.json",
                  "segments" => [
                    {
                      "lit" => "products",
                    },
                    {
                      "lit" => "{id}.json",
                    },
                  ],
                  "select" => {
                    "$action" => "id",
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "parts" => [
                    "products",
                    "{id}.json",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    MakeupFeatures.make_feature(name)
  end
end
