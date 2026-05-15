<?php
declare(strict_types=1);

// Makeup SDK utility: feature_add

class MakeupFeatureAdd
{
    public static function call(MakeupContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
