<?php
declare(strict_types=1);

// Makeup SDK configuration

class MakeupConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Makeup",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "http://makeup-api.herokuapp.com/api/v1",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "product" => [],
                ],
            ],
            "entity" => [
        'product' => [
          'fields' => [
            [
              'name' => 'api_featured_image',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'brand',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'category',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'colour_name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'created_at',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'currency',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'description',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'hex_value',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'image_link',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'price',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'price_sign',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'product_api_url',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'product_colors',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'product_link',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'product_type',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'rating',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'tag_list',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'updated_at',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'website_link',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'product',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'maybelline',
                        'kind' => 'query',
                        'name' => 'brand',
                        'orig' => 'brand',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 10,
                        'kind' => 'query',
                        'name' => 'price_greater_than',
                        'orig' => 'price_greater_than',
                        'type' => '`$NUMBER`',
                      ],
                      [
                        'example' => 20,
                        'kind' => 'query',
                        'name' => 'price_less_than',
                        'orig' => 'price_less_than',
                        'type' => '`$NUMBER`',
                      ],
                      [
                        'example' => 'powder',
                        'kind' => 'query',
                        'name' => 'product_category',
                        'orig' => 'product_category',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'vegan',
                        'kind' => 'query',
                        'name' => 'product_tag',
                        'orig' => 'product_tag',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'lipstick',
                        'kind' => 'query',
                        'name' => 'product_type',
                        'orig' => 'product_type',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 4,
                        'kind' => 'query',
                        'name' => 'rating_greater_than',
                        'orig' => 'rating_greater_than',
                        'type' => '`$NUMBER`',
                      ],
                      [
                        'example' => 5,
                        'kind' => 'query',
                        'name' => 'rating_less_than',
                        'orig' => 'rating_less_than',
                        'type' => '`$NUMBER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/products.json',
                  'parts' => [
                    'products.json',
                  ],
                  'select' => [
                    'exist' => [
                      'brand',
                      'price_greater_than',
                      'price_less_than',
                      'product_category',
                      'product_tag',
                      'product_type',
                      'rating_greater_than',
                      'rating_less_than',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => 1048,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/products/{id}.json',
                  'parts' => [
                    'products',
                    '{id}.json',
                  ],
                  'select' => [
                    '$action' => 'id',
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'product',
              ],
            ],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return MakeupFeatures::make_feature($name);
    }
}
