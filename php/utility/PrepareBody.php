<?php
declare(strict_types=1);

// Makeup SDK utility: prepare_body

class MakeupPrepareBody
{
    public static function call(MakeupContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
