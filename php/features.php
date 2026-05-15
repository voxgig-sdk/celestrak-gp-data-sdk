<?php
declare(strict_types=1);

// CelestrakGpData SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class CelestrakGpDataFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new CelestrakGpDataBaseFeature();
            case "test":
                return new CelestrakGpDataTestFeature();
            default:
                return new CelestrakGpDataBaseFeature();
        }
    }
}
