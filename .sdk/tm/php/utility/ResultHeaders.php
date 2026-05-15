<?php
declare(strict_types=1);

// CelestrakGpData SDK utility: result_headers

class CelestrakGpDataResultHeaders
{
    public static function call(CelestrakGpDataContext $ctx): ?CelestrakGpDataResult
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
