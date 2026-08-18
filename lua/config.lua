-- Makeup SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "Makeup",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "http://makeup-api.herokuapp.com/api/v1",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["product"] = {},
      },
    },
    entity = {
      ["product"] = {
        ["fields"] = {
          {
            ["name"] = "api_featured_image",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "brand",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "category",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "colour_name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "created_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "currency",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "description",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "hex_value",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "image_link",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "price",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "price_sign",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "product_api_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "product_colors",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "product_link",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "product_type",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "rating",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "tag_list",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "updated_at",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "website_link",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "product",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "maybelline",
                      ["kind"] = "query",
                      ["name"] = "brand",
                      ["orig"] = "brand",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 10,
                      ["kind"] = "query",
                      ["name"] = "price_greater_than",
                      ["orig"] = "price_greater_than",
                      ["type"] = "`$NUMBER`",
                    },
                    {
                      ["example"] = 20,
                      ["kind"] = "query",
                      ["name"] = "price_less_than",
                      ["orig"] = "price_less_than",
                      ["type"] = "`$NUMBER`",
                    },
                    {
                      ["example"] = "powder",
                      ["kind"] = "query",
                      ["name"] = "product_category",
                      ["orig"] = "product_category",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "vegan",
                      ["kind"] = "query",
                      ["name"] = "product_tag",
                      ["orig"] = "product_tag",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "lipstick",
                      ["kind"] = "query",
                      ["name"] = "product_type",
                      ["orig"] = "product_type",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 4,
                      ["kind"] = "query",
                      ["name"] = "rating_greater_than",
                      ["orig"] = "rating_greater_than",
                      ["type"] = "`$NUMBER`",
                    },
                    {
                      ["example"] = 5,
                      ["kind"] = "query",
                      ["name"] = "rating_less_than",
                      ["orig"] = "rating_less_than",
                      ["type"] = "`$NUMBER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/products.json",
                ["parts"] = {
                  "products.json",
                },
                ["select"] = {
                  ["exist"] = {
                    "brand",
                    "price_greater_than",
                    "price_less_than",
                    "product_category",
                    "product_tag",
                    "product_type",
                    "rating_greater_than",
                    "rating_less_than",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = 1048,
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/products/{id}.json",
                ["parts"] = {
                  "products",
                  "{id}.json",
                },
                ["select"] = {
                  ["$action"] = "id",
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "product",
            },
          },
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
