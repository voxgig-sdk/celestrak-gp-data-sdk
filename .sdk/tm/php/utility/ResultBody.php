<?php
declare(strict_types=1);

// CelestrakGpData SDK utility: result_body

class CelestrakGpDataResultBody
{
    public static function call(CelestrakGpDataContext $ctx): ?CelestrakGpDataResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
