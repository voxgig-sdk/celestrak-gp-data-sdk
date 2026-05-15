<?php
declare(strict_types=1);

// CelestrakGpData SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class CelestrakGpDataMakeContext
{
    public static function call(array $ctxmap, ?CelestrakGpDataContext $basectx): CelestrakGpDataContext
    {
        return new CelestrakGpDataContext($ctxmap, $basectx);
    }
}
