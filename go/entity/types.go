// Typed models for the Makeup SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Product is the typed data model for the product entity.
type Product struct {
	ApiFeaturedImage *string `json:"api_featured_image,omitempty"`
	Brand *string `json:"brand,omitempty"`
	Category *string `json:"category,omitempty"`
	ColourName *string `json:"colour_name,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Currency *string `json:"currency,omitempty"`
	Description *string `json:"description,omitempty"`
	HexValue *string `json:"hex_value,omitempty"`
	Id *int `json:"id,omitempty"`
	ImageLink *string `json:"image_link,omitempty"`
	Name *string `json:"name,omitempty"`
	Price *string `json:"price,omitempty"`
	PriceSign *string `json:"price_sign,omitempty"`
	ProductApiUrl *string `json:"product_api_url,omitempty"`
	ProductColor *[]any `json:"product_color,omitempty"`
	ProductLink *string `json:"product_link,omitempty"`
	ProductType *string `json:"product_type,omitempty"`
	Rating *float64 `json:"rating,omitempty"`
	TagList *[]any `json:"tag_list,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	WebsiteLink *string `json:"website_link,omitempty"`
}

// ProductListMatch is the typed request payload for Product.ListTyped.
type ProductListMatch struct {
	Id int `json:"id"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
