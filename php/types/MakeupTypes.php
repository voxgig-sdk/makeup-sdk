<?php
declare(strict_types=1);

// Typed models for the Makeup SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Product entity data model. */
class Product
{
    public ?string $api_featured_image = null;
    public ?string $brand = null;
    public ?string $category = null;
    public ?string $colour_name = null;
    public ?string $created_at = null;
    public ?string $currency = null;
    public ?string $description = null;
    public ?string $hex_value = null;
    public ?int $id = null;
    public ?string $image_link = null;
    public ?string $name = null;
    public ?string $price = null;
    public ?string $price_sign = null;
    public ?string $product_api_url = null;
    public ?array $product_color = null;
    public ?string $product_link = null;
    public ?string $product_type = null;
    public ?float $rating = null;
    public ?array $tag_list = null;
    public ?string $updated_at = null;
    public ?string $website_link = null;
}

/** Request payload for Product#list. */
class ProductListMatch
{
    public int $id;
}

