# Typed models for the CelestrakGpData SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Gpn(TypedDict, total=False):
    ARG_OF_PERICENTER: float
    BSTAR: float
    CLASSIFICATION_TYPE: str
    ECCENTRICITY: float
    ELEMENT_SET_NO: int
    EPHEMERIS_TYPE: int
    EPOCH: str
    INCLINATION: float
    MEAN_ANOMALY: float
    MEAN_MOTION: float
    MEAN_MOTION_DDOT: float
    MEAN_MOTION_DOT: float
    NORAD_CAT_ID: int
    OBJECT_ID: str
    OBJECT_NAME: str
    RA_OF_ASC_NODE: float
    REV_AT_EPOCH: int


class GpnListMatch(TypedDict, total=False):
    catnr: str
    format: str
    group: str
    intde: str
    name: str
