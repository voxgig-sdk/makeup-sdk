# frozen_string_literal: true

# Typed models for the Makeup SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Product entity data model.
#
# @!attribute [rw] api_featured_image
#   @return [String, nil]
#
# @!attribute [rw] brand
#   @return [String, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] colour_name
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] currency
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] hex_value
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] image_link
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] price
#   @return [String, nil]
#
# @!attribute [rw] price_sign
#   @return [String, nil]
#
# @!attribute [rw] product_api_url
#   @return [String, nil]
#
# @!attribute [rw] product_color
#   @return [Array, nil]
#
# @!attribute [rw] product_link
#   @return [String, nil]
#
# @!attribute [rw] product_type
#   @return [String, nil]
#
# @!attribute [rw] rating
#   @return [Float, nil]
#
# @!attribute [rw] tag_list
#   @return [Array, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] website_link
#   @return [String, nil]
Product = Struct.new(
  :api_featured_image,
  :brand,
  :category,
  :colour_name,
  :created_at,
  :currency,
  :description,
  :hex_value,
  :id,
  :image_link,
  :name,
  :price,
  :price_sign,
  :product_api_url,
  :product_color,
  :product_link,
  :product_type,
  :rating,
  :tag_list,
  :updated_at,
  :website_link,
  keyword_init: true
)

# Request payload for Product#list.
#
# @!attribute [rw] id
#   @return [Integer]
ProductListMatch = Struct.new(
  :id,
  keyword_init: true
)

