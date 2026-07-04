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
    arg_of_pericenter: float
    bstar: float
    classification_type: str
    eccentricity: float
    element_set_no: int
    ephemeris_type: int
    epoch: str
    inclination: float
    mean_anomaly: float
    mean_motion: float
    mean_motion_ddot: float
    mean_motion_dot: float
    norad_cat_id: int
    object_id: str
    object_name: str
    ra_of_asc_node: float
    rev_at_epoch: int


class GpnListMatch(TypedDict, total=False):
    arg_of_pericenter: float
    bstar: float
    classification_type: str
    eccentricity: float
    element_set_no: int
    ephemeris_type: int
    epoch: str
    inclination: float
    mean_anomaly: float
    mean_motion: float
    mean_motion_ddot: float
    mean_motion_dot: float
    norad_cat_id: int
    object_id: str
    object_name: str
    ra_of_asc_node: float
    rev_at_epoch: int
