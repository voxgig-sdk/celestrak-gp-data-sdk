<?php
declare(strict_types=1);

// CelestrakGpData SDK utility: prepare_body

class CelestrakGpDataPrepareBody
{
    public static function call(CelestrakGpDataContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
