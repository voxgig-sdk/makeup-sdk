# Typed models for the Makeup SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Product:
    api_featured_image: Optional[str] = None
    brand: Optional[str] = None
    category: Optional[str] = None
    colour_name: Optional[str] = None
    created_at: Optional[str] = None
    currency: Optional[str] = None
    description: Optional[str] = None
    hex_value: Optional[str] = None
    id: Optional[int] = None
    image_link: Optional[str] = None
    name: Optional[str] = None
    price: Optional[str] = None
    price_sign: Optional[str] = None
    product_api_url: Optional[str] = None
    product_color: Optional[list] = None
    product_link: Optional[str] = None
    product_type: Optional[str] = None
    rating: Optional[float] = None
    tag_list: Optional[list] = None
    updated_at: Optional[str] = None
    website_link: Optional[str] = None


@dataclass
class ProductListMatch:
    id: int

