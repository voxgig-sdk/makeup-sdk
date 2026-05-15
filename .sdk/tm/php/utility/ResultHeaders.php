<?php
declare(strict_types=1);

// Makeup SDK utility: result_headers

class MakeupResultHeaders
{
    public static function call(MakeupContext $ctx): ?MakeupResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
