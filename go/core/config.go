package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Makeup",
			"slug": "makeup",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "http://makeup-api.herokuapp.com/api/v1",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"product": map[string]any{},
			},
		},
		"entity": map[string]any{
			"product": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "api_featured_image",
						"short": "Featured image URL for API display",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "brand",
						"short": "Brand name of the product",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "category",
						"short": "Category of the product (e.g., powder, cream, liquid)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "colour_name",
						"short": "Name of the color variant",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"short": "Timestamp when the product was added to the database",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "currency",
						"short": "Currency code (e.g., USD, CAD, GBP)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"short": "Description of the product",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "hex_value",
						"short": "Hexadecimal color code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique identifier for the product",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "image_link",
						"short": "URL to the product image",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "Name of the product",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "price",
						"short": "Price of the product as a string",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "price_sign",
						"short": "Currency symbol",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "product_api_url",
						"short": "API URL to fetch this specific product",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "product_colors",
						"short": "Available color variants of the product",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "product_link",
						"short": "URL to the product page on the retailer's website",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "product_type",
						"short": "Type of the product (e.g., foundation, lipstick, mascara)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "rating",
						"short": "Average rating of the product (0-5)",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "tag_list",
						"short": "List of tags associated with the product (e.g., Vegan, Organic, Gluten Free)",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "updated_at",
						"short": "Timestamp when the product was last updated",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "website_link",
						"short": "URL to the retailer's website",
						"type": "`$STRING`",
					},
				},
				"name": "product",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "maybelline",
											"kind": "query",
											"name": "brand",
											"orig": "brand",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 10,
											"kind": "query",
											"name": "price_greater_than",
											"orig": "price_greater_than",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"example": 20,
											"kind": "query",
											"name": "price_less_than",
											"orig": "price_less_than",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"example": "powder",
											"kind": "query",
											"name": "product_category",
											"orig": "product_category",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "vegan",
											"kind": "query",
											"name": "product_tag",
											"orig": "product_tag",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "lipstick",
											"kind": "query",
											"name": "product_type",
											"orig": "product_type",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 4,
											"kind": "query",
											"name": "rating_greater_than",
											"orig": "rating_greater_than",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"example": 5,
											"kind": "query",
											"name": "rating_less_than",
											"orig": "rating_less_than",
											"type": "`$NUMBER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/products.json",
								"parts": []any{
									"products.json",
								},
								"select": map[string]any{
									"exist": []any{
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": 1048,
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/products/{id}.json",
								"parts": []any{
									"products",
									"{id}.json",
								},
								"select": map[string]any{
									"$action": "id",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"product",
						},
					},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
