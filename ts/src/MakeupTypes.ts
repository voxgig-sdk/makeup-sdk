// Typed models for the Makeup SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Product {
  api_featured_image?: string
  brand?: string
  category?: string
  colour_name?: string
  created_at?: string
  currency?: string
  description?: string
  hex_value?: string
  id?: number
  image_link?: string
  name?: string
  price?: string
  price_sign?: string
  product_api_url?: string
  product_colors?: any[]
  product_link?: string
  product_type?: string
  rating?: number
  tag_list?: any[]
  updated_at?: string
  website_link?: string
}

export interface ProductListMatch {
  api_featured_image?: string
  brand?: string
  category?: string
  colour_name?: string
  created_at?: string
  currency?: string
  description?: string
  hex_value?: string
  id?: number
  image_link?: string
  name?: string
  price?: string
  price_sign?: string
  product_api_url?: string
  product_colors?: any[]
  product_link?: string
  product_type?: string
  rating?: number
  tag_list?: any[]
  updated_at?: string
  website_link?: string

  // Selects a custom action instead of the plain list:
  //   'id'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

