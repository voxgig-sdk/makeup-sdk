<?php
declare(strict_types=1);

// Makeup SDK utility: result_body

class MakeupResultBody
{
    public static function call(MakeupContext $ctx): ?MakeupResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
