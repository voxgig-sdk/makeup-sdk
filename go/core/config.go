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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "brand",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "category",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "colour_name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "currency",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "hex_value",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "image_link",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "price",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "price_sign",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "product_api_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "product_colors",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "product_link",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "product_type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "rating",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "tag_list",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "updated_at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "website_link",
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
