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
    public ?float $ARG_OF_PERICENTER = null;
    public ?float $BSTAR = null;
    public ?string $CLASSIFICATION_TYPE = null;
    public ?float $ECCENTRICITY = null;
    public ?int $ELEMENT_SET_NO = null;
    public ?int $EPHEMERIS_TYPE = null;
    public ?string $EPOCH = null;
    public ?float $INCLINATION = null;
    public ?float $MEAN_ANOMALY = null;
    public ?float $MEAN_MOTION = null;
    public ?float $MEAN_MOTION_DDOT = null;
    public ?float $MEAN_MOTION_DOT = null;
    public ?int $NORAD_CAT_ID = null;
    public ?string $OBJECT_ID = null;
    public ?string $OBJECT_NAME = null;
    public ?float $RA_OF_ASC_NODE = null;
    public ?int $REV_AT_EPOCH = null;
}

/** Request payload for Gpn#list. */
class GpnListMatch
{
    public ?string $catnr = null;
    public ?string $format = null;
    public ?string $group = null;
    public ?string $intde = null;
    public ?string $name = null;
}

