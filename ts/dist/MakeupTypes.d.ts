export interface Product {
    api_featured_image?: string;
    brand?: string;
    category?: string;
    colour_name?: string;
    created_at?: string;
    currency?: string;
    description?: string;
    hex_value?: string;
    id?: number;
    image_link?: string;
    name?: string;
    price?: string;
    price_sign?: string;
    product_api_url?: string;
    product_colors?: any[];
    product_link?: string;
    product_type?: string;
    rating?: number;
    tag_list?: any[];
    updated_at?: string;
    website_link?: string;
}
export interface ProductListMatch {
    brand?: string;
    price_greater_than?: number;
    price_less_than?: number;
    product_category?: string;
    product_tag?: string;
    product_type?: string;
    rating_greater_than?: number;
    rating_less_than?: number;
    $action?: string;
    [action: string]: any;
}
