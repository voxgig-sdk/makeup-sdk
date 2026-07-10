# Typed models for the Makeup SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Product(TypedDict, total=False):
    api_featured_image: str
    brand: str
    category: str
    colour_name: str
    created_at: str
    currency: str
    description: str
    hex_value: str
    id: int
    image_link: str
    name: str
    price: str
    price_sign: str
    product_api_url: str
    product_color: list
    product_link: str
    product_type: str
    rating: float
    tag_list: list
    updated_at: str
    website_link: str


class ProductListMatch(TypedDict, total=False):
    api_featured_image: str
    brand: str
    category: str
    colour_name: str
    created_at: str
    currency: str
    description: str
    hex_value: str
    id: int
    image_link: str
    name: str
    price: str
    price_sign: str
    product_api_url: str
    product_color: list
    product_link: str
    product_type: str
    rating: float
    tag_list: list
    updated_at: str
    website_link: str
