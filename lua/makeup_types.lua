-- Typed models for the Makeup SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Product
---@field api_featured_image? string
---@field brand? string
---@field category? string
---@field colour_name? string
---@field created_at? string
---@field currency? string
---@field description? string
---@field hex_value? string
---@field id? number
---@field image_link? string
---@field name? string
---@field price? string
---@field price_sign? string
---@field product_api_url? string
---@field product_color? table
---@field product_link? string
---@field product_type? string
---@field rating? number
---@field tag_list? table
---@field updated_at? string
---@field website_link? string

---@class ProductListMatch
---@field id number

local M = {}

return M
