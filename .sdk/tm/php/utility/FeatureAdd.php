<?php
declare(strict_types=1);

// CelestrakGpData SDK utility: feature_add

class CelestrakGpDataFeatureAdd
{
    public static function call(CelestrakGpDataContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
