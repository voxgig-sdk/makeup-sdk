# Makeup SDK configuration

module MakeupConfig
  def self.make_config
    {
      "main" => {
        "name" => "Makeup",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "http://makeup-api.herokuapp.com/api/v1",
        "auth" => {
          "prefix" => "Bearer",
        },
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
              "active" => true,
              "name" => "api_featured_image",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 0,
            },
            {
              "active" => true,
              "name" => "brand",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 1,
            },
            {
              "active" => true,
              "name" => "category",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 2,
            },
            {
              "active" => true,
              "name" => "colour_name",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 3,
            },
            {
              "active" => true,
              "name" => "created_at",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 4,
            },
            {
              "active" => true,
              "name" => "currency",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 5,
            },
            {
              "active" => true,
              "name" => "description",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 6,
            },
            {
              "active" => true,
              "name" => "hex_value",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 7,
            },
            {
              "active" => true,
              "name" => "id",
              "req" => false,
              "type" => "`$INTEGER`",
              "index$" => 8,
            },
            {
              "active" => true,
              "name" => "image_link",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 9,
            },
            {
              "active" => true,
              "name" => "name",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 10,
            },
            {
              "active" => true,
              "name" => "price",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 11,
            },
            {
              "active" => true,
              "name" => "price_sign",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 12,
            },
            {
              "active" => true,
              "name" => "product_api_url",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 13,
            },
            {
              "active" => true,
              "name" => "product_color",
              "req" => false,
              "type" => "`$ARRAY`",
              "index$" => 14,
            },
            {
              "active" => true,
              "name" => "product_link",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 15,
            },
            {
              "active" => true,
              "name" => "product_type",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 16,
            },
            {
              "active" => true,
              "name" => "rating",
              "req" => false,
              "type" => "`$NUMBER`",
              "index$" => 17,
            },
            {
              "active" => true,
              "name" => "tag_list",
              "req" => false,
              "type" => "`$ARRAY`",
              "index$" => 18,
            },
            {
              "active" => true,
              "name" => "updated_at",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 19,
            },
            {
              "active" => true,
              "name" => "website_link",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 20,
            },
          ],
          "name" => "product",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "active" => true,
                  "args" => {
                    "query" => [
                      {
                        "active" => true,
                        "example" => "maybelline",
                        "kind" => "query",
                        "name" => "brand",
                        "orig" => "brand",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                      {
                        "active" => true,
                        "example" => 10,
                        "kind" => "query",
                        "name" => "price_greater_than",
                        "orig" => "price_greater_than",
                        "reqd" => false,
                        "type" => "`$NUMBER`",
                      },
                      {
                        "active" => true,
                        "example" => 20,
                        "kind" => "query",
                        "name" => "price_less_than",
                        "orig" => "price_less_than",
                        "reqd" => false,
                        "type" => "`$NUMBER`",
                      },
                      {
                        "active" => true,
                        "example" => "powder",
                        "kind" => "query",
                        "name" => "product_category",
                        "orig" => "product_category",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                      {
                        "active" => true,
                        "example" => "vegan",
                        "kind" => "query",
                        "name" => "product_tag",
                        "orig" => "product_tag",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                      {
                        "active" => true,
                        "example" => "lipstick",
                        "kind" => "query",
                        "name" => "product_type",
                        "orig" => "product_type",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                      {
                        "active" => true,
                        "example" => 4,
                        "kind" => "query",
                        "name" => "rating_greater_than",
                        "orig" => "rating_greater_than",
                        "reqd" => false,
                        "type" => "`$NUMBER`",
                      },
                      {
                        "active" => true,
                        "example" => 5,
                        "kind" => "query",
                        "name" => "rating_less_than",
                        "orig" => "rating_less_than",
                        "reqd" => false,
                        "type" => "`$NUMBER`",
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/products.json",
                  "parts" => [
                    "products.json",
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
                  "index$" => 0,
                },
                {
                  "active" => true,
                  "args" => {
                    "params" => [
                      {
                        "active" => true,
                        "example" => 1048,
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/products/{id}.json",
                  "parts" => [
                    "products",
                    "{id}.json",
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
                  "index$" => 1,
                },
              ],
              "key$" => "list",
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "product",
              ],
            ],
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
