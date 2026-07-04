<?php
declare(strict_types=1);

// Typed models for the CelestrakGpData SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Gpn entity data model. */
class Gpn
{
    public ?float $arg_of_pericenter = null;
    public ?float $bstar = null;
    public ?string $classification_type = null;
    public ?float $eccentricity = null;
    public ?int $element_set_no = null;
    public ?int $ephemeris_type = null;
    public ?string $epoch = null;
    public ?float $inclination = null;
    public ?float $mean_anomaly = null;
    public ?float $mean_motion = null;
    public ?float $mean_motion_ddot = null;
    public ?float $mean_motion_dot = null;
    public ?int $norad_cat_id = null;
    public ?string $object_id = null;
    public ?string $object_name = null;
    public ?float $ra_of_asc_node = null;
    public ?int $rev_at_epoch = null;
}

/** Match filter for Gpn#list (any subset of Gpn fields). */
class GpnListMatch
{
    public ?float $arg_of_pericenter = null;
    public ?float $bstar = null;
    public ?string $classification_type = null;
    public ?float $eccentricity = null;
    public ?int $element_set_no = null;
    public ?int $ephemeris_type = null;
    public ?string $epoch = null;
    public ?float $inclination = null;
    public ?float $mean_anomaly = null;
    public ?float $mean_motion = null;
    public ?float $mean_motion_ddot = null;
    public ?float $mean_motion_dot = null;
    public ?int $norad_cat_id = null;
    public ?string $object_id = null;
    public ?string $object_name = null;
    public ?float $ra_of_asc_node = null;
    public ?int $rev_at_epoch = null;
}

